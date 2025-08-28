/* =========================
   Alhadath Mobile - GitHub Pages RTL Store Starter
   - ثابت الحجم: لا يحدث تكبير تلقائي عند إدخال النص (حقول 16px+)
   - زر سلة عائم بالأسفل
   - سلايدر، تبويبات ماركات، بحث، ترتيب
   - سلة محلية (localStorage)
   - إرسال الطلب عبر Google Apps Script (مستحسن) أو Telegram (اختياري)
========================= */

const CURRENCY = "JD";
const WHATSAPP_NUMBER = "962796313243"; // 0796313243
// الطريقة الآمنة الموصى بها: ضع رابط Google Apps Script (POST JSON) هنا
// مثال: https://script.google.com/macros/s/XXXX/exec
const ORDER_ENDPOINT = "https://script.google.com/macros/s/AKfycby_rcjDShr6Za6HjwgehDz6A-_3tx3M5oD46F-UhPTPoXDH9IIo75jhyiX-est3EIE1/exec"; // ضع رابطك هنا
// ——— بديل (غير آمن لأنه يكشف التوكن) ———
const TELEGRAM_BOT_TOKEN = ""; // ضع التوكن على مسؤوليتك (غير مفضل)
const TELEGRAM_CHAT_ID = "";   // ضع chat_id

// ماركات/تبويبات
const BRANDS = ["الكل", "Samsung", "iPhone", "Redmi/MI", "Tecno", "Infinix", "Honor", "Accessories"];

// عينات منتجات (استبدل بالصور والأسعار الحقيقية)
const PRODUCTS = [
  { id: "s-a06-64", title: "Samsung A06 - 64GB / 4GB RAM", brand:"Samsung", price:49, image:"assets/images/samsung-a06.jpg" },
  { id: "s-a06-128", title: "Samsung A06 - 128GB / 4GB RAM", brand:"Samsung", price:59, image:"assets/images/samsung-a06.jpg" },
  { id: "s-a16-128", title: "Samsung A16 - 128GB / 4GB RAM", brand:"Samsung", price:99, image:"assets/images/samsung-a06.jpg" },
  { id: "ip-16pm-256", title: "iPhone 16 Pro Max - 256GB", brand:"iPhone", price:900, image:"assets/images/iphone-16-pro-max.jpg" },
  { id: "mi-note-14-256", title: "Xiaomi Redmi Note 14 - 256GB / 8GB RAM", brand:"Redmi/MI", price:149, image:"assets/images/xiaomi-redmi-note.jpg" },
  { id: "tec-spark", title: "Tecno Spark", brand:"Tecno", price:115, image:"assets/images/tecno-spark.jpg" },
  { id: "inf-hot", title: "Infinix Hot", brand:"Infinix", price:120, image:"assets/images/infinix-hot.jpg" },
  { id: "hon-x9", title: "Honor X9", brand:"Honor", price:199, image:"assets/images/honor-x9.jpg" },
  { id: "acc-charger", title: "شاحن أصلي سريع", brand:"Accessories", price:12, image:"assets/images/accessory-charger.jpg" },
];

// ===== Utilities =====
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const formatPrice = (v)=> `${v.toFixed(2)} ${CURRENCY}`;

const save = (k,v)=> localStorage.setItem(k, JSON.stringify(v));
const load = (k, fallback)=> {
  try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; }
};

// ===== State =====
let state = {
  brand: "الكل",
  query: "",
  sort: "popular",
  cart: load("cart", {}), // {id: {qty, product}}
};

// ===== Tabs (Brands) =====
function renderTabs(){
  const tabs = $("#tabs");
  tabs.innerHTML = "";
  BRANDS.forEach(b=>{
    const btn = document.createElement("button");
    btn.className = "tab" + (b===state.brand? " active" : "");
    btn.textContent = b;
    btn.onclick = () => { state.brand = b; filterAndRender(); setActiveTab(b); };
    tabs.appendChild(btn);
  });
}
function setActiveTab(label){
  $$(".tab").forEach(el=> el.classList.toggle("active", el.textContent===label));
}

// ===== Search + Sort =====
$("#searchInput").addEventListener("input", (e)=>{
  state.query = e.target.value.trim().toLowerCase();
  filterAndRender();
});
$("#sortSelect").addEventListener("change", (e)=>{
  state.sort = e.target.value;
  filterAndRender();
});

// ===== Products Grid =====
function filterAndRender(){
  const grid = $("#productsGrid");
  const empty = $("#emptyState");

  let items = PRODUCTS
    .filter(p => state.brand==="الكل" || p.brand===state.brand)
    .filter(p => p.title.toLowerCase().includes(state.query));

  if(state.sort==="priceAsc") items.sort((a,b)=> a.price-b.price);
  else if(state.sort==="priceDesc") items.sort((a,b)=> b.price-a.price);

  grid.innerHTML = "";
  if(items.length===0){ empty.hidden=false; return; } else { empty.hidden=true; }

  const frag = document.createDocumentFragment();
  items.forEach(p=> frag.appendChild(cardTemplate(p)));
  grid.appendChild(frag);
  updateCartCount();
}

function cardTemplate(p){
  const el = document.createElement("article");
  el.className="card";
  el.innerHTML = `
    <div class="card__img"><img src="${p.image}" alt="${p.title}"></div>
    <div class="card__body">
      <h3 class="card__title">${p.title}</h3>
      <div class="card__meta">
        <span class="price">${formatPrice(p.price)}</span>
        <button class="btn btn--primary" data-add="${p.id}">أضف للسلة</button>
      </div>
    </div>
  `;
  el.querySelector("[data-add]").onclick = ()=> addToCart(p);
  return el;
}

// ===== Cart =====
function addToCart(p){
  const item = state.cart[p.id] || { qty:0, product:p };
  item.qty += 1;
  state.cart[p.id] = item;
  save("cart", state.cart);
  animateFab();
  updateCartCount();
}

function updateCartCount(){
  const count = Object.values(state.cart).reduce((sum, it)=> sum + it.qty, 0);
  $("#cartCount").textContent = count;
}

function animateFab(){
  const fab = $("#cartFab");
  fab.animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}], {duration:260});
}

// ===== Cart Modal Render =====
$("#cartFab").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#clearCart").addEventListener("click", ()=>{
  if(confirm("هل تريد إفراغ السلة بالكامل؟")){
    state.cart = {}; save("cart", state.cart); renderCart(); updateCartCount();
  }
});
$("#checkoutBtn").addEventListener("click", ()=>{
  $("#checkoutForm").hidden = false;
  $(".cart-summary").scrollIntoView({behavior:"smooth", block:"end"});
});
$("#backToCart").addEventListener("click", ()=>{
  $("#checkoutForm").hidden = true;
});

function openCart(){
  renderCart();
  disableScroll(true);
  $("#cartModal").hidden = false;
}
function closeCart(){
  $("#cartModal").hidden = true;
  disableScroll(false);
}
function disableScroll(lock){
  document.body.style.overflow = lock ? "hidden" : "";
}

function renderCart(){
  const wrap = $("#cartItems");
  wrap.innerHTML = "";
  const entries = Object.values(state.cart);
  if(entries.length===0){
    wrap.innerHTML = '<p class="muted">سلتك فارغة.</p>';
  }else{
    entries.forEach(({product, qty})=> wrap.appendChild(cartRow(product, qty)));
  }
  const total = entries.reduce((sum, it)=> sum + it.product.price*it.qty, 0);
  $("#cartTotal").textContent = formatPrice(total);
  $("#checkoutForm").hidden = true;
}

function cartRow(p, qty){
  const row = document.createElement("div");
  row.className = "cart-row";
  row.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <div>
      <div style="font-weight:700">${p.title}</div>
      <div class="muted tiny">${formatPrice(p.price)} للوحدة</div>
    </div>
    <div class="qty">
      <button data-dec>−</button>
      <strong>${qty}</strong>
      <button data-inc>+</button>
    </div>
    <div style="text-align:end">${formatPrice(p.price * qty)}</div>
  `;
  row.querySelector("[data-inc]").onclick = ()=>{ state.cart[p.id].qty++; save("cart", state.cart); renderCart(); updateCartCount(); }
  row.querySelector("[data-dec]").onclick = ()=>{
    state.cart[p.id].qty--;
    if(state.cart[p.id].qty<=0) delete state.cart[p.id];
    save("cart", state.cart); renderCart(); updateCartCount();
  }
  return row;
}

// ===== Checkout Submit =====
$("#checkoutForm").addEventListener("submit", async (e)=>{
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const buyer = Object.fromEntries(fd.entries());

  // Validate required
  if(!buyer.name || !buyer.phone || !buyer.address){
    alert("يرجى تعبئة جميع الحقول المطلوبة"); return;
  }
  const items = Object.values(state.cart).map(({product, qty})=> ({
    id: product.id, title: product.title, price: product.price, qty, subtotal: product.price*qty
  }));
  if(items.length===0){ alert("السلة فارغة"); return; }

  const total = items.reduce((s, it)=> s+it.subtotal, 0);
  const payload = { buyer, items, total, currency: CURRENCY, createdAt: new Date().toISOString() };

  try{
    let ok = false;
    // Preferred: Apps Script endpoint (proxy to Telegram)
    if(ORDER_ENDPOINT){
      const res = await fetch(ORDER_ENDPOINT, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(payload) });
      ok = res.ok;
    }else if(TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID){
      // Direct Telegram (exposes token in client—غير مفضل)
      const text = [
        "طلب جديد من متجر الحدث موبايل",
        `الاسم: ${buyer.name}`,
        `الهاتف: ${buyer.phone}`,
        `العنوان: ${buyer.address}`,
        buyer.note ? `ملاحظات: ${buyer.note}` : "",
        "—".repeat(10),
        ...items.map(it=> `• ${it.title} × ${it.qty} = ${it.subtotal} ${CURRENCY}`),
        "—".repeat(10),
        `الإجمالي: ${total} ${CURRENCY}`
      ].filter(Boolean).join("\n");

      const tgURL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      const res = await fetch(tgURL, { method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }) });
      ok = res.ok;
    }else{
      // Fallback: WhatsApp compose message (لا يعتمد عليه للإدارة)
      const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(`طلب جديد\nالاسم: ${buyer.name}\nالهاتف: ${buyer.phone}\nالعنوان: ${buyer.address}\nالمجموع: ${total} ${CURRENCY}`);
      window.open(wa, "_blank");
      ok = true;
    }

    if(ok){
      alert("تم إرسال الطلب بنجاح. سنتواصل معك قريبًا.");
      state.cart = {}; save("cart", state.cart); renderCart(); updateCartCount(); closeCart();
    }else{
      alert("تعذر إرسال الطلب. تحقق من الرابط أو الشبكة.");
    }
  }catch(err){
    console.error(err);
    alert("حدث خطأ أثناء الإرسال.");
  }
});

// ===== Slider (Auto) =====
let slideIndex = 0;
function showSlide(i){
  const slides = $$(".slide");
  slideIndex = (i + slides.length) % slides.length;
  slides.forEach((s, idx)=> s.classList.toggle("active", idx===slideIndex));
  // dots
  const dots = $$(".dot");
  dots.forEach((d, idx)=> d.classList.toggle("active", idx===slideIndex));
}
function next(){ showSlide(slideIndex+1); }
function prev(){ showSlide(slideIndex-1); }
$("#nextBtn").onclick = next;
$("#prevBtn").onclick = prev;

// dots
function renderDots(){
  const dots = $("#dots"); dots.innerHTML = "";
  $$(".slide").forEach((_, idx)=>{
    const b = document.createElement("button"); b.className="dot" + (idx===0? " active": "");
    b.onclick = ()=> showSlide(idx); dots.appendChild(b);
  });
}
setInterval(next, 5000);

// ===== Init =====
function init(){
  $("#year").textContent = new Date().getFullYear();
  renderTabs();
  renderDots();
  filterAndRender();
}
document.addEventListener("DOMContentLoaded", init);
