// PRODUCT DATABASE - 20 items for MEN and 20 for WOMEN (prices 2000-4000 RUB)
const productsData = {
    men: [
        { id: 1, name: "Oversized Hoodie Black", price: 3290, image: "images/Men/A.jpg" },
        { id: 2, name: "Cargo Pants Olive", price: 3790, image: "images/Men/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" },
        { id: 3, name: "Washed Denim Jacket", price: 3990, image: "images/Men/anthony-tyrrell-Bl-LiSJOnlY-unsplash.jpg" },
        { id: 4, name: "Relaxed Fit Tee White", price: 2190, image: "images/Men/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg" },
        { id: 5, name: "Sweatpants Gray", price: 2890, image: "images/Men/brooke-cagle-Ss3wTFJPAVY-unsplash.jpg" },
        { id: 6, name: "Bomber Jacket Black", price: 3990, image: "images/Men/charles-etoroma-95UF6LXe-Lo-unsplash.jpg" },
        { id: 7, name: "Vintage Graphic Tee", price: 2490, image: "images/Men/Creative Design @atcastudio.jpg" },
        { id: 8, name: "Corduroy Pants Brown", price: 3590, image: "images/Men/darshan-patel-QJEVpydulGs-unsplash.jpg" },
        { id: 9, name: "Zip Hoodie Cream", price: 3490, image: "images/Men/erik-lucatero-d2MSDujJl2g-unsplash.jpg" },
        { id: 10, name: "Wool Blend Coat", price: 3990, image: "images/Men/ian-dooley-d1UPkiFd04A-unsplash.jpg" },
        { id: 11, name: "Track Jacket Blue", price: 2790, image: "images/Men/nicholas-green-nPz8akkUmDI-unsplash.jpg" },
        { id: 12, name: "Loose Fit Jeans", price: 3290, image: "images/Men/philip-martin-5aGUyCW_PJw-unsplash.jpg" },
        { id: 13, name: "Puffer Vest", price: 3690, image: "images/Men/rayul-_M6gy9oHgII-unsplash.jpg" },
        { id: 14, name: "Knit Sweater Beige", price: 2990, image: "images/Men/ryoji-iwata-X53e51WfjlE-unsplash.jpg" },
        { id: 15, name: "Denim Overshirt", price: 3190, image: "images/Men/tim-bogdanov-4uojMEdcwI8-unsplash.jpg" },
        { id: 16, name: "Cargo Vest", price: 2890, image: "images/Men/Без названия (14).jpg" },
        { id: 17, name: "Hoodie Gray", price: 3090, image: "images/Men/Без названия (15).jpg" },
        { id: 18, name: "Parachute Pants", price: 3490, image: "images/Men/Инфографика для свитшота 💕.jpg" },
        { id: 19, name: "Polo Shirt", price: 2290, image: "images/Men/Худи __ Инфографика для WB.jpg" },
        { id: 20, name: "Fleece Jacket", price: 3790, image: "images/Men/rayul-_M6gy9oHgII-unsplash.jpg" }
    ],
    women: [
        { id: 101, name: "Cropped Hoodie Pink", price: 2990, image:'images/4.jpg' },
        { id: 102, name: "Wide Leg Pants Black", price: 3490, image: "images/women/aiony-haust-3TLl_97HNJo-unsplash.jpg" },
        { id: 103, name: "Oversized Blazer", price: 3990, image: "images/women/anthony-tran-3Xkms-gMvZg-unsplash.jpg" },
        { id: 104, name: "Knitted Sweater", price: 3590, image: "images/women/good-faces-xmSWVeGEnJw-unsplash.jpg" },
        { id: 105, name: "Satin Skirt Champagne", price: 2790, image: "images/women/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg" },
        { id: 106, name: "Graphic Tee", price: 2390, image: "images/women/icons8-team-6LZuSzSwso0-unsplash.jpg" },
        { id: 107, name: "Leather Pants", price: 3890, image: "images/women/icons8-team-FcLyt7lW5wg-unsplash.jpg " },
        { id: 108, name: "Crop Top", price: 1890, image: "images/women/io.jpg" },
        { id: 109, name: "Maxi Dress", price: 3690, image: "images/women/jeffery-erhunse-4XK2oKKvzVU-unsplash.jpg" },
        { id: 110, name: "Denim Skirt", price: 2590, image: "images/women/jeffery-erhunse-vp9mRauo68c-unsplash.jpg" },
        { id: 111, name: "Bomber Jacket Pink", price: 3790, image: "images/women/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg" },
        { id: 112, name: "Hoodie Dress", price: 3290, image: "images/women/kinga-howard-5qNTJcCckmc-unsplash.jpg" },
        { id: 113, name: "Pleated Skirt", price: 2690, image: "images/women/michael-dam-mEZ3PoFGs_k-unsplash.jpg" },
        { id: 114, name: "Trench Coat", price: 3990, image: "images/women/noah-buscher-8A7fD6Y5VF8-unsplash.jpg" },
        { id: 115, name: "Knit Cardigan", price: 3190, image: "images/women/philipe-cavalcante-ZClamlKDc6k-unsplash.jpg" },
        { id: 116, name: "Cargo Pants Beige", price: 3590, image: "images/women/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg" },
        { id: 117, name: "Body Suit", price: 1990, image: "images/" },
        { id: 118, name: "Sweater Vest", price: 2490, image: "images/" },
        { id: 119, name: "Leather Skirt", price: 3490, image: "images/" },
        { id: 120, name: "Oversized Shirt", price: 2790, image: "images/" }
    ]
};

let currentLanguage = 'en';
let storyTranslated = false;
let activeCategory = 'men';

// Render products
function renderProducts(category) {
    const grid = document.getElementById('productsGrid');
    const products = productsData[category];
    grid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img class="product-img" src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <span class="product-name">${product.name}</span>
                <span class="product-price">${product.price.toLocaleString()} ₽</span>
            </div>
        </div>
    `).join('');
}

// UI Translations
const translations = {
    en: {
        infoBtn: "INFO",
        collectionTitle: "latest collection",
        lookbookTitle: "street style",
        lookbookSub: "as worn by real people",
        lookCap1: "Oversized hoodie · 3,290 ₽",
        lookCap2: "Cropped jacket · 3,790 ₽",
        lookCap3: "Relaxed jeans · 2,990 ₽",
        lookCap4: "Varsity bomber · 3,990 ₽",
        heroSub: "effortless style · daily wear",
        translateBtn: "Translate to Russian"
    },
    ru: {
        infoBtn: "ИНФО",
        collectionTitle: "новая коллекция",
        lookbookTitle: "уличный стиль",
        lookbookSub: "как носят реальные люди",
        lookCap1: "Оверсайз худи · 3,290 ₽",
        lookCap2: "Укороченная куртка · 3,790 ₽",
        lookCap3: "Свободные джинсы · 2,990 ₽",
        lookCap4: "Бомбер · 3,990 ₽",
        heroSub: "лёгкий стиль · повседневная мода",
        translateBtn: "Перевести на русский"
    }
};

function applyUILanguage(lang) {
    document.getElementById('infoBtnText').innerText = translations[lang].infoBtn;
    document.getElementById('collectionTitle').innerText = translations[lang].collectionTitle;
    document.getElementById('lookbookTitle').innerText = translations[lang].lookbookTitle;
    document.getElementById('lookbookSub').innerText = translations[lang].lookbookSub;
    document.getElementById('lookCap1').innerText = translations[lang].lookCap1;
    document.getElementById('lookCap2').innerText = translations[lang].lookCap2;
    document.getElementById('lookCap3').innerText = translations[lang].lookCap3;
    document.getElementById('lookCap4').innerText = translations[lang].lookCap4;
    document.getElementById('heroSubText').innerText = translations[lang].heroSub;
    const translateBtnSpan = document.getElementById('translateBtnText');
    if (translateBtnSpan && !storyTranslated) translateBtnSpan.innerText = translations[lang].translateBtn;
}

// Story texts
const englishStory = `Adam is 15 years old and runs his own online clothing store, which already shows a level of initiative most people his age don't have. He deals with the usual chaos—managing inventory, handling customer messages, figuring out why a shipment is delayed—and it teaches him more about responsibility than any school assignment ever could. Some days are exciting when orders come in, and other days feel slow and frustrating, but that's simply part of running a business. He doesn't need grand speeches about hustling 24/7; he just needs to know that showing up consistently, even on the quiet days, is what turns a small store into something solid over time.`;

const russianStory = `Адаму 15 лет, и у него есть свой интернет-магазин одежды, что само по себе показывает уровень инициативы, которого нет у большинства его сверстников. Он сталкивается с обычным хаосом — управлением остатками товара, ответами клиентам, выяснением причин задержки доставки, — и это учит его ответственности больше, чем любое школьное задание. В какие-то дни приходят заказы и всё кажется классным, а другие дни тянутся медленно и раздражают, но это просто часть ведения бизнеса. Ему не нужны громкие речи о том, что нужно работать без остановки; ему достаточно знать, что стабильные усилия даже в спокойные дни — это то, что превращает маленький магазин в нечто надёжное со временем.`;

function setupStoryTranslation() {
    const storyDiv = document.getElementById('storyText');
    const translateBtn = document.getElementById('translateStoryBtn');
    translateBtn.addEventListener('click', () => {
        if (!storyTranslated) {
            storyDiv.innerText = russianStory;
            storyTranslated = true;
            translateBtn.querySelector('#translateBtnText').innerText = currentLanguage === 'en' ? 'Show English' : 'Показать на английском';
        } else {
            storyDiv.innerText = englishStory;
            storyTranslated = false;
            translateBtn.querySelector('#translateBtnText').innerText = translations[currentLanguage].translateBtn;
        }
    });
}

// Modal logic
const modal = document.getElementById('infoModal');
const infoBtn = document.getElementById('infoBtn');
const closeModal = document.querySelector('.close-modal');

infoBtn.addEventListener('click', () => {
    modal.classList.add('show');
    const storyDiv = document.getElementById('storyText');
    if (!storyTranslated) storyDiv.innerText = englishStory;
    else storyDiv.innerText = russianStory;
    const btnSpan = document.getElementById('translateBtnText');
    if (storyTranslated) btnSpan.innerText = currentLanguage === 'en' ? 'Show English' : 'Показать на английском';
    else btnSpan.innerText = translations[currentLanguage].translateBtn;
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
});

// Category switching
function setActiveCategory(category) {
    activeCategory = category;
    renderProducts(activeCategory);
    document.querySelectorAll('.nav-cat-btn').forEach(btn => {
        if (btn.dataset.category === category) btn.classList.add('active-cat');
        else btn.classList.remove('active-cat');
    });
    document.querySelectorAll('.tag-btn').forEach(btn => {
        if (btn.dataset.category === category) btn.classList.add('active-tag');
        else btn.classList.remove('active-tag');
    });
}

document.getElementById('navMenBtn').addEventListener('click', () => setActiveCategory('men'));
document.getElementById('navWomenBtn').addEventListener('click', () => setActiveCategory('women'));
document.getElementById('tagMenBtn').addEventListener('click', () => setActiveCategory('men'));
document.getElementById('tagWomenBtn').addEventListener('click', () => setActiveCategory('women'));

// Language selector
const langOverlay = document.getElementById('langOverlay');
const selectEn = document.getElementById('selectEnglish');
const selectRu = document.getElementById('selectRussian');

function setLanguage(lang) {
    currentLanguage = lang;
    applyUILanguage(lang);
    const translateSpan = document.getElementById('translateBtnText');
    if (translateSpan && !storyTranslated) translateSpan.innerText = translations[lang].translateBtn;
    else if (translateSpan && storyTranslated) translateSpan.innerText = (lang === 'en' ? 'Show English' : 'Показать на английском');
    langOverlay.classList.add('hidden');
    localStorage.setItem('shopLang', lang);
}

selectEn.addEventListener('click', () => setLanguage('en'));
selectRu.addEventListener('click', () => setLanguage('ru'));

const savedLang = localStorage.getItem('shopLang');
if (savedLang && (savedLang === 'en' || savedLang === 'ru')) {
    setLanguage(savedLang);
} else {
    langOverlay.classList.remove('hidden');
}

// Initial render
renderProducts('men');
setupStoryTranslation();

// Cart demo
document.querySelector('.cart-icon').addEventListener('click', () => alert('🛍️ Shopping cart — coming soon'));