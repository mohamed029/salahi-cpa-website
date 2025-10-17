# دليل نشر موقع مكتب صلاح للمحاسبة
# Salah CPA Website Deployment Guide

---

## 📦 محتويات المشروع

```
salahi-cpa-website/
├── index.html          # الصفحة الرئيسية
├── styles.css          # ملف التصميم
├── script.js           # ملف JavaScript
├── logo.jpeg           # شعار المكتب
└── DEPLOYMENT.md       # هذا الملف
```

---

## 🚀 طرق رفع الموقع

### الطريقة 1: رفع مباشر عبر Hostinger (موصى بها)

#### الخطوات:

1. **تسجيل الدخول إلى Hostinger**
   - اذهب إلى: https://hpanel.hostinger.com
   - سجل دخولك بحسابك

2. **الوصول إلى File Manager**
   - من لوحة التحكم، اختر الدومين `salahi-cpa.com`
   - اضغط على **Files** > **File Manager**

3. **تحضير المجلد**
   - اذهب إلى مجلد `public_html`
   - احذف جميع الملفات الموجودة (أو انقلها إلى مجلد `backup`)

4. **رفع الملفات**
   - اضغط على **Upload Files**
   - ارفع الملفات التالية:
     * `index.html`
     * `styles.css`
     * `script.js`
     * `logo.jpeg`

5. **التحقق**
   - افتح المتصفح واذهب إلى `https://salahi-cpa.com`
   - يجب أن يظهر الموقع فوراً

---

### الطريقة 2: استخدام FTP

#### تحميل برنامج FTP (FileZilla):
- حمّل من: https://filezilla-project.org/

#### الحصول على معلومات FTP:
1. من لوحة تحكم Hostinger
2. اذهب إلى **Files** > **FTP Accounts**
3. استخدم المعلومات الموجودة أو أنشئ حساب FTP جديد

#### الاتصال والرفع:
```
Host: ftp.salahi-cpa.com (أو IP من Hostinger)
Username: [اسم المستخدم من Hostinger]
Password: [كلمة المرور]
Port: 21
```

1. افتح FileZilla وأدخل المعلومات أعلاه
2. اضغط **Quickconnect**
3. في الجانب الأيمن، اذهب إلى `public_html`
4. في الجانب الأيسر، اذهب إلى مجلد المشروع
5. اسحب جميع الملفات إلى `public_html`

---

### الطريقة 3: GitHub Pages (استضافة مجانية بديلة)

#### إذا أردت استخدام GitHub Pages:

```bash
cd salahi-cpa-website
git init
git add .
git commit -m "Initial commit - Salah CPA Website"
git branch -M main
git remote add origin [YOUR_GITHUB_REPO_URL]
git push -u origin main
```

#### تفعيل GitHub Pages:
1. اذهب إلى **Settings** > **Pages**
2. Source: اختر `main` branch
3. احفظ التغييرات

#### ربط الدومين المخصص:
1. في GitHub Pages settings، أضف: `salahi-cpa.com`
2. في Hostinger DNS، أضف السجلات التالية:

```
Type: A
Name: @
Value: 185.199.108.153
TTL: 14400

Type: A
Name: @
Value: 185.199.109.153
TTL: 14400

Type: A
Name: @
Value: 185.199.110.153
TTL: 14400

Type: A
Name: @
Value: 185.199.111.153
TTL: 14400

Type: CNAME
Name: www
Value: [YOUR_GITHUB_USERNAME].github.io
TTL: 14400
```

---

## ⚙️ إعداد DNS

### إذا كنت تستخدم استضافة Hostinger:

#### الخطوة 1: تحديث Nameservers
في لوحة تحكم الدومين، غيّر من:
```
ns1.dns-parking.com
ns2.dns-parking.com
```

إلى nameservers الخاصة بـ Hostinger (ستجدها في لوحة التحكم).

#### الخطوة 2: إضافة A Record
```
Type: A
Name: @
Points to: [عنوان IP من Hostinger]
TTL: 14400
```

#### الخطوة 3: تحديث CNAME
```
Type: CNAME
Name: www
Points to: salahi-cpa.com
TTL: 300
```

**ملاحظة**: قد يستغرق تحديث DNS من 24-48 ساعة.

---

##  SSL Certificate (HTTPS)

### لتأمين الموقع بشهادة SSL:

1. من لوحة تحكم Hostinger
2. اذهب إلى **Security** > **SSL**
3. اختر الدومين `salahi-cpa.com`
4. اضغط على **Install SSL** (مجاني من Let's Encrypt)
5. انتظر بضع دقائق حتى يتم التنشيط
6. تأكد من أن الموقع يعمل على `https://salahi-cpa.com`

---

## ✏️ تخصيص المحتوى

### تحديث معلومات الاتصال:

افتح ملف `index.html` وعدّل:

#### رقم الهاتف (السطر 136):
```html
<p dir="ltr">+964 790 454 5050</p>
```

#### البريد الإلكتروني (السطر 147):
```html
<p>info@salahi-cpa.com</p>
```

#### العنوان (السطر 126):
```html
<p>العراق - بغداد<br>الحارثية</p>
```

---

## 📧 إعداد نموذج الاتصال

حالياً، نموذج الاتصال يعرض رسالة تأكيد فقط.

### الخيار 1: استخدام FormSubmit (مجاني وسهل)

في ملف `index.html`، عدّل السطر 152:
```html
<form class="contact-form" action="https://formsubmit.co/info@salahi-cpa.com" method="POST">
```

### الخيار 2: استخدام PHP (للإرسال عبر بريد Hostinger)

1. أنشئ ملف `contact-form.php` في نفس المجلد:

```php
<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "info@salahi-cpa.com";
    $email_subject = "رسالة جديدة من: $name - $subject";

    $email_body = "تلقيت رسالة جديدة من نموذج الاتصال:\n\n";
    $email_body .= "الاسم: $name\n";
    $email_body .= "البريد الإلكتروني: $email\n";
    $email_body .= "الهاتف: $phone\n";
    $email_body .= "الموضوع: $subject\n\n";
    $email_body .= "الرسالة:\n$message\n";

    $headers = "From: noreply@salahi-cpa.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if(mail($to, $email_subject, $email_body, $headers)) {
        header("Location: index.html?success=1");
    } else {
        header("Location: index.html?error=1");
    }
    exit();
}
?>
```

2. في ملف `index.html`، عدّل السطر 152:
```html
<form class="contact-form" action="contact-form.php" method="POST">
```

---

## 🎨 الألوان المستخدمة

الموقع يستخدم 3 ألوان فقط مشتقة من اللوگو:

```css
--black: #000000      /* الأسود - اللون الأساسي */
--white: #ffffff      /* الأبيض - الخلفية */
--gray: #6b7280       /* الرمادي - النصوص الثانوية */
--light-gray: #f3f4f6 /* رمادي فاتح - الخلفيات */
```

---

## 📱 الميزات

- ✅ تصميم عصري minimalist
- ✅ متجاوب 100% لجميع الأجهزة
- ✅ ألوان مشتقة من اللوگو (3 ألوان فقط)
- ✅ رسوم متحركة ناعمة
- ✅ تحسين محركات البحث (SEO)
- ✅ سرعة تحميل عالية
- ✅ دعم كامل للغة العربية

---

## 🔒 نصائح الأمان

1. ✅ فعّل SSL Certificate (HTTPS) من Hostinger
2. ✅ استخدم كلمات مرور قوية لـ FTP
3. ✅ قم بعمل نسخة احتياطية للملفات بانتظام
4. ✅ حدّث Hostinger بانتظام
5. ⚠️ لا تشارك معلومات FTP مع أحد

---

## 🐛 حل المشاكل الشائعة

### الموقع لا يظهر:
- تأكد من رفع الملفات إلى `public_html` وليس مجلد آخر
- تأكد من أن ملف `index.html` موجود
- امسح الكاش (Cache) في المتصفح

### الصور لا تظهر:
- تأكد من رفع ملف `logo.jpeg`
- تحقق من أن اسم الملف مطابق تماماً

### DNS لا يعمل:
- انتظر 24-48 ساعة لتحديث DNS
- تحقق من إعدادات DNS في لوحة التحكم
- استخدم https://dnschecker.org للتحقق

### SSL لا يعمل:
- انتظر 10-15 دقيقة بعد تفعيل SSL
- امسح كاش المتصفح
- جرب المتصفح في وضع التصفح المتخفي

---

## 📞 الدعم

### دعم Hostinger:
- الموقع: https://support.hostinger.com
- Chat: متوفر 24/7

### توثيق Hostinger:
- دليل رفع الملفات: https://support.hostinger.com/en/articles/1583258-how-to-upload-files-using-file-manager
- دليل SSL: https://support.hostinger.com/en/articles/1583264-how-to-install-ssl-certificate
- دليل DNS: https://support.hostinger.com/en/articles/1696622-how-to-manage-dns-zone

---

## 📝 معلومات المشروع

- **اسم المكتب**: مكتب صلاح للمحاسبة
- **الدومين**: salahi-cpa.com
- **سنة التأسيس**: 2018
- **الموقع**: العراق - بغداد - الحارثية
- **الهاتف**: +964 790 454 5050
- **البريد**: info@salahi-cpa.com

---

## 🎉 تم الإنشاء بنجاح!

الآن موقعك جاهز للنشر. اتبع الخطوات أعلاه واستمتع بموقعك الاحترافي!

**حظاً موفقاً! 🚀**
