# Alhadath Mobile - GitHub Pages Store (Arabic RTL)

- اسم المتجر: الحدث موبايل | Alhadath Mobile
- التوصيل: داخل عمّان 24 ساعة · المحافظات 48 ساعة · الدفع عند الاستلام
- تبويبات: Samsung / iPhone / Redmi-MI / Tecno / Infinix / Honor / اكسسوارات / العروض
- السلة: إضافة فقط تُحدّث الشارة، فتحها يدويًا من الأيقونة، زر إفراغ السلة
- تأكيد الطلب: إرسال عبر Telegram Bot API (يتطلب TOKEN + CHAT_ID)

## إعداد Telegram
1) أنشئ بوت من @BotFather واحصل على **TOKEN**.
2) احصل على **CHAT_ID** (أرسل رسالة للبوت أو أضِفه لمجموعة ثم استخرج الـ chat_id من أي خدمة/بوت get id).
3) افتح `config.js` واستبدل القيم:
```js
window.TG = {
  token: "123456:ABCDEF...",
  chat_id: "123456789"
};
```
> تنبيه أمني: وضع التوكن في الواجهة الأمامية غير آمن للإنتاج. استخدم وسيط (Cloudflare Worker / Netlify Function) لإخفائه لاحقًا.

## النشر على GitHub Pages
- ارفع هذه الملفات في جذر المستودع (حيث يظهر `index.html` مباشرة).
- من Settings → Pages اختر النشر من الفرع `main` والمجلد root.

## تعديل المنتجات
- حرر `products.json` وعدّل الاسم/السعر/الصورة/العلامة التجارية.
- لتفعيل تبويب **العروض**، ضع `"promo": true` بالسجل الذي تريد.

بالتوفيق 🌟
