// بيانات افتراضية — استبدلها بالبيانات الحقيقية (أو اجلبها من JSON خارجي)
const offers = [
  {id:1,title:"iPhone 14 Pro - عرض خاص",price:"650 د.أ",img:"images/iphone14pro.jpg"},
  {id:2,title:"شاحن لاسلكي - خصم 20%",price:"10 د.أ",img:"images/charger.jpg"}
];
const used = [
  {id:11,title:"iPhone 12 مستعمل - حالة جيدة",price:"180 د.أ",img:"images/iphone12used.jpg"},
  {id:12,title:"Samsung S21 مستعمل",price:"150 د.أ",img:"images/s21used.jpg"}
];
const news = [
  {id:21,title:"iPhone 16 Pro Max - جديد",price:"1300 د.أ",img:"images/iphone16.jpg"}
];

function renderList(containerId, items){
  const container = document.getElementById(containerId);
  items.forEach(it=>{
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${it.img}" alt="${it.title}" onerror="this.src='images/placeholder.png'">
      <h3>${it.title}</h3>
      <div class="price">${it.price}</div>
      <a class="contact-link" href="https://wa.me/962796313243?text=${encodeURIComponent('مرحباً، أريد معلومات عن: '+it.title)}" target="_blank">اطلب عبر واتساب</a>
    `;
    container.appendChild(div);
  });
}

renderList('offers-list', offers);
renderList('used-list', used);
renderList('new-list', news);
