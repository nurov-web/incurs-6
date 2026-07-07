/* ============ TRANSLATIONS ============ */
const i18n = {
  ru: {
    nav_home:"Главная", nav_catalog:"Каталог", nav_promo:"Акции", nav_contacts:"Контакты",
    btn_login:"Войти", btn_register:"Регистрация",
    s1_eyebrow:"НОВАЯ КОЛЛЕКЦИЯ 2026", s1_title:'ШТОРЫ<br><span>УЮТ</span> В ДОМЕ',
    s1_desc:"Плотные и лёгкие ткани для вашего интерьера. Комфорт и стиль в каждой комнате.", s1_cta:"Смотреть коллекцию",
    s2_eyebrow:"ЛЕГЕНДАРНАЯ КЛАССИКА", s2_title:'БЛЭКАУТ<br><span>НАВСЕГДА</span>',
    s2_desc:"Плотные шторы блэкаут для спальни. Полная защита от света в любое время суток.", s2_cta:"Купить сейчас",
    s3_eyebrow:"НОВИНКА · ТЮЛЬ", s3_title:'ЛЁГКОСТЬ<br><span>И</span> СВЕТ',
    s3_desc:"Тюль и органза для гостиной. Мягкий свет и воздушность в вашем доме.", s3_cta:"В каталог",
    curr:"смн.",
    cat_eyebrow:"КАТАЛОГ", cat_title:"Шторы и тюль для дома",
    cat_sub:"Качественные ткани для штор. Оплата в сомони, доставка по всей стране.",
    chip_all:"Все", chip_men:"Блэкаут", chip_women:"Тюль", chip_run:"Классика", chip_kids:"Детские", chip_clothing:"Аксессуары",
    btn_more:"Показать ещё",
    p1_k:"СКИДКА 30%", p1_t:"Осенняя коллекция штор", p2_k:"НОВИНКА", p2_t:"Коллекция тюля",
    gal_eyebrow:"СТИЛЬ В ДЕЛЕ", gal_title:"Ещё больше кадров",
    foot_desc:"Официальный интернет-магазин штор и тюля. Оплата в сомони, честные цены, быстрая доставка.",
    foot_email_ph:"Ваш email", foot_sub:"OK",
    foot_shop:"Магазин", foot_l1:"Блэкаут", foot_l2:"Тюль", foot_l3:"Детям", foot_l4:"Аксессуары",
    foot_help:"Помощь", foot_l5:"Доставка", foot_l6:"Возврат", foot_l7:"Размерная сетка", foot_l8:"FAQ",
    foot_contacts:"Контакты", foot_addr:"г. Худжанд, Таджикистан",
    foot_rights:"© 2026 PARDA STORE. Все права защищены.", foot_note:"Демо-сайт создан в учебных целях.",
    login_title:"С возвращением", login_sub:"Войдите, чтобы продолжить покупки",
    lbl_email:"Email", lbl_pass:"Пароль", ph_email:"you@example.com", ph_pass:"••••••••",
    btn_login2:"Войти", login_noacc:"Нет аккаунта?", btn_register2:"Зарегистрироваться",
    reg_title:"Создать аккаунт", reg_sub:"Присоединяйтесь и получайте персональные скидки",
    lbl_name:"Имя", ph_name:"Ваше имя", lbl_phone:"Телефон", ph_phone:"+992 00 000 00 00",
    btn_register3:"Зарегистрироваться", reg_hasacc:"Уже есть аккаунт?", btn_login3:"Войти",
    add:"В корзину", added:"Добавлено", newLabel:"NEW", saleLabel:"SALE",
    marquee:"БЕСПЛАТНАЯ ДОСТАВКА ОТ 500 СМН • КАЧЕСТВЕННЫЕ ТКАНИ • ОПЛАТА В СОМОНИ • ГАРАНТИЯ КАЧЕСТВА",
    cart_title:"Корзина", cart_empty:"Ваша корзина пуста", cart_total:"Итого", cart_checkout:"Оформить заказ",
    checkout_title:"Оформление заказа", checkout_sub:"Заполните данные для доставки и оплаты",
    lbl_addr:"Адрес доставки", ph_addr:"Город, улица, дом",
    lbl_pay:"Способ оплаты", pay_card:"Карта (Корти Миллӣ)", pay_cash:"Наличными курьеру",
    lbl_card:"Номер карты", ph_card:"0000 0000 0000 0000",
    checkout_total:"К оплате", checkout_confirm:"Подтвердить заказ",
    success_title:"Заказ оформлен!", success_sub:"Спасибо за покупку. Мы свяжемся с вами в ближайшее время для подтверждения.", success_btn:"Отлично",
    toast_added:"Товар добавлен в корзину", toast_removed:"Товар удалён", toast_fav_add:"Добавлено в избранное", toast_fav_rm:"Убрано из избранного",
    toast_sub:"Спасибо за подписку!", toast_cart_empty:"Корзина пуста — добавьте товар"
  },
  tj: {
    nav_home:"Саҳифаи асосӣ", nav_catalog:"Каталог", nav_promo:"Аксияҳо", nav_contacts:"Тамос",
    btn_login:"Воридшавӣ", btn_register:"Бақайдгирӣ",
    s1_eyebrow:"КОЛЛЕКСИЯИ НАВИ 2026", s1_title:'ПАРДАҲО<br><span>РОҲАТӢ</span> ДАР ХОНА',
    s1_desc:"Матоъҳои ғафс ва сабук барои интерери шумо. Роҳатӣ ва услуб дар ҳар хона.", s1_cta:"Дидани коллексия",
    s2_eyebrow:"КЛАССИКАИ АФСОНАВӢ", s2_title:'БЛЭКАУТ<br><span>ТО АБАД</span>',
    s2_desc:"Пардаҳои ғафси блэкаут барои хонаи хоб. Ҳифзи пурраи рӯшноӣ дар ҳар вақт.", s2_cta:"Ҳозир харидан",
    s3_eyebrow:"НАВ · ТЮЛ", s3_title:'САБУКӢ<br><span>ВА</span> НУР',
    s3_desc:"Тюл ва органза барои меҳмонхона. Нури мулоим ва сабукӣ дар хонаи шумо.", s3_cta:"Ба каталог",
    curr:"сомонӣ",
    cat_eyebrow:"КАТАЛОГ", cat_title:"Пардаҳо ва тюл барои хона",
    cat_sub:"Матоъҳои босифат барои парда. Пардохт бо сомонӣ, боркашонӣ дар тамоми кишвар.",
    chip_all:"Ҳама", chip_men:"Блэкаут", chip_women:"Тюл", chip_run:"Классикӣ", chip_kids:"Кӯдакона", chip_clothing:"Аксессуар",
    btn_more:"Боз нишон додан",
    p1_k:"ТАХФИФИ 30%", p1_t:"Коллексияи тирамоҳии парда", p2_k:"НАВ", p2_t:"Коллексияи тюл",
    gal_eyebrow:"УСЛУБ ДАР АМАЛ", gal_title:"Боз ҳам расмҳо",
    foot_desc:"Мағозаи расмии онлайни парда ва тюл. Пардохт бо сомонӣ, нархҳои одилона, боркашонии босуръат.",
    foot_email_ph:"Email-и шумо", foot_sub:"OK",
    foot_shop:"Мағоза", foot_l1:"Блэкаут", foot_l2:"Тюл", foot_l3:"Барои кӯдакон", foot_l4:"Аксессуар",
    foot_help:"Кӯмак", foot_l5:"Боркашонӣ", foot_l6:"Баргардонидан", foot_l7:"Ҷадвали андоза", foot_l8:"Саволҳо",
    foot_contacts:"Тамос", foot_addr:"ш. Хуҷанд, Тоҷикистон",
    foot_rights:"© 2026 PARDA STORE. Ҳама ҳуқуқҳо ҳифз шудаанд.", foot_note:"Сайти демонстратсионӣ бо мақсади таълимӣ сохта шудааст.",
    login_title:"Хуш омадед", login_sub:"Барои идомаи харид ворид шавед",
    lbl_email:"Email", lbl_pass:"Парол", ph_email:"you@example.com", ph_pass:"••••••••",
    btn_login2:"Воридшавӣ", login_noacc:"Ҳисоб надоред?", btn_register2:"Бақайд гиред",
    reg_title:"Ҳисоб кушоед", reg_sub:"Ҳамроҳ шавед ва тахфифҳои шахсӣ гиред",
    lbl_name:"Ном", ph_name:"Номи шумо", lbl_phone:"Телефон", ph_phone:"+992 00 000 00 00",
    btn_register3:"Бақайд гиред", reg_hasacc:"Ҳисоб доред?", btn_login3:"Воридшавӣ",
    add:"Ба сабад", added:"Илова шуд", newLabel:"НАВ", saleLabel:"ТАХФИФ",
    marquee:"БОРКАШОНИИ РОЙГОН АЗ 500 СОМОНӢ • МАТОЪИ БОСИФАТ • ПАРДОХТ БО СОМОНӢ • КАФОЛАТИ СИФАТ",
    cart_title:"Сабад", cart_empty:"Сабади шумо холӣ аст", cart_total:"Ҳамагӣ", cart_checkout:"Расмикунонии фармоиш",
    checkout_title:"Расмикунонии фармоиш", checkout_sub:"Маълумоти боркашонӣ ва пардохтро пур кунед",
    lbl_addr:"Суроғаи боркашонӣ", ph_addr:"Шаҳр, кӯча, хона",
    lbl_pay:"Тарзи пардохт", pay_card:"Корт (Корти Миллӣ)", pay_cash:"Нақд ба курер",
    lbl_card:"Рақами корт", ph_card:"0000 0000 0000 0000",
    checkout_total:"Барои пардохт", checkout_confirm:"Тасдиқи фармоиш",
    success_title:"Фармоиш қабул шуд!", success_sub:"Раҳмат барои харид. Мо ба зудӣ бо шумо тамос мегирем.", success_btn:"Хуб",
    toast_added:"Маҳсулот ба сабад илова шуд", toast_removed:"Маҳсулот хориҷ шуд", toast_fav_add:"Ба дилхоҳ илова шуд", toast_fav_rm:"Аз дилхоҳ хориҷ шуд",
    toast_sub:"Ташаккур барои обуна!", toast_cart_empty:"Сабад холӣ — маҳсулот илова кунед"
  }
};
let currentLang = 'ru';

/* ============ PRODUCTS (curtains + tulle) — each with its own distinct photo ============ */
const products = [
  {name:{ru:"Блэкаут Классик",tj:"Блэкаут Классик"}, cat:"blackout", catLabel:{ru:"Блэкаут · Спальня",tj:"Блэкаут · Хонаи хоб"}, price:899, badge:"sale", img:"https://images.unsplash.com/photo-1508778552286-12d4c6007799?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Тюль Воздушный",tj:"Тюли Ҳавоӣ"}, cat:"tulle", catLabel:{ru:"Тюль · Гостиная",tj:"Тюл · Меҳмонхона"}, price:749, badge:"new", img:"https://images.unsplash.com/photo-1528822855841-e8bf3134cdc9?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Лён Натуральный",tj:"Катон Табиӣ"}, cat:"classic", catLabel:{ru:"Классика",tj:"Классикӣ"}, price:1050, badge:null, img:"https://images.unsplash.com/photo-1628428988931-14bc33099075?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Бархат Люкс",tj:"Бахмал Люкс"}, cat:"blackout", catLabel:{ru:"Блэкаут · Премиум",tj:"Блэкаут · Премиум"}, price:1290, badge:"new", img:"https://images.unsplash.com/photo-1775058800623-90ae2ad7cdcf?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Органза Лайт",tj:"Органза Лайт"}, cat:"tulle", catLabel:{ru:"Тюль",tj:"Тюл"}, price:620, badge:null, img:"https://images.unsplash.com/photo-1570427224050-b080ad19e3c4?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Прованс Стиль",tj:"Прованс Услуб"}, cat:"classic", catLabel:{ru:"Классика · Кухня",tj:"Классикӣ · Ошхона"}, price:680, badge:"sale", img:"https://images.unsplash.com/photo-1616434602533-32fcefcc3621?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Рулонные Шторы",tj:"Пардаи Ролетӣ"}, cat:"classic", catLabel:{ru:"Классика · Офис",tj:"Классикӣ · Идора"}, price:890, badge:null, img:"https://images.unsplash.com/photo-1673778577496-27df3af6a61c?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Детские Тучки",tj:"Абрҳои Кӯдакона"}, cat:"kids", catLabel:{ru:"Детские",tj:"Кӯдакона"}, price:420, badge:"new", img:"https://images.unsplash.com/photo-1633334241794-a5473104c1df?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Карниз Металлик",tj:"Карнизи Металлӣ"}, cat:"accessories", catLabel:{ru:"Аксессуары · Карниз",tj:"Аксессуар · Карниз"}, price:320, badge:"new", img:"https://images.unsplash.com/photo-1771039622260-32eaf568a843?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Подхваты Шнур",tj:"Ресмонҳои Гиреҳдор"}, cat:"accessories", catLabel:{ru:"Аксессуары",tj:"Аксессуар"}, price:120, badge:null, img:"https://images.unsplash.com/photo-1513111168953-34fc252c9279?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Рим Штора",tj:"Пардаи Рим"}, cat:"classic", catLabel:{ru:"Классика · Римская",tj:"Классикӣ · Рим"}, price:790, badge:"sale", img:"https://images.unsplash.com/photo-1671328920741-ea6f4233dc07?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Блэкаут Софт",tj:"Блэкаути Нарм"}, cat:"blackout", catLabel:{ru:"Блэкаут",tj:"Блэкаут"}, price:960, badge:null, img:"https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Тюль Кружево",tj:"Тюли Дантелла"}, cat:"tulle", catLabel:{ru:"Тюль · Кружево",tj:"Тюл · Дантелла"}, price:540, badge:null, img:"https://images.unsplash.com/photo-1646125634271-be91df6ec0de?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Детские Звёзды",tj:"Ситораҳои Кӯдакона"}, cat:"kids", catLabel:{ru:"Детская · Звёзды",tj:"Кӯдакона · Ситора"}, price:390, badge:"sale", img:"https://images.unsplash.com/photo-1519035350952-38d18a3848cf?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Кольца для карниза",tj:"Ҳалқаҳои Карниз"}, cat:"accessories", catLabel:{ru:"Аксессуары · Кольца",tj:"Аксессуар · Ҳалқа"}, price:95, badge:null, img:"https://images.unsplash.com/photo-1578337834535-357ad7dccdfd?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Блэкаут Графит",tj:"Блэкаути Графит"}, cat:"blackout", catLabel:{ru:"Блэкаут · Тёмный",tj:"Блэкаут · Торик"}, price:1020, badge:"new", img:"https://images.unsplash.com/photo-1775058800676-bff513fc73eb?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Тюль Градиент",tj:"Тюли Градиент"}, cat:"tulle", catLabel:{ru:"Тюль",tj:"Тюл"}, price:670, badge:null, img:"https://images.unsplash.com/photo-1615998827996-6b9383d5eba2?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Лён Крафт",tj:"Катони Крафт"}, cat:"classic", catLabel:{ru:"Классика · Лён",tj:"Классикӣ · Катон"}, price:930, badge:null, img:"https://images.unsplash.com/photo-1650682933468-50feb46bae4b?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Жалюзи Горизонт",tj:"Жалюзии Уфуқӣ"}, cat:"classic", catLabel:{ru:"Классика · Жалюзи",tj:"Классикӣ · Жалюзи"}, price:770, badge:null, img:"https://images.unsplash.com/photo-1674951780257-58bb3b7038e5?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Держатели Магнит",tj:"Магнитҳои Нигоҳдоранда"}, cat:"accessories", catLabel:{ru:"Аксессуары",tj:"Аксессуар"}, price:80, badge:"new", img:"https://images.unsplash.com/photo-1674809959204-4619c2c1c58d?w=500&q=80&auto=format&fit=crop"},
  {name:{ru:"Блэкаут Морской",tj:"Блэкаути Баҳрӣ"}, cat:"blackout", catLabel:{ru:"Блэкаут · Синий",tj:"Блэкаут · Кабуд"}, price:1010, badge:null, img:"https://images.unsplash.com/photo-1473252812967-d565c3607e28?w=500&q=80&auto=format&fit=crop"},
];

/* ============ STATE ============ */
let currentFilter = 'all';
let visibleCount = 8;
const STEP = 4;
let cart = [];      // {idx, qty}
let favorites = new Set();
let selectedPay = 'card';

/* ============ RENDER PRODUCTS ============ */
function renderProducts(){
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  const filtered = products
    .map((p, idx) => ({...p, idx}))
    .filter(p => currentFilter === 'all' || p.cat === currentFilter);

  filtered.slice(0, visibleCount).forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    const badgeHtml = p.badge ? `<div class="card-badge">${p.badge==='new' ? i18n[currentLang].newLabel : i18n[currentLang].saleLabel}</div>` : '';
    const isFav = favorites.has(p.idx);
    const inCart = cart.find(c=>c.idx===p.idx);
    card.innerHTML = `
      ${badgeHtml}
      <button class="card-fav ${isFav?'active':''}" data-idx="${p.idx}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
      </button>
      <div class="card-media"><img src="${p.img}" alt="${p.name[currentLang]}"></div>
      <div class="card-body">
        <div class="card-cat">${p.catLabel[currentLang]}</div>
        <div class="card-name">${p.name[currentLang]}</div>
        <div class="card-foot">
          <div class="card-price mono">${p.price} ${i18n[currentLang].curr}</div>
          <button class="add-btn ${inCart?'added':''}" data-idx="${p.idx}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
          </button>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  document.getElementById('showMoreBtn').style.display = visibleCount >= filtered.length ? 'none' : 'inline-flex';

  document.querySelectorAll('.add-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> toggleCart(parseInt(btn.dataset.idx)));
  });
  document.querySelectorAll('.card-fav').forEach(btn=>{
    btn.addEventListener('click', ()=> toggleFav(parseInt(btn.dataset.idx)));
  });
}

/* ============ CART LOGIC ============ */
function toggleCart(idx){
  const existing = cart.find(c=>c.idx===idx);
  if(existing){
    cart = cart.filter(c=>c.idx!==idx);
    showToast(i18n[currentLang].toast_removed);
  } else {
    cart.push({idx, qty:1});
    showToast(i18n[currentLang].toast_added);
  }
  renderProducts();
  updateCartUI();
}
function changeQty(idx, delta){
  const item = cart.find(c=>c.idx===idx);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){
    cart = cart.filter(c=>c.idx!==idx);
    renderProducts();
  }
  updateCartUI();
}
function removeFromCart(idx){
  cart = cart.filter(c=>c.idx!==idx);
  renderProducts();
  updateCartUI();
}
function cartTotal(){
  return cart.reduce((sum,c)=> sum + products[c.idx].price * c.qty, 0);
}
function updateCartUI(){
  document.getElementById('cartCount').textContent = cart.reduce((s,c)=>s+c.qty,0);
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footEl = document.getElementById('cartFoot');
  itemsEl.innerHTML = '';
  if(cart.length === 0){
    emptyEl.style.display = 'block';
    footEl.style.display = 'none';
  } else {
    emptyEl.style.display = 'none';
    footEl.style.display = 'block';
    cart.forEach(c=>{
      const p = products[c.idx];
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <img src="${p.img}" alt="${p.name[currentLang]}">
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name[currentLang]}</div>
          <div class="cart-item-price mono">${p.price} ${i18n[currentLang].curr}</div>
          <div class="cart-item-row">
            <div class="qty-ctrl">
              <button data-act="minus" data-idx="${c.idx}">−</button>
              <span>${c.qty}</span>
              <button data-act="plus" data-idx="${c.idx}">+</button>
            </div>
            <button class="remove-item" data-idx="${c.idx}">✕</button>
          </div>
        </div>`;
      itemsEl.appendChild(row);
    });
    document.getElementById('cartTotal').textContent = `${cartTotal()} ${i18n[currentLang].curr}`;
  }
  itemsEl.querySelectorAll('[data-act="plus"]').forEach(b=>b.addEventListener('click', ()=>changeQty(parseInt(b.dataset.idx),1)));
  itemsEl.querySelectorAll('[data-act="minus"]').forEach(b=>b.addEventListener('click', ()=>changeQty(parseInt(b.dataset.idx),-1)));
  itemsEl.querySelectorAll('.remove-item').forEach(b=>b.addEventListener('click', ()=>removeFromCart(parseInt(b.dataset.idx))));
}

/* ============ FAVORITES ============ */
function toggleFav(idx){
  if(favorites.has(idx)){
    favorites.delete(idx);
    showToast(i18n[currentLang].toast_fav_rm);
  } else {
    favorites.add(idx);
    showToast(i18n[currentLang].toast_fav_add);
  }
  document.getElementById('favCount').textContent = favorites.size;
  renderProducts();
}

/* ============ TOAST ============ */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 2200);
}

/* ============ LANGUAGE SWITCH ============ */
function applyLang(lang){
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key = el.getAttribute('data-i18n-ph');
    if(i18n[lang][key] !== undefined) el.setAttribute('placeholder', i18n[lang][key]);
  });
  document.querySelectorAll('.lang-switch button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  buildMarquee();
  renderProducts();
  updateCartUI();
  updateCheckoutTotal();
}
document.querySelectorAll('.lang-switch button').forEach(b=>{
  b.addEventListener('click', ()=>applyLang(b.dataset.lang));
});

function buildMarquee(){
  const track = document.getElementById('marqueeTrack');
  const text = i18n[currentLang].marquee;
  track.innerHTML = `<span>${text}</span>`.repeat(6);
}

/* ============ HERO SLIDER ============ */
const slidesEl = document.getElementById('slides');
const slideCount = document.querySelectorAll('.slide').length;
let current = 0;
let autoplayTimer = null;

const dotsEl = document.getElementById('heroDots');
for(let i=0;i<slideCount;i++){
  const d = document.createElement('button');
  if(i===0) d.classList.add('active');
  d.addEventListener('click', ()=>{ goTo(i); restartAutoplay(); });
  dotsEl.appendChild(d);
}

function goTo(i){
  current = (i + slideCount) % slideCount;
  slidesEl.style.transform = `translateX(-${current*100}%)`;
  document.querySelectorAll('.hero-dots button').forEach((d,idx)=>d.classList.toggle('active', idx===current));
}

function startAutoplay(){
  autoplayTimer = setInterval(()=> goTo(current+1), 5500);
}
function restartAutoplay(){
  clearInterval(autoplayTimer);
  startAutoplay();
}

document.getElementById('nextSlide').addEventListener('click', ()=>{ goTo(current+1); restartAutoplay(); });
document.getElementById('prevSlide').addEventListener('click', ()=>{ goTo(current-1); restartAutoplay(); });
startAutoplay();

document.querySelectorAll('.slide-cta').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.getElementById('catalog').scrollIntoView({behavior:'smooth'});
  });
});

/* ============ MOBILE NAV ============ */
document.getElementById('burgerBtn').addEventListener('click', ()=>{
  document.getElementById('mobileNav').classList.toggle('open');
});
document.querySelectorAll('#mobileNav a').forEach(a=>{
  a.addEventListener('click', ()=> document.getElementById('mobileNav').classList.remove('open'));
});

/* ============ MODAL HELPERS ============ */
function openModal(id){ document.getElementById(id).classList.add('open'); }
function closeModal(id){ document.getElementById(id).classList.remove('open'); }

const loginOverlay = document.getElementById('loginOverlay');
const registerOverlay = document.getElementById('registerOverlay');
const cartOverlay = document.getElementById('cartOverlay');
const checkoutOverlay = document.getElementById('checkoutOverlay');
const successOverlay = document.getElementById('successOverlay');

document.getElementById('openLogin').addEventListener('click', ()=>openModal('loginOverlay'));
document.getElementById('openRegister').addEventListener('click', ()=>openModal('registerOverlay'));
document.getElementById('closeLogin').addEventListener('click', ()=>closeModal('loginOverlay'));
document.getElementById('closeRegister').addEventListener('click', ()=>closeModal('registerOverlay'));
document.getElementById('toRegister').addEventListener('click', ()=>{closeModal('loginOverlay');openModal('registerOverlay');});
document.getElementById('toLogin').addEventListener('click', ()=>{closeModal('registerOverlay');openModal('loginOverlay');});

document.getElementById('cartBtn').addEventListener('click', ()=>{ updateCartUI(); openModal('cartOverlay'); });
document.getElementById('closeCart').addEventListener('click', ()=>closeModal('cartOverlay'));

document.getElementById('toCheckout').addEventListener('click', ()=>{
  if(cart.length === 0){ showToast(i18n[currentLang].toast_cart_empty); return; }
  closeModal('cartOverlay');
  updateCheckoutTotal();
  openModal('checkoutOverlay');
});
document.getElementById('closeCheckout').addEventListener('click', ()=>closeModal('checkoutOverlay'));
document.getElementById('closeSuccess').addEventListener('click', ()=>closeModal('successOverlay'));
document.getElementById('successClose').addEventListener('click', ()=>closeModal('successOverlay'));

[loginOverlay, registerOverlay, cartOverlay, checkoutOverlay, successOverlay].forEach(ov=>{
  ov.addEventListener('click', (e)=>{ if(e.target === ov) ov.classList.remove('open'); });
});

function updateCheckoutTotal(){
  const el = document.getElementById('checkoutTotal');
  if(el) el.textContent = `${cartTotal()} ${i18n[currentLang].curr}`;
}

/* ============ PAYMENT OPTIONS ============ */
document.querySelectorAll('.pay-opt').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.pay-opt').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    selectedPay = btn.dataset.pay;
    document.getElementById('cardFields').classList.toggle('show', selectedPay === 'card');
  });
});
document.getElementById('cardFields').classList.add('show');

/* ============ FORMS ============ */
document.getElementById('loginForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  closeModal('loginOverlay');
  showToast(currentLang==='ru' ? 'Вы успешно вошли' : 'Шумо бомуваффақият ворид шудед');
});
document.getElementById('registerForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  closeModal('registerOverlay');
  showToast(currentLang==='ru' ? 'Аккаунт создан' : 'Ҳисоб сохта шуд');
});
document.getElementById('checkoutForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  closeModal('checkoutOverlay');
  cart = [];
  updateCartUI();
  renderProducts();
  openModal('successOverlay');
});
document.getElementById('newsletterForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  e.target.reset();
  showToast(i18n[currentLang].toast_sub);
});

/* ============ CHIPS (category filter) ============ */
document.querySelectorAll('.chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.cat;
    visibleCount = 8;
    renderProducts();
  });
});

/* footer links jump to catalog + filter */
document.querySelectorAll('.foot-links a[data-cat]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const cat = a.dataset.cat;
    document.querySelectorAll('.chip').forEach(c=>{
      c.classList.toggle('active', c.dataset.cat === cat);
    });
    currentFilter = cat;
    visibleCount = 8;
    renderProducts();
    document.getElementById('catalog').scrollIntoView({behavior:'smooth'});
  });
});

/* ============ SHOW MORE ============ */
document.getElementById('showMoreBtn').addEventListener('click', ()=>{
  visibleCount += STEP;
  renderProducts();
});

/* ============ NAV ACTIVE STATE ON SCROLL ============ */
const navLinks = document.querySelectorAll('header nav a[href^="#"]');
const sections = ['top','catalog','promo','contacts'].map(id=>document.getElementById(id));
window.addEventListener('scroll', ()=>{
  let currentSec = sections[0];
  sections.forEach(sec=>{
    if(sec && window.scrollY >= sec.offsetTop - 120) currentSec = sec;
  });
  navLinks.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === '#' + currentSec.id);
  });
});
/* ============ INIT ============ */
renderProducts();
buildMarquee();
updateCartUI();