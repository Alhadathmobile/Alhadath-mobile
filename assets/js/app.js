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
    image: "assets/images/a06-blue.jpeg",
    variants: [
      { id: "64-4+4",  label: "64GB / 4+4GB RAM", price: 49 },
      { id: "128-4+4", label: "128GB / 4+4GB RAM", price: 59 }
    ],
    colors: [
    { id:"black", label:"Black (أسود)",  hex:"#0f172a", image:"assets/images/a06-black.jpeg"  },
    { id:"blue",  label:"Light Blue(أزرق فاتح)",  hex:"#EOFFFF", image:"assets/images/a06-blue.jpeg"  },
    { id:"gold",  label:"Gold (ذهبي)",  hex:"#c08f3f", image:"assets/images/a06-gold.jpeg"  }
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
  id: "samsung-galaxy-a07",
  title: "Samsung Galaxy A07",
  brand: "Samsung",
  category: "smart",
  image: "assets/images/samsung-galaxy-a07.jpg",
  variants: [
    { id: "64-4", label: "64GB / 4+4 GB RAM", price: 60 },
    { id: "128-4", label: "128GB / 4+4 GB RAM", price: 70 },
    { id: "128-6", label: "128GB / 6+6 GB RAM", price: 80 }
  ],
  colors: [
    { id: "black", label: "Black (أسود)", hex: "#000000", image: "assets/images/samsung-galaxy-a07-black.jpg" },
    { id: "green", label: "Green (أخضر)", hex: "#4CAF50", image: "assets/images/samsung-galaxy-a07-green.jpg" },
    { id: "light-violet", label: "Light Violet (بنفسجي فاتح)", hex: "#9B5DE5", image: "assets/images/samsung-galaxy-a07-light-violet.jpg" }
  ],
  specs: [
    "شاشة 6.7 بوصة PLS LCD، دقة HD+، معدل تحديث 90Hz",
    "المعالج: MediaTek Helio G99",
    "الذاكرة: 4GB / 6GB / 8GB RAM",
    "التخزين: 64GB / 128GB / 256GB",
    "الكاميرا الخلفية: مزدوجة 50MP + 2MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 5000mAh، شحن سريع 15W",
    "النظام: Android 15 + One UI 7",
    "مقاومة الماء والغبار: IP54"
  ],
  badge: "وصل حديثًا"
},
{
  id: "samsung-galaxy-a17",
  title: "Samsung Galaxy A17",
  brand: "Samsung",
  category: "smart",
  image: "assets/images/samsung-galaxy-a17.jpg",
  variants: [
    { id: "128-4", label: "128GB / 4+4 GB RAM", price: 105 },
    { id: "128-6", label: "128GB / 6+6 GB RAM", price: 120 },
    { id: "256-8", label: "128GB / 8+8 GB RAM", price: 140 }
  ],
  colors: [
    { id: "black", label: "Black (أسود)", hex: "#000000", image: "assets/images/samsung-galaxy-a17-black.jpg" },
    { id: "gray", label: "Gray (رمادي)", hex: "#808080", image: "assets/images/samsung-galaxy-a17-gray.jpg" },
    { id: "blue", label: "Blue (أزرق)", hex: "#1E90FF", image: "assets/images/samsung-galaxy-a17-blue.jpg" }
  ],
  specs: [
    "شاشة 6.7 بوصة Super AMOLED، دقة FHD+، معدل تحديث 90Hz",
    "المعالج: Exynos 1330",
    "الذاكرة: 4GB / 6GB / 8GB RAM",
    "التخزين: 128GB / 256GB",
    "الكاميرا الخلفية: ثلاثية 50MP + 5MP + 2MP",
    "الكاميرا الأمامية: 13MP",
    "البطارية: 5000mAh، شحن سريع 25W",
    "النظام: Android 15 + One UI 7",
    "مقاومة الماء والغبار: IP54"
  ],
  badge: "وصل حديثًا"
},
  {
    id: "s-a16",
    title: "Samsung A16",
    brand: "Samsung",
    image: "assets/images/a16-green.webp",
    variants: [
      { id: "128-4+4", label: "128GB / 4+4GB RAM", price: 99 },
      { id: "128-6+6", label: "128GB / 6+6GB RAM", price: 115 },
      { id: "256-8+8", label: "256GB / 8+8GB RAM", price: 135 }
    ],
    colors: [
    { id:"black",  label:"Black (أسود)",  hex:"#111827", image:"assets/images/a16-black.webp"  },
    { id:"green",  label:"Light Green (أخضر)",  hex:"#86efac", image:"assets/images/a16-green.webp" },
    { id:"silver", label:"Gray (رمادي)",   hex:"#cbd5e1", image:"assets/images/a16-silver.jpg"}
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
    image: "assets/images/a26-mint.jpg",
    variants: [
      { id: "128-6+6", label: "128GB / 6+6GB RAM", price: 140 },
      { id: "256-8+8", label: "256GB / 8+8GB RAM", price: 160 }
    ],
    colors: [
    { id:"black",  label:"Black (أسود)",  hex:"#111827", image:"assets/images/a26-black.jpeg"  },
    { id:"green",  label:"Mint (أخضر)",  hex:"#86efac", image:"assets/images/a26-mint.jpg" },
    { id:"white", label:"White (أبيض)",   hex:"#FFFFFF", image:"assets/images/a26-white.jpg"}
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
    id: "s-a36-5g",
    title: "Samsung A36 5G",
    brand: "Samsung",
    image: "assets/images/a36-awesome-violet.jpg",
    variants: [
      { id: "128-8+8", label: "128GB / 8+8GB RAM", price: 190 },
      { id: "256-8+8", label: "256GB / 8+8GB RAM", price: 210 }
    ],
    colors: [
    { id:"black",  label:"Awesome Black (أسود)",  hex:"#111827", image:"assets/images/a36-black.jpg"  },
    { id:"violet",  label:"Awesome Lavender (اللافندر)",  hex:"#EE82EE", image:"assets/images/a36-awesome-violet.jpg" },
    { id:"white", label:"Awesome White (أبيض)",   hex:"#FFFFFF", image:"assets/images/a36-awesome-white.jpg"}
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
    image: "assets/images/a56-pink.jpg",
    variants: [
      { id: "128-8+8",  label: "128GB / 8+8GB RAM",  price: 220 },
      { id: "256-8+8",  label: "256GB / 8+8GB RAM",  price: 260 },
      { id: "256-12+12",label: "256GB / 12+12GB RAM", price: 299 }
    ],
    colors: [
    { id:"black",  label:"Awesome Graphite (الرصاصي)",  hex:"#111827", image:"assets/images/a56-black.jpg"  },
    { id:"pink",  label:"Awesome Pink (زهر)",  hex:"#FFC0CB", image:"assets/images/a56-pink.jpg" },
    { id:"gray", label:"Awesome Lighte (رمادي)",   hex:"#D3D3D3", image:"assets/images/a56-awesome-lightgray.jpg"}
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
    image:"assets/images/s25-titanium-gray.jpg",
    variants: [
      { id: "256-12+12", label: "256GB / 12+12GB RAM", price: 760 },
      { id: "1T-12+12",   label: "1TB / 12+12GB RAM",   price: 1099 }
    ],
    colors: [
    { id:"black",  label:"Titanium Jetblack (أسود)",  hex:"#0F0F0F", image:"assets/images/s25-titanium-black.jpg"  },
    { id:"gray",  label:"Titanium Gray (رمادي)",  hex:"#878681", image:"assets/images/s25-titanium-gray.jpg" },
    { id:"white", label:"Titanium Whitesilver (أبيض)",   hex:"#FFFFFF", image:"assets/images/s25-titanium-white.jpg"}
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
    {
  id: "samsung-galaxy-z-fold7",
  title: "Samsung Galaxy Z Fold7",
  brand: "Samsung",
  category: "phones",
  image: "assets/images/samsung-galaxy-z-fold7.jpg",
  variants: [
    { id: "256-12", label: "256GB / 12 GB RAM", price: 1399 }
  ],
  colors: [
    { id: "blue-shadow", label: "Blue Shadow (أزرق )", hex: "#2B4F81", image: "assets/images/samsung-galaxy-z-fold7-blue.jpg" },
    { id: "silver-shadow", label: "Silver Shadow (فضي)", hex: "#C0C0C0", image: "assets/images/samsung-galaxy-z-fold7-silver.jpg" },
    { id: "jetblack", label: "Mint (أخضر فاتح)", hex: "#98FF98", image: "assets/images/samsung-galaxy-z-fold7-mint.jpg" }
  ],
  specs: [
    "شاشة رئيسية 8.0 بوصة Dynamic AMOLED 2X، دقة 1968×2184، معدل تحديث 120Hz",
    "شاشة ثانوية 6.5 بوصة Dynamic AMOLED 2X، دقة 1080×2326، معدل تحديث 120Hz",
    "المعالج: Qualcomm Snapdragon 8 Elite for Galaxy",
    "الذاكرة: 12GB RAM",
    "التخزين: 256GB / 512GB / 1TB",
    "الكاميرا الخلفية: 200MP + 12MP + 10MP",
    "الكاميرا الأمامية: 10MP",
    "البطارية: 4400mAh، شحن سريع 25W، شحن لاسلكي 15W، شحن عكسي 4.5W",
    "النظام: Android 16 + One UI 8",
    "الوزن: 215 جرام",
    "الأبعاد مفتوح: 158.4 × 143.1 × 4.2 ملم، مغلق: 158.4 × 72.8 × 8.9 ملم",
    "المواد: إطار ألومنيوم، زجاج Gorilla Glass Ceramic 2",
    "المقاومة: IPX4"
  ],
  badge: "وصل حديثًا"
},
{
  id: "samsung-galaxy-z-flip7",
  title: "Samsung Galaxy Z Flip7",
  brand: "Samsung",
  category: "phones",
  image: "assets/images/samsung-galaxy-z-flip7.jpg",
  variants: [
    { id: "256-12", label: "256GB / 12 GB RAM", price: 799 }
  ],
  colors: [
    { id: "blue-shadow", label: "Blue Shadow (أزرق )", hex: "#2B4F81", image: "assets/images/samsung-galaxy-z-flip7-blue.jpg" },
    { id: "jetblack", label: "Jetblack (أسود )", hex: "#000000", image: "assets/images/samsung-galaxy-z-flip7-black.jpg" },
    { id: "coralred", label: "Coral Red (أحمر مرجاني)", hex: "#FF4040", image: "assets/images/samsung-galaxy-z-flip7-red.jpg" },
    { id: "mint", label: "Mint (أخضر فاتح)", hex: "#98FF98", image: "assets/images/samsung-galaxy-z-flip7-mint.jpg" }
  ],
  specs: [
    "شاشة رئيسية 6.9 بوصة Dynamic AMOLED 2X، دقة 1080×2520، معدل تحديث 120Hz",
    "شاشة ثانوية 4.1 بوصة Super AMOLED، دقة 720×748",
    "المعالج: Qualcomm Snapdragon 8 Gen 3",
    "الذاكرة: 8GB RAM",
    "التخزين: 256GB / 512GB",
    "الكاميرا الخلفية: 50MP + 12MP",
    "الكاميرا الأمامية: 10MP",
    "البطارية: 3700mAh، شحن سريع 25W، شحن لاسلكي 15W، شحن عكسي 4.5W",
    "النظام: Android 16 + One UI 8",
    "الوزن: 188 جرام",
    "الأبعاد مفتوح: 166.7 × 75.2 × 6.5 ملم، مغلق: 85.5 × 75.2 × 13.7 ملم",
    "المواد: إطار ألومنيوم، زجاج Gorilla Glass 5",
    "المقاومة: IPX8"
  ],
  badge: "وصل حديثًا"
},

  // iPhone
  { id:"ip-16pm",
   title:"iPhone 16 Pro Max",
   brand:"iPhone",
   image:"assets/images/16-pro-max-desert-titanium.jpg",
   variants: [
      { id: "256", label: "256GB ", price: 910 },
      { id: "512",   label: "512GB ",   price: 990 },
     { id: "1T",   label: "1TB ",   price: 1099 }
    ],
   colors: [
    { id:"gold", label:"Deser Titanium (صحراوي)",  hex:"#C2B280", image:"assets/images/16-pro-max-desert-titanium.jpg"  },
    { id:"natural",  label:"Natural Titanium (سلفر)",  hex:"#D9D9D9", image:"assets/images/16-pro-max-natural-titanium.jpg"  },
    { id:"black",  label:"Black Titanium (أسود)",  hex:"#0F0F0F", image:"assets/images/16-pro-max-black-titanium.jpg"  }
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
  {
  id: "iphone-17-pro-max",
  title: "iPhone 17 Pro Max",
  brand: "Apple",
  category: "smart",
  image: "assets/images/17-pro-max-deep-blue.jpg",
  variants: [
    { id: "256", label: "256GB / 12GB RAM", price: 1199 },
    { id: "512", label: "512GB / 12GB RAM", price: 1399 },
    { id: "1TB", label: "1TB / 12GB RAM", price: 1599 },
    { id: "2TB", label: "2TB / 12GB RAM", price: 1999 }
  ],
  colors: [
    { id: "cosmic-orange", label: "Cosmic Orange (أورانج)", hex: "#FF7300", image: "assets/images/17-pro-max-orange.jpg" },
    { id: "deep-blue", label: "Deep Blue (أزرق غامق)", hex: "#003366", image: "assets/images/17-pro-max-deep-blue.jpg" },
    { id: "silver", label: "Cosmic Silver (فضي)", hex: "#CCCCCC", image: "assets/images/17-pro-max-silver.jpg" }
  ],
  specs: [
    "شاشة 6.9 بوصة Super Retina XDR OLED، 120Hz",
    "المعالج: Apple A19 Pro",
    "الذاكرة: 12GB RAM",
    "الكاميرا الخلفية: ثلاثية 48MP",
    "الكاميرا الأمامية: 18MP",
    "البطارية: حوالي 5000mAh، شحن سريع 40W",
    "الشحن اللاسلكي: MagSafe و Qi2",
    "مقاومة الماء/الغبار: IP68",
    "النظام: iOS 26"
  ]
},
  {
  id: "iphone-17",
  title: "iPhone 17",
  brand: "iphone",
  category: "smart",
  image: "assets/images/17-white.jpg",
  variants: [
    { id: "128", label: "128GB / 8GB RAM", price: 899 },
    { id: "256", label: "256GB / 8GB RAM", price: 999 },
    { id: "512", label: "512GB / 8GB RAM", price: 1099 }
  ],
  colors: [
    { id: "black", label: "Black (أسود)", hex: "#1C1C1E", image: "assets/images/17-black.jpg" },
    { id: "white", label: "White (أبيض)", hex: "#FFFFFF", image: "assets/images/17-white.jpg" },
    { id: "blue", label: "Mist Blue (أزرق)", hex: "#215EBC", image: "assets/images/17-blue.jpg" }
  ],
  specs: [
    "شاشة 6.1 بوصة Super Retina XDR OLED، 120Hz",
    "المعالج: Apple A18",
    "الذاكرة: 8GB RAM",
    "التخزين: 128GB / 256GB / 512GB",
    "الكاميرا الخلفية: مزدوجة 48MP",
    "الكاميرا الأمامية: 12MP",
    "البطارية: حوالي 3500mAh، شحن سريع 25W",
    "مقاومة الماء/الغبار: IP68",
    "النظام: iOS 26"
  ]
},
{
  id: "iphone-17-pro",
  title: "iPhone 17 Pro",
  brand: "iphone",
  category: "smart",
  image: "assets/images/17-pro-orange.jpg",
  variants: [
    { id: "256", label: "256GB / 12GB RAM", price: 1099 },
    { id: "512", label: "512GB / 12GB RAM", price: 1249 },
    { id: "1TB", label: "1TB / 12GB RAM", price: 1449 }
  ],
  colors: [
    { id: "cosmic-orange", label: "Cosmic Orange (أورانج)", hex: "#FF7300", image: "assets/images/17-pro-orange.jpg" },
    { id: "dark-blue", label: "Deep Blue (أزرق غامق)", hex: "#003366", image: "assets/images/17-pro-deep-blue.jpg" },
    { id: "silver", label: "Silver (الفضي)", hex: "#E0E0E0", image: "assets/images/17-pro-silver.jpg" }
  ],
  specs: [
    "شاشة 6.3 بوصة Super Retina XDR OLED، 120Hz",
    "المعالج: Apple A19 Pro",
    "الذاكرة: 12GB RAM",
    "التخزين: 256GB / 512GB / 1TB",
    "الكاميرا الخلفية: ثلاثية 48MP",
    "الكاميرا الأمامية: 18MP",
    "البطارية: حوالي 4300mAh، شحن سريع 30W",
    "مقاومة الماء/الغبار: IP68",
    "النظام: iOS 26"
  ]
},

  { id:"ip-16p",
   title:"iPhone 16 Pro",
   brand:"iPhone",
   image:"assets/images/16-pro-natural-titanium.jpg",
   variants: [
      { id: "256", label: "256GB ", price: 850 },
      { id: "512",   label: "512GB ",   price: 950 },
     { id: "1T",   label: "1TB ",   price: 1050 }
    ],
      colors: [
    { id:"gold", label:"Desert Titanium (صحراوي)",  hex:"#C2B280", image:"assets/images/16-pro-desert-titanium.jpg"  },
    { id:"natural",  label:"Natural Titanium (سلفر)",  hex:"#D9D9D9", image:"assets/images/16-pro-natural-titanium.jpg"  },
    { id:"black",  label:"Black Titanium (أسود)",  hex:"#0F0F0F", image:"assets/images/16-pro-black.jpg"  }
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
  image: "assets/images/16-blue.jpg",
  variants: [
    { id: "128", label: "128GB", price: 580 },
    { id: "256", label: "256GB", price: 610 }
  ],
        colors: [
    { id:"pink", label:"Pink (االزهري)",  hex:"#FFC0CB", image:"assets/images/16-pink.jpg"  },
    { id:"blue",  label:"Ultramarina (أزرق)",  hex:"#0000FF", image:"assets/images/16-blue.jpg"  },
    { id:"black",  label:"Black (أسود)",  hex:"#0F0F0F", image:"assets/images/16-black.jpg"  }
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
  image: "assets/images/15-black.jpg",
  variants: [
    { id: "128", label: "128GB", price: 490 },
    { id: "256", label: "256GB", price: 540 }
  ],
   colors: [
    { id:"black",  label:"Black (أسود)",  hex:"#0F0F0F", image:"assets/images/15-black.jpg"  }
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
  image: "assets/images/14-starlight.jpeg",
  variants: [
    { id: "128", label: "128GB", price: 440 },
    { id: "256", label: "256GB", price: 500 }
  ],
   colors: [
    { id:"starlight",  label:"Starlight (أبيض لؤلؤي)",  hex:"#FFFFFF", image:"assets/images/14-starlight.jpg"  }
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
  id: "iphone-13",
  title: "iPhone 13",
  brand: "iphone",
  category: "phone",
  image: "assets/images/13-starlight.jpg",
  variants: [
    { id: "128", label: "128GB / 4GB RAM", price: 430 },
    { id: "256", label: "256GB / 4GB RAM", price: 480 },
    { id: "512", label: "512GB / 4GB RAM", price: 550 }
  ],
  colors: [
    { id: "midnight", label: "Midnight (أسود)", hex: "#1C1C1E", image: "assets/images/13-black.jpg" },
    { id: "starlight", label: "Starlight (أبيض لؤلؤي)", hex: "#F9F6EF", image: "assets/images/13-starlight.jpg" }
  ],
  specs: [
    "الشاشة: 6.1 بوصة Super Retina XDR OLED بدقة 2532×1170 بكسل",
    "المعالج: Apple A15 Bionic سداسي النواة",
    "الكاميرا الخلفية: مزدوجة 12MP (واسعة + فائقة الاتساع)",
    "الكاميرا الأمامية: 12MP TrueDepth",
    "التخزين: 128/256/512GB",
    "الذاكرة: 4GB RAM",
    "النظام: iOS 15 (قابل للتحديث حتى iOS 18)",
    "البطارية: 3240mAh تدعم شحن سريع 20W و MagSafe",
    "مقاومة الماء/الغبار: IP68",
    "الأبعاد: 146.7 × 71.5 × 7.65 مم",
    "الوزن: 174 غرام"
  ]
}, 

    {id: "ip-16-plus",
  title: "iPhone 16 Plus",
  brand: "iPhone",
  image: "assets/images/16-plus-blue.jpg",
  variants: [
    { id: "128", label: "128GB", price: 560 },
    { id: "256", label: "256GB", price: 650 },
    { id: "512", label: "512GB", price: 720 }
  ],
     colors: [
    { id:"white", label:"White (أبيض)",  hex:"#FFFFFF", image:"assets/images/16-plus-white.jpg"  },
    { id:"blue",  label:"Ultramarine (أزرق)",  hex:"#0000FF", image:"assets/images/16-plus-blue.jpg"  },
    { id:"black",  label:"Black (أسود)",  hex:"#0F0F0F", image:"assets/images/16-plus-black.jpg"  }
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
  {
  id: "redmi-note-14-4g",
  title: "Redmi Note 14 4G",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-note-14-black.jpg",
  variants: [
    { id: "256", label: "256GB / 8+8 GB RAM", price: 140 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black (أسود)", hex: "#000000", image: "assets/images/redmi-note-14-black.jpg" },
    { id: "ocean-blue", label: "Ocean Blue (أزرق)", hex: "#0077B6", image: "assets/images/redmi-note-14-blue.jpg" },
  ],
  specs: [
    "شاشة 6.6 بوصة AMOLED، 90Hz",
    "المعالج: MediaTek Helio G99",
    "الذاكرة: 4GB / 6GB / 8GB RAM",
    "التخزين: 64GB / 128GB / 256GB",
    "الكاميرا الخلفية: مزدوجة 50MP + 2MP",
    "الكاميرا الأمامية: 13MP",
    "البطارية: حوالي 5000mAh، شحن سريع 18W",
    "النظام: Android 14 + MIUI 16"
  ]
},
  {
  id: "redmi-a5",
  title: "Redmi A5",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-a5.jpg",
  variants: [
    { id: "64", label: "64 GB / 3+3 GB RAM", price: 55 },
    { id: "128", label: "128 GB / 4+4 GB RAM", price: 65 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black (أسود)", hex: "#000000", image: "assets/images/redmi-a5-midnight-black.jpg" },
    { id: "lake-green", label: "Lake Green (أخضر)", hex: "#4CAF50", image: "assets/images/redmi-a5-lake-green.jpg" },
    { id: "ocean-blue", label: "Ocean Blue (أزرق )", hex: "#2196F3", image: "assets/images/redmi-a5-ocean-blue.jpg" },
    { id: "sandy-gold", label: "Sandy Gold (ذهبي)", hex: "#D4AF37", image: "assets/images/redmi-a5-sandy-gold.jpg" }
  ],
  specs: [
    "شاشة 6.88 بوصة، تدعم معدل تحديث حتى 120 Hz",
    "المعالج: Unisoc T7250",
    "الذاكرة: 3 GB / 4 GB RAM",
    "التخزين: 64 GB / 128 GB",
    "الكاميرا الخلفية: 32 MP + عدسة ثانوية",
    "الكاميرا الأمامية: 8 MP",
    "البطارية: حوالي 5200 mAh، دعم شحن سريع 15 W",
    "الأبعاد: 171.7 × 77.8 × 8.26 مم، الوزن ~193 جرام",
    "النظام: Android مع واجهة MIUI"
  ]
},
  {
  id: "redmi-pad-2-wifi",
  title: "Redmi Pad 2 Wifi",
  brand: "Redmi/MI",
  category: "tablet",
  image: "assets/images/redmi-pad-2-gray.jpg",
  variants: [
    { id: "4-128", label: "128GB / 4GB RAM", price: 125 },
    { id: "8-256", label: "256GB / 8GB RAM", price: 159 }
  ],
  colors: [
    { id: "gray", label: "Graphite Gray (رمادي)", hex: "#4B4B4B", image: "assets/images/redmi-pad-2-gray.webp" },
    { id: "green", label: "Mint Green (أخضر)", hex: "#A8E6CF", image: "assets/images/redmi-pad-2-mint.jpg" },
    { id: "purple", label: "Lavender Purple (بنفسجي)", hex: "#9B59B6", image: "assets/images/redmi-pad-2-lavender.webp" }
  ],
  specs: [
    "شاشة 11 بوصة، دقة 2.5K (2560×1600)، معدل تحديث 90Hz",
    "المعالج: MediaTek Helio G100-Ultra (6nm)",
    "المعالج الرسومي: Mali-G57 MC2",
    "الكاميرا الخلفية: 8MP",
    "الكاميرا الأمامية: 5MP",
    "البطارية: 9000mAh مع شحن سريع 18W (شاحن 15W مرفق)",
    "النظام: HyperOS 2 (Android 15)",
    "التخزين: 128GB أو 256GB (UFS 2.2) + دعم microSD حتى 2TB",
    "الصوت: 4 سماعات مع Dolby Atmos",
    "الأبعاد: 254.6 × 166 × 7.36 مم",
    "الوزن: 510غ (WiFi) / 518غ (4G)",
    "مقاومة الماء/الغبار: IP52",
    "ملاحظات: يدعم قلم Redmi Smart Pen (اختياري)"
  ]
},
  {
  id: "redmi-note-14-pro-4g",
  title: "Redmi Note 14 Pro 4G",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-note-14-pro-4g.jpg",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 179 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black (أسود)", hex: "#000000", image: "assets/images/redmi-note-14-pro-4g-black.jpg" },
    { id: "aurora-purple", label: "Aurora Purple (بنفسجي)", hex: "#9B5DE5", image: "assets/images/redmi-note-14-pro-4g-purple.jpg" },
    { id: "ocean-blue", label: "Ocean Blue (أزرق)", hex: "#0077B6", image: "assets/images/redmi-note-14-pro-4g-blue.jpg" }
  ],
  specs: [
    "شاشة 6.67 بوصة AMOLED، معدل تحديث 120Hz",
    "المعالج: MediaTek Helio G100 Ultra",
    "الكاميرا الخلفية: ثلاثية 200MP + 8MP + 2MP",
    "الكاميرا الأمامية: 16MP",
    "البطارية: 5500mAh، شحن سريع 45W",
    "النظام: Android 14 + MIUI 16",
    "مقاومة الماء والغبار: IP64"
  ]
},
{
  id: "redmi-note-14-pro-5g",
  title: "Redmi Note 14 Pro 5G",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-note-14-pro-5g.jpg",
  variants: [
    { id: "512-12", label: "512GB / 12+8 GB RAM", price: 245 }
  ],
  colors: [
    { id: "coral-green", label: "Coral Green (أخضر)", hex: "#2E8B57", image: "assets/images/redmi-note-14-pro-5g-green.jpg" },
    { id: "midnight-black", label: "Midnight Black (أسود)", hex: "#000000", image: "assets/images/redmi-note-14-pro-5g-black.jpg" }
  ],
  specs: [
    "شاشة 6.67 بوصة AMOLED، 1.5K، معدل تحديث 120Hz",
    "المعالج: MediaTek Dimensity 7300 Ultra",
    "الكاميرا الخلفية: 200MP + 8MP + 2MP",
    "الكاميرا الأمامية: 16MP",
    "البطارية: 5110mAh، شحن سريع 67W",
    "النظام: Android 14 + MIUI 16",
    "مقاومة الماء والغبار: IP68"
  ]
},
{
  id: "redmi-note-14-pro-plus-5g",
  title: "Redmi Note 14 Pro+ 5G",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-note-14-pro-plus-5g.jpg",
  variants: [
    { id: "256-12", label: "256GB / 12+8 GB RAM", price: 345 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black (أسود)", hex: "#000000", image: "assets/images/redmi-note-14-pro-plus-5g-black.jpg" },
    { id: "mist-purple", label: "Mist Purple (بنفسجي)", hex: "#9B5DE5", image: "assets/images/redmi-note-14-pro-plus-5g-purple.jpg" }
  ],
  specs: [
    "شاشة 6.67 بوصة AMOLED، 1.5K، معدل تحديث 120Hz",
    "المعالج: Snapdragon 7s Gen 3",
    "الكاميرا الخلفية: 200MP + 8MP + 2MP (OIS)",
    "الكاميرا الأمامية: 16MP",
    "البطارية: 5000mAh، شحن سريع 120W HyperCharge",
    "النظام: Android 14 + MIUI 16",
    "مقاومة الماء والغبار: IP68"
  ]
},
{
  id: "redmi-15c",
  title: "Redmi 15C",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-15c.jpg",
  variants: [
    { id: "128-4", label: "128GB / 4+4 GB RAM", price: 75 },
    { id: "256-6", label: "256GB / 8+8 GB RAM", price: 95 }
  ],
  colors: [
    { id: "moonlight-blue", label: "Moonlight Blue (أزرق)", hex: "#1E90FF", image: "assets/images/redmi-15c-blue.jpg" },
    { id: "midnight-black", label: "Midnight Black (أسود)", hex: "#000000", image: "assets/images/redmi-15c-black.jpg" },
    { id: "mint-green", label: "Mint Green (أخضر)", hex: "#98FB98", image: "assets/images/redmi-15c-green.jpg" },
    { id: "twilight-orange", label: "Twilight Orange (أورانج)", hex: "#FF8C00", image: "assets/images/redmi-15c-orange.jpg" }
  ],
  specs: [
    "شاشة 6.79 بوصة IPS LCD، معدل تحديث 120Hz",
    "المعالج: MediaTek Helio G81 Ultra",
    "الكاميرا الخلفية: 50MP + 2MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 6000mAh، شحن سريع 33W",
    "النظام: Android 14 + MIUI 16",
    "مقاومة الماء والغبار: IP64"
  ]
},
{
  id: "redmi-15",
  title: "Redmi 15",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-15.jpg",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 125 }
  ],
  colors: [
    { id: "black", label: "Black (أسود)", hex: "#000000", image: "assets/images/redmi-15-black.jpg" },
    { id: "blue", label: "Blue (أزرق)", hex: "#1E90FF", image: "assets/images/redmi-15-blue.jpg" },
    { id: "green", label: "Green (أخضر)", hex: "#32CD32", image: "assets/images/redmi-15-green.jpg" }
  ],
  specs: [
    "شاشة 6.67 بوصة AMOLED، معدل تحديث 120Hz",
    "المعالج: Snapdragon 7s Gen 2",
    "الكاميرا الخلفية: 64MP + 8MP + 2MP",
    "الكاميرا الأمامية: 16MP",
    "البطارية: 5000mAh، شحن سريع 33W",
    "النظام: Android 14 + MIUI 16"
  ]
},
{
  id: "xiaomi-15t",
  title: "Xiaomi 15T",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/xiaomi-15t.jpg",
  variants: [
    { id: "512-12", label: "512GB / 12+8 GB RAM", price: 399 }
  ],
  colors: [
    { id: "black", label: "Black (أسود)", hex: "#000000", image: "assets/images/xiaomi-15t-black.jpg" },
    { id: "gray", label: "Gray (رمادي)", hex: "#808080", image: "assets/images/xiaomi-15t-gray.jpg" }
  ],
  specs: [
    "شاشة 6.83 بوصة AMOLED، معدل تحديث 120Hz",
    "المعالج: Snapdragon 8s Gen 3",
    "الكاميرا الخلفية: 50MP + 12MP + 10MP",
    "الكاميرا الأمامية: 32MP",
    "البطارية: 5500mAh، شحن سريع 67W",
    "النظام: Android 15 + HyperOS"
  ]
},
{
  id: "xiaomi-15t-pro",
  title: "Xiaomi 15T Pro",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/xiaomi-15t-pro.jpg",
  variants: [
    { id: "1T-12", label: "1TGB / 12+8 GB RAM", price: 539 }
  ],
  colors: [
    { id: "black", label: "Black (أسود)", hex: "#000000", image: "assets/images/xiaomi-15t-pro-black.jpg" },
    { id: "gray", label: "Gray (رمادي)", hex: "#808080", image: "assets/images/xiaomi-15t-pro-gray.jpg" }
  ],
  specs: [
    "شاشة 6.83 بوصة AMOLED، معدل تحديث 144Hz",
    "المعالج: Snapdragon 8 Gen 4",
    "الكاميرا الخلفية: 50MP + 50MP + 64MP",
    "الكاميرا الأمامية: 32MP",
    "البطارية: 5500mAh، شحن سريع 120W",
    "النظام: Android 15 + HyperOS"
  ]
},
{
  id: "redmi-pad-pro",
  title: "Redmi Pad Pro",
  brand: "Redmi/MI",
  category: "tablet",
  image: "assets/images/redmi-pad-pro.jpg",
  variants: [
    { id: "256-8", label: "256GB / 8GB RAM", price: 249 }
  ],
  colors: [
    { id: "blue", label: "Blue (أزرق)", hex: "#1E90FF", image: "assets/images/redmi-pad-pro-blue.jpg" },
    { id: "gray", label: "Gray (رمادي)", hex: "#808080", image: "assets/images/redmi-pad-pro-gray.jpg" },
    { id: "green", label: "Green (أخضر)", hex: "#228B22", image: "assets/images/redmi-pad-pro-green.jpg" }
  ],
  specs: [
    "شاشة 12.1 بوصة IPS LCD، معدل تحديث 120Hz",
    "المعالج: Snapdragon 7s Gen 2",
    "الكاميرا الخلفية: 13MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 10000mAh، شحن سريع 33W",
    "النظام: Android 14 + MIUI Pad",
    "أربع سماعات Dolby Atmos"
  ]
},
{
  id: "redmi-pad-pro-5g",
  title: "Redmi Pad Pro 5G",
  brand: "Redmi/MI",
  category: "tablet",
  image: "assets/images/redmi-pad-pro-5g.jpg",
  variants: [
    { id: "256-8", label: "256GB / 8GB RAM", price: 289 }
  ],
  colors: [
    { id: "blue", label: "Blue (أزرق)", hex: "#1E90FF", image: "assets/images/redmi-pad-pro-5g-blue.jpg" },
    { id: "gray", label: "Gray (رمادي)", hex: "#808080", image: "assets/images/redmi-pad-pro-5g-gray.jpg" },
    { id: "green", label: "Green (أخضر)", hex: "#228B22", image: "assets/images/redmi-pad-pro-5g-green.jpg" }
  ],
  specs: [
    "شاشة 12.1 بوصة IPS LCD، معدل تحديث 120Hz",
    "المعالج: Snapdragon 7s Gen 2 مع دعم 5G",
    "الكاميرا الخلفية: 13MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 10000mAh، شحن سريع 33W",
    "النظام: Android 14 + MIUI Pad",
    "أربع سماعات Dolby Atmos، دعم القلم والكيبورد"
  ],
},

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
