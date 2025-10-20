/* ============ Alhadath Mobile (SAFE) ============ */
const CURRENCY = "JD";
const WHATSAPP_NUMBER = ""; // احتياطي فقط إن أردت فتح واتساب بدل الإرسال
const ORDER_ENDPOINT = "https://alhadath-order.ahmad2120omar.workers.dev/orders";

// لا نستخدم أي توكنات في الواجهة
const TELEGRAM_BOT_TOKEN = "";
const TELEGRAM_CHAT_ID = "";

const BRANDS = ["Samsung","iPhone","Redmi/MI","TECNO","Infinix","HONOR","Accessories"];

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
  image: "assets/images/a07-green.webp",
  variants: [
    { id: "64-4", label: "64GB / 4+4 GB RAM", price: 60 },
    { id: "128-4", label: "128GB / 4+4 GB RAM", price: 70 },
    { id: "128-6", label: "128GB / 6+6 GB RAM", price: 80 }
  ],
  colors: [
    { id: "black", label: "Black (أسود)", hex: "#000000", image: "assets/images/a07-black.jpg" },
    { id: "green", label: "Green (أخضر)", hex: "#4CAF50", image: "assets/images/a07-green.webp" },
    { id: "light-violet", label: "Light Violet (بنفسجي فاتح)", hex: "#9B5DE5", image: "assets/images/a07-purple.webp" }
  ],
  specs: [
    "شاشة 6.7 بوصة PLS LCD، دقة HD+، معدل تحديث 90Hz",
    "المعالج: MediaTek Helio G99",
    "الكاميرا الخلفية: مزدوجة 50MP + 2MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 5000mAh، شحن سريع 25W",
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
  image: "assets/images/a17-gray.webp",
  variants: [
    { id: "128-4", label: "128GB / 4+4 GB RAM", price: 105 },
    { id: "128-6", label: "128GB / 6+6 GB RAM", price: 120 },
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 140 }
  ],
  colors: [
    { id: "black", label: "Black (أسود)", hex: "#000000", image: "assets/images/a17-black.webp" },
    { id: "gray", label: "Gray (رمادي)", hex: "#808080", image: "assets/images/a17-gray.webp" },
    { id: "blue", label: "Blue (أزرق)", hex: "#1E90FF", image: "assets/images/a17-blue.webp" }
  ],
  specs: [
    "شاشة 6.7 بوصة Super AMOLED، دقة FHD+، معدل تحديث 90Hz",
    "المعالج: Exynos 1330",
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
      { id: "128-8+8",  label: "128GB / 8+8GB RAM",  price: 235 },
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
  image: "assets/images/z-fold-7-blue.webp",
  variants: [
    { id: "256-12", label: "256GB / 12 GB RAM", price: 1399 }
  ],
  colors: [
    { id: "blue-shadow", label: "Blue Shadow (أزرق )", hex: "#2B4F81", image: "assets/images/z-fold-7-blue.webp" },
    { id: "silver-shadow", label: "Silver Shadow (فضي)", hex: "#C0C0C0", image: "assets/images/z-fold-7-silver.webp" }
    ],
  specs: [
    "شاشة رئيسية 8.0 بوصة Dynamic AMOLED 2X، دقة 1968×2184، معدل تحديث 120Hz",
    "شاشة ثانوية 6.5 بوصة Dynamic AMOLED 2X، دقة 1080×2326، معدل تحديث 120Hz",
    "المعالج: Qualcomm Snapdragon 8 Elite for Galaxy",
    "الكاميرا الخلفية: 200MP + 12MP + 10MP",
    "الكاميرا الأمامية: 10MP",
    "البطارية: 4400mAh، شحن سريع 25W، شحن لاسلكي 15W، شحن عكسي 4.5W",
    "النظام: Android 16 + One UI 8"
  ],
  badge: "وصل حديثًا"
},
{
  id: "samsung-galaxy-z-flip7",
  title: "Samsung Galaxy Z Flip7",
  brand: "Samsung",
  category: "phones",
  image: "assets/images/z-flip-7-black.webp",
  variants: [
    { id: "256-12", label: "256GB / 12 GB RAM", price: 799 }
  ],
  colors: [
    { id: "blue-shadow", label: "Blue Shadow (أزرق )", hex: "#2B4F81", image: "assets/images/z-flip-7-blue.webp" },
    { id: "jetblack", label: "Jetblack (أسود )", hex: "#000000", image: "assets/images/z-flip-7-black.webp" }
  ],
  specs: [
    "شاشة رئيسية 6.9 بوصة Dynamic AMOLED 2X، دقة 1080×2520، معدل تحديث 120Hz",
    "شاشة ثانوية 4.1 بوصة Super AMOLED، دقة 720×748",
    "المعالج: Qualcomm Snapdragon 8 Gen 3",
    "الكاميرا الخلفية: 50MP + 12MP",
    "الكاميرا الأمامية: 10MP",
    "البطارية: 3700mAh، شحن سريع 25W، شحن لاسلكي 15W، شحن عكسي 4.5W",
    "النظام: Android 16 + One UI 8"
  ],
  badge: "وصل حديثًا"
},

  // Iphone
  { id:"ip-16pm",
   title:"Iphone 16 Pro Max",
   brand:"Iphone",
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
  id: "iPhone-17-pro-max",
  title: "iPhone 17 Pro Max",
  brand: "iPhone",
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
    "الكاميرا الخلفية: ثلاثية 48MP",
    "الكاميرا الأمامية: 18MP",
    "البطارية: حوالي 5000mAh، شحن سريع 40W",
    "الشحن اللاسلكي: MagSafe و Qi2",
    "مقاومة الماء/الغبار: IP68",
    "النظام: iOS 26"
  ]
},
  {
  id: "iPhone-17",
  title: "iPhone 17",
  brand: "iPhone",
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
    "الكاميرا الخلفية: مزدوجة 48MP",
    "الكاميرا الأمامية: 12MP",
    "البطارية: حوالي 3500mAh، شحن سريع 25W",
    "مقاومة الماء/الغبار: IP68",
    "النظام: iOS 26"
  ]
},
{
  id: "iPhone-17-pro",
  title: "iPhone 17 Pro",
  brand: "iPhone",
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
    "الكاميرا الخلفية: ثلاثية 48MP",
    "الكاميرا الأمامية: 18MP",
    "البطارية: حوالي 4300mAh، شحن سريع 30W",
    "مقاومة الماء/الغبار: IP68",
    "النظام: iOS 26"
  ]
},

  { id:"iPhone-16pro",
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
    {id: "iPhone-16",
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
  
  { id: "iPhone-15",
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
  {id: "iPhone-14",
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
  id: "iPhone-13",
  title: "iPhone 13",
  brand: "iPhone",
  category: "smart",
  image: "assets/images/13-black.jpg",
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
    "النظام: iOS 15 (قابل للتحديث حتى iOS 18)",
    "البطارية: 3240mAh تدعم شحن سريع 20W و MagSafe",
    "مقاومة الماء/الغبار: IP68",
    "الأداء: مناسب للتطبيقات اليومية، تصوير جيد، شاشة ملوّنة ونقية"
  ]
}, 

    {id: "iPhone-16-plus",
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
    "نظام التشغيل: iOS 18"
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
    { id: "ocean-blue", label: "Ocean Blue (أزرق)", hex: "#0077B6", image: "assets/images/redmi-note-14-blue.webp" },
  ],
  specs: [
    "شاشة 6.6 بوصة AMOLED، 90Hz",
    "المعالج: MediaTek Helio G99",
    "الكاميرا الخلفية: مزدوجة 50MP + 2MP",
    "الكاميرا الأمامية: 13MP",
    "البطارية: حوالي 5000mAh، شحن سريع 18W",
    "النظام: Android 14 + MIUI 16",
    "الأداء: جيد – مناسب للتصفح والاستخدام اليومي"
  ]
},
  {
  id: "redmi-a5",
  title: "Redmi A5",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-a5-blue.webp",
  variants: [
    { id: "64", label: "64 GB / 3+3 GB RAM", price: 55 },
    { id: "128", label: "128 GB / 4+4 GB RAM", price: 65 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black (أسود)", hex: "#000000", image: "assets/images/redmi-a5-black.webp" },
    { id: "ocean-blue", label: "Ocean Blue (أزرق )", hex: "#2196F3", image: "assets/images/redmi-a5-blue.webp" },
    { id: "sandy-gold", label: "Sandy Gold (ذهبي)", hex: "#D4AF37", image: "assets/images/redmi-a5-gold.webp" }
  ],
  specs: [
    "شاشة 6.88 بوصة، تدعم معدل تحديث حتى 120 Hz",
    "المعالج: Unisoc T7250",
    "الكاميرا الخلفية: 32 MP + عدسة ثانوية",
    "الكاميرا الأمامية: 8 MP",
    "البطارية: حوالي 5200 mAh، دعم شحن سريع 15 W",
    "النظام: Android مع واجهة MIUI",
    "الأداء: متوسط – مناسب للتصفح والاستخدام اليومي"
  ]
},
  {
  id: "redmi-pad-2-wifi",
  title: "Redmi Pad 2 Wifi",
  brand: "Redmi/MI",
  category: "tablet",
  image: "assets/images/redmi-pad-2-gray.png",
  variants: [
    { id: "4-128", label: "128GB / 4GB RAM", price: 125 },
    { id: "8-256", label: "256GB / 8GB RAM", price: 159 }
  ],
  colors: [
    { id: "gray", label: "Graphite Gray (رمادي)", hex: "#4B4B4B", image: "assets/images/redmi-pad-2-gray.png" },
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
    "الصوت: 4 سماعات مع Dolby Atmos",
    "مقاومة الماء/الغبار: IP52",
    "ملاحظات: يدعم قلم Redmi Smart Pen"
  ]
},
  {
  id: "redmi-note-14-pro-4g",
  title: "Redmi Note 14 Pro 4G",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-note-14-pro-purpul.jpg",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 179 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black (أسود)", hex: "#000000", image: "assets/images/redmi-note-14-pro-black.webp" },
    { id: "aurora-purple", label: "Aurora Purple (بنفسجي)", hex: "#9B5DE5", image: "assets/images/redmi-note-14-pro-purpul.webp" },
    { id: "ocean-blue", label: "Ocean Blue (أزرق)", hex: "#0077B6", image: "assets/images/redmi-note-14-pro-blue.webp" }
  ],
  specs: [
    "شاشة 6.67 بوصة AMOLED، معدل تحديث 120Hz",
    "المعالج: MediaTek Helio G100 Ultra",
    "الكاميرا الخلفية: ثلاثية 200MP + 8MP + 2MP",
    "الكاميرا الأمامية: 16MP",
    "البطارية: 5500mAh، شحن سريع 45W",
    "النظام: Android 14 + MIUI 16",
    "مقاومة الماء والغبار: IP64",
    "الأداء: ممتاز – مناسب للتطبيقات والألعاب والاستخدام اليومي"
  ]
},
{
  id: "redmi-note-14-pro-5g",
  title: "Redmi Note 14 Pro 5G",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-note-14-pro-black.webp",
  variants: [
    { id: "512-12", label: "512GB / 12+8 GB RAM", price: 245 }
  ],
  colors: [
    { id: "coral-green", label: "Coral Green (أخضر)", hex: "#2E8B57", image: "assets/images/redmi-note-14-5g-green.webp" },
    { id: "midnight-black", label: "Midnight Black (أسود)", hex: "#000000", image: "assets/images/redmi-note-14-pro-black.webp" }
  ],
  specs: [
    "شاشة 6.67 بوصة AMOLED، 1.5K، معدل تحديث 120Hz",
    "المعالج: MediaTek Dimensity 7300 Ultra",
    "الكاميرا الخلفية: 200MP + 8MP + 2MP",
    "الكاميرا الأمامية: 16MP",
    "البطارية: 5110mAh، شحن سريع 67W",
    "النظام: Android 14 + MIUI 16",
    "مقاومة الماء والغبار: IP68",
    "الأداء: ممتاز – مناسب للتطبيقات والألعاب والاستخدام اليومي"
  ]
},
{
  id: "redmi-note-14-pro-plus-5g",
  title: "Redmi Note 14 Pro+ 5G",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/note-14-pro-5g-plus-black.webp",
  variants: [
    { id: "256-12", label: "256GB / 12+8 GB RAM", price: 345 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black (أسود)", hex: "#000000", image: "assets/images/note-14-pro-5g-plus-black.webp" },
    { id: "mist-purple", label: "Mist Purple (بنفسجي)", hex: "#9B5DE5", image: "assets/images/note-14-pro-5g-plus-purple.webp" }
  ],
  specs: [
    "شاشة 6.67 بوصة AMOLED، 1.5K، معدل تحديث 120Hz",
    "المعالج: Snapdragon 7s Gen 3",
    "الكاميرا الخلفية: 200MP + 8MP + 2MP (OIS)",
    "الكاميرا الأمامية: 16MP",
    "البطارية: 5000mAh، شحن سريع 120W HyperCharge",
    "النظام: Android 14 + MIUI 16",
    "مقاومة الماء والغبار: IP68",
   "الأداء: ممتاز – سلس للتطبيقات والألعاب والاستخدام اليومي"
  ]
},
{
  id: "redmi-15c",
  title: "Redmi 15C",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-15c-orange.webp",
  variants: [
    { id: "128-4", label: "128GB / 4+4 GB RAM", price: 75 },
    { id: "256-6", label: "256GB / 8+8 GB RAM", price: 95 }
  ],
  colors: [
    { id: "moonlight-blue", label: "Moonlight Blue (أزرق)", hex: "#1E90FF", image: "assets/images/redmi-15c-blue.webp" },
    { id: "midnight-black", label: "Midnight Black (أسود)", hex: "#000000", image: "assets/images/redmi-15c-black.webp" },
    { id: "mint-green", label: "Mint Green (أخضر)", hex: "#98FB98", image: "assets/images/redmi-15c-green.webp" },
    { id: "twilight-orange", label: "Twilight Orange (أورانج)", hex: "#FF8C00", image: "assets/images/redmi-15c-orange.webp" }
  ],
  specs: [
    "شاشة 6.79 بوصة IPS LCD، معدل تحديث 120Hz",
    "المعالج: MediaTek Helio G81 Ultra",
    "الكاميرا الخلفية: 50MP + 2MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 6000mAh، شحن سريع 33W",
    "النظام: Android 14 + MIUI 16",
    "مقاومة الماء والغبار: IP64",
    "الأداء: متوسط – مناسب للتصفح والاستخدام اليومي"
  ]
},
{
  id: "redmi-15",
  title: "Redmi 15",
  brand: "Redmi/MI",
  category: "smart",
  image: "assets/images/redmi-15-black.jpg",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 125 }
  ],
  colors: [
    { id: "black", label: "Black (أسود)", hex: "#000000", image: "assets/images/redmi-15-black.jpg" }
  ],
  specs: [
    "شاشة 6.67 بوصة AMOLED، معدل تحديث 120Hz",
    "المعالج: Snapdragon 7s Gen 2",
    "الكاميرا الخلفية: 64MP + 8MP + 2MP",
    "الكاميرا الأمامية: 16MP",
    "البطارية: 5000mAh، شحن سريع 33W",
    "النظام: Android 14 + MIUI 16",
    "الأداء: متوسط – مناسب للتصفح والاستخدام اليومي"
  ]
},
  
{
  id: "redmi-pad-pro",
  title: "Redmi Pad Pro",
  brand: "Redmi/MI",
  category: "tablet",
  image: "assets/images/redmi-pad-pro-gray.webp",
  variants: [
    { id: "256-8", label: "256GB / 8GB RAM", price: 249 }
  ],
  colors: [
    { id: "gray", label: "Gray (رمادي)", hex: "#808080", image: "assets/images/redmi-pad-pro-gray.webp" }
  ],
  specs: [
    "شاشة 12.1 بوصة IPS LCD، معدل تحديث 120Hz",
    "المعالج: Snapdragon 7s Gen 2",
    "الكاميرا الخلفية: 13MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 10000mAh، شحن سريع 33W",
    "النظام: Android 14 + MIUI Pad",
    "أربع سماعات Dolby Atmos",
    "الأداء: ممتاز – مناسب للتطبيقات اليومية، الألعاب، وبعض المهام الدراسية"
  ]
},
{
  id: "redmi-pad-pro-5g",
  title: "Redmi Pad Pro 5G",
  brand: "Redmi/MI",
  category: "tablet",
  image: "assets/images/redmi-pad-pro-5g-gray.webp",
  variants: [
    { id: "256-8", label: "256GB / 8GB RAM", price: 289 }
  ],
  colors: [
    { id: "gray", label: "Gray (رمادي)", hex: "#808080", image: "assets/images/redmi-pad-pro-5g-gray.webp" }
  ],
  specs: [
    "شاشة 12.1 بوصة IPS LCD، معدل تحديث 120Hz",
    "المعالج: Snapdragon 7s Gen 2 مع دعم 5G",
    "الكاميرا الخلفية: 13MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 10000mAh، شحن سريع 33W",
    "النظام: Android 14 + MIUI Pad",
    "أربع سماعات Dolby Atmos، يدعم القلم والكيبورد",
    "الأداء: ممتاز – مناسب للتطبيقات اليومية، الألعاب، وبعض المنصات الدراسية"
  ],
},

  // Tecno / Infinix / Honor / Accessories
  {
  id: "honor-pad-10-wifi",
  title: "HONOR Pad 10 WiFi",
  brand: "HONOR",
  category: "tablet",
  image: "assets/images/honor-pad-10-wifi-gray.jpg",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 239 }
  ],
  colors: [
    { id: "gray", label: " Gray – رمادي ", hex: "#7D7D7D", image: "assets/images/honor-pad-10-gray.jpg" }
  ],
  specs: [
    "شاشة 12.1 بوصة IPS LCD",
    "المعالج: Snapdragon 7 Gen3",
    "الكاميرا الخلفية: 8MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 10100mAh",
    "الشحن: 35W",
    "النظام: MagicOS (Android)",
    "الأداء: قوي – مناسب للدراسة والألعاب المتوسطة والاستخدام اليومي"
  ],
},
{
  id: "honor-pad-x9a-lte",
  title: "HONOR Pad X9a LTE",
  brand: "HONOR",
  category: "tablet",
  image: "assets/images/honor-pad-x9a-lte-gray.webp",
  variants: [
    { id: "128-8", label: "128GB / 8+8 GB RAM", price: 179 }
  ],
  colors: [
    { id: "space-gray", label: " Space Gray –  رمادي ", hex: "#D8D8D8", image: "assets/images/honor-pad-x9a-lte-gray.webp" }
  ],
  specs: [
    "شاشة 11.5 بوصة IPS LCD",
    "المعالج: Qualcomm 685",
    "الكاميرا الخلفية: 8MP",
    "الكاميرا الأمامية: 5MP",
    "البطارية: 8300mAh",
    "الشحن: 35W",
    "النظام: MagicOS (Android)",
    "الأداء: قوي – مناسب للدراسة والألعاب الخفيفة والمتوسطة"
  ],
},
{
  id: "honor-pad-x9a-wifi",
  title: "HONOR Pad X9a WiFi",
  brand: "HONOR",
  category: "tablet",
  image: "assets/images/honor-pad-x9a-wifi-gray.webp",
  variants: [
    { id: "128-6", label: "128GB / 8+8 GB RAM", price: 159 }
  ],
  colors: [
    { id: "space-gray", label: "Space Gray – رمادي ", hex: "#D8D8D8", image: "assets/images/honor-pad-x9a-wifi-gray.webp" }
  ],
  specs: [
    "شاشة 11.5 بوصة IPS LCD",
    "المعالج: Qualcomm 685",
    "الكاميرا الخلفية: 8MP",
    "الكاميرا الأمامية: 5MP",
    "البطارية: 8300mAh",
    "الشحن: 35W",
    "النظام: MagicOS (Android)",
    "الأداء: قوي – مناسب للدراسة والألعاب الخفيفة والمتوسطة"
  ],
},
{
  id: "honor-pad-x9-lte",
  title: "HONOR Pad X9 LTE",
  brand: "HONOR",
  category: "tablet",
  image: "assets/images/honor-pad-x9-lte-gray.webp",
  variants: [
    { id: "128-4", label: "128GB / 4+3 GB RAM", price: 159 }
  ],
  colors: [
    { id: "space-gray", label: "Space-Gray – رمادي", hex: "#000000", image: "assets/images/honor-pad-x9-lte-gray.webp" },
  ],
  specs: [
    "شاشة 11.5 بوصة IPS LCD",
    "المعالج: Snapdragon 680",
    "الكاميرا الخلفية: 5MP",
    "الكاميرا الأمامية: 5MP",
    "البطارية: 7250mAh",
    "الشحن: 22.5W",
    "النظام: MagicOS (Android)",
    "الأداء: متوسط – مناسب للتصفح والاستخدام اليومي"
  ],
},
{
  id: "honor-pad-x8a-wifi",
  title: "HONOR Pad X8a WiFi",
  brand: "HONOR",
  category: "tablet",
  image: "assets/images/honor-pad-x8a-gray.webp",
  variants: [
    { id: "128-4", label: "128GB / 4+4 GB RAM", price: 109 }
  ],
  colors: [
    { id: "Space-Gray", label: "Space Gray – رمادي", hex: "#C0C0C0", image: "assets/images/honor-pad-x8a-gray.webp" }
  ],
  specs: [
    "شاشة 11 بوصة IPS LCD",
    "المعالج: Snapdragon 680",
    "الكاميرا الخلفية: 5MP",
    "الكاميرا الأمامية: 5MP",
    "البطارية: 8300mAh",
    "الشحن: 10W",
    "النظام: MagicOS (Android)",
    "الأداء: متوسط – مناسب للدراسة والتصفح والمشاهدة اليومية"
  ],
},
{
  id: "honor-pad-x7-wifi",
  title: "HONOR Pad X7 WiFi",
  brand: "HONOR",
  category: "tablet",
  image: "assets/images/honor-pad-x7-gray.webp",
  variants: [
    { id: "128-4", label: "64GB / 4+4 GB RAM", price: 69 }
  ],
  colors: [
    { id: "Gray", label: "Gray – رمادي", hex: "#C0C0C0", image: "assets/images/honor-pad-x7-gray.webp" }
  ],
  specs: [
    "شاشة 8.7 بوصة IPS LCD",
    "المعالج: Snapdragon 680",
    "الكاميرا الخلفية: 8MP",
    "الكاميرا الأمامية: 5MP",
    "البطارية: 7020mAh",
    "الشحن: 10W",
    "النظام: MagicOS (Android)",
    "الأداء: متوسط – مناسب للتصفح والاستخدام الخفيف"
  ],
},
  {
  id: "honor-400-pro",
  title: "HONOR 400 Pro",
  brand: "HONOR",
  category: "smart",
  image: "assets/images/honor-400-pro-gray.jpg",
  variants: [
    { id: "512-12", label: "512GB / 12+12 GB RAM", price: 459 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black – أسود ", hex: "#000000", image: "assets/images/honor-400-pro-black.webp" },
    { id: "luner-gray", label: " Lunar Gray – رمادي ", hex: "#C0C0C0", image: "assets/images/honor-400-pro-gray.jpg" }
  ],
  specs: [
    "شاشة 6.70 بوصة AMOLED",
    "المعالج: Snapdragon 8 Gen3",
    "الكاميرا الخلفية: 200MP + 12MP + 2MP",
    "الكاميرا الأمامية: 50MP",
    "البطارية: 6000mAh",
    "الشحن: 100W",
    "النظام: MagicOS (Android)",
    "الأداء: قوي – ممتاز للألعاب والاستخدام اليومي"
  ],
},
{
  id: "honor-400",
  title: "HONOR 400",
  brand: "HONOR",
  category: "smart",
  image: "assets/images/honor-400-black.webp",
  variants: [
    { id: "256-12", label: "256GB / 12+12 GB RAM", price: 269 },
    { id: "512-12", label: "512GB / 12+12 GB RAM", price: 299 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black – أسود ", hex: "#000000", image: "assets/images/honor-400-black.webp" },
    { id: "meteor-silver", label: "Meteor Silver – فضي ", hex: "#C0C0C0", image: "assets/images/honor-400-silver.webp" }
  ],
  specs: [
    "شاشة 6.78 بوصة AMOLED",
    "المعالج: Snapdragon 7 Gen3",
    "الكاميرا الخلفية: 200MP + 12MP + 2MP",
    "الكاميرا الأمامية: 50MP",
    "البطارية: 6000mAh",
    "الشحن: 66W",
    "النظام: MagicOS (Android)",
    "الأداء: قوي – ممتاز للاستخدام اليومي والألعاب الخفيفة والمتوسطة"
  ],
},
{
  id: "honor-x9c-5g",
  title: "HONOR X9c 5G",
  brand: "HONOR",
  category: "smart",
  image: "assets/images/honor-x9c-5g-purple.jpeg",
  variants: [
    { id: "256-12", label: "256GB / 12+12 GB RAM", price: 229 }
  ],
  colors: [
    { id: "Orange", label: "Sunrise Orange – البرتقالي ", hex: "#FF8C00", image: "assets/images/honor-x9c-5g-orange.webp" },
    { id: "Cyan", label: "Jade Cyan – أخضر ", hex: "#00FFFF", image: "assets/images/honor-x9c-5g-cyan.png" },
    { id: "Purple", label: "Titanium Purple –  بنفسجي", hex: "#EE82EE", image: "assets/images/honor-x9c-5g-purple.jpeg" },
    { id: "Titanium-black", label: "Titanium Black – أسود  ", hex: "#000000", image: "assets/images/honor-x9c-5g-black.webp" }
  ],
  specs: [
    "شاشة 6.78 بوصة AMOLED",
    "المعالج: Snapdragon 6 Gen1",
    "الكاميرا الخلفية: 108MP + 5MP",
    "الكاميرا الأمامية: 16MP",
    "البطارية: 6600mAh",
    "الشحن: 66W",
    "النظام: MagicOS (Android)",
    "الأداء: متوسط – مناسب للتصفح والألعاب الخفيفة"
  ],
},
{
  id: "honor-x9c-smart",
  title: "HONOR X9c Smart",
  brand: "HONOR",
  category: "smart",
  image: "assets/images/honor-x9c-smart-white.webp",
  variants: [
    { id: "256-12", label: "256GB / 12+12 GB RAM", price: 179 }
  ],
  colors: [
    { id: "Ocean Cyan", label: "Ocean Cyan – أخضر  ", hex: "#008000", image: "assets/images/honor-x9c-smart-green.jpg" },
    { id: "Moonlight White", label: "Moonlight White – أبيض ", hex: "#FFFFFF", image: "assets/images/honor-x9c-smart-white.webp" }
  ],
  specs: [
    "شاشة 6.8 بوصة TFT LCD",
    "المعالج: MediaTek 7025 Ultra",
    "108 :الكاميرا الخلفية MP + 5MP",
    "الكاميرا الأمامية: 16MP",
    "البطارية: 5800mAh",
    "الشحن: 35W",
    "النظام: MagicOS (Android)",
    "الأداء: متوسط – مناسب للتصفح والألعاب الخفيفة"
  ],
},
{
  id: "honor-400lite-5g",
  title: "HONOR 400Lite 5G",
  brand: "HONOR",
  category: "smart",
  image: "assets/images/honor-400-lite-green.jpg",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 169 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black – أسود ", hex: "#000000", image: "assets/images/honor-400-lite-black.jpg" },
    { id: "marrs-green", label: "Marrs Green – أخضر  ", hex: "#008000", image: "assets/images/honor-400-lite-green.jpg" },
    { id: "velvet-gray", label: "Velvet Gray – رمادي", hex: "#C0C0C0", image: "assets/images/honor-400-lite-gray.jpg" }
  ],
  specs: [
    "شاشة 6.7 بوصة AMOLED",
    "المعالج: MediaTek 7025 ",
    "الكاميرا الخلفية: 108MP + 2MP",
    "الكاميرا الأمامية: 16MP",
    "البطارية: 5230mAh",
    "الشحن: 35W",
    "النظام: MagicOS (Android)",
    "الأداء: متوسط – مناسب للاستخدام اليومي"
  ],
},
{
  id: "honor-x8c",
  title: "HONOR X8c",
  brand: "HONOR",
  category: "smart",
  image: "assets/images/honor-x8c-green.jpg",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 149}
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black – أسود ", hex: "#000000", image: "assets/images/honor-x8c-black.jpg" },
    { id: "marrs-green", label: "Marrs Green – أخضر ", hex: "#006400", image: "assets/images/honor-x8c-green.jpg" }
  ],
  specs: [
    "شاشة 6.7 بوصة AMOLED",
    "المعالج: Snapdragon 685 4G",
    "الكاميرا الخلفية: 108MP + 5MP",
    "الكاميرا الأمامية: 50MP",
    "البطارية: 5000mAh",
    "الشحن: 35W",
    "النظام: MagicOS (Android)",
    "الأداء: متوسط – مناسب للتصفح والاستخدام اليومي"
  ],
},
  {
  id: "honor-x7d-5g",
  title: "HONOR X7d 5G",
  brand: "HONOR",
  category: "smart",
  image: "assets/images/honor-x7d-5g-black.jpg",
  variants: [
    { id: "256-86", label: "256GB / 8+8 GB RAM", price: 139}
  ],
  colors: [
    { id: "velvet-black", label: "Velvet Black – أسود  ", hex: "#000000", image: "assets/images/honor-x7d-5g-black.jpg" },
    { id: "desert-gold", label: "Desert Gold – صحراوي  ", hex: "#D4AF37", image: "assets/images/honor-x7d-5g-gold.jpg" },
    { id: "meteor-silver", label: "Meteor Silver – فضي ", hex: "#C0C0C0", image: "assets/images/honor-x7d-5g-silver.jpg" }
  ],
  specs: [
    "شاشة 6.77 بوصة TFT LCD",
    "المعالج: Snapdragon 6s Gen3",
    "الكاميرا الخلفية: 50MP + 2MP",
    "الكاميرا الأمامية: 5MP",
    "البطارية: 6500mAh",
    "الشحن: 35W",
    "النظام: MagicOS (Android)",
    "الأداء: متوسط – مناسب للتصفح والاستخدام اليومي"
  ],
},
{
  id: "honor-x7d-4g",
  title: "HONOR X7d 4G",
  brand: "HONOR",
  category: "smart",
  image: "assets/images/honor-x7d-gold.jpg",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 115 }
  ],
  colors: [
    { id: "velvet-black", label: "Velvet Black – أسود  ", hex: "#000000", image: "assets/images/honor-x7d-black.jpg" },
    { id: "desert-gold", label: "Desert Gold – صحراوي  ", hex: "#D4AF37", image: "assets/images/honor-x7d-gold.jpg" },
    { id: "meteor-silver", label: "Meteor Silver – فضي ", hex: "#C0C0C0", image: "assets/images/honor-x7d-silver.jpg" }
  ],
  specs: [
    "شاشة 6.77 بوصة IPS LCD",
    "المعالج: Snapdragon 685 4G",
    "الكاميرا الخلفية: 108MP + 5MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 6500mAh",
    "الشحن: 35W",
    "النظام: MagicOS (Android)",
    "الأداء: متوسط – مناسب للتصفح والاستخدام اليومي"
  ],
},
{
  id: "honor-x6c",
  title: "HONOR X6c",
  brand: "HONOR",
  category: "smart",
  image: "assets/images/honor-x6c-white.jpg",
  variants: [
    { id: "128-6", label: "128GB / 6+6 GB RAM", price: 69 },
    { id: "256-6", label: "256GB / 6+6 GB RAM", price: 79 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black – أسود  ", hex: "#000000", image: "assets/images/honor-x6c-black.jpg" },
    { id: "ocean-cyan", label: "Ocean Cyan – أخضر  ", hex: "#00CED1", image: "assets/images/honor-x6c-green.jpg" },
    { id: "moonlight-white", label: " Moonlight White – أبيض ", hex: "#FFFFFF", image: "assets/images/honor-x6c-white.jpg" }
  ],
  specs: [
    "شاشة 6.61 بوصة IPS LCD",
    "المعالج: MediaTek Helio G81",
    "الكاميرا الخلفية: 50MP",
    "الكاميرا الأمامية: 5MP",
    "البطارية: 5300mAh",
    "الشحن: 35W",
    "النظام: MagicOS (Android)",
    "الأداء: متوسط – مناسب للاستخدام الخفيف والتصفح"
  ],
},
  {
  id: "camon-40-pro-5g",
  title: "CAMON 40 Pro 5G",
  brand: "TECNO",
  category: "smart",
  image: "assets/images/tecno-cammon-40pro-black.webp",
  variants: [
    { id: "256-12", label: "256GB / 12+12 GB RAM", price: 235 }
  ],
  colors: [
    { id: "Glaxy-black", label: "Galaxy Black – أسود ", hex: "#000000", image: "assets/images/tecno-cammon-40pro-black.webp" },
    { id: "Glacier-White", label: "Glacier White  – أبيض جليدي", hex: "#87CEEB", image: "assets/images/tecno-cammon-40pro-blue.jpg" },
    { id: "Green", label: " Green – أخضر ", hex: "#2CA58D", image: "assets/images/tecno-cammon-40pro-green.webp" }
  ],
  specs: [
    "شاشة 6.78 بوصة AMOLED",
    "المعالج: MediaTek Dimensity 7300",
    "الكاميرا الخلفية: 50MP + 8MP",
    "الكاميرا الأمامية: 50MP",
    "البطارية: 5200mAh",
    "الشحن: 45W",
    "النظام: Android 13 HIOS",
    "الأداء: قوي – ممتاز للألعاب والاستخدام اليومي"
  ],
},
{
  id: "camon-40-pro",
  title: "CAMON 40 Pro",
  brand: "TECNO",
  category: "smart",
  image: "assets/images/tecno-cammon-40pro-4g-white.webp",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 179 }
  ],
  colors: [
    { id: "galaxy-black", label: "Galaxy Black – أسود ", hex: "#000000", image: "assets/images/tecno-cammon-40pro-4g-black.webp" },
    { id: "glacier-white", label: "Glacier White – أبيض جليدي ", hex: "#87CEEB", image: "assets/images/tecno-cammon-40pro-4g-white.webp" },
    { id: "green", label: "Sunrise Gold – أخضر ", hex: "#2CA58D", image: "assets/images/tecno-cammon-40pro-4g-green.webp" }
  ],
  specs: [
    "شاشة 6.78 بوصة AMOLED",
    "المعالج: MediaTek Helio G100",
    "الكاميرا الخلفية: 50MP + 8MP",
    "الكاميرا الأمامية: 50MP",
    "البطارية: 5200mAh",
    "الشحن: 45W",
    "النظام: Android 13 HIOS",
    "الأداء: قوي – ممتاز للاستخدام اليومي والألعاب الخفيفة"
  ],
},
{
  id: "pova-7-ultra-5g",
  title: "POVA 7 Ultra 5G",
  brand: "TECNO",
  category: "smart",
  image: "assets/images/tecno-pova7-ultra-black.webp",
  variants: [
    { id: "256-12", label: "256GB / 12+12 GB RAM", price: 269 }
  ],
  colors: [
    { id: "Geek-White", label: "Geek White – أبيض ", hex: "#FFFFFF", image: "assets/images/tecno-pova7-ultra-white.webp" },
    { id: "Geek-Black", label: "Geek Black – أسود ", hex: "#000000", image: "assets/images/tecno-pova7-ultra-black.webp" }
  ],
  specs: [
    "شاشة 6.67 بوصة AMOLED",
    "المعالج: MediaTek Dimensity 6100+",
    "الكاميرا الخلفية: 108MP + 8MP",
    "الكاميرا الأمامية: 13MP",
    "البطارية: 6000mAh",
    "الشحن: 70W",
    "النظام: Android 13 HIOS",
    "الأداء: قوي – ممتاز للتصفح والألعاب الخفيفة والمتوسطة"
  ],
},
{
  id: "pova-7-5g",
  title: "POVA 7 5G",
  brand: "TECNO",
  category: "smart",
  image: "assets/images/tecno-pova7-5g-green.webp",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 169 }
  ],
  colors: [
    { id: "Geek-Black", label: "Geek Black  – أسود ", hex: "#000000", image: "assets/images/tecno-pova7-5g-black.webp" },
    { id: "Qasis-Green", label: "Qasis Green – أخضر ", hex: "#228B22", image: "assets/images/tecno-pova7-5g-green.webp" },
    { id: "Magic-Silver", label: "Magic Silver – سلفر ", hex: "#C0C0C0", image: "assets/images/tecno-pova7-5g-silver.webp" }
  ],
  specs: [
    "شاشة 6.78 بوصة FHD+",
    "المعالج: MediaTek Dimensity 7300+",
    "الكاميرا الخلفية: 50MP + 2MP",
    "الكاميرا الأمامية: 13MP",
    "البطارية: 6000mAh",
    "الشحن: 45W",
    "النظام: Android 13 HIOS",
    "الأداء: متوسط – مناسب للتصفح والألعاب الخفيفة"
  ],
},
  {
  id: "pova-7",
  title: "POVA 7",
  brand: "TECNO",
  category: "smart",
  image: "assets/images/tecno-pova7-gold.jpg",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 115 }
  ],
  colors: [
    { id: "Geek-Black", label: "Geek Black – أسود ", hex: "#000000", image: "assets/images/tecno-pova7-black.webp" },
    { id: "Hyper-Titanium", label: "Hyper Titanium –  ذهبي ", hex: "#D4AF37", image: "assets/images/tecno-pova7-gold.jpg" },
    { id: "Magic-Silver", label: "Magic Silver – سلفر ", hex: "#C0C0C0", image: "assets/images/tecno-pova7-silver.webp" }
  ],
  specs: [
    "شاشة 6.78 بوصة FHD+",
    "المعالج: MediaTek Helio G100",
    "الكاميرا الخلفية: 50MP + 2MP",
    "الكاميرا الأمامية: 13MP",
    "البطارية: 5200mAh",
    "الشحن: 45W",
    "النظام: Android 13 HIOS",
    "الأداء: متوسط – مناسب للتصفح والاستخدام اليومي"
  ],
},
{
  id: "spark-slim",
  title: "SPARK Slim",
  brand: "TECNO",
  category: "smart",
  image: "assets/images/tecno-slim-blue.png",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 149 }
  ],
  colors: [
    { id: "Cool-Black", label: "Cool Black – أسود ", hex: "#000000", image: "assets/images/tecno-slim-black.png" },
    { id: "Slim-White", label: "Slim White – أبيض ", hex: "#FFFFFF", image: "assets/images/tecno-slim-blue.png" }
  ],
  specs: [
    "شاشة 6.78 بوصة AMOLED",
    "المعالج: MediaTek Helio G200",
    "الكاميرا الخلفية: 50MP + 2MP",
    "الكاميرا الأمامية: 13MP",
    "البطارية: 5200mAh",
    "الشحن: 45W",
    "النظام: Android 13 HIOS",
    "الأداء: متوسط – مناسب للاستخدام اليومي والالعاب المتوسطة"
  ],
},
{
  id: "spark-40c",
  title: "SPARK 40C",
  brand: "TECNO",
  category: "smart",
  image: "assets/images/tecno-spark40c-titanum.webp",
  variants: [
    { id: "256-8", label: "256GB / 8+8 GB RAM", price: 91 }
  ],
  colors: [
    { id: "Veil-White", label: "Veil White – أبيض ", hex: "#FFFFFF", image: "assets/images/tecno-spark40c-white.webp" },
    { id: "Ink-Black", label: "Ink Black – أسود  ", hex: "#000000", image: "assets/images/tecno-spark40c-black.webp" },
    { id: "Titanium-Grey", label: "Titanium Grey – رمادي  ", hex: "#808080", image: "assets/images/tecno-spark40c-titanum.webp" },
    { id: "Ripple-Blue", label: "Ripple Blue – أزرق ", hex: "#1E90FF", image: "assets/images/tecno-spark40c-blue.webp" }
  ],
  specs: [
    "شاشة 6.67 بوصة Hole Screen",
    "المعالج: MediaTek Helio G81",
    "الكاميرا الخلفية: 13MP + 2MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 6000mAh",
    "الشحن: 18W",
    "النظام: Android 13 HIOS",
    "الأداء: متوسط – مناسب للتصفح والاستخدام اليومي"
  ],
},
{
  id: "spark-30c-5g",
  title: "SPARK 30C 5G",
  brand: "TECNO",
  category: "smart",
  image: "assets/images/tecno-spark30c-blue.webp",
  variants: [
    { id: "128-4", label: "128GB / 4+4 GB RAM", price: 95 }
  ],
  colors: [
    { id: "Midnight-Black", label: "Midnight Black – أسود  ", hex: "#000000", image: "assets/images/tecno-spark30c-black.webp" },
    { id: "White", label: "White – أبيض ", hex: "#FFFFFF", image: "assets/images/tecno-spark30c-white.webp" }
  ],
  specs: [
    "شاشة 6.67 بوصة Hole Secreen HD+ ",
    "المعالج: MediaTek Dimensity 6300 ",
    "الكاميرا الخلفية: 48MP + 2MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 5000mAh",
    "الشحن: 18W",
    "النظام: Android 13 HIOS",
    "الأداء: متوسط – مناسب للتصفح والألعاب الخفيفة"
  ],
},
{
  id: "spark-go-2",
  title: "SPARK GO 2",
  brand: "TECNO",
  category: "smart",
  image: "assets/images/tecno-spark-go2-blue.webp",
  variants: [
    { id: "64-3", label: "64GB / 3+3 GB RAM", price: 55 },
    { id: "128-4", label: "128GB / 4+4 GB RAM", price: 60 }
  ],
  colors: [
    { id: "Veil-White", label: "Veil White – أبيض ", hex: "#FFFFFF", image: "assets/images/tecno-spark-go2-white.webp" },
    { id: "Ink-Black", label: "Ink Black – أسود  ", hex: "#000000", image: "assets/images/tecno-spark-go2-black.webp" },
    { id: "Titanium-Grey", label: "Titanium Grey – رمادي  ", hex: "#808080", image: "assets/images/tecno-go2-titanum.webp" },
    { id: "Turquois-Green", label: "Turquois Green – أخضر تركوازي ", hex: "#40E0D0", image: "assets/images/tecno-spark-go2-blue.webp" }
  ],
  specs: [
    "شاشة 6.67 بوصة Hole Secreen",
    "المعالج: Octa-Core Processor",
    "الكاميرا الخلفية: 13MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 5000mAh",
    "الشحن: 15W",
    "النظام: Android 13 HIOS",
    "الأداء: ضعيف – مناسب للاستخدام الخفيف والتصفح فقط"
  ],
},
  {
  id: "smart-10",
  title: "SMART 10",
  brand: "Infinix",
  category: "smart",
  image: "assets/images/smart-10.jpg",
  variants: [
    { id: "128-4", label: "128GB / 4+4 GB RAM", price: 65 }
  ],
  colors: [
    { id: "midnight-black", label: "Midnight Black – أسود منتصف الليل", hex: "#000000", image: "assets/images/smart-10-midnight-black.jpg" },
    { id: "crystal-blue", label: "Crystal Blue – أزرق كريستالي", hex: "#1E90FF", image: "assets/images/smart-10-crystal-blue.jpg" }
  ],
  specs: [
    "شاشة 6.67 بوصة IPS LCD",
    "المعالج: Unisoc T7250",
    "الكاميرا الخلفية: 8MP",
    "الكاميرا الأمامية: 8MP",
    "البطارية: 5000mAh",
    "الشحن: 15W",
    "النظام: Android 13 XOS",
    "الأداء: متوسط – مناسب للاستخدام الخفيف والتصفح"
  ],
},
{
  id: "samsung-original-adapter",
  title: "Samsung Original Adapter – محول سامسونج أصلي",
  brand: "Accessories",
  category: "smart",
  image: "assets/images/samsung-original-adapter.jpg",
  variants: [
    { id: "usb-c", label: "USB-C", price: 20 },
    { id: "usb-a", label: "USB-A", price: 18 }
  ],
  colors: [
    { id: "white", label: "White – أبيض", hex: "#FFFFFF", image: "assets/images/samsung-original-adapter-white.jpg" }
  ],
  specs: [
    "نوع المحول: USB-C / USB-A",
    "دعم الشحن السريع: نعم",
    "التوافق: أجهزة سامسونج الحديثة",
    "الأداء: ممتاز – شحن سريع وآمن"
  ],
},
{
  id: "apple-original-adapter",
  title: "Apple Original Adapter – محول آبل أصلي",
  brand: "Accessories",
  category: "smart",
  image: "assets/images/apple-original-adapter.jpg",
  variants: [
    { id: "usb-c-20w", label: "USB-C 20W", price: 30 },
    { id: "usb-c-30w", label: "USB-C 30W", price: 45 }
  ],
  colors: [
    { id: "white", label: "White – أبيض", hex: "#FFFFFF", image: "assets/images/apple-original-adapter-white.jpg" }
  ],
  specs: [
    "نوع المحول: USB-C Power Adapter",
    "دعم الشحن السريع: نعم، حتى 30W",
    "التوافق: أجهزة iPhone و iPad الحديثة",
    "الأداء: ممتاز – شحن سريع وآمن"
  ],
},
  {
  id: "golf-original-charger",
  title: "Golf Original Charger – شاحن جولف أصلي",
  brand: "Accessories",
  category: "smart",
  image: "assets/images/golf-original-charger.jpg",
  variants: [
    { id: "18w", label: "18W Fast Charging", price: 20 },
    { id: "30w", label: "30W Fast Charging", price: 30 },
    { id: "45w", label: "45W Super Fast Charging", price: 45 }
  ],
  colors: [
    { id: "white", label: "White – أبيض", hex: "#FFFFFF", image: "assets/images/golf-original-charger-white.jpg" },
    { id: "black", label: "Black – أسود", hex: "#000000", image: "assets/images/golf-original-charger-black.jpg" }
  ],
  specs: [
    "نوع الشاحن: USB-C / USB-A",
    "دعم الشحن السريع: نعم حتى 45W",
    "التوافق: الهواتف الذكية الحديثة",
    "الأداء: ممتاز – شحن سريع وآمن"
  ],
},
{
  id: "golf-original-cable",
  title: "Golf Original Cable – كابل جولف أصلي",
  brand: "Accessories",
  category: "smart",
  image: "assets/images/golf-original-cable.jpg",
  variants: [
    { id: "1m", label: "1 Meter", price: 10 },
    { id: "2m", label: "2 Meter", price: 15 }
  ],
  colors: [
    { id: "white", label: "White – أبيض", hex: "#FFFFFF", image: "assets/images/golf-original-cable-white.jpg" },
    { id: "black", label: "Black – أسود", hex: "#000000", image: "assets/images/golf-original-cable-black.jpg" }
  ],
  specs: [
    "نوع الكابل: USB-C / USB-A",
    "دعم الشحن السريع",
    "طول الكابل: 1 متر / 2 متر",
    "الأداء: ممتاز – شحن ونقل بيانات سريع"
  ],
},
{
  id: "glico-original-charger",
  title: "Glico Original Charger – شاحن جليكو أصلي",
  brand: "Accessories",
  category: "smart",
  image: "assets/images/glico-original-charger.jpg",
  variants: [
    { id: "18w", label: "18W Fast Charging", price: 20 },
    { id: "30w", label: "30W Fast Charging", price: 35 }
  ],
  colors: [
    { id: "white", label: "White – أبيض", hex: "#FFFFFF", image: "assets/images/glico-original-charger-white.jpg" },
    { id: "black", label: "Black – أسود", hex: "#000000", image: "assets/images/glico-original-charger-black.jpg" }
  ],
  specs: [
    "نوع الشاحن: USB-C",
    "دعم الشحن السريع: نعم حتى 30W",
    "التوافق: الهواتف الذكية الحديثة",
    "الأداء: ممتاز – شحن سريع وآمن"
  ],
},
{
  id: "glico-original-cable",
  title: "Glico Original Cable – كابل جليكو أصلي",
  brand: "Accessories",
  category: "smart",
  image: "assets/images/glico-original-cable.jpg",
  variants: [
    { id: "1m", label: "1 Meter", price: 10 },
    { id: "2m", label: "2 Meter", price: 15 }
  ],
  colors: [
    { id: "white", label: "White – أبيض", hex: "#FFFFFF", image: "assets/images/glico-original-cable-white.jpg" },
    { id: "black", label: "Black – أسود", hex: "#000000", image: "assets/images/glico-original-cable-black.jpg" }
  ],
  specs: [
    "نوع الكابل: USB-C",
    "دعم الشحن السريع",
    "طول الكابل: 1 متر / 2 متر",
    "الأداء: ممتاز – شحن ونقل بيانات سريع"
  ],
},
  {
  id: "glico-powerbank-10000",
  title: "Glico Powerbank 10000mAh – باور بانك جليكو 10000مللي أمبير",
  brand: "Accessories",
  category: "smart",
  image: "assets/images/glico-powerbank-10000.jpg",
  variants: [
    { id: "10000-white", label: "10000mAh White – أبيض", price: 35 },
    { id: "10000-black", label: "10000mAh Black – أسود", price: 35 }
  ],
  colors: [
    { id: "white", label: "White – أبيض", hex: "#FFFFFF", image: "assets/images/glico-powerbank-10000-white.jpg" },
    { id: "black", label: "Black – أسود", hex: "#000000", image: "assets/images/glico-powerbank-10000-black.jpg" }
  ],
  specs: [
    "القدرة: 10000mAh",
    "عدد المنافذ: 2 منافذ USB / 1 USB-C",
    "دعم الشحن السريع: نعم",
    "الأداء: ممتاز – شحن آمن وسريع للهواتف والأجهزة اللوحية"
  ],
},
{
  id: "glico-powerbank-20000",
  title: "Glico Powerbank 20000mAh – باور بانك جليكو 20000مللي أمبير",
  brand: "Accessories",
  category: "smart",
  image: "assets/images/glico-powerbank-20000.jpg",
  variants: [
    { id: "20000-white", label: "20000mAh White – أبيض", price: 60 },
    { id: "20000-black", label: "20000mAh Black – أسود", price: 60 }
  ],
  colors: [
    { id: "white", label: "White – أبيض", hex: "#FFFFFF", image: "assets/images/glico-powerbank-20000-white.jpg" },
    { id: "black", label: "Black – أسود", hex: "#000000", image: "assets/images/glico-powerbank-20000-black.jpg" }
  ],
  specs: [
    "القدرة: 20000mAh",
    "عدد المنافذ: 2 منافذ USB / 1 USB-C",
    "دعم الشحن السريع: نعم",
    "الأداء: ممتاز – شحن آمن وسريع للهواتف والأجهزة اللوحية والأجهزة الكبيرة"
  ],
},
{
  id: "glico-powerbank-30000",
  title: "Glico Powerbank 30000mAh – باور بانك جليكو 30000مللي أمبير",
  brand: "Accessories",
  category: "smart",
  image: "assets/images/glico-powerbank-30000.jpg",
  variants: [
    { id: "30000-black", label: "30000mAh Black – أسود", price: 90 },
    { id: "30000-gray", label: "30000mAh Gray – رمادي", price: 90 }
  ],
  colors: [
    { id: "black", label: "Black – أسود", hex: "#000000", image: "assets/images/glico-powerbank-30000-black.jpg" },
    { id: "gray", label: "Gray – رمادي", hex: "#808080", image: "assets/images/glico-powerbank-30000-gray.jpg" }
  ],
  specs: [
    "القدرة: 30000mAh",
    "عدد المنافذ: 3 منافذ USB / 2 USB-C",
    "دعم الشحن السريع: نعم",
    "الأداء: ممتاز – شحن طويل المدى للهواتف والأجهزة اللوحية والأجهزة الكبيرة"
  ],
},
{
  id: "glico-powerbank-compact",
  title: "Glico Powerbank Compact 5000mAh – باور بانك جليكو صغير 5000مللي أمبير",
  brand: "Accessories",
  category: "smart",
  image: "assets/images/glico-powerbank-compact.jpg",
  variants: [
    { id: "5000-white", label: "5000mAh White – أبيض", price: 25 },
    { id: "5000-black", label: "5000mAh Black – أسود", price: 25 }
  ],
  colors: [
    { id: "white", label: "White – أبيض", hex: "#FFFFFF", image: "assets/images/glico-powerbank-compact-white.jpg" },
    { id: "black", label: "Black – أسود", hex: "#000000", image: "assets/images/glico-powerbank-compact-black.jpg" }
  ],
  specs: [
    "القدرة: 5000mAh",
    "عدد المنافذ: 1 منفذ USB / 1 USB-C",
    "دعم الشحن السريع: نعم",
    "الأداء: ممتاز – باور بانك صغير محمول وسهل الاستخدام للشحن السريع أثناء التنقل"
  ],
},
  
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
