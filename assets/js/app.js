/* ============ Alhadath Mobile (SAFE) ============ */
const CURRENCY = "JD";
const WHATSAPP_NUMBER = ""; // احتياطي فقط إن أردت فتح واتساب بدل الإرسال
const ORDER_ENDPOINT = "https://alhadath-order.ahmad2120omar.workers.dev/orders";

// لا نستخدم أي توكنات في الواجهة
const TELEGRAM_BOT_TOKEN = "";
const TELEGRAM_CHAT_ID = "";

const BRANDS = ["Samsung","iPhone","Redmi/MI","Tecno","Infinix","Honor","Accessories"];

/* ================= PRODUCTS ================= */
const PRODUCTS = [
  {
    id: "s-a06",
    title: "Samsung A06",
    brand: "Samsung",
    category: "smart",
    image: "assets/images/samsung-a06.webp",
    variants: [
      { id: "64-4+4",  label: "64GB / 4+4GB RAM", price: 49 },
      { id: "128-4+4", label: "128GB / 4+4GB RAM", price: 59 }
    ],
    colors: [
    { id:"black", label:"أسود",  hex:"#0f172a", image:"assets/images/a06-black.jpeg"  },
    { id:"blue",  label:"أزرق",  hex:"#1d4ed8", image:"assets/images/a06-blue.jpeg"  },
    { id:"gold",  label:"ذهبي",  hex:"#c08f3f", image:"assets/images/a06-gold.jpeg"  }
  ],

    specs: [
      "شاشة: 6.7 بوصة HD+ LCD، 60Hz",
      "المعالج: MediaTek Helio G85",
      "الكاميرا الخلفية: 50MP رئيسية + 2MP عمق",
      "الكاميرا الأمامية: 8MP",
      "البطارية: 5000mAh مع شحن سريع 25W",
      "النظام: Android 14 + One UI",
      "الأداء: مناسب للتصفح، التطبيقات الأساسية، استخدام عادي"
    ]
  },
  {
    id: "s-a16",
    title: "Samsung A16",
    brand: "Samsung",
    image: "assets/images/samsung-a16.webp",
    variants: [
      { id: "128-4+4", label: "128GB / 4+4GB RAM", price: 99 },
      { id: "128-6+6", label: "128GB / 6+6GB RAM", price: 115 },
      { id: "256-8+8", label: "256GB / 8+8GB RAM", price: 135 }
    ],
    colors: [
    { id:"black",  label:"أسود",  hex:"#111827", image:"assets/images/a16-black.webp"  },
    { id:"green",  label:"أخضر",  hex:"#86efac", image:"assets/images/a16-green.webp" },
    { id:"silver", label:"فضي",   hex:"#cbd5e1", image:"assets/images/a16-silver.jpg"}
  ],
    specs: [
      "شاشة: 6.7 بوصة Super AMOLED FHD+، 90Hz",
      "المعالج: MediaTek Helio G99",
      "الذاكرة والتخزين: 4/6/8 GB RAM + 128/256 GB تخزين",
      "الكاميرا الخلفية: 50MP رئيسية + 5MP Ultra-wide + 2MP ماكرو",
      "الكاميرا الأمامية: 13MP",
      "البطارية: 5000mAh مع شحن سريع 25W",
      "النظام: Android 14 + One UI 6.1",
      "الأداء: جيد للتصفح، التطبيقات، ألعاب خفيفة إلى متوسطة"
    ]
  },
  {
    id: "s-a26-5g",
    title: "Samsung A26 5G",
    brand: "Samsung",
    image: "assets/images/samsung-a26.jpg",
    variants: [
      { id: "128-6+6", label: "128GB / 6+6GB RAM", price: 140 },
      { id: "256-8+8", label: "256GB / 8+8GB RAM", price: 160 }
    ],
    colors: [
    { id:"black",  label:"أسود",  hex:"#111827", image:"assets/images/a16-black.jpg"  },
    { id:"green",  label:"أخضر",  hex:"#86efac", image:"assets/images/a16-green.jpg" },
    { id:"silver", label:"فضي",   hex:"#cbd5e1", image:"assets/images/a16-silver.jpg"}
  ],
    specs: [
      "شاشة: 6.7 بوصة Super AMOLED FHD+، 120Hz",
      "المعالج: Exynos 1280",
      "الكاميرا الخلفية: 50MP OIS + 8MP Ultra-wide + 2MP ماكرو",
      "الكاميرا الأمامية: 13MP",
      "البطارية: 5000mAh مع شحن سريع 25W",
      "النظام: Android 14 + One UI",
      "الأداء: قوي للألعاب المتوسطة وتعدد المهام"
    ]
  },
  {
  id: "s-tab-a9",
  title: "Samsung Tab A9",
  brand: "Samsung",
  category: "tablet",   // 👈 يميز إنه تابلت
  image: "assets/images/samsung-tab-a9.jpeg",
  variants: [
    { id: "64-4", label: "64GB / 4GB RAM", price: 129 },
    { id: "128-8", label: "128GB / 8GB RAM", price: 159 }
  ],
  colors: [
    { id: "gray",  label: "رمادي", hex: "#6b7280", image: "assets/images/tab-a9-gray.jpg" },
    { id: "silver", label: "فضي", hex: "#d1d5db", image: "assets/images/tab-a9-silver.jpg" }
  ]
},
  {
    id: "s-a36-5g",
    title: "Samsung A36 5G",
    brand: "Samsung",
    image: "assets/images/samsung-a36.webp",
    variants: [
      { id: "128-8+8", label: "128GB / 8+8GB RAM", price: 190 },
      { id: "256-8+8", label: "256GB / 8+8GB RAM", price: 210 }
    ],
    colors: [
    { id:"black",  label:"أسود",  hex:"#111827", image:"assets/images/a16-black.jpg"  },
    { id:"green",  label:"أخضر",  hex:"#86efac", image:"assets/images/a16-green.jpg" },
    { id:"silver", label:"فضي",   hex:"#cbd5e1", image:"assets/images/a16-silver.jpg"}
  ],
    specs: [
      "شاشة: 6.7 بوصة Super AMOLED FHD+، 120Hz",
      "المعالج: Snapdragon 6 Gen 3",
      "الكاميرا الخلفية: 50MP OIS + 8MP Ultra-wide + 5MP ماكرو",
      "الكاميرا الأمامية: 12MP",
      "البطارية: 5000mAh مع شحن سريع 25W",
      "النظام: Android 14 + One UI",
      "الأداء: ممتاز للتصفح والألعاب المتوسطة"
    ]
  },
  {
    id: "s-a56-5g",
    title: "Samsung A56 5G",
    brand: "Samsung",
    image: "assets/images/samsung-a56.jpg",
    variants: [
      { id: "128-8+8",  label: "128GB / 8+8GB RAM",  price: 220 },
      { id: "256-8+8",  label: "256GB / 8+8GB RAM",  price: 260 },
      { id: "256-12+12",label: "256GB / 12+12GB RAM", price: 299 }
    ],
    colors: [
    { id:"black",  label:"أسود",  hex:"#111827", image:"assets/images/a16-black.jpg"  },
    { id:"green",  label:"أخضر",  hex:"#86efac", image:"assets/images/a16-green.jpg" },
    { id:"silver", label:"فضي",   hex:"#cbd5e1", image:"assets/images/a16-silver.jpg"}
  ],
    specs: [
      "شاشة: 6.7 بوصة Super AMOLED FHD+، 120Hz",
      "المعالج: Exynos 1580",
      "الكاميرا الخلفية: 50MP OIS + 12MP Ultra-wide + 5MP ماكرو",
      "الكاميرا الأمامية: 12MP",
      "البطارية: 5000mAh مع شحن سريع 45W",
      "النظام: Android 14 + One UI",
      "الأداء: قوي للتطبيقات الثقيلة والألعاب"
    ]
  },
  {
    id:"s-s25-ultra-12-256",
    title:"Samsung S25 ULTRA 5G - 256GB / 12+12GB RAM",
    brand:"Samsung",
    image:"assets/images/samsung-s25-ultra.webp",
    variants: [
      { id: "256-12+12", label: "256GB / 12+12GB RAM", price: 720 },
      { id: "1T-12+12",   label: "1TB / 12+12GB RAM",   price: 1099 }
    ],
    colors: [
    { id:"black",  label:"أسود",  hex:"#111827", image:"assets/images/a16-black.jpg"  },
    { id:"green",  label:"أخضر",  hex:"#86efac", image:"assets/images/a16-green.jpg" },
    { id:"silver", label:"فضي",   hex:"#cbd5e1", image:"assets/images/a16-silver.jpg"}
  ],
    specs: [
      "شاشة: 6.9 بوصة QHD+ Dynamic AMOLED 2X، 120Hz",
      "المعالج: Snapdragon 8 Elite",
      "الكاميرا الخلفية: 200MP رئيسية + Ultra-wide + Telephoto (تكبير بصري حتى 5x)",
      "الكاميرا الأمامية: 12MP",
      "البطارية: 5000mAh مع شحن سريع 45W + شحن لاسلكي",
      "النظام: Android 15 + One UI",
      "الأداء: فائق القوة للتصوير والألعاب والمهام الاحترافية"
    ]
  },

  // iPhone
  { id:"ip-16pm",
   title:"iPhone 16 Pro Max",
   brand:"iPhone",
   image:"assets/images/iphone-16-pro-max.jpeg",
   variants: [
      { id: "256", label: "256GB ", price: 910 },
      { id: "512",   label: "512GB ",   price: 990 },
     { id: "1T",   label: "1TB ",   price: 1099 }
    ],
   specs: [
     "الشاشة: 6.9 بوصة QHD+ Super Retina XDR OLED، 120Hz ProMotion",
    "المعالج: Apple A18 Pro",
    "الكاميرا الخلفية: 48MP رئيسية + Ultra Wide 12MP + Telephoto 12MP (تكبير بصري حتى 5x)",
    "الكاميرا الأمامية: 12MP TrueDepth",
    "البطارية: 4500mAh تقريبًا مع شحن سريع 30W + شحن لاسلكي MagSafe",
    "النظام: iOS 18",
    "الأداء: فائق القوة للتصوير، الألعاب، والمهام الاحترافية"
    ]
  },
  { id:"ip-16p",
   title:"iPhone 16 Pro",
   brand:"iPhone",
   image:"assets/images/iphone-16-pro.jpeg",
   variants: [
      { id: "256", label: "256GB ", price: 850 },
      { id: "512",   label: "512GB ",   price: 950 },
     { id: "1T",   label: "1TB ",   price: 1050 }
    ],
   specs: [
    "الشاشة: 6.7 بوصة ProMotion OLED، 120Hz",
    "المعالج: Apple A18 Pro",
    "الكاميرا الخلفية: 48MP رئيسية + Ultra Wide 12MP + Telephoto 12MP",
    "الكاميرا الأمامية: 12MP TrueDepth",
    "البطارية: حوالي 4400mAh مع شحن سريع + MagSafe",
    "النظام: iOS 18",
    "الأداء: مثالي للتصوير، الإنتاجية، المهام الثقيلة"
  ]
  },
    {id: "ip-16",
  title: "iPhone 16",
  brand: "iPhone",
  image: "assets/images/iphone-16.jpeg",
  variants: [
    { id: "128", label: "128GB", price: 580 },
    { id: "256", label: "256GB", price: 610 }
  ],
  specs: [
    "الشاشة: حوالي 6.1 بوصة OLED، 60-120Hz",
    "المعالج: Apple A18",
    "الكاميرا الخلفية: 48MP رئيسية + Ultra Wide",
    "الكاميرا الأمامية: 12MP TrueDepth",
    "البطارية: حوالي 3200-3500mAh مع شحن سريع",
    "النظام: iOS 18",
    "الأداء: ممتاز لتطبيقات اليومية، كاميرا متقدّمة، تجربة ممتازة"
  ]
},
  
  { id: "ip-15",
  title: "iPhone 15",
  brand: "iPhone",
  image: "assets/images/iphone-15.jpeg",
  variants: [
    { id: "128", label: "128GB", price: 490 },
    { id: "256", label: "256GB", price: 540 }
  ],
  specs: [
    "الشاشة: 6.1 بوصة OLED، 60-120Hz",
    "المعالج: Apple A17",
    "الكاميرا الخلفية: 48MP رئيسية + Ultra Wide",
    "الكاميرا الأمامية: 12MP TrueDepth",
    "البطارية: حوالي 3300-3500mAh مع شحن سريع",
    "النظام: iOS 17",
    "الأداء: جيد للتطبيقات، كاميرا قوية، تجربة محسّنة عن الأجيال السابقة"
  ]
},
  {id: "ip-14",
  title: "iPhone 14",
  brand: "iPhone",
  image: "assets/images/iphone-14.jpeg",
  variants: [
    { id: "128", label: "128GB", price: 440 },
    { id: "256", label: "256GB", price: 500 }
  ],
  specs: [
    "الشاشة: 6.1 بوصة OLED، 60Hz",
    "المعالج: Apple A16",
    "الكاميرا الخلفية: 48MP رئيسية + Ultra Wide",
    "الكاميرا الأمامية: 12MP TrueDepth",
    "البطارية: حوالي 3279-3300mAh مع شحن سريع",
    "النظام: iOS 16",
    "الأداء: مناسب للتطبيقات اليومية، تصوير جيد، شاشة ملوّنة ونقية"
  ]
},
  
{
  id: "ip-15-plus",
  title: "iPhone 15 Plus",
  brand: "iPhone",
  image: "assets/images/iphone-15-plus.jpeg",
  variants: [
    { id: "128", label: "128GB", price: 520 },
    { id: "256", label: "256GB", price: 610 },
    { id: "512", label: "512GB", price: 690 }
  ],
  specs: [
    "الشاشة: 6.7 بوصة OLED Super Retina XDR، 60Hz",
    "الدقة: 2796 × 1290 بكسل، كثافة حوالي 460 ppi",
    "Dynamic Island بدلاً من النوتش",
    "المعالج: Apple A16 Bionic",
    "الكاميرات الخلفية: 48MP رئيسية + 12MP Ultra Wide",
    "الكاميرا الأمامية: 12MP TrueDepth",
    "البطارية: حوالي 4383mAh تقريبًا",
    "USB-C بدلاً من Lightning",
    "مقاومة للماء والغبار بمعيار IP68 (حتى عمق 6 أمتار لمدة تصل إلى 30 دقيقة)",
    "الوزن: تقريبًا 201 غرام، السماكة: حوالي 7.8 مم"
  ]
},
    {id: "ip-16-plus",
  title: "iPhone 16 Plus",
  brand: "iPhone",
  image: "assets/images/iphone-16-plus.jpeg",
  variants: [
    { id: "128", label: "128GB", price: 560 },
    { id: "256", label: "256GB", price: 650 },
    { id: "512", label: "512GB", price: 720 }
  ],
  specs: [
    "الشاشة: 6.7 بوصة OLED Super Retina XDR، دقة 2796×1290 بكسل، 460 ppi",
    "الهيكل: واجهة Ceramic Shield، ظهر زجاجي مع إطار من الألومنيوم",
    "المعالج: Apple A18",
    "الكاميرا الخلفية: 48MP رئيسية + 12MP Ultra Wide",
    "الكاميرا الأمامية: 12MP TrueDepth",
    "البطارية: تشغيل فيديو حتى 27 ساعة تقريبًا",
    "نظام التشغيل: iOS 18",
    "الألوان: أسود، أبيض، وردي، Teal، Ultramarine",
    "الأبعاد: 160.9 × 77.8 × 7.8 مم، الوزن حوالي 199 غرام"
  ]
},

  // Redmi/MI
  { id:"mi-note-14-256", title:"Xiaomi Redmi Note 14 - 256GB / 8GB RAM", brand:"Redmi/MI", price:149, image:"assets/images/xiaomi-redmi-note.jpg" },

  // Tecno / Infinix / Honor / Accessories
  { id:"tec-spark",  title:"Tecno Spark",    brand:"Tecno",    price:115, image:"assets/images/tecno-spark.jpg" },
  { id:"inf-hot",    title:"Infinix Hot",    brand:"Infinix",  price:120, image:"assets/images/infinix-hot.jpg" },
  { id:"hon-x9",     title:"Honor X9",       brand:"Honor",    price:199, image:"assets/images/honor-x9.jpg" },
  { id:"acc-charger",title:"شاحن أصلي سريع", brand:"Accessories", price:12, image:"assets/images/accessory-charger.jpg" },
];
/* ============== Image Fallback Helpers ============== */
// يحاول التحميل بالتسلسل (webp -> jpg -> jpeg -> png)
function tryImageFallback(imgEl, basePathNoExt, exts = ["webp","jpg","jpeg","png"]) {
  let i = 0;
  function tryNext() {
    if (i >= exts.length) return;
    const src = `${basePathNoExt}.${exts[i++]}`;
    imgEl.src = src;
  }
  imgEl.onerror = tryNext; // إذا فشل الامتداد الحالي، جرّب اللي بعده
  tryNext();
}

// يحذف الامتداد من أي مسار صورة
function stripExt(path) {
  return String(path || "").replace(/\.(webp|jpg|jpeg|png)$/i, "");
}

/* ============== Helpers ============== */
function $(sel, root){ return (root||document).querySelector(sel); }
function $all(sel, root){ return Array.from((root||document).querySelectorAll(sel)); }
function formatPrice(v){ v=Number(v)||0; return v.toFixed(2)+" "+CURRENCY; }
function save(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
function load(k,fallback){ try{ const v=localStorage.getItem(k); return v? JSON.parse(v): fallback; }catch(e){ return fallback; } }
function normalizeDigits(str){
  return String(str || "")
    // أرقام عربية شرقية ٠١٢٣٤٥٦٧٨٩
    .replace(/[\u0660-\u0669]/g, d => String.fromCharCode(d.charCodeAt(0) - 0x0660 + 48))
    // أرقام فارسية ۰۱۲۳۴۵۶۷۸۹
    .replace(/[\u06F0-\u06F9]/g, d => String.fromCharCode(d.charCodeAt(0) - 0x06F0 + 48))
    // نظّف أي رموز غريبة
    .replace(/[^\d+\-\s()]/g, "");
}
const state = {
  brand: "all",
  category: "all",
  query: "",
  sort: "popular",
  cart: load("cart", {})
};

function hasVariants(p){ return Array.isArray(p.variants) && p.variants.length>0; }
function basePrice(p){ return hasVariants(p) ? p.variants[0].price : p.price; }
function variantFullTitle(p,v){ return p.title + " - " + v.label; }

/* ============== UI: Tabs / Search / Sort ============== */
function safeAddEvent(el, ev, fn){ if(el && el.addEventListener){ el.addEventListener(ev, fn); } }

function renderTabs(){
  const tabs = $("#tabs");
  if (!tabs) return;
  tabs.innerHTML = "";

  // 🔵 زر "الكل"
  const allBtn = document.createElement("button");
  allBtn.className = "tab active";
  allBtn.textContent = "الكل";
  allBtn.onclick = ()=>{
    // أعد كل شيء للوضع الافتراضي
    state.category = "all";
    state.brand    = "all";
    state.query    = "";
    state.sort     = "popular";

    // نظّف مدخلات الواجهة
    const inp = document.getElementById("searchInput");
    if (inp) inp.value = "";
    const s = document.getElementById("sortSelect");
    if (s) s.value = "popular";

    filterAndRender();
    setActiveTab("الكل");
  };
  tabs.appendChild(allBtn);

  // 🔵 زر "الأجهزة الذكية"
  const smartBtn = document.createElement("button");
  smartBtn.className = "tab";
  smartBtn.textContent = "الأجهزة الذكية";
  smartBtn.onclick = ()=>{
    state.category = "smart";
    state.brand    = "all";     // لا نفلتر بالماركة هنا
    filterAndRender();
    setActiveTab("الأجهزة الذكية");
  };
  tabs.appendChild(smartBtn);

  // 🔵 زر "الأجهزة اللوحية"
  const tabletBtn = document.createElement("button");
  tabletBtn.className = "tab";
  tabletBtn.textContent = "الأجهزة اللوحية";
  tabletBtn.onclick = ()=>{
    state.category = "tablet";
    state.brand    = "all";     // لا نفلتر بالماركة هنا
    filterAndRender();
    setActiveTab("الأجهزة اللوحية");
  };
  tabs.appendChild(tabletBtn);

  // 🔵 بقية الماركات من المصفوفة BRANDS (بدون "الكل")
  BRANDS.forEach((b)=>{
    const btn = document.createElement("button");
    btn.className = "tab";
    btn.textContent = b;
    btn.onclick = ()=>{
      state.brand = b;          // فلتر ماركة
      state.category = "all";   // ألغِ فلتر النوع
      filterAndRender();
      setActiveTab(b);
    };
    tabs.appendChild(btn);
  });
}
function setActiveTab(label){ $all(".tab").forEach(el=> el.classList.toggle("active", el.textContent===label)); }

safeAddEvent($("#searchInput"), "input", (e)=>{
  state.query=(e.target.value||"").trim().toLowerCase();
  filterAndRender();
});
safeAddEvent($("#sortSelect"), "change", (e)=>{
  state.sort=e.target.value;
  filterAndRender();
});

/* ============== Render Grid ============== */
function filterAndRender(){
  const grid=$("#productsGrid"); if(!grid) return;
  const empty=$("#emptyState");

  const getCat = (p)=> p.category || "smart";

  let items = PRODUCTS.filter(p=>{
    const byBrand = (state.brand === "all") || (p.brand === state.brand);
    const byCat   = (state.category === "all") || (getCat(p) === state.category);
    const byQuery = !state.query || p.title.toLowerCase().includes(state.query);
    return byBrand && byCat && byQuery;
  });

  if (state.sort==="priceAsc") items.sort((a,b)=> basePrice(a)-basePrice(b));
  else if (state.sort==="priceDesc") items.sort((a,b)=> basePrice(b)-basePrice(a));

  grid.innerHTML="";
  if(items.length===0){ if(empty) empty.hidden=false; return; } else { if(empty) empty.hidden=true; }

  const frag=document.createDocumentFragment();
  items.forEach(p=> frag.appendChild(cardTemplate(p)));
  grid.appendChild(frag);
  updateCartCount();
}
function hasColors(p){ return Array.isArray(p.colors) && p.colors.length>0; }
function getInitialImagePreferProduct(p){
  // اعرض صورة المنتج أولاً، ثم أول لون عند عدم توفّرها
  return p.image || (hasColors(p) && p.colors[0]?.image) || "assets/images/placeholder.jpg";
}

function colorRowHTML(p){
  if(!hasColors(p)) return "";
  return `
    <div class="color-row">
      <div class="color-picker" role="listbox" aria-label="الألوان" data-pid="${p.id}">
        ${p.colors.map((c,i)=>`
          <button class="color-swatch" type="button" role="option"
                  aria-label="${c.label}" aria-selected="false"
                  data-pid="${p.id}" data-color-id="${c.id}">
            <span class="dot" style="background:${c.hex}"></span>
          </button>
        `).join("")}
      </div>
      <div class="color-name">
        <span class="muted">اللون:</span>
        <strong class="current-color" data-color-label-for="${p.id}">اختر لونًا</strong>
      </div>
    </div>
  `;
}
const SELECTED_COLORS = {};
function getSelectedColorObj(pid){
  const p = PRODUCTS.find(x=>x.id===pid);
  const chosen = SELECTED_COLORS[pid]; // قد يكون undefined حتى يضغط الزبون
  return p?.colors?.find(c=>c.id===chosen) || null;
}
function resolveProductImage(pid){
  const p = PRODUCTS.find(x=>x.id===pid);
  const color = getSelectedColorObj(pid);
  return (color?.image) || p?.image || "assets/images/placeholder.jpg";
}
document.addEventListener("click", (e)=>{
  const btn = e.target.closest(".color-swatch");
  if(!btn) return;

  const pid = btn.dataset.pid;
  const colorId = btn.dataset.colorId;

  // تحديث التحديد بصريًا
  const picker = btn.closest(".color-picker");
  picker.querySelectorAll(".color-swatch").forEach(b=>{
    b.setAttribute("aria-selected", b===btn ? "true" : "false");
  });

  // خزّن اللون وحدّث النص
  SELECTED_COLORS[pid] = colorId;
  const product = PRODUCTS.find(x=>x.id===pid);
  const color = product?.colors?.find(c=>c.id===colorId);
  const labelEl = document.querySelector(`.current-color[data-color-label-for="${pid}"]`);
  if(labelEl && color) labelEl.textContent = color.label;

  // بدّل الصورة
 // بدّل الصورة (مع fallback للامتدادات)
const img = document.querySelector(`[data-img-for="${pid}"]`);
if (img) {
  const baseNoExt = stripExt(resolveProductImage(pid));
  tryImageFallback(img, baseNoExt);
}
});
/* ============== Card Template ============== */
function cardTemplate(p){
  const el=document.createElement("article");
  el.className="card";

  // المواصفات (3 أولى ظاهرة) — class="more" للباقي
  let specsHTML = "";
  if (Array.isArray(p.specs) && p.specs.length) {
    const first3 = p.specs.slice(0, 3);
    const rest   = p.specs.slice(3);

    specsHTML  = `<ul class="card__specs" data-collapsed="true">`
               + first3.map(s => `<li>${s}</li>`).join("");

    if (rest.length) {
      specsHTML += rest.map(s => `<li class="more">${s}</li>`).join("")
                +  `<li class="specs-cta">
                      <button type="button" class="show-toggle" aria-expanded="false">عرض المزيد</button>
                    </li>`;
    }
    specsHTML += `</ul>`;
  }

  // المتغيرات (إن وجدت)
  let variantHTML = "";
  let initialPrice = basePrice(p);
  let initialImage = getInitialImagePreferProduct(p); // صورة المنتج أولاً
  if (hasVariants(p)) {
    variantHTML =
      `<label class="muted tiny" for="${p.id}-v">النسخة:</label>
       <select id="${p.id}-v" class="variant" data-pid="${p.id}">
         ${p.variants.map((v,i)=>`<option value="${v.id}" ${i===0?"selected":""}>${v.label} — ${formatPrice(v.price)}</option>`).join("")}
       </select>`;
    
  }

  el.innerHTML =
    `<div class="card__img"><img data-img-for="${p.id}" src="${initialImage}" alt="${p.title}"></div>
     <div class="card__body">
       <h3 class="card__title">${p.title}</h3>
      ${colorRowHTML(p)}   <!-- ✅ صفّ الألوان -->
       ${specsHTML}
       ${variantHTML}
       <div class="card__meta">
         <span class="price" data-price-for="${p.id}">${formatPrice(initialPrice)}</span>
         <button class="btn btn--primary" data-add="${p.id}">أضف للسلة</button>
       </div>
     </div>`;
  
    // ✅ تطبيق fallback على الصورة الابتدائية
{
  const imgEl = el.querySelector(`[data-img-for="${p.id}"]`);
  if (imgEl) {
    const baseNoExt = stripExt(resolveProductImage(p.id));
    tryImageFallback(imgEl, baseNoExt);
  }
}

  // تحديث السعر/الصورة عند تغيير المتغير
  if (hasVariants(p)) {
    const sel     = el.querySelector(`#${p.id}-v`);
    const priceEl = el.querySelector(`[data-price-for="${p.id}"]`);
    const imgEl   = el.querySelector(`[data-img-for="${p.id}"]`);
    sel.addEventListener("change", ()=>{
      const v = p.variants.find(x=> x.id===sel.value);
      if (v && priceEl) priceEl.textContent = formatPrice(v.price);
      if (imgEl) {
  const baseNoExt = stripExt(resolveProductImage(p.id));
  tryImageFallback(imgEl, baseNoExt);
}
});
  }

  // زر "أضف للسلة"
  const addBtn = el.querySelector("[data-add]");
  if(addBtn){
   addBtn.onclick = ()=>{
  const selectedColor = getSelectedColorObj(p.id);
  const colorId = selectedColor?.id || "no-color";

  let payload, key;

  if (hasVariants(p)) {
    const sel = el.querySelector(`#${p.id}-v`);
    const v   = p.variants.find(x=> x.id===sel.value) || p.variants[0];

    key = `${p.id}|${v.id}|${colorId}`;

    payload = {
      id: key,
      baseId: p.id,
      title: variantFullTitle(p, v),
      price: v.price,
      image: selectedColor?.image || v.image || p.image,
      variant: v.label,
      color: selectedColor ? { id: selectedColor.id, label: selectedColor.label } : null
    };
  } else {
    key = `${p.id}|_|${colorId}`;

    payload = {
      id: key,
      baseId: p.id,
      title: p.title,
      price: p.price,
      image: selectedColor?.image || p.image,
      color: selectedColor ? { id: selectedColor.id, label: selectedColor.label } : null
    };
  }

  addToCartWithKey(payload.id, payload);
}; 
  }

  return el;
}

/* ============== Cart ============== */
function addToCartWithKey(key, meta){
  const item = state.cart[key] || { qty:0, product: meta };
  item.qty += 1;
  state.cart[key] = item;
  save("cart", state.cart);
  animateFab();
  updateCartCount();
}

function updateCartCount(){
  const count = Object.values(state.cart).reduce((s,it)=> s+it.qty, 0);
  // يدعم كلًا من #cartCount و .cart-badge
  const badge = $("#cartCount") || $(".cart-badge");
  if (!badge) return;
  badge.textContent = count;
  badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
  setTimeout(()=> badge.classList.remove("bump"), 400);
}

function animateFab(){
  const fab=$("#cartFab"); if(!fab || !fab.animate) return;
  fab.animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}], {duration:260});
}

safeAddEvent($("#cartFab"), "click", openCart);
safeAddEvent($("#closeCart"), "click", closeCart);
safeAddEvent($("#clearCart"), "click", ()=>{
  if(confirm("هل تريد إفراغ السلة بالكامل؟")){
    state.cart={}; save("cart", state.cart); renderCart(); updateCartCount();
  }
});
safeAddEvent($("#checkoutBtn"), "click", ()=>{
  const f=$("#checkout-form"); if(f) f.hidden=false;
  const cs=$(".cart-summary"); if(cs && cs.scrollIntoView) cs.scrollIntoView({behavior:"smooth", block:"end"});
});
safeAddEvent($("#backToCart"), "click", ()=>{
  const f=$("#checkout-form"); if(f) f.hidden=true;
});

function openCart(){ renderCart(); disableScroll(true); const m=$("#cartModal"); if(m) m.hidden=false; }
function closeCart(){ const m=$("#cartModal"); if(m) m.hidden=true; disableScroll(false); }
function disableScroll(lock){ document.body.style.overflow = lock? "hidden": ""; }

function renderCart(){
  const wrap=$("#cartItems"); if(!wrap) return;
  wrap.innerHTML="";
  const entries=Object.values(state.cart);
  if(entries.length===0){ wrap.innerHTML='<p class="muted">سلتك فارغة.</p>'; }
  else{ entries.forEach(it=> wrap.appendChild(cartRow(it.product, it.qty))); }

  const total=entries.reduce((s,it)=> s + it.product.price*it.qty, 0);
  const ct=$("#cartTotal"); if(ct) ct.textContent=formatPrice(total);
  const f=$("#checkout-form"); if(f) f.hidden=true;
}

function cartRow(p, qty){
  const row=document.createElement("div");
  const colorText = p.color?.label ? ` — <span class="tiny muted">اللون: ${p.color.label}</span>` : "";
  row.className="cart-row";
  row.innerHTML =
    `<img src="${p.image}" alt="${p.title}">
     <div>
       <div style="font-weight:700">${p.title}${colorText}</div>
       <div class="muted tiny">${formatPrice(p.price)} للوحدة</div>
     </div>
     <div class="qty">
       <button type="button" data-dec>−</button>
       <strong>${qty}</strong>
       <button type="button" data-inc>+</button>
     </div>
     <div style="text-align:end">${formatPrice(p.price*qty)}</div>`;

  const inc=row.querySelector("[data-inc]");
  const dec=row.querySelector("[data-dec]");
  if(inc){ inc.onclick=()=>{ state.cart[p.id].qty++; save("cart", state.cart); renderCart(); updateCartCount(); }; }
  if(dec){ dec.onclick=()=>{ state.cart[p.id].qty--; if(state.cart[p.id].qty<=0) delete state.cart[p.id]; save("cart", state.cart); renderCart(); updateCartCount(); }; }
  return row;
}

/* ============== Checkout (Worker) ============== */
// ✅ لاحظ: معرّف النموذج المصحّح هنا هو #checkout-form
safeAddEvent($("#checkout-form"), "submit", async (e)=>{
  e.preventDefault();

  // اجمع بيانات الزبون
  const fd=new FormData(e.currentTarget);
  const buyer={}; fd.forEach((v,k)=> {
  buyer[k] = (k === "phone") ? normalizeDigits(v) : String(v || "").trim();
});
  // تحقق واجهة
  const errs=[];
  if (!buyer.name || buyer.name.length < 2) errs.push("الاسم مطلوب (على الأقل حرفان).");
  if (!/^[0-9+\s\-()]{8,}$/.test(buyer.phone||"")) errs.push("رقم الهاتف غير صالح.");
  if (!buyer.address || buyer.address.length < 5) errs.push("العنوان مطلوب.");
  const entries=Object.values(state.cart);
  if(entries.length===0) errs.push("السلة فارغة.");
  if (errs.length){ alert("رجاءً صحح الأخطاء التالية:\n- "+errs.join("\n- ")); return; }

  
  // ابنِ العناصر المطلوبة للـ Worker
const items = entries.map(it => {
  const colorLabel = it.product.color?.label || "";
  const titleWithColor = colorLabel
    ? `${it.product.title} — لون: ${colorLabel}`
    : it.product.title;

  return {
    title: titleWithColor,                 // ← العنوان صار يحتوي اللون
    qty: Number(it.qty || 1),
    price: Number(it.product.price || 0),
    color: colorLabel                      // ← حقل إضافي احتياطي
  };
});
  const total=items.reduce((s,it)=> s+(it.price*it.qty), 0);

  // شكل الحمولة الذي يتوقعه الـ Worker
  const payload = {
    name: buyer.name,
    phone: buyer.phone,
    address: buyer.address,
    notes: buyer.note || "",
    items,
    total
  };

  const submitBtn = e.currentTarget.querySelector('button[type="submit"]');
  try{
    submitBtn && (submitBtn.disabled = true);

    if (!ORDER_ENDPOINT) {
  // احتياطي: افتح واتساب بدل الإرسال
  if (!WHATSAPP_NUMBER) {
    alert("لا يوجد ORDER_ENDPOINT ولا رقم واتساب مُعرّف.");
    return;
  }

  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(
    `طلب جديد
الاسم: ${payload.name}
الهاتف: ${payload.phone}
العنوان: ${payload.address}
الإجمالي: ${total} ${CURRENCY}`
  );
  window.open(wa, "_blank", "noopener");
  afterSuccess();
  return;
}

    const res = await fetch(ORDER_ENDPOINT, {
      method:"POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json().catch(()=> ({}));

    if (!res.ok || !data.ok) {
      // التحقق المُفصّل من الـ Worker (422)
      if (res.status === 422 && Array.isArray(data?.details) && data.details.length) {
        alert("تعذر إرسال الطلب:\n- " + data.details.join("\n- "));
      } else {
        alert("تعذر إرسال الطلب. رجاء المحاولة لاحقًا.\n" + (data?.error || `HTTP ${res.status}`));
      }
      return;
    }

    afterSuccess();
  }catch(err){
    console.error(err);
    alert("حدث خطأ أثناء الإرسال. حاول مجددًا.");
  }finally{
    submitBtn && (submitBtn.disabled = false);
  }
});

function afterSuccess(){
  alert("✅ تم إرسال طلبك بنجاح. سنقوم بالتواصل معك قريبًا.");
  state.cart={}; save("cart", state.cart); renderCart(); updateCartCount(); closeCart();
}

/* ============== Slider ============== */
let slideIndex=0;
function showSlide(i){
  const slides=$all(".slide"); if(slides.length===0) return;
  slideIndex=(i+slides.length)%slides.length;
  slides.forEach((s,idx)=> s.classList.toggle("active", idx===slideIndex));
  const dots=$all("#dots .slider-dot");
  dots.forEach((d,idx)=> d.classList.toggle("active", idx===slideIndex));
}
function next(){ showSlide(slideIndex+1); }
function prev(){ showSlide(slideIndex-1); }
const nb=$("#nextBtn"); if(nb) nb.onclick=next;
const pb=$("#prevBtn"); if(pb) pb.onclick=prev;

function renderDots(){
  const dots=$("#dots"); const slides=$all(".slide"); if(!dots || slides.length===0) return;
  dots.innerHTML="";
  slides.forEach((_,idx)=>{
  const b=document.createElement("button"); b.className="slider-dot"+(idx===0?" active":"");
    b.onclick=()=>{ showSlide(idx); }; dots.appendChild(b);
  });
}
setInterval(()=>{ try{ next(); }catch(e){} }, 5000);

/* ============== Init ============== */
function init(){
  renderTabs();
  renderDots();
  filterAndRender();
  updateCartCount();

  // منع تكبير شاشة الموبايل بسبب الحقول < 16px
  document.querySelectorAll('input, select, textarea').forEach(el=>{
    const cs = getComputedStyle(el);
    if (parseFloat(cs.fontSize) < 16) el.style.fontSize = "16px";
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  try{ init(); }catch(err){ console.error("Init error:", err); alert("خطأ في التهيئة: "+err); }
});

/* تأثير Pop على أزرار الإضافة */
document.addEventListener("DOMContentLoaded", ()=>{
  document.addEventListener("click", (e)=>{
    const btn = e.target.closest('[data-add], [data-add-to-cart], [data-action="add"], [data-role="add"], .add-to-cart, .btn-add, .btn--add, .btn');
    if (!btn) return;
    const txt = (btn.innerText || "").trim();
    const looksLikeAdd =
      btn.matches('[data-add], [data-add-to-cart], [data-action="add"], [data-role="add"], .add-to-cart, .btn-add, .btn--add') ||
      /أضف|اضافة|إضافة|Add/i.test(txt);
    if (!looksLikeAdd) return;
    btn.classList.add("added");
    setTimeout(()=> btn.classList.remove("added"), 240);
  });
 
});


/* زر عرض المزيد/أقل — تفويض عام واحد فقط */
document.addEventListener("click", function(e){
  const btn = e.target.closest(".show-toggle");
  if (!btn) return;
  const list = btn.closest(".card__specs");
  const isOpen = list.getAttribute("data-collapsed") === "false";
  list.setAttribute("data-collapsed", isOpen ? "true" : "false");
  btn.textContent = isOpen ? "عرض المزيد" : "عرض أقل";
  btn.setAttribute("aria-expanded", (!isOpen).toString());
});
