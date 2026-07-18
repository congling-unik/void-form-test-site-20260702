(function () {
  const configUrl = "commerce-public-config.json";
  const cartKey = "voidFormShoppingBag";
  const checkoutStateKey = "voidFormCheckoutState";
  const orderRequestsKey = "voidFormOrderRequests";
  const trackingKey = "curioTrafficSource";
  const eventQueueKey = "voidFormAnalyticsQueue";
  const sessionKey = "voidFormSessionId";
  const analyticsConsentKey = "voidFormAnalyticsConsent";
  let runtimeConfig = null;

  function safeJson(value, fallback) {
    try { return JSON.parse(value); } catch { return fallback; }
  }

  function hasNumericPrice(value) {
    return value !== null && value !== undefined && value !== "" && Number.isFinite(Number(value));
  }

  function cleanText(value, max = 80) {
    return String(value || "").replace(/[\u0000-\u001f]/g, "").trim().slice(0, max);
  }

  function sessionId() {
    let value = sessionStorage.getItem(sessionKey);
    if (!value) {
      value = `vf-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem(sessionKey, value);
    }
    return value;
  }

  function attribution() {
    const stored = safeJson(localStorage.getItem(trackingKey) || "{}", {});
    const params = new URLSearchParams(window.location.search);
    return {
      source: params.get("utm_source") || stored.utm_source || stored.source || "direct",
      medium: params.get("utm_medium") || stored.utm_medium || "",
      campaign: params.get("utm_campaign") || stored.utm_campaign || "",
      queueId: params.get("utm_content") || stored.utm_content || "",
      audienceCohort: params.get("vf_audience") || stored.vf_audience || "",
      targetMarket: params.get("vf_market") || stored.vf_market || "",
    };
  }

  function installGa4(measurementId) {
    if (!/^G-[A-Z0-9]+$/i.test(String(measurementId || ""))) return;
    if (localStorage.getItem(analyticsConsentKey) !== "granted") return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: true });
    if (!document.querySelector(`script[data-ga4="${measurementId}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.dataset.ga4 = measurementId;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      document.head.appendChild(script);
    }
  }

  function showAnalyticsConsent(measurementId) {
    const choice = localStorage.getItem(analyticsConsentKey);
    if (choice === "granted") {
      installGa4(measurementId);
      return;
    }
    if (choice === "denied" || document.querySelector("[data-analytics-consent]")) return;

    const banner = document.createElement("aside");
    banner.className = "analytics-consent";
    banner.dataset.analyticsConsent = "";
    banner.setAttribute("aria-label", "Analytics choice");
    banner.innerHTML = `
      <p>We use anonymous analytics to understand visits and improve the storefront. No advertising cookies.</p>
      <div>
        <a href="privacy.html">Privacy</a>
        <button type="button" data-analytics-decline>Decline</button>
        <button type="button" data-analytics-accept>Accept</button>
      </div>
    `;
    banner.querySelector("[data-analytics-accept]").addEventListener("click", () => {
      localStorage.setItem(analyticsConsentKey, "granted");
      banner.remove();
      installGa4(measurementId);
    });
    banner.querySelector("[data-analytics-decline]").addEventListener("click", () => {
      localStorage.setItem(analyticsConsentKey, "denied");
      banner.remove();
    });
    document.body.appendChild(banner);
  }

  function loadConfig() {
    return fetch(configUrl, { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((config) => {
        runtimeConfig = config;
        if (config?.ga4?.measurementId) showAnalyticsConsent(config.ga4.measurementId);
        return config;
      })
      .catch(() => null);
  }

  function track(eventName, payload = {}) {
    const event = {
      id: `site-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      eventName,
      occurredAt: new Date().toISOString(),
      sessionId: sessionId(),
      pagePath: `${window.location.pathname}${window.location.search}${window.location.hash}`,
      ...attribution(),
      ...payload,
    };
    const queue = safeJson(localStorage.getItem(eventQueueKey) || "[]", []);
    queue.push(event);
    localStorage.setItem(eventQueueKey, JSON.stringify(queue.slice(-200)));
    if (localStorage.getItem(analyticsConsentKey) === "granted" && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        currency: event.currency || "USD",
        value: event.value ?? undefined,
        item_id: event.productId || undefined,
        campaign_id: event.queueId || undefined,
        audience_cohort: event.audienceCohort || undefined,
        target_market: event.targetMarket || undefined,
        lead_id: event.requestId || undefined,
        request_country: event.country || undefined,
      });
    }
    if (["127.0.0.1", "localhost"].includes(window.location.hostname)) {
      fetch("http://127.0.0.1:4174/api/commerce/events", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(event),
        keepalive: true,
      }).catch(() => {});
    }
    return event;
  }

  function readCart() {
    return safeJson(localStorage.getItem(cartKey) || "[]", []);
  }

  function updateCartCount() {
    const count = readCart().reduce((sum, item) => sum + Number(item.quantity || 0), 0);
    document.querySelectorAll("[data-cart-count]").forEach((element) => {
      element.textContent = String(count);
      element.hidden = count === 0;
    });
  }

  function writeCart(items) {
    localStorage.setItem(cartKey, JSON.stringify(items));
    updateCartCount();
  }

  function addToCart(product, language = "en") {
    const items = readCart();
    const existing = items.find((item) => item.productId === product.id);
    if (existing) existing.quantity = Math.min(10, Number(existing.quantity || 0) + 1);
    else items.push({
      productId: product.id,
      quantity: 1,
      name: language === "en" ? product.englishName : product.name,
      price: language === "en" ? product.priceUsd : product.price,
      currency: language === "en" ? "USD" : "CNY",
      image: product.image,
    });
    writeCart(items);
    const price = language === "en" ? product.priceUsd : product.price;
    track("add_to_cart", {
      productId: product.id,
      quantity: 1,
      ...(hasNumericPrice(price) ? { value: Number(price), currency: language === "en" ? "USD" : "CNY" } : {}),
    });
    return items;
  }

  function removeFromCart(productId) {
    writeCart(readCart().filter((item) => item.productId !== productId));
    renderCart();
  }

  const copy = {
    en: {
      empty: "Your shopping bag is empty.",
      note: "Items are saved in this browser. Submit an order request without payment.",
      remove: "Remove",
      checkout: "Request this bracelet",
      locked: "Payment checkout is not available. You can submit an order request instead.",
      error: "Checkout could not be opened. Please try again later.",
    },
    zh: {
      empty: "购物袋还是空的。",
      note: "商品已保存在当前浏览器中。无需付款即可提交购买申请。",
      remove: "移除",
      checkout: "提交购买申请",
      locked: "付款结账未开放，可先提交购买申请。",
      error: "暂时无法打开结账，请稍后再试。",
    },
  };

  const requestCopy = {
    en: {
      title: "Request this bracelet",
      intro: "Send an order request without payment. This is not a paid or confirmed order.",
      country: "Country / region (optional)",
      countryPlaceholder: "e.g. United States",
      wrist: "Wrist size (optional)",
      wristPlaceholder: "cm or in",
      submit: "Submit order request",
      received: "Request received",
      reference: "Request reference",
      confirmation: "This request is saved in this browser. No payment, confirmed order, shipping, or fulfillment has been created.",
      care: "Contact customer care",
      close: "Close",
      items: "Requested items",
    },
    zh: {
      title: "提交购买申请",
      intro: "无需付款即可记录购买申请。这不是已付款或已确认的订单。",
      country: "国家 / 地区（选填）",
      countryPlaceholder: "例如：中国",
      wrist: "手围（选填）",
      wristPlaceholder: "厘米或英寸",
      submit: "提交购买申请",
      received: "申请已记录",
      reference: "申请编号",
      confirmation: "申请已保存在当前浏览器中。没有付款、确认订单、发货或履约动作。",
      care: "联系客户服务",
      close: "关闭",
      items: "申请商品",
    },
  };

  function renderCart(language = document.documentElement.lang.startsWith("zh") ? "zh" : "en") {
    const root = document.querySelector("[data-cart-items]");
    const note = document.querySelector("[data-cart-note]");
    const button = document.querySelector("[data-order-request-open]");
    if (!root) return;
    const items = readCart();
    root.innerHTML = items.length
      ? items.map((item) => `
          <article class="cart-line">
            <img src="${item.image}" alt="">
            <div><strong>${item.name}</strong><span>${hasNumericPrice(item.price) ? `${item.currency} ${item.price} · ` : ""}×${item.quantity}</span></div>
            <button type="button" data-cart-remove="${item.productId}">${copy[language].remove}</button>
          </article>
        `).join("")
      : `<p class="empty-state">${copy[language].empty}</p>`;
    if (note) note.textContent = copy[language].note;
    if (button) {
      button.textContent = copy[language].checkout;
      button.disabled = items.length === 0;
    }
  }

  function openCart(language) {
    renderCart(language);
    document.querySelector("[data-cart-dialog]")?.showModal();
  }

  function readOrderRequests() {
    return safeJson(localStorage.getItem(orderRequestsKey) || "[]", []);
  }

  function requestSignature(items, source) {
    const normalizedItems = items
      .map((item) => ({ productId: cleanText(item.productId, 40), quantity: Math.max(1, Math.min(10, Number(item.quantity || 1))) }))
      .sort((a, b) => a.productId.localeCompare(b.productId));
    return JSON.stringify({ items: normalizedItems, queueId: source.queueId || "direct" });
  }

  function makeRequestId() {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const random = globalThis.crypto?.randomUUID?.().replace(/-/g, "").slice(0, 8).toUpperCase()
      || Math.random().toString(36).slice(2, 10).toUpperCase();
    return `VF-${date}-${random}`;
  }

  function renderRequestConfirmation(request, language) {
    const dialog = document.querySelector("[data-order-request-dialog]");
    const root = dialog?.querySelector("[data-order-request-content]");
    const words = requestCopy[language] || requestCopy.en;
    if (!root) return;
    root.innerHTML = `
      <div class="order-request-head">
        <p class="eyebrow">${words.received}</p>
        <button type="button" class="icon-button" data-order-request-close aria-label="${words.close}">×</button>
      </div>
      <div class="order-request-confirmation">
        <h2>${words.received}</h2>
        <p>${words.reference}: <strong data-order-request-id>${request.requestId}</strong></p>
        <p>${words.confirmation}</p>
        <a class="primary-button" href="https://www.instagram.com/duck.3428348/" target="_blank" rel="noreferrer">${words.care}</a>
        <button type="button" data-order-request-close>${words.close}</button>
      </div>
    `;
  }

  function submitOrderRequest(form, language = "en") {
    const items = readCart();
    if (!items.length) return { ok: false, code: "empty-bag", message: copy[language].empty };
    const source = attribution();
    const signature = requestSignature(items, source);
    const requests = readOrderRequests();
    const existing = requests.find((item) => item.signature === signature);
    if (existing) {
      renderRequestConfirmation(existing, language);
      return { ok: true, created: false, request: existing };
    }
    const data = new FormData(form);
    const request = {
      requestId: makeRequestId(),
      status: "request-recorded",
      createdAt: new Date().toISOString(),
      signature,
      items: items.map((item) => ({
        productId: cleanText(item.productId, 40),
        name: cleanText(item.name, 100),
        quantity: Math.max(1, Math.min(10, Number(item.quantity || 1))),
      })),
      country: cleanText(data.get("country"), 60),
      wrist: cleanText(data.get("wrist"), 40),
      attribution: {
        source: source.source,
        medium: source.medium,
        campaign: source.campaign,
        queueId: source.queueId || "direct",
        audienceCohort: source.audienceCohort,
        targetMarket: source.targetMarket,
      },
    };
    requests.push(request);
    localStorage.setItem(orderRequestsKey, JSON.stringify(requests.slice(-50)));
    track("order_request", {
      id: `order-request-${request.requestId}`,
      requestId: request.requestId,
      productId: request.items.map((item) => item.productId).join(","),
      quantity: request.items.reduce((sum, item) => sum + item.quantity, 0),
      country: request.country,
    });
    renderRequestConfirmation(request, language);
    return { ok: true, created: true, request };
  }

  function openOrderRequest(language = "en") {
    const items = readCart();
    if (!items.length) return { ok: false, code: "empty-bag", message: copy[language].empty };
    const dialog = document.querySelector("[data-order-request-dialog]");
    const root = dialog?.querySelector("[data-order-request-content]");
    const words = requestCopy[language] || requestCopy.en;
    if (!dialog || !root) return { ok: false, code: "dialog-missing" };
    document.querySelector("[data-cart-dialog]")?.close();
    root.innerHTML = `
      <div class="order-request-head">
        <p class="eyebrow">ORDER REQUEST</p>
        <button type="button" class="icon-button" data-order-request-close aria-label="${words.close}">×</button>
      </div>
      <div class="order-request-body">
        <h2>${words.title}</h2>
        <p>${words.intro}</p>
        <div class="order-request-items"><strong>${words.items}</strong>${items.map((item) => `<span>${cleanText(item.name, 100)} ×${Math.max(1, Math.min(10, Number(item.quantity || 1)))}</span>`).join("")}</div>
        <form data-order-request-form>
          <label><span>${words.country}</span><input name="country" type="text" maxlength="60" autocomplete="off" placeholder="${words.countryPlaceholder}"></label>
          <label><span>${words.wrist}</span><input name="wrist" type="text" maxlength="40" autocomplete="off" placeholder="${words.wristPlaceholder}"></label>
          <button class="primary-button" type="submit">${words.submit}</button>
        </form>
      </div>
    `;
    dialog.showModal();
    return { ok: true, code: "request-form-opened" };
  }

  function checkoutAvailability(config, items) {
    const shopify = config?.shopify || {};
    if (!config?.publicPaymentEnabled) return { ready: false, code: "public-payment-disabled" };
    if (!config?.sandboxReady) return { ready: false, code: "checkout-not-ready" };
    if (!shopify.storefrontEnabled || !shopify.shopDomain || !shopify.storefrontAccessToken) {
      return { ready: false, code: "storefront-not-configured" };
    }
    if (!items.every((item) => shopify.variants?.[item.productId])) {
      return { ready: false, code: "product-not-configured" };
    }
    return { ready: true, code: "ready" };
  }

  async function createShopifyCart(items, config) {
    const shopify = config?.shopify || {};
    if (!checkoutAvailability(config, items).ready) return null;
    const source = attribution();
    const query = `mutation CreateCart($input: CartInput!) {
      cartCreate(input: $input) { cart { id checkoutUrl } userErrors { field message } }
    }`;
    const input = {
      lines: items.map((item) => ({
        merchandiseId: shopify.variants[item.productId],
        quantity: item.quantity,
        attributes: [
          { key: "queueId", value: source.queueId || "direct" },
          { key: "utm_source", value: source.source },
          { key: "audience_cohort", value: source.audienceCohort || "unassigned" },
          { key: "target_market", value: source.targetMarket || "unassigned" },
        ],
      })),
      attributes: [
        { key: "queueId", value: source.queueId || "direct" },
        { key: "utm_source", value: source.source },
        { key: "utm_campaign", value: source.campaign || "" },
      ],
    };
    const response = await fetch(`https://${shopify.shopDomain}/api/${shopify.apiVersion || "2026-04"}/graphql.json`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-shopify-storefront-access-token": shopify.storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables: { input } }),
    });
    const payload = await response.json();
    const errors = payload.data?.cartCreate?.userErrors || payload.errors || [];
    if (!response.ok || errors.length) throw new Error(errors.map((item) => item.message).join("; ") || "Shopify cart creation failed");
    return payload.data?.cartCreate?.cart || null;
  }

  async function checkout(language = "en") {
    const items = readCart();
    if (!items.length) return { ok: false, message: copy[language].empty, code: "empty-bag" };
    const pricedItems = items.filter((item) => hasNumericPrice(item.price));
    const value = pricedItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity || 0), 0);
    track("begin_checkout", {
      quantity: items.reduce((sum, item) => sum + Number(item.quantity || 0), 0),
      ...(pricedItems.length ? { value, currency: pricedItems[0]?.currency || (language === "en" ? "USD" : "CNY") } : {}),
    });
    const config = runtimeConfig || await loadConfig();
    const availability = checkoutAvailability(config, items);
    localStorage.setItem(checkoutStateKey, JSON.stringify({
      code: availability.code,
      checkedAt: new Date().toISOString(),
      queueId: attribution().queueId || "direct",
    }));
    if (!availability.ready) return { ok: false, message: copy[language].locked, code: availability.code };
    const cart = await createShopifyCart(items, config).catch(() => null);
    if (!cart?.checkoutUrl) return { ok: false, message: copy[language].error, code: "storefront-error" };
    window.location.assign(cart.checkoutUrl);
    return { ok: true, code: "checkout-opened" };
  }

  loadConfig().then(() => track("session_start"));
  window.addEventListener("DOMContentLoaded", updateCartCount);
  document.addEventListener("submit", (event) => {
    const form = event.target.closest?.("[data-order-request-form]");
    if (!form) return;
    event.preventDefault();
    submitOrderRequest(form, document.documentElement.lang.startsWith("zh") ? "zh" : "en");
  });
  document.addEventListener("click", (event) => {
    if (event.target.closest?.("[data-order-request-close]")) document.querySelector("[data-order-request-dialog]")?.close();
  });
  window.VoidFormCommerce = { addToCart, checkout, checkoutAvailability, openCart, openOrderRequest, readCart, readOrderRequests, removeFromCart, renderCart, submitOrderRequest, track, updateCartCount };
})();
