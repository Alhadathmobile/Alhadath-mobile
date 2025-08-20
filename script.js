let cart = [];
const botToken = '8429839299:AAGIZDR0i2whW7AvRzdGh5DdpfKavCWtw4E';
const chatId = '8403706325';

function addToCart(name, price){
  cart.push({name, price});
  updateCart();
}

function removeItem(index){
  cart.splice(index,1);
  updateCart();
}

function updateCart(){
  const cartDiv = document.getElementById('cart');
  if(cart.length === 0){
    cartDiv.innerHTML = '<p data-ar="لا توجد منتجات في السلة." data-en="No products in cart."></p>';
    return;
  }
  let html = '<ul>';
  cart.forEach((item, index) => {
    html += <li>${item.name} - ${item.price} دينار <button onclick="removeItem(${index})">حذف</button></li>;
  });
  html += '</ul>';
  cartDiv.innerHTML = html;
}

function checkout(){
  if(cart.length === 0){
    alert('السلة فارغة!');
    return;
  }
  let message = 'طلب جديد:\n';
  cart.forEach(item=>{
    message += ${item.name} - ${item.price} دينار\n;
  });

  fetch(https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)})
  .then(response => alert('تم إرسال الطلب عبر Telegram!'))
  .catch(err => alert('حدث خطأ في إرسال الطلب'));
}

function setLang(lang){
  document.querySelectorAll('[data-ar]').forEach(el=>{
    el.textContent = lang==='ar'? el.getAttribute('data-ar') : el.getAttribute('data-en');
  });
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}