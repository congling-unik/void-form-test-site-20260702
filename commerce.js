(function () {
  const configUrl = "commerce-public-config.json";
  const cartKey = "voidFormPreviewCart";
  const trackingKey = "curioTrafficSource";
  const eventQueueKey = "voidFormAnalyticsQueue";
  const sessionKey = "voidFormSessionId";
  let runtimeConfig = null;

  function safeJson(value, fallback) {
    try { return JSON.parse(value); } catch { return fallback; }
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
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
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

  function loadConfig() {
    return fetch(configUrl, { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((config) => {
        runtimeConfig = config;
        if (config?.ga4?.measurementId) installGa4(config.ga4.measurementId);
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
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...event });
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        currency: event.currency || "USD",
        value: event.value ?? undefined,
        item_id: event.productId || undefined,
        campaign_id: event.queueId || undefined,
        audience_cohort: event.audienceCohort || undefined,
        target_market: event.targetMarket || undefined,
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
    track("add_to_cart", {
      productId: product.id,
      quantity: 1,
      value: language === "en" ? product.priceUsd : product.price,
      currency: language === "en" ? "USD" : "CNY",
    });
    return items;
  }

  function removeFromCart(productId) {
    writeCart(readCart().filter((item) => item.productId !== productId));
    renderCart();
  }

  const copy = {
    en: {
      empty: "Your preview bag is empty.",
      note: "No live payment. Shopify sandbox remains locked until products, samples and fulfillment are verified.",
      remove: "Remove",
      checkout: "Test checkout",
      locked: "Checkout test is not configured yet. Your selection is saved on this device.",
    },
    zh: {
      empty: "测试购物袋还是空的。",
      note: "目前不收真实货款。真实商品、样品和履约通过前，Shopify 沙盒保持锁定。",
      remove: "移除",
      checkout: "测试结账",
      locked: "结账沙盒尚未配置，你的选择已保存在本机。",
    },
  };

  function renderCart(language = document.documentElement.lang.startsWith("zh") ? "zh" : "en") {
    const root = document.querySelector("[data-cart-items]");
    const note = document.querySelector("[data-cart-note]");
    const button = document.querySelector("[data-cart-checkout]");
    if (!root) return;
    const items = readCart();
    root.innerHTML = items.length
      ? items.map((item) => `
          <article class="cart-line">
            <img src="${item.image}" alt="">
            <div><strong>${item.name}</strong><span>${item.currency} ${item.price} · ×${item.quantity}</span></div>
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

  async function createShopifyCart(items) {
    const config = runtimeConfig || await loadConfig();
    const shopify = config?.shopify || {};
    const ready = Boolean(
      shopify.storefrontEnabled && shopify.shopDomain && shopify.storefrontAccessToken &&
      config.sandboxReady && items.every((item) => shopify.variants?.[item.productId])
    );
    if (!ready) return null;
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
    const value = items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0), 0);
    track("begin_checkout", {
      quantity: items.reduce((sum, item) => sum + Number(item.quantity || 0), 0),
      value,
      currency: items[0]?.currency || (language === "en" ? "USD" : "CNY"),
    });
    const cart = await createShopifyCart(items).catch(() => null);
    if (!cart?.checkoutUrl) return { ok: false, message: copy[language].locked };
    window.location.assign(cart.checkoutUrl);
    return { ok: true };
  }

  loadConfig().then(() => track("session_start"));
  window.addEventListener("DOMContentLoaded", updateCartCount);
  window.VoidFormCommerce = { addToCart, checkout, openCart, readCart, removeFromCart, renderCart, track, updateCartCount };
})();
