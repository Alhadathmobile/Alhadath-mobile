/* ============ Alhadath Mobile (SAFE) ============ */
const CURRENCY = "JD";
const WHATSAPP_NUMBER = ""; 
const ORDER_ENDPOINT = "";

const TELEGRAM_BOT_TOKEN = "8400045424:AAF57FN0km9UN3_LNdF87wOGWKfbcbdrkhk";
const TELEGRAM_CHAT_ID = "8403706325";

const BRANDS = ["الكل","Samsung","iPhone","Redmi/MI","Tecno","Infinix","Honor","Accessories"];
const PRODUCTS = [
  { id:"s-a06-64", title:"Samsung A06 - 64GB / 4GB RAM", brand:"Samsung", price:49, image:"assets/images/samsung-a06.webp" },
  { id:"s-a06-128", title:"Samsung A06 - 128GB / 4GB RAM", brand:"Samsung", price:59, image:"assets/images/samsung-a06.jpg" },
  { id:"s-a16-128", title:"Samsung A16 - 128GB / 4GB RAM", brand:"Samsung", price:99, image:"assets/images/samsung-a06.jpg" },
  { id:"ip-16pm-256", title:"iPhone 16 Pro Max - 256GB", brand:"iPhone", price:900, image:"assets/images/iphone-16-pro-max.jpeg" },
  { id:"mi-note-14-256", title:"Xiaomi Redmi Note 14 - 256GB / 8GB RAM", brand:"Redmi/MI", price:149, image:"assets/images/xiaomi-redmi-note.jpg" },
  { id:"tec-spark", title:"Tecno Spark", brand:"Tecno", price:115, image:"assets/images/tecno-spark.jpg" },
  { id:"inf-hot", title:"Infinix Hot", brand:"Infinix", price:120, image:"assets/images/infinix-hot.jpg" },
  { id:"hon-x9", title:"Honor X9", brand:"Honor", price:199, image:"assets/images/honor-x9.jpg" },
  { id:"acc-charger", title:"شاحن أصلي سريع", brand:"Accessories", price:12, image:"assets/images/accessory-charger.jpg" },
];

function $(sel, root){ return (root||document).querySelector(sel); }
function $all(sel, root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }
function formatPrice(v){ v=Number(v)||0; return v.toFixed(2)+" "+CURRENCY; }
function save(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
function load(k,fallback){ try{ var v=localStorage.getItem(k); return v? JSON.parse(v): fallback; }catch(e){ return fallback; } }

var state = { brand:"الكل", query:"", sort:"popular", cart: load("cart", {}) };

function safeAddEvent(el, ev, fn){ if(el && el.addEventListener){ el.addEventListener(ev, fn); } }

function renderTabs(){
  var tabs = $("#tabs"); if(!tabs) return;
  tabs.innerHTML="";
  BRANDS.forEach(function(b){
    var btn=document.createElement("button");
    btn.className="tab"+(b===state.brand?" active":"");
    btn.textContent=b;
    btn.onclick=function(){ state.brand=b; filterAndRender(); setActiveTab(b); };
    tabs.appendChild(btn);
  });
}
function setActiveTab(label){
  $all(".tab").forEach(function(el){ el.classList.toggle("active", el.textContent===label); });
}

safeAddEvent($("#searchInput"), "input", function(e){
  state.query=(e.target.value||"").trim().toLowerCase();
  filterAndRender();
});
safeAddEvent($("#sortSelect"), "change", function(e){
  state.sort=e.target.value;
  filterAndRender();
});

function filterAndRender(){
  var grid=$("#productsGrid"); if(!grid) return;
  var empty=$("#emptyState");

  var items=PRODUCTS
    .filter(function(p){ return state.brand==="الكل" || p.brand===state.brand; })
    .filter(function(p){ return p.title.toLowerCase().includes(state.query); });

  if(state.sort==="priceAsc") items.sort(function(a,b){ return a.price-b.price; });
  else if(state.sort==="priceDesc") items.sort(function(a,b){ return b.price-a.price; });

  grid.innerHTML="";
  if(items.length===0){ if(empty) empty.hidden=false; return; } else { if(empty) empty.hidden=true; }

  var frag=document.createDocumentFragment();
  items.forEach(function(p){ frag.appendChild(cardTemplate(p)); });
  grid.appendChild(frag);
  updateCartCount();
}

function cardTemplate(p){
  var el=document.createElement("article");
  el.className="card";
  el.innerHTML =
    '<div class="card__img"><img src="'+p.image+'" alt="'+p.title+'"></div>'+
    '<div class="card__body">'+
      '<h3 class="card__title">'+p.title+'</h3>'+
      '<div class="card__meta">'+
        '<span class="price">'+formatPrice(p.price)+'</span>'+
        '<button class="btn btn--primary" data-add="'+p.id+'">أضف للسلة</button>'+
      '</div>'+
    '</div>';
  var addBtn = el.querySelector("[data-add]");
  if(addBtn){ addBtn.onclick=function(){ addToCart(p); }; }
  return el;
}

function addToCart(p){
  var item=state.cart[p.id] || { qty:0, product:p };
  item.qty+=1;
  state.cart[p.id]=item;
  save("cart", state.cart);
  animateFab();
  updateCartCount();
}
function updateCartCount(){
  var count = Object.values(state.cart).reduce(function(s,it){ return s+it.qty; }, 0);
  var badge = $("#cartCount");
  if (!badge) return;
  badge.textContent = count;

  // شغّل نبضة العداد كل مرة يتغير الرقم
  badge.classList.remove("bump");
  void badge.offsetWidth;               // لإعادة تشغيل الأنيميشن
  badge.classList.add("bump");
  setTimeout(function(){ badge.classList.remove("bump"); }, 400);
}
function animateFab(){
  var fab=$("#cartFab"); if(!fab || !fab.animate) return;
  fab.animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}], {duration:260});
}

safeAddEvent($("#cartFab"), "click", openCart);
safeAddEvent($("#closeCart"), "click", closeCart);
safeAddEvent($("#clearCart"), "click", function(){
  if(confirm("هل تريد إفراغ السلة بالكامل؟")){
    state.cart={}; save("cart", state.cart); renderCart(); updateCartCount();
  }
});
safeAddEvent($("#checkoutBtn"), "click", function(){
  var f=$("#checkoutForm"); if(f) f.hidden=false;
  var cs=$(".cart-summary"); if(cs && cs.scrollIntoView) cs.scrollIntoView({behavior:"smooth", block:"end"});
});
safeAddEvent($("#backToCart"), "click", function(){
  var f=$("#checkoutForm"); if(f) f.hidden=true;
});

function openCart(){ renderCart(); disableScroll(true); var m=$("#cartModal"); if(m) m.hidden=false; }
function closeCart(){ var m=$("#cartModal"); if(m) m.hidden=true; disableScroll(false); }
function disableScroll(lock){ document.body.style.overflow = lock? "hidden": ""; }

function renderCart(){
  var wrap=$("#cartItems"); if(!wrap) return;
  wrap.innerHTML="";
  var entries=Object.values(state.cart);
  if(entries.length===0){ wrap.innerHTML='<p class="muted">سلتك فارغة.</p>'; }
  else{
    entries.forEach(function(it){ wrap.appendChild(cartRow(it.product, it.qty)); });
  }
  var total=entries.reduce(function(s,it){ return s + it.product.price*it.qty; },0);
  var ct=$("#cartTotal"); if(ct) ct.textContent=formatPrice(total);
  var f=$("#checkoutForm"); if(f) f.hidden=true;
}

function cartRow(p, qty){
  var row=document.createElement("div");
  row.className="cart-row";
  row.innerHTML =
    '<img src="'+p.image+'" alt="'+p.title+'">'+
    '<div><div style="font-weight:700">'+p.title+'</div><div class="muted tiny">'+formatPrice(p.price)+' للوحدة</div></div>'+
    '<div class="qty">'+
      '<button type="button" data-dec>−</button>'+
      '<strong>'+qty+'</strong>'+
      '<button type="button" data-inc>+</button>'+
    '</div>'+
    '<div style="text-align:end">'+formatPrice(p.price*qty)+'</div>';
  var inc=row.querySelector("[data-inc]");
  var dec=row.querySelector("[data-dec]");
  if(inc){ inc.onclick=function(){ state.cart[p.id].qty++; save("cart", state.cart); renderCart(); updateCartCount(); }; }
  if(dec){ dec.onclick=function(){ state.cart[p.id].qty--; if(state.cart[p.id].qty<=0) delete state.cart[p.id]; save("cart", state.cart); renderCart(); updateCartCount(); }; }
  return row;
}

safeAddEvent($("#checkoutForm"), "submit", async function(e){
  e.preventDefault();
  var fd=new FormData(e.currentTarget);
  var buyer={}; fd.forEach(function(v,k){ buyer[k]=v; });

  if(!buyer.name || !buyer.phone || !buyer.address){ alert("يرجى تعبئة جميع الحقول المطلوبة"); return; }

  var entries=Object.values(state.cart);
  if(entries.length===0){ alert("السلة فارغة"); return; }
  var items=entries.map(function(it){ return { id:it.product.id, title:it.product.title, price:it.product.price, qty:it.qty, subtotal:it.product.price*it.qty }; });
  var total=items.reduce(function(s,it){ return s+it.subtotal; },0);
  var payload={ customer:buyer, items:items, total:total, currency:CURRENCY, createdAt:new Date().toISOString() };

  try{
    var ok=false, errMsg="";

    if(ORDER_ENDPOINT){
      var res=await fetch(ORDER_ENDPOINT, { method:"POST", headers:{"Content-Type":"text/plain;charset=utf-8"}, body: JSON.stringify(payload) });
      var text=await res.text();
      try{
        var data=JSON.parse(text);
        ok = res.ok && (data.ok===true || data.success===true || data.telegram==='sent');
        if(!ok) errMsg = data.error || data.body || text || ("HTTP "+res.status);
      }catch(_){
        ok = res.ok;
        if(!ok) errMsg = text || ("HTTP "+res.status);
      }
    }else if(TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID){
      var msg=["طلب جديد من متجر الحدث موبايل","الاسم: "+buyer.name,"الهاتف: "+buyer.phone,"العنوان: "+buyer.address];
      if(buyer.note) msg.push("ملاحظات: "+buyer.note);
      msg.push("— — —");
      items.forEach(function(it){ msg.push("• "+it.title+" × "+it.qty+" = "+it.subtotal+" "+CURRENCY); });
      msg.push("— — —","الإجمالي: "+total+" "+CURRENCY);
      var tgURL="https://api.telegram.org/bot"+TELEGRAM_BOT_TOKEN+"/sendMessage";
      var r=await fetch(tgURL, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg.join("\n") }) });
      ok=r.ok;
    }else{
      var wa="https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent("طلب جديد\nالاسم: "+buyer.name+"\nالهاتف: "+buyer.phone+"\nالعنوان: "+buyer.address+"\nالمجموع: "+total+" "+CURRENCY);
      window.open(wa, "_blank"); ok=true;
    }

    if(ok){
      alert("تم إرسال الطلب بنجاح. سنتواصل معك قريبًا.");
      state.cart={}; save("cart", state.cart); renderCart(); updateCartCount(); closeCart();
    }else{
      alert("تعذر إرسال الطلب:\n"+(errMsg||"تحقق من الرابط أو الشبكة"));
    }
  }catch(err){
    console.error(err);
    alert("حدث خطأ أثناء الإرسال.");
  }
});

/* ===== Slider ===== */
var slideIndex=0;
function showSlide(i){
  var slides=$all(".slide"); if(slides.length===0) return;
  slideIndex=(i+slides.length)%slides.length;
  slides.forEach(function(s,idx){ s.classList.toggle("active", idx===slideIndex); });
  var dots=$all(".dot"); dots.forEach(function(d,idx){ d.classList.toggle("active", idx===slideIndex); });
}
function next(){ showSlide(slideIndex+1); }
function prev(){ showSlide(slideIndex-1); }
var nb=$("#nextBtn"); if(nb) nb.onclick=next;
var pb=$("#prevBtn"); if(pb) pb.onclick=prev;

function renderDots(){
  var dots=$("#dots"); var slides=$all(".slide"); if(!dots || slides.length===0) return;
  dots.innerHTML="";
  slides.forEach(function(_,idx){
    var b=document.createElement("button"); b.className="dot"+(idx===0?" active":"");
    b.onclick=function(){ showSlide(idx); }; dots.appendChild(b);
  });
}
setInterval(function(){ try{ next(); }catch(e){} }, 5000);

/* ===== Init ===== */
function init(){
  var y=$("#year"); if(y) y.textContent=(new Date()).getFullYear();
  renderTabs();
  renderDots();
  filterAndRender();
  updateCartCount();
}
document.addEventListener("DOMContentLoaded", function(){
  try{ init(); }catch(err){ console.error("Init error:", err); alert("خطأ في التهيئة: "+err); }
});
document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.getElementById("whatsappBtn");
  if (!whatsappBtn) return;

  let expanded = false;
  let timer;

  whatsappBtn.addEventListener("click", function(e) {
    if (!expanded) {
      e.preventDefault(); // لا يفتح الرابط أول مرة
      whatsappBtn.classList.add("expanded");
      expanded = true;

      // يرجع يصغر تلقائياً بعد 5 ثواني إذا ما ضغط مرة ثانية
      timer = setTimeout(() => {
        whatsappBtn.classList.remove("expanded");
        expanded = false;
      }, 5000);

    } else {
      // يلغي المؤقت لو ضغط المستخدم
      clearTimeout(timer);
      window.open(whatsappBtn.href, "_blank");
      whatsappBtn.classList.remove("expanded");
      expanded = false;
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // تأثير Pop على أي زر "أضف للسلة"
  document.addEventListener("click", (e) => {
    const btn = e.target.closest('[data-add-to-cart], [data-action="add"], [data-role="add"], .add-to-cart, .btn-add, .btn--add, .btn'); 
    if (!btn) return;

    // لو هذا الزر هو فعلاً زر إضافة (نحاول نتأكد بالنص/الداتا إن وُجدت)
    const txt = (btn.innerText || "").trim();
    const looksLikeAdd =
      btn.matches('[data-add-to-cart], [data-action="add"], [data-role="add"], .add-to-cart, .btn-add, .btn--add') ||
      /أضف|اضافة|إضافة|Add/i.test(txt);

    if (!looksLikeAdd) return;

    // شغّل تأثير الـ Pop
    btn.classList.add("added");
    setTimeout(() => btn.classList.remove("added"), 240);
    });
});
