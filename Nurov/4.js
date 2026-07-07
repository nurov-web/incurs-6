/* ---------- Маълумоти маҳсулот ---------- */
const products = [
  { icon:"💊", name:"Парацетамол 500мг", desc:"Барои паст кардани таб ва дард", price:8 },
  { icon:"🍊", name:"Витамин C 1000мг", desc:"Мустаҳкам кардани иммунитет", price:25 },
  { icon:"🧡", name:"Аскорбинка кӯдакона", desc:"Витамини хушмазза барои кӯдакон", price:12 },
  { icon:"🧴", name:"Гели зидди дард", desc:"Барои дарди мушакҳо ва буғумҳо", price:35 },
  { icon:"🍯", name:"Сиропи сулфа", desc:"Барои табобати сулфаи кӯдакон", price:28 },
  { icon:"😷", name:"Маска ва антисептик", desc:"Маҷмӯаи ҳифзи шахсӣ", price:15 },
  { icon:"🌡️", name:"Термометри рақамӣ", desc:"Ченкунии дақиқи ҳарорати бадан", price:45 },
  { icon:"🩹", name:"Пластири тиббӣ", desc:"Барои захмҳои хурд ва буришҳо", price:10 },
  { icon:"🌿", name:"Мултивитамин", desc:"Маҷмӯаи витаминҳо барои ҳар рӯз", price:60 },
  { icon:"🧴", name:"Крем нармкунандаи пӯст", desc:"Тарнамкунӣ ва ҳифзи пӯст", price:22 }
];

/* ---------- Тавлиди тасвирҳои маҳсулот (SVG-и аслӣ, на эмодзи) ---------- */
let _artUid = 0;
function nid() { return "ic" + (_artUid++); }

function lighten(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  let r = (num >> 16) + percent, g = ((num >> 8) & 0x00FF) + percent, b = (num & 0x0000FF) + percent;
  r = Math.min(255, Math.max(0, r)); g = Math.min(255, Math.max(0, g)); b = Math.min(255, Math.max(0, b));
  return "#" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function bottleArt(label, cap, dots) {
  cap = cap || "#ffffff";
  const id = nid();
  const light = lighten(label, 60);
  const dotOverlay = dots ? `
      <circle cx="42" cy="60" r="3.4" fill="#f2a541"/>
      <circle cx="52" cy="66" r="3.4" fill="#ef767a"/>
      <circle cx="58" cy="58" r="3.4" fill="#3aa6a6"/>` : "";
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${light}"/><stop offset="1" stop-color="${label}"/>
    </linearGradient></defs>
    <ellipse cx="50" cy="89" rx="22" ry="5" fill="#0f3d2e" opacity=".12"/>
    <rect x="41" y="9" width="18" height="9" rx="3" fill="${cap}" stroke="#00000018"/>
    <rect x="38" y="16" width="24" height="12" rx="4" fill="${cap}" stroke="#00000018"/>
    <rect x="42" y="25" width="16" height="9" fill="${light}"/>
    <path d="M30 34 Q30 28 38 28 H62 Q70 28 70 34 V78 Q70 85 62 85 H38 Q30 85 30 78 Z" fill="url(#${id})" stroke="#00000022"/>
    ${dotOverlay}
    <rect x="34" y="52" width="32" height="19" rx="4" fill="#ffffff" opacity=".92"/>
    <rect x="38" y="57" width="24" height="3" rx="1.5" fill="${label}"/>
    <rect x="38" y="63" width="15" height="3" rx="1.5" fill="${label}" opacity=".55"/>
    <rect x="33" y="32" width="6" height="48" rx="3" fill="#ffffff" opacity=".3"/>
  </svg>`;
}

function tubeArt(color) {
  const id = nid();
  const light = lighten(color, 55);
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${light}"/><stop offset="1" stop-color="${color}"/>
    </linearGradient></defs>
    <ellipse cx="50" cy="90" rx="20" ry="4" fill="#0f3d2e" opacity=".12"/>
    <rect x="36" y="13" width="28" height="9" rx="3" fill="#cfd6d2" stroke="#00000018"/>
    <path d="M38 22 L62 22 L58 32 L58 78 Q58 88 50 88 Q42 88 42 78 L42 32 Z" fill="url(#${id})" stroke="#00000022"/>
    <rect x="43" y="46" width="14" height="13" rx="3" fill="#ffffff" opacity=".92"/>
    <rect x="46" y="49" width="8" height="2.5" rx="1.2" fill="${color}"/>
    <rect x="46" y="53" width="5" height="2.5" rx="1.2" fill="${color}" opacity=".55"/>
    <rect x="41" y="30" width="5" height="52" rx="2.5" fill="#ffffff" opacity=".3"/>
  </svg>`;
}

function jarArt(color) {
  const id = nid();
  const dark = lighten(color, -30);
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="${lighten(color, 50)}"/>
    </linearGradient></defs>
    <ellipse cx="50" cy="88" rx="24" ry="5" fill="#0f3d2e" opacity=".12"/>
    <rect x="27" y="40" width="46" height="43" rx="11" fill="url(#${id})" stroke="#00000022"/>
    <ellipse cx="50" cy="40" rx="23" ry="7" fill="#ffffffcc"/>
    <rect x="25" y="25" width="50" height="16" rx="6" fill="${color}"/>
    <ellipse cx="50" cy="25" rx="25" ry="6" fill="${dark}"/>
    <rect x="31" y="50" width="6" height="27" rx="3" fill="#ffffff" opacity=".3"/>
  </svg>`;
}

function thermometerArt() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="91" rx="10" ry="3" fill="#0f3d2e" opacity=".12"/>
    <rect x="45" y="12" width="10" height="58" rx="5" fill="#f4f6f5" stroke="#d3dbd7"/>
    <rect x="47.5" y="34" width="5" height="42" rx="2.5" fill="#ef767a"/>
    <circle cx="50" cy="80" r="13" fill="#ef767a"/>
    <circle cx="50" cy="80" r="6.5" fill="#f79a9d"/>
    <g stroke="#c3ccc7" stroke-width="1.4">
      <line x1="58" y1="24" x2="63" y2="24"/>
      <line x1="58" y1="34" x2="63" y2="34"/>
      <line x1="58" y1="44" x2="63" y2="44"/>
      <line x1="58" y1="54" x2="63" y2="54"/>
    </g>
  </svg>`;
}

function maskArt() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="46" cy="88" rx="26" ry="4" fill="#0f3d2e" opacity=".1"/>
    <path d="M14 46 Q46 28 82 44 L79 64 Q46 78 16 63 Z" fill="#e7f5ec" stroke="#b7cdbf" stroke-width="1.5"/>
    <path d="M15 47 Q46 58 80 45" fill="none" stroke="#9fc0ac" stroke-width="1.6"/>
    <circle cx="38" cy="55" r="2.6" fill="#8fa89a"/>
    <circle cx="55" cy="55" r="2.6" fill="#8fa89a"/>
    <path d="M13 48 Q4 42 3 30" stroke="#b7cdbf" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M83 44 Q92 38 94 27" stroke="#b7cdbf" stroke-width="3" fill="none" stroke-linecap="round"/>
    <rect x="70" y="60" width="16" height="24" rx="4" fill="#2f8f5f"/>
    <rect x="74" y="52" width="8" height="10" rx="2" fill="#8fa89a"/>
    <rect x="73" y="68" width="10" height="3" rx="1.5" fill="#ffffff" opacity=".8"/>
  </svg>`;
}

function plasterArt() {
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="90" rx="26" ry="4" fill="#0f3d2e" opacity=".1"/>
    <g transform="rotate(-18 50 50)">
      <rect x="16" y="40" width="68" height="20" rx="10" fill="#f2cda3" stroke="#d9ab7a" stroke-width="1.4"/>
      <rect x="37" y="42" width="26" height="16" rx="4" fill="#ffffff" opacity=".9"/>
      <circle cx="45" cy="47" r="1.6" fill="#c7cfca"/>
      <circle cx="55" cy="47" r="1.6" fill="#c7cfca"/>
      <circle cx="45" cy="53" r="1.6" fill="#c7cfca"/>
      <circle cx="55" cy="53" r="1.6" fill="#c7cfca"/>
    </g>
  </svg>`;
}

function productArt(i) {
  switch (i) {
    case 0: return bottleArt("#2f8f5f", "#ffffff");
    case 1: return bottleArt("#f2a541", "#ffffff");
    case 2: return bottleArt("#ef8aa0", "#ffffff");
    case 3: return tubeArt("#3aa6a6");
    case 4: return bottleArt("#c17f3a", "#f4f1ea");
    case 5: return maskArt();
    case 6: return thermometerArt();
    case 7: return plasterArt();
    case 8: return bottleArt("#6a5acd", "#ffffff", true);
    case 9: return jarArt("#e7a6c7");
    default: return bottleArt("#2f8f5f", "#ffffff");
  }
}

/* ---------- Рендер кардани маҳсулот (танҳо дар products.html) ---------- */
const grid = document.getElementById("productGrid");
if (grid) {
  products.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () => openModal(i);
    card.innerHTML = `
      <div class="product-photo">${productArt(i)}</div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <div class="desc">${p.desc}</div>
        <div class="product-price">${p.price} сомонӣ</div>
        <button class="btn">Дидани тафсилот</button>
      </div>`;
    grid.appendChild(card);
  });
}

/* ---------- Попап (Quick view) ---------- */
let currentModalIndex = null;

function openModal(i) {
  currentModalIndex = i;
  const p = products[i];
  document.getElementById("modalIcon").innerHTML = productArt(i);
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalPrice").textContent = p.price + " сомонӣ";
  document.getElementById("modalOverlay").classList.add("show");
}
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("show");
}
document.addEventListener("click", (e) => {
  if (e.target.id === "modalOverlay") closeModal();
});

/* ---------- Сабади харид (Cart) ---------- */
let cart = [];
try { cart = JSON.parse(localStorage.getItem("salomati_cart")) || []; } catch (e) { cart = []; }

function saveCart() {
  try { localStorage.setItem("salomati_cart", JSON.stringify(cart)); } catch (e) {}
  updateCartUI();
}

function addToCart() {
  if (currentModalIndex === null) return;
  const existing = cart.find(c => c.id === currentModalIndex);
  if (existing) existing.qty++; else cart.push({ id: currentModalIndex, qty: 1 });
  saveCart();
  closeModal();
  showToast("Ба сабад илова шуд!");
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
}

function cartTotalCount() {
  return cart.reduce((s, c) => s + c.qty, 0);
}
function cartTotalPrice() {
  return cart.reduce((s, c) => s + c.qty * products[c.id].price, 0);
}

function renderCartItems() {
  const wrap = document.getElementById("cartItems");
  if (!wrap) return;
  if (!cart.length) {
    wrap.innerHTML = `<div class="cart-empty"><span>🧺</span><p>Сабади шумо холӣ аст</p></div>`;
    return;
  }
  wrap.innerHTML = cart.map(c => {
    const p = products[c.id];
    return `<div class="cart-item">
      <div class="cart-item-icon">${productArt(c.id)}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">${p.price} сомонӣ</div>
        <div class="qty-stepper">
          <button onclick="changeQty(${c.id},-1)">−</button>
          <span>${c.qty}</span>
          <button onclick="changeQty(${c.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${c.id})">&times;</button>
    </div>`;
  }).join("");
}

function updateCartUI() {
  const countEl = document.getElementById("cartCount");
  if (countEl) countEl.textContent = cartTotalCount();
  const totalEl = document.getElementById("cartTotal");
  if (totalEl) totalEl.textContent = cartTotalPrice() + " сомонӣ";
  renderCartItems();
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("show");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("show");
}

function checkout() {
  if (!cart.length) return;
  cart = [];
  saveCart();
  closeCart();
  showToast("Фармоиши шумо бо муваффақият сабт шуд!");
}

/* ---------- Toast (умумӣ барои ҳамаи саҳифаҳо) ---------- */
function ensureToast() {
  if (!document.getElementById("toast")) {
    const t = document.createElement("div");
    t.className = "toast";
    t.id = "toast";
    document.body.appendChild(t);
  }
}
function showToast(msg) {
  ensureToast();
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ---------- Сохтани UI-и сабад дар ҳамаи саҳифаҳо ---------- */
function injectCartUI() {
  const navWrap = document.querySelector(".nav-wrap");
  if (navWrap && !document.getElementById("cartBtn")) {
    const btn = document.createElement("button");
    btn.className = "cart-btn";
    btn.id = "cartBtn";
    btn.setAttribute("aria-label", "Сабади харид");
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      <span class="cart-count" id="cartCount">0</span>`;
    btn.onclick = openCart;
    navWrap.appendChild(btn);
  }

  if (!document.getElementById("cartDrawer")) {
    const overlay = document.createElement("div");
    overlay.className = "cart-overlay";
    overlay.id = "cartOverlay";
    overlay.onclick = closeCart;
    document.body.appendChild(overlay);

    const drawer = document.createElement("aside");
    drawer.className = "cart-drawer";
    drawer.id = "cartDrawer";
    drawer.innerHTML = `
      <div class="cart-header">
        <h3>Сабади харид</h3>
        <button class="cart-close" id="cartClose">&times;</button>
      </div>
      <div class="cart-items" id="cartItems"></div>
      <div class="cart-footer">
        <div class="cart-total-row"><span>Ҳамагӣ:</span><span id="cartTotal">0 сомонӣ</span></div>
        <button class="btn cart-checkout" id="cartCheckout">Расмият додани фармоиш</button>
      </div>`;
    document.body.appendChild(drawer);
    document.getElementById("cartClose").onclick = closeCart;
    document.getElementById("cartCheckout").onclick = checkout;
  }

  ensureToast();
  updateCartUI();
}
injectCartUI();

/* ---------- Слайдер (танҳо дар index.html) ---------- */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotsWrap = document.querySelector(".dots");

if (slides.length) {
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.onclick = () => showSlide(i);
    dotsWrap.appendChild(dot);
  });

  function showSlide(i) {
    slides[currentSlide].classList.remove("active");
    document.querySelectorAll(".dot")[currentSlide].classList.remove("active");
    currentSlide = (i + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    document.querySelectorAll(".dot")[currentSlide].classList.add("active");
  }

  window.changeSlide = (dir) => showSlide(currentSlide + dir);
  setInterval(() => showSlide(currentSlide + 1), 5000);
}

/* ---------- Форми тамос ---------- */
function sendForm(e) {
  e.preventDefault();
  showToast("Паёми шумо фиристода шуд! Мо ба зудӣ ҷавоб медиҳем.");
  e.target.reset();
  return false;
}
