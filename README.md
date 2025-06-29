# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Mail Gönderme (Contact Form)

- Formdan gönderilen mesajlar info@hidromex.com.tr adresine iletilecek şekilde ayarlanmıştır.
- Vercel üzerinde çalışması için kök dizine `.env` dosyası ekleyin:

```
MAIL_USER=
MAIL_PASS=
```

- Sunucu tarafında `/api/sendMail.ts` fonksiyonu kullanılacaktır.
- Nodemailer paketi gereklidir.
