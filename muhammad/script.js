// ---------- Data ----------
// Photos are hotlinked from Wikimedia Commons (freely licensed, CC BY / CC BY-SA).
// Each entry links back to its source page for full attribution.
const animals = [
  {
    plate: "Варақи №01",
    name: "Шер",
    latin: "Panthera leo",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Lion%20d%27Afrique.jpg?width=900",
    credit: "Clément Bardot · CC BY-SA 4.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Lion_d'Afrique.jpg",
    desc: "Шоҳи саванна, дар гурӯҳ (порид) зиндагӣ мекунад.",
    habitat: "Саванна",
    diet: "Гӯштхӯр",
    length: "1.8–2.1 м",
    weight: "150–250 кг",
    full: "Шер яке аз паллагони калонест, ки бар хилофи дигар паллагон ба таври гурӯҳӣ — дар \"порид\"-ҳо — зиндагӣ мекунад. Нарина бо ёли пушташ аз модина фарқ мекунад. Онҳо шикорро асосан бо ҳамкории якчанд модина анҷом медиҳанд ва аксари вақти шабонарӯзиро дар истироҳат мегузаронанд."
  },
  {
    plate: "Варақи №02",
    name: "Фил",
    latin: "Loxodonta africana",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/African%20Elephant%20walking.JPG?width=900",
    credit: "Wikimedia Commons · CC BY-SA 3.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:African_Elephant_walking.JPG",
    desc: "Бузургтарин ҳайвони хушкӣ бо хартуми бисёркора.",
    habitat: "Дашт ва ҷангал",
    diet: "Гиёҳхӯр",
    length: "5–7.5 м",
    weight: "4000–7000 кг",
    full: "Фили африқоӣ бузургтарин ҳайвони хушкии сайёра аст. Хартумаш беш аз 40 ҳазор мушак дорад ва барои нӯшидани об, гирифтани хӯрок ва ҳатто саломдиҳӣ ба ҳамдигар истифода мешавад. Гӯшҳои калонаш барои паст кардани ҳарорати бадан кӯмак мекунанд."
  },
  {
    plate: "Варақи №03",
    name: "Паланг",
    latin: "Panthera tigris",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Bengal%20Tiger.jpg?width=900",
    credit: "Wikimedia Commons · CC BY 2.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Bengal_Tiger.jpg",
    desc: "Танҳогард ва ботаҷрибатарин шикорчии ҷангал.",
    habitat: "Ҷангали зич",
    diet: "Гӯштхӯр",
    length: "2.5–3.3 м",
    weight: "90–310 кг",
    full: "Паланг калонтарин намуди гурбасон дар ҷаҳон аст. Хатҳои сиёҳаш барои ҳар як паланг беназиранд — мисли нақши ангушт дар одам. Онҳо танҳогард буда, қаламрави васеъро назорат мекунанд ва шикорро тавассути ҳамла аз камин анҷом медиҳанд."
  },
  {
    plate: "Варақи №04",
    name: "Зироф",
    latin: "Giraffa camelopardalis",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Giraffe.JPG?width=900",
    credit: "Wikimedia Commons · featured picture",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Giraffe.JPG",
    desc: "Баландтарин ҳайвони хушкӣ бо гардани дарозаш.",
    habitat: "Саванна",
    diet: "Гиёҳхӯр",
    length: "5.2–5.9 м (қад)",
    weight: "800–1900 кг",
    full: "Зироф баландтарин ҳайвони хушкии рӯи замин аст ва гардани дарозаш аз ҳамон 7 устухони гардан иборат аст — мисли одам, вале ҳар кадоме хеле дарозтар. Забони кабудаш то 45 сантиметр дарозӣ дорад ва барои кандани баргҳо аз шохаҳои хордор истифода мешавад."
  },
  {
    plate: "Варақи №05",
    name: "Панда",
    latin: "Ailuropoda melanoleuca",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Giant%20Panda%20in%20Beijing%20Zoo%201.JPG?width=900",
    credit: "Wikimedia Commons · CC BY-SA 3.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Giant_Panda_in_Beijing_Zoo_1.JPG",
    desc: "Хирси сиёҳу сафед, ки танҳо бамбукро мехӯрад.",
    habitat: "Ҷангали бамбук",
    diet: "Асосан бамбук",
    length: "1.2–1.9 м",
    weight: "70–125 кг",
    full: "Панда рамзи ҳифзи табиат дар ҷаҳон аст. Ба гӯшти хӯрдан қобилият дорад, вале 99% хӯроки худро бамбук ташкил медиҳад — то 12 соат дар як рӯз хӯрок мехӯрад. Панчаи барзиёдааш ба монанди ангушти шасти иловагӣ барои нигоҳ доштани сохаи бамбук хидмат мекунад."
  },
  {
    plate: "Варақи №06",
    name: "Дельфин",
    latin: "Delphinus delphis",
    photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Dolphin%20leap.JPG?width=900",
    credit: "Wikimedia Commons · CC BY-SA 3.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Dolphin_leap.JPG",
    desc: "Ширхӯри баҳрӣ бо ҳуши баланд ва садоҳои мураккаб.",
    habitat: "Уқёнус ва баҳр",
    diet: "Моҳӣ ва наҳанг",
    length: "2–4 м",
    weight: "150–200 кг",
    full: "Дельфинҳо аз бомутаринтарин ҳайвонотанд: онҳо якдигарро бо номҳои садоии беназир (ба монанди ном) мешиносанд, дар гурӯҳ (под) шикор мекунанд ва тавассути эхолокатсия — фиристодани садо ва гӯш кардани инъикоси он — дар торикии об роҳ меёбанд."
  }
];

// ---------- Render catalog ----------
const catalog = document.getElementById('catalog');

animals.forEach((a, i) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.style.animationDelay = `${i * 0.08}s`;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.innerHTML = `
    <div class="card-photo-wrap">
      <img class="card-photo" src="${a.photo}" alt="${a.name} — ${a.latin}" loading="lazy">
      <span class="plate-tag on-photo">${a.plate}</span>
    </div>
    <div class="card-body">
      <h3 class="card-name">${a.name}</h3>
      <span class="card-latin">${a.latin}</span>
      <p class="card-desc">${a.desc}</p>
      <div class="card-habitat"><span>${a.habitat}</span><span>${a.diet}</span></div>
    </div>
  `;
  card.addEventListener('click', () => openDetail(a));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(a); }
  });
  catalog.appendChild(card);
});

// ---------- Detail modal ----------
const detailBackdrop = document.getElementById('detailBackdrop');
const detailContent = document.getElementById('detailContent');
const closeDetailBtn = document.getElementById('closeDetail');

function openDetail(a){
  detailContent.innerHTML = `
    <div class="detail-photo-wrap">
      <img class="detail-photo" src="${a.photo}" alt="${a.name} — ${a.latin}">
      <span class="detail-plate on-photo">${a.plate}</span>
    </div>
    <div class="detail-text">
      <h2 class="detail-name">${a.name}</h2>
      <span class="detail-latin">${a.latin}</span>
      <p class="detail-body">${a.full}</p>
      <div class="detail-grid">
        <div><span>Зист</span>${a.habitat}</div>
        <div><span>Хӯрок</span>${a.diet}</div>
        <div><span>Дарозӣ</span>${a.length}</div>
        <div><span>Вазн</span>${a.weight}</div>
      </div>
      <a class="detail-credit" href="${a.creditUrl}" target="_blank" rel="noopener">Акс: ${a.credit}</a>
    </div>
  `;
  detailBackdrop.classList.add('open');
  closeDetailBtn.focus();
}
function closeDetail(){ detailBackdrop.classList.remove('open'); }
closeDetailBtn.addEventListener('click', closeDetail);
detailBackdrop.addEventListener('click', e => { if (e.target === detailBackdrop) closeDetail(); });

// ---------- Register modal ----------
const registerBackdrop = document.getElementById('registerBackdrop');
const openRegisterBtn = document.getElementById('openRegister');
const closeRegisterBtn = document.getElementById('closeRegister');
const registerForm = document.getElementById('registerForm');
const registerSuccess = document.getElementById('registerSuccess');

function openRegister(){
  registerBackdrop.classList.add('open');
  registerForm.style.display = 'flex';
  registerSuccess.classList.remove('show');
}
function closeRegister(){ registerBackdrop.classList.remove('open'); }

openRegisterBtn.addEventListener('click', openRegister);
closeRegisterBtn.addEventListener('click', closeRegister);
registerBackdrop.addEventListener('click', e => { if (e.target === registerBackdrop) closeRegister(); });

registerForm.addEventListener('submit', e => {
  e.preventDefault();
  registerForm.style.display = 'none';
  registerSuccess.classList.add('show');
});

// ---------- Escape key closes any open modal ----------
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeDetail(); closeRegister(); }
});

// ---------- Invite visitors to register after a short look-around ----------
let registerNudgeShown = false;
setTimeout(() => {
  if (!registerNudgeShown && !registerBackdrop.classList.contains('open') && !detailBackdrop.classList.contains('open')) {
    registerNudgeShown = true;
    openRegister();
  }
}, 12000);
