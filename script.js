const products = [
  {
    id: "p1",
    name: "浅绿水晶串｜8mm 意向测试",
    category: "crystal",
    price: 88,
    priceUsd: 24,
    tag: "候选款 · 样品待确认",
    image: "assets/product-crystal-test-01.jpg",
    material: "候选：8mm 绿东陵素串｜材质待验样",
    size: "预计 8mm｜手围待实物确认",
    intro: "先看大家是否喜欢浅绿、清爽、日常好搭的方向；图片是概念测试图，不代表最终到货实物。",
    details: ["意向测试款，样品与供货条件确认后才开放正式购买", "预计售价 88 元，最终以真实 SKU 为准", "材质、色差、珠径、颗数和手围均待样品确认", "现在可预约并私信关键词“绿”"],
  },
  {
    id: "p2",
    name: "深浅双拼木珠串｜8mm 意向测试",
    category: "wood",
    price: 88,
    priceUsd: 24,
    tag: "候选款 · 样品待确认",
    image: "assets/product-wood-test-01.jpg",
    material: "候选：8mm 深浅双拼木珠｜木种待确认",
    size: "预计 8mm｜手围待实物确认",
    intro: "先测试大家是否喜欢温润木纹和中性日常方向；图片是概念测试图，不代表最终到货实物。",
    details: ["意向测试款，样品与代发条件确认后才开放正式购买", "预计售价 88 元，最终以真实 SKU 为准", "木种、处理方式、掉色、气味和绳线均待样品确认", "现在可预约并私信关键词“木”"],
  },
];

const instagramProfileUrl = "https://www.instagram.com/duck.3428348/";

const productEnglish = {
  p1: {
    name: "Pale Green Bead Bracelet",
    tag: "Preview release",
    material: "Pale green beads | final material confirmed before checkout",
    size: "Expected 8mm | wrist fit confirmed by chat",
    intro: "A quiet pale-green bracelet for everyday wear. Final material and fit will be confirmed before checkout opens.",
    details: ["Expected launch price US$24 before international shipping", "Final material, color, bead size, count, and fit will be confirmed before checkout", "Preview imagery will be replaced by final product photography", "DM GREEN on Instagram for availability"],
    dmKeyword: "GREEN",
  },
  p2: {
    name: "Warm Wood Bead Bracelet",
    tag: "Preview release",
    material: "Warm wood beads | final wood species confirmed before checkout",
    size: "Expected 8mm | wrist fit confirmed by chat",
    intro: "A warm, understated wood-bead bracelet for everyday wear. Final material and fit will be confirmed before checkout opens.",
    details: ["Expected launch price US$24 before international shipping", "Wood species, finish, color transfer, cord, and fit will be confirmed before checkout", "Preview imagery will be replaced by final product photography", "DM WOOD on Instagram for availability"],
    dmKeyword: "WOOD",
  },
};

products.forEach((product) => {
  product.englishName = productEnglish[product.id]?.name || product.name;
});

const translations = {
  zh: {
    pageTitle: "有无｜水晶串与木珠串",
    pageDescription: "有无，先做百元以内的水晶串和木珠串，搭建独立站购买与社媒承接框架。",
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
    cartOpen: "打开测试购物袋",
    bagIcon: "购物袋",
    heroSliderLabel: "首页图片轮播",
    heroDotsLabel: "切换首页图片",
    introAlt: "宁静绿色户外柔光氛围图：水晶串与木珠串",
    introAltOne: "宁静绿色户外柔光氛围图：手腕佩戴清透绿水晶串",
    introAltTwo: "宁静苔石花园氛围图：手腕佩戴暖色木珠串",
    introEntriesLabel: "首页入口",
    introLabel: "UNDER ￥100 · NATURAL TEST DROP",
    introTitle: "",
    introBody: "",
    introEntryShop: "",
    introEntryGift: "",
    introEntryGuide: "",
    introEntryInquiry: "",
    introNoteOne: "水晶",
    introNoteTwo: "木珠",
    introNoteThree: "测试图",
    introNoteFour: "自动化",
    pricePoint: "88",
    servicePoint: "客服",
    shopInfo: "店铺信息",
    launch: "FIRST DROP",
    heroTitle: "全部商品",
    heroBody: "",
    heroAlt: "水晶串与木珠串测试商品图",
    inStock: "意向价",
    sevenDays: "手围",
    easyReturns: "可备注",
    sizeAdvice: "咨询确认",
    commerceLabel: "商品选购",
    searchPlaceholder: "搜索水晶串或木珠串",
    sortLabel: "排序",
    sortFeatured: "图录顺序",
    sortLow: "测试价从低到高",
    sortHigh: "测试价从高到低",
    categoryLabel: "商品分类",
    categoryAll: "全部",
    categoryCrystal: "水晶串",
    categoryWood: "木珠串",
    categoryJade: "测试款",
    categoryCharm: "挂件",
    empty: "没有找到匹配的商品。",
    weeklySet: "TRY-ON SET",
    setTitle: "水晶木珠试戴三件组",
    setBody: "一条显眼的水晶、一条天然木珠、一条素净菩提，用来测试用户更喜欢哪种佩戴感。",
    addSet: "加入咨询清单 ￥197",
    careNotes: "MATERIAL NOTES",
    careTitle: "天然材质怎么戴",
    care1Title: "水晶看颜色和通透感",
    care1Body: "天然矿石会有棉、纹和色带，日常避免磕碰、香水、酒精和长时间暴晒。",
    care2Title: "木珠看手感和变化",
    care2Body: "椰蒂、菩提、桃木都适合日常戴，保持干燥，少碰水和化学清洁剂。",
    care3Title: "送礼看好不好理解",
    care3Body: "清透绿水晶适合柔和日常，暖木珠适合安静穿搭，先用两款测试成交链路。",
    serviceLabel: "服务承诺",
    service1: "水晶串 ￥88",
    service2: "木珠串 ￥88",
    service3: "支持备注手围",
    finderLabel: "BUYER GUIDE",
    finderTitle: "30 秒找到第一件",
    finderBody: "不用懂文玩也能选：按显白、通勤、送礼和天然感四个场景直接推荐。",
    fitDaily: "显白好拍",
    fitScent: "通勤低调",
    fitGift: "小礼物",
    fitBulk: "天然木珠",
    fitPick: "推荐测试款",
    modelLabel: "TEST LOGIC",
    modelTitle: "先用小货盘测真实兴趣",
    model1Title: "百元内降低决策",
    model1Body: "用 ￥29-￥99 的天然随身小饰，让用户不用犹豫太久。",
    model2Title: "水晶测颜色偏好",
    model2Body: "粉紫、黑金、清透三类视觉方向，看哪种更容易被收藏和咨询。",
    model3Title: "木珠测天然陪伴感",
    model3Body: "椰蒂、菩提、桃木更日常，适合讲耐戴、变化和松弛感。",
    model4Title: "候选品类少量观察",
    model4Body: "当前只测试水晶串和木珠串，先看咨询、加购和成交路径。",
    subscribeTitle: "黑金通勤手串",
    subscribeBody: "黑曜石配虎眼石，低调但有存在感，适合先测男女都能戴的通勤款。",
    subscribeCta: "加入咨询清单 ￥79",
    leadLabel: "SERVICE",
    leadTitle: "客服与下单咨询",
    leadBody: "",
    leadUse: "用途",
    leadBudget: "预算",
    leadBudgetPlaceholder: "例：88",
    leadCountry: "所在国家/地区",
    leadCountryPlaceholder: "例：中国",
    leadWrist: "手围",
    leadWristPlaceholder: "厘米或英寸",
    leadTiming: "购买时间",
    leadTimingReady: "开放后准备购买",
    leadTimingMonth: "一个月内",
    leadTimingCompare: "先比较看看",
    leadContact: "微信/邮箱",
    leadContactPlaceholder: "留下联系方式",
    leadSubmit: "复制咨询并打开 Instagram",
    leadSaved: "咨询内容已复制，正在打开 Instagram。",
    freeShippingLeft: "再加 {amount} 解锁小样包装",
    freeShippingReady: "已解锁小样包装",
    bonusLeft: "再加 {amount} 解锁礼盒升级",
    bonusReady: "已解锁礼盒升级",
    reservationStatus: "当前只记录意向，不触发付款或备货。",
    dmKeyword: "私信关键词：{keyword}",
    stickyText: "水晶串 · 木珠串",
    stickyCta: "查看拍品",
    cartTitle: "预约清单",
    cartClose: "关闭购物车",
    subtotal: "小计",
    cartNote: "样品通过后才开放正式付款。现在复制预约内容并去品牌 Instagram 私信。",
    checkout: "去 Instagram 私信预约",
    dialogClose: "关闭详情",
    addToBag: "加入预约清单",
    view: "查看详情",
    viewDetails: "查看{name}详情",
    cartEmpty: "咨询清单还是空的，先挑一件喜欢的。",
    quantity: "{name}数量",
    decrease: "减少{name}",
    increase: "增加{name}",
    remove: "移除",
    addedToBag: "{name} 已加入预约清单",
    checkoutEmpty: "先加入商品，再提交咨询。",
    checkoutSuccess: "正在打开品牌 Instagram。",
    lot: "商品",
    estimate: "预计价格",
    specialistPick: "意向测试",
    bottomNavLabel: "底部导航",
    bottomHome: "首页",
    bottomCategory: "分类",
    bottomCart: "预约",
    bottomService: "客服",
    footerBrand: "有无 Void & Form",
    footerNote: "意向测试期：样品和材质确认前只收预约，不收正式货款。",
    footerPolicyNav: "政策页面",
    footerPrivacy: "隐私",
    footerShipping: "物流",
    footerReturns: "退换",
    footerContact: "联系",
  },
  en: {
    pageTitle: "VOID & FORM | Crystal & Wood Bead Bracelets",
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
    cartOpen: "Open preview bag",
    bagIcon: "Bag",
    heroSliderLabel: "Homepage image carousel",
    heroDotsLabel: "Switch homepage image",
    introAlt: "Serene green outdoor lifestyle image of crystal and wood bead bracelets",
    introAltOne: "Serene green outdoor image of a wrist wearing a pale green crystal bracelet",
    introAltTwo: "Quiet mossy garden image of a wrist wearing a warm wood bead bracelet",
    introEntriesLabel: "Homepage entries",
    introLabel: "QUIET BRACELETS · FIRST DROP",
    introTitle: "",
    introBody: "",
    introEntryShop: "",
    introEntryGift: "",
    introEntryGuide: "",
    introEntryInquiry: "",
    introNoteOne: "Crystal",
    introNoteTwo: "Wood beads",
    introNoteThree: "Everyday wear",
    introNoteFour: "First drop",
    pricePoint: "Under US$25",
    servicePoint: "Support",
    shopInfo: "Store information",
    launch: "FIRST DROP",
    heroTitle: "All Products",
    heroBody: "",
    heroAlt: "Concept previews of pale green and warm wood bead bracelets",
    inStock: "Target first-drop price",
    sevenDays: "Wrist size",
    easyReturns: "Notes accepted",
    sizeAdvice: "Confirm by chat",
    commerceLabel: "Shop products",
    searchPlaceholder: "Search crystal or wood beads",
    sortLabel: "Sort",
    sortFeatured: "Catalogue order",
    sortLow: "Test price: low to high",
    sortHigh: "Test price: high to low",
    categoryLabel: "Product categories",
    categoryAll: "All",
    categoryCrystal: "Pale green",
    categoryWood: "Warm wood",
    categoryJade: "Jade",
    categoryCharm: "Charm",
    empty: "No matching products found.",
    weeklySet: "TRY-ON SET",
    setTitle: "Crystal & Wood Three-Piece Try-On Set",
    setBody: "One visible crystal, one natural wood bead, and one clean bodhi piece to test which wearing style users prefer.",
    addSet: "Add to inquiry list ¥197",
    careNotes: "MATERIAL NOTES",
    careTitle: "How to wear natural materials",
    care1Title: "Crystal is about color and clarity",
    care1Body: "Natural stones may show clouds, lines, and color bands. Avoid impact, perfume, alcohol, and prolonged sun.",
    care2Title: "Wood beads are about feel and change",
    care2Body: "Coconut shell, bodhi, and peach wood are easy for daily wear. Keep dry and away from cleaning chemicals.",
    care3Title: "Gifts should be easy to understand",
    care3Body: "Pale green crystal supports soft daily styling, while warm wood beads support quiet outfits. These two pieces test the conversion path first.",
    serviceLabel: "Service promise",
    service1: "Pale green preview",
    service2: "Warm wood preview",
    service3: "Fit confirmed before orders open",
    finderLabel: "BUYER GUIDE",
    finderTitle: "Find the first piece in 30 seconds",
    finderBody: "No curio knowledge needed: choose by photogenic color, low-key commuting, gifting, or natural texture.",
    fitDaily: "Photogenic",
    fitScent: "Low-key commute",
    fitGift: "Small gift",
    fitBulk: "Natural wood",
    fitPick: "Recommended test piece",
    modelLabel: "TEST LOGIC",
    modelTitle: "Use a small assortment to test real interest",
    model1Title: "Under ¥100 lowers hesitation",
    model1Body: "¥29-¥99 natural wearable pieces make first decisions easier.",
    model2Title: "Crystal tests color preference",
    model2Body: "Pink-purple, black-gold, and clear styles show which visuals drive saves and inquiries.",
    model3Title: "Wood tests natural companionship",
    model3Body: "Coconut shell, bodhi, and peach wood support everyday, durable, relaxed stories.",
    model4Title: "Candidates stay small",
    model4Body: "This round only tests crystal and wood bead bracelets before expanding categories.",
    subscribeTitle: "Black-Gold Commute Bracelet",
    subscribeBody: "Obsidian with tiger eye: low-key but visible, a good unisex commuting test piece.",
    subscribeCta: "Add to inquiry list ¥79",
    leadLabel: "SERVICE",
    leadTitle: "Join the First Drop",
    leadBody: "",
    leadUse: "Piece",
    leadBudget: "Comfortable price",
    leadBudgetPlaceholder: "e.g. US$24",
    leadCountry: "Country / region",
    leadCountryPlaceholder: "e.g. United States",
    leadWrist: "Wrist size",
    leadWristPlaceholder: "cm or in",
    leadTiming: "Purchase timing",
    leadTimingReady: "Ready when available",
    leadTimingMonth: "Within a month",
    leadTimingCompare: "Just comparing",
    leadContact: "Email or Instagram handle",
    leadContactPlaceholder: "How can we reach you?",
    leadSubmit: "Copy inquiry & open Instagram",
    leadSaved: "Inquiry copied. Instagram is opening now.",
    freeShippingLeft: "Add {amount} to unlock sample packaging",
    freeShippingReady: "Sample packaging unlocked",
    bonusLeft: "Add {amount} to unlock gift-box upgrade",
    bonusReady: "Gift-box upgrade unlocked",
    reservationStatus: "First-drop interest only. No payment or stock allocation yet.",
    dmKeyword: "Your choice: {keyword}",
    stickyText: "Crystal bracelet · wood bead bracelet",
    stickyCta: "View lots",
    cartTitle: "First-drop list",
    cartClose: "Close shopping bag",
    subtotal: "Subtotal",
    cartNote: "No payment yet. Copy your choices and message VOID & FORM on Instagram.",
    checkout: "Join via Instagram DM",
    dialogClose: "Close product details",
    addToBag: "Join first-drop list",
    view: "Details",
    viewDetails: "View details for {name}",
    cartEmpty: "Your bag is empty. Start with something you love.",
    quantity: "Quantity for {name}",
    decrease: "Decrease {name}",
    increase: "Increase {name}",
    remove: "Remove",
    addedToBag: "{name} added to your first-drop list",
    checkoutEmpty: "Add a product before sending an inquiry.",
    checkoutSuccess: "Opening the brand Instagram profile.",
    lot: "Item",
    estimate: "Target first-drop price",
    specialistPick: "FIRST DROP PREVIEW",
    bottomNavLabel: "Bottom navigation",
    bottomHome: "Home",
    bottomCategory: "Category",
    bottomCart: "First drop",
    bottomService: "Service",
    footerBrand: "Void & Form",
    footerNote: "Preview release. Material, fit, shipping, and returns are confirmed before checkout opens.",
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
      <strong class="price">${formatPrice(getUnitPrice(product))}</strong>
    </div>
    <button class="primary-button" type="button" data-add-to-cart="${product.id}">${t("addToBag")}</button>
  `;
}

function submitLeadForm() {
  if (!leadForm) return;
  if (!leadForm.reportValidity()) return;

  const data = Object.fromEntries(new FormData(leadForm).entries());
  const inquiryText = state.language === "en"
    ? `VOID & FORM inquiry\nPiece: ${data.use}\nCountry / region: ${data.country}\nWrist size: ${data.wrist || "Not specified"}\nComfortable price: ${data.budget || "Not specified"}\nPurchase timing: ${data.timing || "Not specified"}\nContact: ${data.contact || "Instagram DM"}`
    : `有无咨询\n款式：${data.use}\n国家/地区：${data.country}\n手围：${data.wrist || "未填写"}\n预算：${data.budget || "未填写"}\n购买时间：${data.timing || "未填写"}\n联系方式：${data.contact || "Instagram 私信"}`;
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
  const keyword = copy.dmKeyword || (product.id === "p2" ? "木" : "绿");
  return state.language === "en"
    ? `VOID & FORM inquiry\nPiece: ${copy.name}\nKeyword: ${keyword}\nCountry / region:\nWrist size:\nWould you buy at US$${product.priceUsd} before shipping?`
    : `有无咨询\n款式：${copy.name}\n关键词：${keyword}\n国家/地区：\n手围：\n是否接受预计价格 ￥${product.price}？`;
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

  if (state.sort === "low") return filtered.sort((a, b) => getUnitPrice(a) - getUnitPrice(b));
  if (state.sort === "high") return filtered.sort((a, b) => getUnitPrice(b) - getUnitPrice(a));
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
                <strong class="price">${formatPrice(getUnitPrice(product))}</strong>
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
        <strong class="price">${formatPrice(getUnitPrice(product))}</strong>
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
    window.VoidFormCommerce?.track("view_item", {
      productId: id,
      value: getUnitPrice(product),
      currency: state.language === "en" ? "USD" : "CNY",
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
  if (target.closest("[data-cart-checkout]")) {
    window.VoidFormCommerce?.checkout(state.language).then((result) => {
      if (!result?.ok) showToast(result?.message || t("checkoutEmpty"));
    });
  }

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
