# موقع مكتب الصالحي للمحاسبة
# Salahi CPA Website

موقع ويب احترافي لمكتب محاسبة يعرض الخدمات ومعلومات الاتصال.

---

## 📋 المحتويات

- `index.html` - الصفحة الرئيسية للموقع
- `styles.css` - ملف الأنماط والتصميم
- `script.js` - ملف JavaScript للتفاعلية
- `README.md` - تعليمات النشر والاستخدام

---

## 🚀 طرق رفع الموقع إلى الدومين

### الطريقة 1: استخدام Hostinger File Manager

بما أن الدومين مستضاف على Hostinger، يمكنك رفع الملفات مباشرة:

1. **تسجيل الدخول إلى Hostinger**
   - اذهب إلى [hpanel.hostinger.com](https://hpanel.hostinger.com)
   - سجل دخول بحسابك

2. **الوصول إلى File Manager**
   - من لوحة التحكم، اختر الدومين `salahi-cpa.com`
   - اضغط على "File Manager" أو "مدير الملفات"

3. **رفع الملفات**
   - اذهب إلى مجلد `public_html`
   - احذف أي ملفات موجودة (أو انقلها لمجلد backup)
   - ارفع الملفات التالية:
     * `index.html`
     * `styles.css`
     * `script.js`

4. **التأكد من الرفع**
   - افتح المتصفح واذهب إلى `https://salahi-cpa.com`
   - يجب أن يظهر الموقع مباشرة

---

### الطريقة 2: استخدام FTP

1. **الحصول على معلومات FTP من Hostinger**
   - من لوحة التحكم Hostinger
   - اذهب إلى Files > FTP Accounts
   - استخدم المعلومات الموجودة أو أنشئ حساب FTP جديد

2. **استخدام برنامج FTP (FileZilla مثلاً)**
   - حمّل وثبّت [FileZilla](https://filezilla-project.org/)
   - أدخل معلومات الاتصال:
     * Host: ftp.salahi-cpa.com أو عنوان FTP من Hostinger
     * Username: اسم المستخدم من Hostinger
     * Password: كلمة المرور من Hostinger
     * Port: 21

3. **رفع الملفات**
   - اتصل بالسيرفر
   - اذهب إلى مجلد `public_html`
   - اسحب وأسقط الملفات الثلاثة إلى المجلد

---

### الطريقة 3: استخدام GitHub Pages (بديل مجاني)

إذا أردت استخدام GitHub Pages:

1. **إنشاء repository على GitHub**
   ```bash
   cd salahi-cpa-website
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **تفعيل GitHub Pages**
   - اذهب إلى Settings > Pages
   - اختر branch: main
   - احفظ

3. **ربط الدومين المخصص**
   - في GitHub Pages settings، أضف: `salahi-cpa.com`
   - في Hostinger DNS، أضف:
     * Type: A
     * Name: @
     * Points to: `185.199.108.153`
     * Type: CNAME
     * Name: www
     * Points to: `YOUR_USERNAME.github.io`

---

## 🔧 إعدادات DNS المطلوبة

### إذا كنت تستخدم استضافة Hostinger:

يجب تغيير الـ DNS records الحالية:

1. **حذف السجلات الحالية**
   - احذف nameservers الحالية (ns1.dns-parking.com)

2. **إضافة A Record جديد**
   ```
   Type: A
   Name: @
   Points to: [عنوان IP من Hostinger]
   TTL: 14400
   ```

3. **تحديث CNAME للـ www**
   ```
   Type: CNAME
   Name: www
   Points to: salahi-cpa.com
   TTL: 300
   ```

---

## ✏️ تخصيص المحتوى

### تحديث معلومات الاتصال:

في ملف `index.html`، ابحث عن وعدّل:

1. **رقم الهاتف** (السطر ~172):
   ```html
   <p>+966 XX XXX XXXX</p>
   ```

2. **البريد الإلكتروني** (السطر ~189):
   ```html
   <p>info@salahi-cpa.com</p>
   ```

3. **العنوان** (السطر ~157):
   ```html
   <p>المملكة العربية السعودية<br>الرياض، شارع الملك فهد</p>
   ```

4. **ساعات العمل** (السطر ~206):
   ```html
   <p>الأحد - الخميس: 9:00 ص - 5:00 م</p>
   ```

---

## 📱 الميزات

- ✅ تصميم متجاوب (Responsive) لجميع الأجهزة
- ✅ قسم خدمات شامل
- ✅ نموذج اتصال تفاعلي
- ✅ رسوم متحركة ناعمة
- ✅ دعم اللغة العربية بالكامل
- ✅ تصميم احترافي وعصري
- ✅ أيقونات SVG قابلة للتطوير

---

## 🎨 الألوان المستخدمة

```css
الأزرق الأساسي: #1e40af
الأزرق الثانوي: #3b82f6
البرتقالي: #f59e0b
الرمادي الداكن: #1f2937
الخلفية الفاتحة: #f9fafb
```

---

## 📧 إعداد نموذج الاتصال

حالياً، نموذج الاتصال يعرض رسالة تأكيد فقط. لإرسال البيانات:

### الخيار 1: استخدام خدمة FormSubmit (مجانية)

عدّل في `index.html`:
```html
<form class="contact-form" action="https://formsubmit.co/info@salahi-cpa.com" method="POST">
```

### الخيار 2: استخدام Hostinger Email

1. أنشئ حساب بريد في Hostinger
2. استخدم PHP لإرسال البريد:

أنشئ ملف `submit-form.php`:
```php
<?php
if($_POST) {
    $to = "info@salahi-cpa.com";
    $subject = $_POST['subject'];
    $message = "الاسم: " . $_POST['name'] . "\n";
    $message .= "البريد: " . $_POST['email'] . "\n";
    $message .= "الهاتف: " . $_POST['phone'] . "\n";
    $message .= "الرسالة: " . $_POST['message'];

    $headers = "From: noreply@salahi-cpa.com";

    mail($to, $subject, $message, $headers);
    header("Location: index.html?success=1");
}
?>
```

---

## 🔒 نصائح الأمان

1. لا تنس تثبيت SSL Certificate (HTTPS) من لوحة تحكم Hostinger
2. قم بعمل نسخة احتياطية للملفات بانتظام
3. استخدم كلمات مرور قوية لـ FTP
4. فعّل DNSSEC إذا كان متاحاً

---

## 📞 الدعم

إذا واجهت أي مشكلة في الرفع أو الإعداد:
- تواصل مع دعم Hostinger
- راجع [توثيق Hostinger](https://support.hostinger.com)

---

## 📝 الترخيص

هذا الموقع مصمم خصيصاً لمكتب الصالحي للمحاسبة.

---

**تم الإنشاء بواسطة Claude Code** 🤖
