/* =========================================================
   ХОНАИ МАН — мантиқи сайт
   ========================================================= */

// ---------- Маълумоти хонаҳо ----------
const HOUSES = [
  { id:1, title:"Хонаи дуошёна дар Сино", region:"Сино", address:"кӯчаи Айнӣ, н. Сино", price:650000, rooms:3, area:140, floors:2, palette:0,
    desc:"Хонаи дуошёнаи оилавӣ бо ҳавлии калон ва боғи хурд. Наздик ба мактаб ва бозор." },
  { id:2, title:"Вилла бо боғи чормағз", region:"Фирдавсӣ", address:"кӯчаи Фирдавсӣ, н. Фирдавсӣ", price:1150000, rooms:5, area:260, floors:2, palette:1,
    desc:"Вилла бо дизайни муосир, гаражи дукарата ва боғи чормағзи 4 сотих." },
  { id:3, title:"Хонаи оилавӣ дар маркази шаҳр", region:"И. Сомонӣ", address:"кӯчаи Рӯдакӣ, н. И. Сомонӣ", price:980000, rooms:4, area:200, floors:2, palette:2,
    desc:"Хонаи фаровон бо тарҳи кушод, ошхонаи муосир ва террасаи болои бом." },
  { id:4, title:"Хонаи хушсохт дар Шоҳмансур", region:"Шоҳмансур", address:"кӯчаи Ҳувайдо, н. Шоҳмансур", price:720000, rooms:3, area:150, floors:1, palette:3,
    desc:"Хонаи якошёнаи васеъ, бо ҳавлии сангфарши тоза ва системаи гармкунии марказӣ." },
  { id:5, title:"Хонаи навсохти дуошёна", region:"Сино", address:"кӯчаи Дӯстӣ, н. Сино", price:1080000, rooms:4, area:230, floors:2, palette:4,
    desc:"Хонаи навсохт бо равзанаҳои панорамӣ ва ҳавлии дизайнӣ бо фаввора." },
  { id:6, title:"Хонаи оилавӣ бо истихри хурд", region:"Фирдавсӣ", address:"кӯчаи Ленин, н. Фирдавсӣ", price:1200000, rooms:5, area:280, floors:3, palette:5,
    desc:"Хонаи серошёна бо истихри рӯисатҳӣ, боргоҳи серсамол ва боғи мунтазам." },
  { id:7, title:"Хонаи фарох дар маҳаллаи ором", region:"И. Сомонӣ", address:"кӯчаи Бухоро, н. И. Сомонӣ", price:840000, rooms:3, area:170, floors:2, palette:0,
    desc:"Хонаи ором дар кӯчаи бидуни шовқин, бо утоқи меҳмонии калон ва долони равшан." },
  { id:8, title:"Хонаи наву замонавӣ", region:"Шоҳмансур", address:"кӯчаи Ҷомӣ, н. Шоҳмансур", price:930000, rooms:4, area:195, floors:2, palette:1,
    desc:"Дизайни минималистӣ бо равзанаҳои калон ва ҳавлии сояафкан." },
  { id:9, title:"Хонаи классикӣ бо гаҷкорӣ", region:"Сино", address:"кӯчаи Носир Хусрав, н. Сино", price:600000, rooms:2, area:110, floors:1, palette:2,
    desc:"Хонаи хурду шинам бо гаҷкории анъанавӣ дар токи дарвоза ва боғчаи гулу дарахт." },
];

// Палеттаи рангҳо барои иллюстратсияи ҳар хона (мувофиқи токенҳои тарҳ)
const PALETTES = [
  { sky:"#EFE3C6", hill:"#1E4A5F", house:"#F1E8D6", roof:"#5C3A21", accent:"#B8863B" },
  { sky:"#E4CE9D", hill:"#163847", house:"#FFFDF8", roof:"#6B4226", accent:"#D9B571" },
  { sky:"#F1E8D6", hill:"#2C5A70", house:"#E7DAB9", roof:"#4A3F32", accent:"#B8863B" },
  { sky:"#E7DAB9", hill:"#1E4A5F", house:"#F1E8D6", roof:"#5C3A21", accent:"#D9B571" },
  { sky:"#EFE3C6", hill:"#163847", house:"#FFFDF8", roof:"#6B4226", accent:"#B8863B" },
  { sky:"#E4CE9D", hill:"#2C5A70", house:"#E7DAB9", roof:"#4A3F32", accent:"#D9B571" },
];

const money = n => n.toLocaleString("ru-RU").replace(/,/g," ");

// ---------- Тавлиди SVG барои ҳар корт (иллюстратсияи хона) ----------
function houseSVG(p){
  const c = PALETTES[p.palette % PALETTES.length];
  return `
  <svg viewBox="0 0 300 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="320" fill="${c.sky}"/>
    <path d="M0 210 L60 160 L110 200 L160 140 L210 195 L300 165 V320 H0 Z" fill="${c.hill}" opacity="0.55"/>
    <path d="M0 250 L50 210 L100 240 L150 195 L200 235 L300 210 V320 H0 Z" fill="${c.hill}"/>
    <!-- бадани хона -->
    <rect x="70" y="200" width="160" height="100" fill="${c.house}" stroke="${c.roof}" stroke-width="3"/>
    <!-- боми токдор -->
    <path d="M60 200 L150 130 L240 200 Z" fill="${c.roof}"/>
    <!-- ток/арчаи дарвоза -->
    <path d="M130 300 V255 A20 20 0 0 1 170 255 V300 Z" fill="${c.sky}" stroke="${c.roof}" stroke-width="3"/>
    <!-- тирезаҳо -->
    <rect x="88" y="220" width="26" height="26" fill="${c.sky}" stroke="${c.roof}" stroke-width="2"/>
    <rect x="186" y="220" width="26" height="26" fill="${c.sky}" stroke="${c.roof}" stroke-width="2"/>
    <line x1="101" y1="220" x2="101" y2="246" stroke="${c.roof}" stroke-width="1.5"/>
    <line x1="88" y1="233" x2="114" y2="233" stroke="${c.roof}" stroke-width="1.5"/>
    <line x1="199" y1="220" x2="199" y2="246" stroke="${c.roof}" stroke-width="1.5"/>
    <line x1="186" y1="233" x2="212" y2="233" stroke="${c.roof}" stroke-width="1.5"/>
    <!-- ороиши гиреҳ -->
    <circle cx="150" cy="150" r="4" fill="${c.accent}"/>
    <line x1="63" y1="199" x2="237" y2="199" stroke="${c.accent}" stroke-width="2"/>
  </svg>`;
}

// ---------- Ҳолати барномa ----------
const state = { query:"", priceRange:"all", rooms:"all", region:null, sort:"default", favorites:new Set() };

const grid = document.getElementById("listingGrid");
const noResults = document.getElementById("noResults");
const resultCount = document.getElementById("resultCount");

function matchesFilters(h){
  const q = state.query.trim().toLowerCase();
  const queryMatch = !q || h.title.toLowerCase().includes(q) || h.region.toLowerCase().includes(q) || h.address.toLowerCase().includes(q);

  let priceMatch = true;
  if(state.priceRange !== "all"){
    const [lo, hi] = state.priceRange.split("-").map(n => Number(n) * 1000);
    priceMatch = h.price >= lo && h.price <= hi;
  }

  let roomsMatch = true;
  if(state.rooms !== "all"){
    roomsMatch = state.rooms === "5" ? h.rooms >= 5 : h.rooms === Number(state.rooms);
  }

  const regionMatch = !state.region || h.region === state.region;

  return queryMatch && priceMatch && roomsMatch && regionMatch;
}

function sortHouses(list){
  const sorted = [...list];
  if(state.sort === "price-asc") sorted.sort((a,b)=>a.price-b.price);
  if(state.sort === "price-desc") sorted.sort((a,b)=>b.price-a.price);
  if(state.sort === "area-desc") sorted.sort((a,b)=>b.area-a.area);
  return sorted;
}

function render(){
  const filtered = sortHouses(HOUSES.filter(matchesFilters));
  resultCount.textContent = filtered.length;
  grid.innerHTML = "";

  if(filtered.length === 0){
    noResults.hidden = false;
  } else {
    noResults.hidden = true;
    filtered.forEach(h => grid.appendChild(buildCard(h)));
  }
}

function buildCard(h){
  const card = document.createElement("article");
  card.className = "house-card";
  const isFav = state.favorites.has(h.id);
  card.innerHTML = `
    <div class="card-visual">
      ${houseSVG(h)}
      <span class="card-price-tag">${money(h.price)} с.</span>
      <button class="card-fav ${isFav ? "active" : ""}" aria-label="Илова ба хоҳишҳо" data-id="${h.id}">${isFav ? "♥" : "♡"}</button>
    </div>
    <div class="card-body">
      <h3>${h.title}</h3>
      <p class="card-address">${h.address}</p>
      <div class="card-specs">
        <span>${h.rooms} хона</span>
        <span>${h.area} м²</span>
        <span>${h.floors} ошёна</span>
      </div>
      <button class="card-cta" data-id="${h.id}">Дидани тафсилот</button>
    </div>
  `;

  card.querySelector(".card-fav").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFav(h.id, e.currentTarget);
  });
  card.querySelector(".card-cta").addEventListener("click", () => openModal(h));

  return card;
}

function toggleFav(id, btn){
  if(state.favorites.has(id)){
    state.favorites.delete(id);
    btn.textContent = "♡";
    btn.classList.remove("active");
  } else {
    state.favorites.add(id);
    btn.textContent = "♥";
    btn.classList.add("active");
  }
}

// ---------- Модал (тафсилоти хона) ----------
const overlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");

function openModal(h){
  modalContent.innerHTML = `
    <div class="card-visual" style="border-radius:14px; margin-bottom:18px;">${houseSVG(h)}</div>
    <h3>${h.title}</h3>
    <p class="modal-price">${money(h.price)} сомонӣ</p>
    <div class="modal-specs">
      <span>🛏 ${h.rooms} хона</span>
      <span>📐 ${h.area} м²</span>
      <span>🏠 ${h.floors} ошёна</span>
      <span>📍 ${h.address}</span>
    </div>
    <p class="modal-desc">${h.desc}</p>
  `;
  overlay.classList.add("open");
}
document.getElementById("modalClose").addEventListener("click", () => overlay.classList.remove("open"));
overlay.addEventListener("click", (e) => { if(e.target === overlay) overlay.classList.remove("open"); });
document.addEventListener("keydown", (e) => { if(e.key === "Escape") overlay.classList.remove("open"); });

// ---------- Ҷустуҷӯ ва филтрҳо ----------
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  state.query = document.getElementById("q").value;
  state.priceRange = document.getElementById("priceRange").value;
  state.rooms = document.getElementById("rooms").value;
  document.getElementById("listings").scrollIntoView({ behavior:"smooth" });
  render();
});

document.getElementById("sortSelect").addEventListener("change", (e) => {
  state.sort = e.target.value;
  render();
});

// ---------- Чипҳои минтақа ----------
document.querySelectorAll(".region-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const region = chip.dataset.region;
    const isActive = chip.classList.contains("active");
    document.querySelectorAll(".region-chip").forEach(c => c.classList.remove("active"));
    if(isActive){
      state.region = null;
    } else {
      chip.classList.add("active");
      state.region = region;
    }
    document.getElementById("listings").scrollIntoView({ behavior:"smooth" });
    render();
  });
});

// ---------- Менюи мобилӣ ----------
const navToggle = document.getElementById("navToggle");
const mainNav = document.querySelector(".main-nav");
navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

// ---------- Ҳисобкунаки ипотека ----------
const calcPrice = document.getElementById("calcPrice");
const calcDown = document.getElementById("calcDown");
const calcYears = document.getElementById("calcYears");
const calcRate = document.getElementById("calcRate");

function updateCalculator(){
  const price = Number(calcPrice.value);
  const downPct = Number(calcDown.value);
  const years = Number(calcYears.value);
  const ratePct = Number(calcRate.value);

  document.getElementById("calcPriceOut").textContent = money(price) + " с.";
  document.getElementById("calcDownOut").textContent = downPct + "%";
  document.getElementById("calcYearsOut").textContent = years + " сол";
  document.getElementById("calcRateOut").textContent = ratePct + "%";

  const downPayment = price * (downPct / 100);
  const loan = price - downPayment;
  const monthlyRate = (ratePct / 100) / 12;
  const numPayments = years * 12;

  let monthly;
  if(monthlyRate === 0){
    monthly = loan / numPayments;
  } else {
    monthly = loan * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  document.getElementById("loanAmountOut").textContent = money(Math.round(loan)) + " сомонӣ";
  document.getElementById("monthlyOut").textContent = money(Math.round(monthly)) + " сомонӣ";
}

[calcPrice, calcDown, calcYears, calcRate].forEach(input => input.addEventListener("input", updateCalculator));

// ---------- Оғоз ----------
render();
updateCalculator();
