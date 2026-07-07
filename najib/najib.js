document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. ИДОРАКУНИИ СЛАЙДЕР
    // ==========================================
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');
    let slideIndex = 0;
    let slideInterval;

    // Сохтани нуқтаҳо (dots)
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        if (index >= slides.length) slideIndex = 0;
        else if (index < 0) slideIndex = slides.length - 1;
        else slideIndex = index;

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }

    function nextSlide() { showSlide(slideIndex + 1); }
    function prevSlide() { showSlide(slideIndex - 1); }

    nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
    prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });

    function startInterval() { slideInterval = setInterval(nextSlide, 5000); }
    function resetInterval() { clearInterval(slideInterval); startInterval(); }

    startInterval(); // Фаъолсозии автоматикии слайдер


    // ==========================================
    // 2. ИДОРАКУНИИ ПОП-АП (MODAL)
    // ==========================================
    const popupOverlay = document.getElementById('popupOverlay');
    const popupCloseBtn = document.getElementById('closePopupBtn');
    const popupTitle = document.getElementById('popupTitle');
    const popupContent = document.getElementById('popupContent');

    // Намоиши худкори поп-апи Обуна пас аз 3.5 сония
    setTimeout(() => {
        if (!popupOverlay.classList.contains('active')) {
            showPopupModal('Обуна ба ахбор!', `
                <p>Ба хабарномаи мо обуна шавед ва аввалин шуда аз ахбори муҳими Тоҷикистон бохабар бошед.</p>
                <input type="email" placeholder="Почтаи электронии шумо" style="width: 100%; padding: 12px; margin: 15px 0; border: 1px solid #cbd5e1; border-radius: 8px; outline:none;">
                <button id="innerSubscribeBtn" style="background: #22c55e; color: white; border: none; padding: 12px; border-radius: 8px; width: 100%; cursor: pointer; font-weight:600;">Обуна шудан</button>
            `);
            
            document.getElementById('innerSubscribeBtn').addEventListener('click', () => {
                alert('Ташаккур! Шумо бо муваффақият обуна шудед.');
                closePopupModal();
            });
        }
    }, 3500);

    function showPopupModal(title, htmlContent) {
        popupTitle.innerText = title;
        popupContent.innerHTML = htmlContent;
        popupOverlay.classList.add('active');
    }

    function closePopupModal() {
        popupOverlay.classList.remove('active');
    }

    popupCloseBtn.addEventListener('click', closePopupModal);

    // Пӯшидани поп-ап ҳангоми пахши берун аз қуттии он
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) closePopupModal();
    });

    // Функсияи кушодани хабарҳо (барои истифода дар onclick-и кортҳо)
    window.openNews = function(title, text) {
        const contentHtml = `
            <p style="text-align: justify; color: #475569; font-size: 1rem; line-height: 1.6;">${text}</p>
            <button id="closeNewsBtn" style="background: #005a9c; color: white; border: none; padding: 10px 25px; border-radius: 8px; margin-top: 20px; cursor: pointer; font-weight:600;">Пӯшидан</button>
        `;
        showPopupModal(title, contentHtml);
        document.getElementById('closeNewsBtn').addEventListener('click', closePopupModal);
    };
});