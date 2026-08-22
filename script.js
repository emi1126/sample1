// 農家LP — GitHub Pages 対応（静的サイト・相対パス）

const PLACEHOLDER = "要確認";
const REVEAL_SELECTOR = ".fade-up";
const REVEAL_THRESHOLD = 0.12;
const REVEAL_ROOT_MARGIN = "0px 0px -32px 0px";

const DEFAULT_HERO = {
  main: "./asset/img/水やり.jpg",
};

function assetPath(relativePath) {
  return new URL(relativePath.replace(/^\.\//, ""), document.baseURI).href;
}

function textOrPlaceholder(value, fallback = PLACEHOLDER) {
  if (value === null || value === undefined || String(value).trim() === "") {
    return fallback;
  }
  return String(value).trim();
}

function setText(id, value, fallback = PLACEHOLDER) {
  const el = document.getElementById(id);
  if (el) el.textContent = textOrPlaceholder(value, fallback);
}

function setHref(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  if (url) {
    el.href = url;
    el.removeAttribute("aria-disabled");
    el.classList.remove("is-disabled");
  } else {
    el.removeAttribute("href");
    el.setAttribute("role", "link");
    el.setAttribute("aria-disabled", "true");
    el.classList.add("is-disabled");
  }
}

function setImg(id, src, alt) {
  const el = document.getElementById(id);
  if (!el || !src) return;
  el.src = assetPath(src.startsWith("./") ? src : `./${src}`);
  if (alt) el.alt = alt;
}

function initHeroPhotos(photos) {
  const list = Array.isArray(photos) ? photos.filter((p) => p && p.src) : [];
  const main =
    list.find((p) => p.src.includes("水やり")) || list[1] || list[0];

  setImg("heroMainImg", main?.src || DEFAULT_HERO.main, main?.alt || "水やりの様子");
}

function renderFarmData() {
  const farm = window.FARM || {};

  const displayName = textOrPlaceholder(farm.name, "○○農園");
  const region = farm.region ? `${farm.region}の` : "";
  const products = farm.mainProducts || "農産物";

  document.title = `${displayName} | ${region}${products}の直売・農園`;
  setText("metaFarmName", displayName);

  const descParts = [displayName];
  if (farm.region) descParts.push(farm.region);
  if (farm.mainProducts) descParts.push(farm.mainProducts);
  descParts.push("直売・来店情報");
  const description = `${descParts.join("・")}。営業時間・アクセス・購入方法をスマホで確認できます。`;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = description;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = displayName;
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = description;

  setText("navBrand", displayName);
  setText("footerBrand", displayName);
  setText("heroFarmName", displayName);

  setText("aboutText", farm.about || "農園の紹介文は、事業者ヒアリング後に掲載します。");

  initHeroPhotos(farm.photos);
  renderList("commitmentList", farm.commitments, "こだわりの内容は確認中です。");
  renderProducts("productGrid", farm.products);
  renderPurchaseList("purchaseList", farm.purchaseMethods, "購入方法は確認中です。");

  setText("infoAddress", farm.address);
  setText("heroAddress", farm.address ? farm.address.split(/[、,\s]/)[0] : null);
  setText("infoHours", farm.hours);
  setText("heroHours", farm.hours);
  setText("infoClosed", farm.closedDays);

  const phoneLink = document.getElementById("phoneLink");
  if (phoneLink) phoneLink.textContent = textOrPlaceholder(farm.phone);

  renderList("infoPayment", farm.paymentMethods, PLACEHOLDER);
  setText("infoParking", formatParking(farm.parking));
  setText("infoContact", farm.contactMethod);

  setupMapLinks(farm);
  setupPhoneLinks(farm.phone);
  setupSns(farm);
  renderFaq("faqList", farm.faq);
  renderPhotos("photoGallery", farm.photos);
  updateStructuredData(farm, displayName, description);
}

function formatParking(value) {
  if (value === true) return "あり";
  if (value === false) return "なし";
  return PLACEHOLDER;
}

function renderList(containerId, items, emptyMessage) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = Array.isArray(items) ? items.filter(Boolean) : [];
  if (!list.length) {
    container.innerHTML = `<li class="placeholder-item">${escapeHtml(emptyMessage)}</li>`;
    return;
  }
  container.innerHTML = list.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderPurchaseList(containerId, items, emptyMessage) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = Array.isArray(items) ? items.filter(Boolean) : [];
  if (!list.length) {
    container.innerHTML = `<li class="placeholder-item">${escapeHtml(emptyMessage)}</li>`;
    return;
  }
  container.innerHTML = list.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = Array.isArray(products) ? products : [];

  if (!list.length) {
    container.innerHTML = `
      <article class="product-item fade-up">
        <div class="product-item__photo product-item__photo--empty" aria-hidden="true"></div>
        <div class="product-item__body">
          <h3 class="product-item__name">${PLACEHOLDER}</h3>
          <p class="product-item__season">旬・品目は確認中</p>
          <p class="product-item__note">SNSやヒアリングで確認後、ここに掲載します。</p>
        </div>
      </article>`;
    return;
  }

  container.innerHTML = list
    .map((p, i) => {
      const hasImage = Boolean(p.image);
      const imgSrc = hasImage ? assetPath(p.image.startsWith("./") ? p.image : `./${p.image}`) : "";
      const photoHtml = hasImage
        ? `<div class="product-item__photo"><img src="${escapeAttr(imgSrc)}" alt="${escapeAttr(p.name)}" loading="lazy" width="800" height="600" /></div>`
        : `<div class="product-item__photo product-item__photo--empty" aria-hidden="true"></div>`;
      return `
      <article class="product-item fade-up">
        ${photoHtml}
        <div class="product-item__body">
          <h3 class="product-item__name">${escapeHtml(p.name)}</h3>
          <p class="product-item__season">${escapeHtml(p.season || "旬：要確認")}</p>
          ${p.note ? `<p class="product-item__note">${escapeHtml(p.note)}</p>` : ""}
        </div>
      </article>`;
    })
    .join("");
}

function renderFaq(containerId, faq) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = Array.isArray(faq) ? faq : [];
  const defaults = [
    { q: "予約は必要ですか？", a: PLACEHOLDER },
    { q: "支払い方法は？", a: PLACEHOLDER },
    { q: "駐車場はありますか？", a: PLACEHOLDER },
    { q: "最新の販売状況はどこで確認できますか？", a: "Instagram・Threadsで随時更新予定（URL確認中）" },
  ];
  const items = list.length ? list : defaults;
  container.innerHTML = items
    .map(
      (item) => `
      <details class="faq__item fade-up">
        <summary><span class="faq__q">Q</span>${escapeHtml(item.q)}<span class="faq__toggle" aria-hidden="true"></span></summary>
        <div class="faq__answer"><p>${escapeHtml(item.a)}</p></div>
      </details>`
    )
    .join("");
}

function renderPhotos(containerId, photos) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = Array.isArray(photos) ? photos.filter((p) => p && p.src) : [];

  if (!list.length) {
    container.innerHTML = `<div class="photo-placeholder fade-up">農園の写真は確認後に掲載します</div>`;
    return;
  }

  container.innerHTML = list
    .map((p) => {
      const src = assetPath(p.src.startsWith("./") ? p.src : `./${p.src}`);
      return `
      <figure class="photo-mosaic__item fade-up">
        <img src="${escapeAttr(src)}" alt="${escapeAttr(p.alt)}" loading="lazy" width="600" height="450" />
        ${p.caption ? `<figcaption>${escapeHtml(p.caption)}</figcaption>` : ""}
      </figure>`;
    })
    .join("");
}

function updateStructuredData(farm, name, description) {
  const el = document.getElementById("structuredData");
  if (!el) return;
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    address: farm.address
      ? { "@type": "PostalAddress", streetAddress: farm.address, addressCountry: "JP" }
      : { "@type": "PostalAddress", addressCountry: "JP" },
    url: window.location.href.split("#")[0],
  };
  if (farm.phone) data.telephone = farm.phone;
  el.textContent = JSON.stringify(data);
}

function setupMapLinks(farm) {
  const query = farm.mapQuery || farm.address;
  const mapUrl = query
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
    : null;
  const routeUrl = query
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`
    : null;
  ["mapLinkPrimary", "stickyMap"].forEach((id) => setHref(id, mapUrl));
  setHref("mapLinkRoute", routeUrl);
}

function setupPhoneLinks(phone) {
  const tel = phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : null;
  setHref("phoneLink", tel);
}

function setupSns(farm) {
  setHref("instagramLink", farm.instagramUrl);
  setHref("threadsLink", farm.threadsUrl);
  setHref("stickyInstagram", farm.instagramUrl);

  const igNote = document.getElementById("instagramNote");
  const thNote = document.getElementById("threadsNote");
  if (igNote) {
    igNote.textContent =
      farm.instagramNote ||
      (farm.instagramUrl ? "今日の収穫・販売情報" : "詳細はInstagramをご確認ください");
  }
  if (thNote) {
    thNote.textContent =
      farm.threadsNote ||
      (farm.threadsUrl ? "農園の日常・お知らせ" : "詳細はThreadsをご確認ください");
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, "&#39;");
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: REVEAL_THRESHOLD, rootMargin: REVEAL_ROOT_MARGIN }
);

let closeSiteNavMenu = () => {};

function initReveal() {
  document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => revealObserver.observe(el));
}

function initSiteNav() {
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("siteNavToggle");
  const menu = document.getElementById("siteNavMenu");
  const hero = document.querySelector(".hero");
  if (!nav || !toggle || !menu) return;

  const setMenuOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    menu.hidden = !open;
    nav.classList.toggle("is-menu-open", open);
    document.body.classList.toggle("site-nav-open", open);
  };

  closeSiteNavMenu = () => setMenuOpen(false);
  toggle.addEventListener("click", () => {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  let ticking = false;
  const updateNav = () => {
    ticking = false;
    const threshold = hero ? Math.min(hero.offsetHeight * 0.08, 80) : 60;
    nav.classList.toggle("is-scrolled", window.scrollY > threshold);
  };
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateNav);
  }, { passive: true });
  updateNav();
}

function initAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#" || link.classList.contains("is-disabled")) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeSiteNavMenu();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });
}

function initStickyCta() {
  const sticky = document.getElementById("stickyCta");
  const hero = document.querySelector(".hero");
  const footer = document.querySelector(".footer");
  if (!sticky || !hero) return;

  let ticking = false;
  const update = () => {
    ticking = false;
    const heroBottom = hero.getBoundingClientRect().bottom;
    const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;
    sticky.classList.toggle("is-shown", heroBottom < 0 && footerTop > window.innerHeight * 0.45);
  };
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.getElementById("contactStatus");
    if (status) {
      status.textContent = "お問い合わせフォームは、問い合わせ先確認後に接続します。";
      status.className = "form-status form-status--ng";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFarmData();
  initSiteNav();
  initReveal();
  initAnchorLinks();
  initStickyCta();
  initContactForm();
});
