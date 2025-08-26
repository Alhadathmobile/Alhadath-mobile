// Basic Storefront logic (RTL, tabs, search, slider, cart with WhatsApp checkout)
// WhatsApp business number: 0796313243 -> country code JO 962
const WHATSAPP_NUMBER = "962796313243";
const STORE_KEY = "alhadath_cart_v1";
const state = {
  products: [],
  filtered: [],
  brand: "all",
  search: ""
};

const els = {
  grid: document.getElementById("products-grid"),
  tabs: document.getElementById("tabs"),
  search: document.getElementById("search"),
  cartBtn: document.getElementById("open-cart"),
  cartCount: document.getElementById("cart-count"),
  modal: document.getElementById("cart-modal"),
  closeCart: document.getElementById("close-cart"),
  cartItems: document.getElementById("cart-items"),
  cartTotal: document.getElementById("cart-total"),
  emptyCart: document.getElementById("empty-cart"),
  whatsappCheckout: document.getElementById("whatsapp-checkout"),
  year: document.getElementById("year"),
  // slider
  slides: document.getElementById("slides"),
  dots: document.getElementById("dots"),
  prev: document.getElementById("prev"),
  next: document.getElementById("next"),
};

const Cart = {
  load(){ try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch { return []; } },
  save(items){ localStorage.setItem(STORE_KEY, JSON.stringify(items)); updateCartCount(); },
  add(product){
    const items = Cart.load();
    const idx = items.findIndex(i => i.id === product.id);
    if(idx >= 0){ items[idx].qty += 1; } else { items.push({id:product.id, name:product.name, price:product.price, img:product.img, qty:1}); }
    Cart.save(items);
  },
  remove(id){
    const items = Cart.load().filter(i => i.id !== id);
    Cart.save(items); renderCart();
  },
  inc(id){ const items = Cart.load(); const it = items.find(i=>i.id===id); if(it){it.qty++; Cart.save(items); renderCart();} },
  dec(id){ const items = Cart.load(); const it = items.find(i=>i.id===id); if(it){ it.qty = Math.max(1, it.qty-1); Cart.save(items); renderCart(); } },
  clear(){ Cart.save([]); renderCart(); },
  total(){ return Cart.load().reduce((s,i)=> s + i.price * i.qty, 0); }
};

function fmtJD(v){ return `${v.toFixed(2)} JD`; }

async function loadProducts(){
  const res = await fetch("products.json?v=" + Date.now());
  state.products = await res.json();
  applyFilters();
}

function applyFilters(){
  const q = state.search.trim().toLowerCase();
  state.filtered = state.products.filter(p => {
    const brandOk = state.brand === "all" ? true : p.brand === state.brand;
    const text = (p.name + " " + p.brand + " " + (p.specs||"")).toLowerCase();
    const qOk = q ? text.includes(q) : true;
    return brandOk && qOk;
  });
  renderProducts();
}

function renderProducts(){
  els.grid.setAttribute("aria-busy","true");
  els.grid.innerHTML = state.filtered.map(p => `
    <article class="card">
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
      <div class="body">
        <h3>${p.name}</h3>
        <div class="meta"><span class="brand">${p.brand}</span><span class="price">${fmtJD(p.price)}</span></div>
        <div class="variants">${(p.variants||[]).map(v=>`<span class="variant">${v}</span>`).join("")}</div>
        <button data-add="${p.id}">أضف إلى السلة</button>
      </div>
    </article>
  `).join("");
  els.grid.removeAttribute("aria-busy");
  // attach add handlers
  document.querySelectorAll("[data-add]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      const id = e.currentTarget.getAttribute("data-add");
      const product = state.products.find(p=>p.id===id);
      Cart.add(product);
      openCart(); // ينتقل للسلة مباشرة كما طلبت
    });
  });
}

function updateCartCount(){
  const count = Cart.load().reduce((s,i)=> s+i.qty, 0);
  els.cartCount.textContent = count;
}

function renderCart(){
  const items = Cart.load();
  if(items.length === 0){
    els.cartItems.innerHTML = `<p style="padding:12px">السلة فارغة.</p>`;
  } else {
    els.cartItems.innerHTML = items.map(i=>`
      <div class="cart-item">
        <img src="${i.img}" alt="${i.name}"/>
        <div>
          <h4>${i.name}</h4>
          <div class="qty">
            <button data-dec="${i.id}">−</button>
            <strong>${i.qty}</strong>
            <button data-inc="${i.id}">+</button>
          </div>
        </div>
        <div style="text-align:end">
          <div>${fmtJD(i.price * i.qty)}</div>
          <button class="icon-btn" data-remove="${i.id}">حذف</button>
        </div>
      </div>
    `).join("");
  }
  els.cartTotal.textContent = fmtJD(Cart.total());
  // bind
  els.cartItems.querySelectorAll("[data-remove]").forEach(b=> b.addEventListener("click", e=> Cart.remove(e.currentTarget.getAttribute("data-remove"))));
  els.cartItems.querySelectorAll("[data-inc]").forEach(b=> b.addEventListener("click", e=> Cart.inc(e.currentTarget.getAttribute("data-inc"))));
  els.cartItems.querySelectorAll("[data-dec]").forEach(b=> b.addEventListener("click", e=> Cart.dec(e.currentTarget.getAttribute("data-dec"))));

  // build WhatsApp message
  const parts = items.map(i=> `${i.name} x${i.qty} = ${i.price * i.qty} JD`).join("%0A");
  const total = Cart.total();
  const msg = `مرحبا، أريد إتمام الطلب:%0A${parts}%0A---%0Aالإجمالي: ${total} JD%0Aالاسم:%0Aالهاتف:%0Aالعنوان:%0Aملاحظات:`;
  els.whatsappCheckout.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function openCart(){
  renderCart();
  els.modal.setAttribute("aria-hidden","false");
}
function closeCart(){
  els.modal.setAttribute("aria-hidden","true");
}

function initTabs(){
  els.tabs.addEventListener("click", (e)=>{
    const btn = e.target.closest(".tab");
    if(!btn) return;
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    btn.classList.add("active");
    state.brand = btn.dataset.brand;
    applyFilters();
  });
}

function initSearch(){
  let t;
  els.search.addEventListener("input", ()=>{
    clearTimeout(t);
    t = setTimeout(()=>{
      state.search = els.search.value;
      applyFilters();
    }, 150);
  });
}

function initCartModal(){
  els.cartBtn.addEventListener("click", openCart);
  els.closeCart.addEventListener("click", closeCart);
  els.modal.addEventListener("click", (e)=>{ if(e.target === els.modal) closeCart(); });
  els.emptyCart.addEventListener("click", ()=> Cart.clear());
}

function initFooter(){ els.year.textContent = new Date().getFullYear(); }

/* Slider */
let slideIndex = 0, slideTimer = null;
function renderDots(){
  const count = els.slides.children.length;
  els.dots.innerHTML = "";
  for(let i=0;i<count;i++){
    const b = document.createElement("button");
    b.setAttribute("aria-label", "انتقل إلى الشريحة " + (i+1));
    b.addEventListener("click", ()=> goToSlide(i));
    els.dots.appendChild(b);
  }
}
function goToSlide(i){
  slideIndex = (i + els.slides.children.length) % els.slides.children.length;
  els.slides.style.transform = `translateX(-${slideIndex*100}%)`;
  [...els.dots.children].forEach((d,idx)=> d.classList.toggle("active", idx===slideIndex));
  restartAutoplay();
}
function nextSlide(){ goToSlide(slideIndex+1); }
function prevSlide(){ goToSlide(slideIndex-1); }
function autoplay(){ slideTimer = setInterval(nextSlide, 4000); }
function stopAutoplay(){ clearInterval(slideTimer); }
function restartAutoplay(){ stopAutoplay(); autoplay(); }
function initSlider(){
  renderDots();
  goToSlide(0);
  els.next.addEventListener("click", nextSlide);
  els.prev.addEventListener("click", prevSlide);
  autoplay();
}

async function main(){
  initTabs();
  initSearch();
  initCartModal();
  initFooter();
  initSlider();
  updateCartCount();
  await loadProducts();
}
main();
