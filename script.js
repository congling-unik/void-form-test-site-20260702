const products = [
  {
    id: "p1",
    name: "浅绿珠串",
    category: "crystal",
    price: null,
    priceUsd: null,
    tag: "首发系列",
    image: "assets/product-pale-green-01.jpg",
    material: "浅绿色圆珠｜柔和清透外观",
    size: "适合轻盈、安静的日常搭配",
    intro: "浅绿色调与简洁圆珠轮廓，为日常穿搭留出轻松、克制的颜色。",
    details: ["浅绿色与低饱和衣着容易搭配", "圆珠轮廓简洁，适合单独佩戴", "避免碰撞、香水、酒精和长时间暴晒", "结账暂时不可用；开放后以商品页信息为准"],
  },
  {
    id: "p2",
    name: "暖木珠串",
    category: "wood",
    price: null,
    priceUsd: null,
    tag: "首发系列",
    image: "assets/product-warm-wood-01.jpg",
    material: "暖棕色圆珠｜自然纹理外观",
    size: "适合中性、安静的日常搭配",
    intro: "暖棕色调与自然纹理感，让一件小配饰更贴近日常衣着与生活场景。",
    details: ["暖棕色调适合素色与中性穿搭", "圆珠轮廓简洁，适合日常单戴", "保持干燥，避免浸水和化学清洁剂", "结账暂时不可用；开放后以商品页信息为准"],
  },
];

const instagramProfileUrl = "https://www.instagram.com/duck.3428348/";

const productEnglish = {
  p1: {
    name: "Pale Green Bead Bracelet",
    tag: "FIRST COLLECTION",
    material: "Pale green round beads | soft translucent appearance",
    size: "Designed for quiet, lightweight everyday styling",
    intro: "A restrained pale-green accent with a simple round-bead silhouette for everyday wear.",
    details: ["A soft pale-green tone for low-saturation outfits", "A simple silhouette designed to be worn on its own", "Keep away from impact, perfume, alcohol, and prolonged sun", "Checkout is temporarily unavailable; product-page details will apply when ordering opens"],
  },
  p2: {
    name: "Warm Wood Bead Bracelet",
    tag: "FIRST COLLECTION",
    material: "Warm brown round beads | natural-grain appearance",
    size: "Designed for calm, neutral everyday styling",
    intro: "A warm brown accent with a natural-grain look and a simple silhouette for everyday wear.",
    details: ["A warm brown tone for neutral and textural outfits", "A simple round-bead silhouette for daily wear", "Keep dry and away from soaking or chemical cleaners", "Checkout is temporarily unavailable; product-page details will apply when ordering opens"],
  },
};

products.forEach((product) => {
  product.englishName = productEnglish[product.id]?.name || product.name;
});

const translations = {
  zh: {
    pageTitle: "有无｜水晶串与木珠串",
    pageDescription: "有无，以浅绿与暖棕色珠串为第一系列，关注日常佩戴、自然质感与克制表达。",
    brandHome: "有无首页",
    brandMark: "有",
    brandName: "有 無",
    brandSub: "",
    navLabel: "主导航",
    navShop: "首页",
    navSets: "全部",
    navCare: "新品",
    navService: "客服",
    searchAria: "搜索商品",
    cartOpen: "打开购物袋",
    bagIcon: "购物袋",
    heroSliderLabel: "首页图片轮播",
    heroDotsLabel: "切换首页图片",
    introAlt: "宁静绿色户外柔光氛围图：水晶串与木珠串",
    introAltOne: "宁静绿色户外柔光氛围图：手腕佩戴清透绿水晶串",
    introAltTwo: "宁静苔石花园氛围图：手腕佩戴暖色木珠串",
    introEntriesLabel: "首页入口",
    introLabel: "QUIET BRACELETS · FIRST COLLECTION",
    introTitle: "",
    introBody: "",
    introEntryShop: "",
    introEntryGift: "",
    introEntryGuide: "",
    introEntryInquiry: "",
    introNoteOne: "水晶",
    introNoteTwo: "木珠",
    introNoteThree: "日常佩戴",
    introNoteFour: "第一系列",
    pricePoint: "FIRST COLLECTION",
    servicePoint: "客服",
    shopInfo: "店铺信息",
    launch: "FIRST COLLECTION",
    heroTitle: "全部商品",
    heroBody: "",
    heroAlt: "浅绿珠串与暖木珠串",
    inStock: "可提交购买申请",
    sevenDays: "手围",
    easyReturns: "可备注",
    sizeAdvice: "咨询确认",
    commerceLabel: "商品选购",
    searchPlaceholder: "搜索水晶串或木珠串",
    sortLabel: "排序",
    sortFeatured: "图录顺序",
    sortLow: "名称正序",
    sortHigh: "名称倒序",
    categoryLabel: "商品分类",
    categoryAll: "全部",
    categoryCrystal: "浅绿珠串",
    categoryWood: "暖木珠串",
    categoryJade: "其他",
    categoryCharm: "挂件",
    empty: "没有找到匹配的商品。",
    weeklySet: "TRY-ON SET",
    setTitle: "水晶木珠试戴三件组",
    setBody: "浅绿色、暖棕色与素净圆珠轮廓，为不同日常穿搭提供克制的选择。",
    addSet: "联系客户服务",
    careNotes: "MATERIAL NOTES",
    careTitle: "天然材质怎么戴",
    care1Title: "水晶看颜色和通透感",
    care1Body: "天然矿石会有棉、纹和色带，日常避免磕碰、香水、酒精和长时间暴晒。",
    care2Title: "木珠看手感和变化",
    care2Body: "椰蒂、菩提、桃木都适合日常戴，保持干燥，少碰水和化学清洁剂。",
    care3Title: "送礼看好不好理解",
    care3Body: "浅绿色适合柔和日常，暖棕色适合安静穿搭；选择与你现有衣着更自然的一款。",
    serviceLabel: "服务承诺",
    service1: "浅绿珠串",
    service2: "暖木珠串",
    service3: "客户服务",
    finderLabel: "BUYER GUIDE",
    finderTitle: "30 秒找到第一件",
    finderBody: "不用懂文玩也能选：按显白、通勤、送礼和天然感四个场景直接推荐。",
    fitDaily: "显白好拍",
    fitScent: "通勤低调",
    fitGift: "小礼物",
    fitBulk: "天然木珠",
    fitPick: "推荐款",
    modelLabel: "COLLECTION NOTES",
    modelTitle: "为日常穿搭保留简单选择",
    model1Title: "百元内降低决策",
    model1Body: "保持选择清晰，让用户先了解外观、佩戴和护理。",
    model2Title: "水晶测颜色偏好",
    model2Body: "粉紫、黑金、清透三类视觉方向，看哪种更容易被收藏和咨询。",
    model3Title: "木珠测天然陪伴感",
    model3Body: "椰蒂、菩提、桃木更日常，适合讲耐戴、变化和松弛感。",
    model4Title: "小而清楚的系列",
    model4Body: "第一系列集中在浅绿色与暖棕色珠串，让商品与护理信息更容易理解。",
    subscribeTitle: "黑金通勤手串",
    subscribeBody: "低调而有存在感，适合日常通勤与叠戴。",
    subscribeCta: "联系客户服务",
    leadLabel: "SERVICE",
    leadTitle: "客户服务",
    leadBody: "",
    leadUse: "用途",
    leadBudget: "想了解什么",
    leadBudgetPlaceholder: "商品、佩戴或护理问题",
    leadCountry: "所在国家/地区",
    leadCountryPlaceholder: "例：中国",
    leadWrist: "手围",
    leadWristPlaceholder: "厘米或英寸",
    leadTiming: "问题类型",
    leadTimingReady: "商品信息",
    leadTimingMonth: "佩戴与护理",
    leadTimingCompare: "订单与售后",
    leadSubmit: "复制咨询并打开 Instagram",
    leadSaved: "咨询内容已复制，正在打开 Instagram。",
    freeShippingLeft: "再加 {amount}",
    freeShippingReady: "已达到条件",
    bonusLeft: "再加 {amount} 解锁礼盒升级",
    bonusReady: "已解锁礼盒升级",
    reservationStatus: "可提交购买申请",
    dmKeyword: "商品：{name}",
    stickyText: "水晶串 · 木珠串",
    stickyCta: "查看拍品",
    cartTitle: "购物袋",
    cartClose: "关闭购物车",
    subtotal: "小计",
    cartNote: "商品会保存在这台设备的购物袋中，可提交不付款的购买申请。",
    checkout: "提交购买申请",
    dialogClose: "关闭详情",
    addToBag: "加入购物袋",
    view: "查看详情",
    viewDetails: "查看{name}详情",
    cartEmpty: "购物袋还是空的，先挑一件喜欢的。",
    quantity: "{name}数量",
    decrease: "减少{name}",
    increase: "增加{name}",
    remove: "移除",
    addedToBag: "{name} 已加入购物袋",
    checkoutEmpty: "请先加入商品。",
    checkoutSuccess: "购买申请已记录。",
    lot: "商品",
    estimate: "申请状态",
    specialistPick: "FIRST COLLECTION",
    bottomNavLabel: "底部导航",
    bottomHome: "首页",
    bottomCategory: "分类",
    bottomCart: "购物袋",
    bottomService: "客服",
    footerBrand: "有无 Void & Form",
    footerNote: "安静、自然、适合日常佩戴的珠串。无需付款即可提交购买申请。",
    footerPolicyNav: "政策页面",
    footerPrivacy: "隐私",
    footerShipping: "物流",
    footerReturns: "退换",
    footerContact: "联系",
  },
  en: {
    pageTitle: "VOID & FORM | Quiet Everyday Bracelets",
    pageDescription: "VOID & FORM creates quiet pale-green and warm-wood bead bracelets for everyday wear.",
    brandHome: "VOID & FORM home",
    brandMark: "Y",
    brandName: "VOID & FORM",
    brandSub: "",
    navLabel: "Main navigation",
    navShop: "Home",
    navSets: "All",
    navCare: "New",
    navService: "Service",
    searchAria: "Search products",
    cartOpen: "Open shopping bag",
    bagIcon: "Bag",
    heroSliderLabel: "Homepage image carousel",
    heroDotsLabel: "Switch homepage image",
    introAlt: "Serene green outdoor lifestyle image of pale green and warm brown bead bracelets",
    introAltOne: "Serene green outdoor image of a wrist wearing a pale green bead bracelet",
    introAltTwo: "Quiet mossy garden image of a wrist wearing a warm wood bead bracelet",
    introEntriesLabel: "Homepage entries",
    introLabel: "QUIET BRACELETS · FIRST DROP",
    introTitle: "",
    introBody: "",
    introEntryShop: "",
    introEntryGift: "",
    introEntryGuide: "",
    introEntryInquiry: "",
    introNoteOne: "Pale green",
    introNoteTwo: "Warm brown",
    introNoteThree: "Everyday wear",
    introNoteFour: "First drop",
    pricePoint: "FIRST COLLECTION",
    servicePoint: "Support",
    shopInfo: "Store information",
    launch: "FIRST DROP",
    heroTitle: "All Products",
    heroBody: "",
    heroAlt: "Pale green and warm brown bead bracelets",
    inStock: "Order requests available",
    sevenDays: "Wrist size",
    easyReturns: "Notes accepted",
    sizeAdvice: "Confirm by chat",
    commerceLabel: "Shop products",
    searchPlaceholder: "Search pale green or warm brown beads",
    sortLabel: "Sort",
    sortFeatured: "Catalogue order",
    sortLow: "Name: A to Z",
    sortHigh: "Name: Z to A",
    categoryLabel: "Product categories",
    categoryAll: "All",
    categoryCrystal: "Pale green",
    categoryWood: "Warm wood",
    categoryJade: "Jade",
    categoryCharm: "Charm",
    empty: "No matching products found.",
    weeklySet: "TRY-ON SET",
    setTitle: "Everyday Bead Bracelet Selection",
    setBody: "Pale green, warm brown, and simple round-bead silhouettes for quiet everyday styling.",
    addSet: "Contact customer care",
    careNotes: "MATERIAL NOTES",
    careTitle: "Simple everyday care",
    care1Title: "Protect the surface",
    care1Body: "Avoid impact, perfume, alcohol, and prolonged direct sun until product-specific care is confirmed.",
    care2Title: "Keep the bracelet dry",
    care2Body: "Keep away from water and cleaning chemicals, and store separately when not in use.",
    care3Title: "Gifts should be easy to understand",
    care3Body: "Pale green suits soft everyday styling, while warm brown suits quiet neutral outfits. Choose the tone that fits your wardrobe naturally.",
    serviceLabel: "Service promise",
    service1: "Pale Green Bead Bracelet",
    service2: "Warm Wood Bead Bracelet",
    service3: "Customer care",
    finderLabel: "BUYER GUIDE",
    finderTitle: "Find the first piece in 30 seconds",
    finderBody: "Choose by color, everyday styling, gifting, or the surface appearance you prefer.",
    fitDaily: "Photogenic",
    fitScent: "Low-key commute",
    fitGift: "Small gift",
    fitBulk: "Warm brown",
    fitPick: "Recommended piece",
    modelLabel: "COLLECTION NOTES",
    modelTitle: "A small, clear collection for everyday wear",
    model1Title: "Clear product information",
    model1Body: "Keep the choice focused on appearance, fit, and care.",
    model2Title: "Pale green keeps the look light",
    model2Body: "Pink-purple, black-gold, and clear styles show which visuals drive saves and inquiries.",
    model3Title: "Warm brown keeps the look grounded",
    model3Body: "A warm neutral tone works with quiet, relaxed everyday styling.",
    model4Title: "A focused first collection",
    model4Body: "The first collection stays with pale green and warm brown beads so product and care information remains clear.",
    subscribeTitle: "Black-Gold Commute Bracelet",
    subscribeBody: "Quiet but distinct, designed for everyday wear and easy layering.",
    subscribeCta: "Contact customer care",
    leadLabel: "SERVICE",
    leadTitle: "Customer Care",
    leadBody: "",
    leadUse: "Piece",
    leadBudget: "What can we help with?",
    leadBudgetPlaceholder: "Product, fit, or care question",
    leadCountry: "Country / region",
    leadCountryPlaceholder: "e.g. United States",
    leadWrist: "Wrist size",
    leadWristPlaceholder: "cm or in",
    leadTiming: "Question type",
    leadTimingReady: "Product information",
    leadTimingMonth: "Fit and care",
    leadTimingCompare: "Order and after-sales",
    leadSubmit: "Copy inquiry & open Instagram",
    leadSaved: "Inquiry copied. Instagram is opening now.",
    freeShippingLeft: "Add {amount}",
    freeShippingReady: "Threshold reached",
    bonusLeft: "Add {amount} to unlock gift-box upgrade",
    bonusReady: "Gift-box upgrade unlocked",
    reservationStatus: "Order request available",
    dmKeyword: "Product: {name}",
    stickyText: "Pale green · warm brown bead bracelets",
    stickyCta: "View lots",
    cartTitle: "Shopping bag",
    cartClose: "Close shopping bag",
    subtotal: "Subtotal",
    cartNote: "Your selection remains saved in this browser. You can submit an order request without payment.",
    checkout: "Request this bracelet",
    dialogClose: "Close product details",
    addToBag: "Add to bag",
    view: "Details",
    viewDetails: "View details for {name}",
    cartEmpty: "Your bag is empty. Start with something you love.",
    quantity: "Quantity for {name}",
    decrease: "Decrease {name}",
    increase: "Increase {name}",
    remove: "Remove",
    addedToBag: "{name} added to your shopping bag",
    checkoutEmpty: "Add a product before submitting a request.",
    checkoutSuccess: "Order request recorded.",
    lot: "Item",
    estimate: "Request status",
    specialistPick: "FIRST COLLECTION",
    bottomNavLabel: "Bottom navigation",
    bottomHome: "Home",
    bottomCategory: "Category",
    bottomCart: "Bag",
    bottomService: "Service",
    footerBrand: "Void & Form",
    footerNote: "Quiet bead bracelets for everyday wear. Submit an order request without payment.",
    footerPolicyNav: "Policy pages",
    footerPrivacy: "Privacy",
    footerShipping: "Shipping",
    footerReturns: "Returns",
    footerContact: "Contact",
  },
};

const initialSearchParams = new URLSearchParams(window.location.search);
const requestedLanguage = initialSearchParams.get("lang");
const incomingSource = initialSearchParams.get("utm_source") || initialSearchParams.get("source");
const initialLanguage = ["zh", "en"].includes(requestedLanguage)
  ? requestedLanguage
  : incomingSource === "instagram"
    ? "en"
    : localStorage.getItem("curioLanguage") || "en";

const state = {
  category: "all",
  query: "",
  sort: "featured",
  language: initialLanguage,
};

const trackingKey = "curioTrafficSource";
const trackingFields = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "source", "vf_audience", "vf_market"];

const grid = document.querySelector("[data-product-grid]");
const emptyState = document.querySelector("[data-empty]");
const searchInput = document.querySelector("[data-search-input]");
const sortInput = document.querySelector("[data-sort]");
const toast = document.querySelector("[data-toast]");
const dialog = document.querySelector("[data-product-dialog]");
const dialogBody = document.querySelector("[data-dialog-body]");
const fitResult = document.querySelector("[data-fit-result]");
const leadForm = document.querySelector("[data-lead-form]");
const heroSlides = Array.from(document.querySelectorAll("[data-hero-slide]"));
const heroDots = Array.from(document.querySelectorAll("[data-hero-dot]"));
let activeProductId = null;
let activeHeroSlide = 0;

function t(key, values = {}) {
  const template = translations[state.language][key] || key;
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replace(`{${name}}`, value),
    template,
  );
}

function getProductCopy(product) {
  return state.language === "en" ? productEnglish[product.id] : product;
}

function readTracking() {
  try {
    return JSON.parse(localStorage.getItem(trackingKey) || "{}");
  } catch {
    return {};
  }
}

function captureTracking() {
  const params = new URLSearchParams(window.location.search);
  const current = trackingFields.reduce((payload, key) => {
    const value = params.get(key);
    if (value) payload[key] = value;
    return payload;
  }, {});

  if (Object.keys(current).length) {
    const next = {
      ...readTracking(),
      ...current,
      landingPage: window.location.href,
      capturedAt: new Date().toISOString(),
    };
    localStorage.setItem(trackingKey, JSON.stringify(next));
    return next;
  }

  return readTracking();
}

function getLeadTracking() {
  const tracking = captureTracking();
  return {
    source: tracking.utm_source || tracking.source || "direct",
    medium: tracking.utm_medium || "",
    campaign: tracking.utm_campaign || "",
    content: tracking.utm_content || "",
    term: tracking.utm_term || "",
    landingPage: tracking.landingPage || window.location.href,
  };
}

function formatPrice(value) {
  if (value === null || value === undefined || value === "" || !Number.isFinite(Number(value))) return t("reservationStatus");
  const symbol = state.language === "en" ? "US$" : "￥";
  const locale = state.language === "en" ? "en-US" : "zh-CN";
  return `${symbol}${value.toLocaleString(locale)}`;
}

function getUnitPrice(product) {
  return state.language === "en" ? product.priceUsd : product.price;
}

function getLotNumber(product) {
  const index = products.findIndex((item) => item.id === product.id) + 1;
  return String(index).padStart(2, "0");
}

const fitMap = {
  daily: "p1",
  scent: "p2",
  gift: "p1",
  bulk: "p2",
};

function renderFitResult(fit = "daily") {
  if (!fitResult) return;
  const product = products.find((item) => item.id === fitMap[fit]) || products[0];
  const copy = getProductCopy(product);
  fitResult.innerHTML = `
    <span class="badge">${t("fitPick")} · ${t("lot")} ${getLotNumber(product)}</span>
    <h3>${copy.name}</h3>
    <p>${copy.intro}</p>
    <div class="estimate-row">
      <span>${t("estimate")}</span>
      <strong>${t("reservationStatus")}</strong>
    </div>
    <button class="primary-button" type="button" data-add-to-cart="${product.id}">${t("addToBag")}</button>
  `;
}

function submitLeadForm() {
  if (!leadForm) return;
  if (!leadForm.reportValidity()) return;

  const data = Object.fromEntries(new FormData(leadForm).entries());
  const inquiryText = state.language === "en"
    ? `VOID & FORM customer care\nProduct: ${data.use}\nCountry / region: ${data.country}\nWrist size: ${data.wrist || "Not specified"}\nQuestion type: ${data.timing || "Product information"}\nQuestion: ${data.budget || "Not specified"}`
    : `有无客户服务\n商品：${data.use}\n国家/地区：${data.country}\n手围：${data.wrist || "未填写"}\n问题类型：${data.timing || "商品信息"}\n问题：${data.budget || "未填写"}`;
  copyReservationText(inquiryText);
  window.VoidFormCommerce?.track("inquiry_start", {
    productId: data.use === "WOOD" ? "p2" : "p1",
  });
  leadForm.reset();
  showToast(t("leadSaved"));
  window.open(instagramProfileUrl, "_blank", "noopener,noreferrer");
}

function productInquiryText(product) {
  const copy = getProductCopy(product);
  return state.language === "en"
    ? `VOID & FORM customer care\nProduct: ${copy.name}\nCountry / region:\nWrist size:\nQuestion:`
    : `有无客户服务\n商品：${copy.name}\n国家/地区：\n手围：\n问题：`;
}

function copyProductInquiry(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  copyReservationText(productInquiryText(product));
  window.VoidFormCommerce?.track("outbound_instagram", { productId: id });
  showToast(t("leadSaved"));
}

function copyReservationText(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).catch(() => false);
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  return Promise.resolve(true);
}

function applyStaticTranslations() {
  document.documentElement.lang = state.language === "en" ? "en" : "zh-CN";
  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]').setAttribute("content", t("pageDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.getAttribute("data-i18n-placeholder")));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.getAttribute("data-i18n-aria-label")));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.getAttribute("data-i18n-alt")));
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.getAttribute("data-language") === state.language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyLanguage() {
  applyStaticTranslations();
  renderProducts();
  renderFitResult(document.querySelector("[data-fit].is-active")?.getAttribute("data-fit") || "daily");
  window.VoidFormCommerce?.renderCart(state.language);
  if (dialog.open && activeProductId) renderProductDialog(activeProductId);
}

function setHeroSlide(index) {
  if (!heroSlides.length) return;
  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeHeroSlide);
  });
  heroDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeHeroSlide);
    dot.setAttribute("aria-pressed", String(dotIndex === activeHeroSlide));
  });
}

function getVisibleProducts() {
  const query = state.query.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const inCategory = state.category === "all" || product.category === state.category;
    const english = productEnglish[product.id];
    const inQuery = [
      product.name,
      product.material,
      product.intro,
      product.tag,
      ...product.details,
      english.name,
      english.material,
      english.intro,
      english.tag,
      ...english.details,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query);
    return inCategory && inQuery;
  });

  if (state.sort === "low") return filtered.sort((a, b) => getProductCopy(a).name.localeCompare(getProductCopy(b).name));
  if (state.sort === "high") return filtered.sort((a, b) => getProductCopy(b).name.localeCompare(getProductCopy(a).name));
  return filtered;
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();
  emptyState.hidden = visibleProducts.length > 0;

  grid.innerHTML = visibleProducts
    .map(
      (product) => {
        const copy = getProductCopy(product);
        return `
          <article class="product-card">
            <figure>
              <img src="${product.image}" alt="${copy.name}" loading="lazy">
              <span class="badge">${t("lot")} ${getLotNumber(product)}</span>
            </figure>
            <div class="product-card-body">
              <div class="lot-kicker">
                <span>${copy.tag}</span>
                <span>${t("specialistPick")}</span>
              </div>
              <div class="product-title-row">
                <h3>${copy.name}</h3>
              </div>
              <p class="meta">${copy.material}<br>${copy.size}</p>
              <div class="estimate-row">
                <span>${t("estimate")}</span>
                <strong>${t("reservationStatus")}</strong>
              </div>
              <div class="card-actions">
                <button class="primary-button" type="button" data-add-to-cart="${product.id}">${t("addToBag")}</button>
                <button class="quick-button" type="button" data-view="${product.id}" aria-label="${t("viewDetails", { name: copy.name })}">${t("view")}</button>
              </div>
            </div>
          </article>
        `;
      },
    )
    .join("");
}

function getRequestedProductId() {
  const productId = new URLSearchParams(window.location.search).get("product");
  return products.some((product) => product.id === productId) ? productId : "";
}

function activateProductCategory(product) {
  state.category = product.category;
  document.querySelectorAll("[data-category]").forEach((button) => {
    const category = button.getAttribute("data-category");
    button.classList.toggle("is-active", category === product.category);
  });
  renderProducts();
}

function focusRequestedProduct() {
  const productId = getRequestedProductId();
  if (!productId) return;

  const product = products.find((item) => item.id === productId);
  if (!product) return;

  activateProductCategory(product);
  window.requestAnimationFrame(() => {
    document.querySelector("#shop")?.scrollIntoView({ block: "start" });
    document.querySelector(`[data-view="${productId}"]`)?.closest(".product-card")?.scrollIntoView({
      block: "center",
    });
    openProduct(productId);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

function renderProductDialog(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const copy = getProductCopy(product);

  dialogBody.innerHTML = `
    <img src="${product.image}" alt="${copy.name}">
    <div class="dialog-copy">
      <span class="badge">${t("lot")} ${getLotNumber(product)} · ${copy.tag}</span>
      <div>
        <h2>${copy.name}</h2>
        <p>${copy.intro}</p>
      </div>
      <div class="estimate-row">
        <span>${t("estimate")}</span>
        <strong>${t("reservationStatus")}</strong>
      </div>
      <ul class="detail-list">
        ${copy.details.map((detail) => `<li>${detail}</li>`).join("")}
      </ul>
      <button class="primary-button" type="button" data-add-to-cart="${product.id}">${t("addToBag")}</button>
    </div>
  `;
}

function openProduct(id) {
  activeProductId = id;
  renderProductDialog(id);
  dialog.showModal();
  const product = products.find((item) => item.id === id);
  if (product) {
    const price = getUnitPrice(product);
    window.VoidFormCommerce?.track("view_item", {
      productId: id,
      ...(price !== null && price !== undefined && price !== "" && Number.isFinite(Number(price)) ? { value: Number(price), currency: state.language === "en" ? "USD" : "CNY" } : {}),
    });
  }
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const dmId = target.closest("[data-dm]")?.getAttribute("data-dm");
  const addToCartId = target.closest("[data-add-to-cart]")?.getAttribute("data-add-to-cart");
  const removeCartId = target.closest("[data-cart-remove]")?.getAttribute("data-cart-remove");
  const viewId = target.closest("[data-view]")?.getAttribute("data-view");
  const language = target.closest("[data-language]")?.getAttribute("data-language");

  if (dmId) copyProductInquiry(dmId);
  if (addToCartId) {
    const product = products.find((item) => item.id === addToCartId);
    if (product) {
      window.VoidFormCommerce?.addToCart(product, state.language);
      showToast(t("addedToBag", { name: getProductCopy(product).name }));
    }
  }
  if (removeCartId) window.VoidFormCommerce?.removeFromCart(removeCartId);
  if (viewId) openProduct(viewId);
  if (target.closest("[data-cart-open]")) window.VoidFormCommerce?.openCart(state.language);
  if (target.closest("[data-cart-close]")) document.querySelector("[data-cart-dialog]")?.close();
  if (target.closest("[data-order-request-open]")) window.VoidFormCommerce?.openOrderRequest(state.language);

  if (language && language !== state.language) {
    state.language = language;
    localStorage.setItem("curioLanguage", language);
    applyLanguage();
  }

  if (target.closest("[data-dialog-close]")) dialog.close();
  if (target.closest("[data-search-focus]")) document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" });

  const heroDot = target.closest("[data-hero-dot]");
  if (heroDot) setHeroSlide(Number(heroDot.getAttribute("data-hero-dot") || 0));

  const fitButton = target.closest("[data-fit]");
  if (fitButton) {
    document.querySelectorAll("[data-fit]").forEach((button) => {
      button.classList.toggle("is-active", button === fitButton);
    });
    renderFitResult(fitButton.getAttribute("data-fit"));
  }

  const categoryButton = target.closest("[data-category]");
  if (categoryButton) {
    state.category = categoryButton.getAttribute("data-category");
    document.querySelectorAll("[data-category]").forEach((button) => {
      button.classList.toggle("is-active", button === categoryButton);
    });
    renderProducts();
  }

});

searchInput?.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProducts();
});

sortInput?.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitLeadForm();
});

dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const outside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;
  if (outside) dialog.close();
});

dialog.addEventListener("close", () => {
  activeProductId = null;
});

applyLanguage();
captureTracking();
focusRequestedProduct();
setHeroSlide(0);
if (heroSlides.length > 1) {
  window.setInterval(() => setHeroSlide(activeHeroSlide + 1), 5200);
}
