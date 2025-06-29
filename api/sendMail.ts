const nodemailer = require('nodemailer');

/**
 * @param {any} req
 * @param {any} res
 */
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    // Eğer info@hidromex.com.tr Office365 ise host: 'smtp.office365.com', port: 587, secure: false kullanın
    host: 'smtp.yandex.com', // Gerekirse 'smtp.office365.com' ile değiştirin
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Hidromex İletişim <${process.env.MAIL_USER}>`,
      to: 'info@hidromex.com.tr',
      subject: `Yeni İletişim Formu Mesajı - ${name}`,
      text: `Ad: ${name}\nEmail: ${email}\nTelefon: ${phone}\nMesaj: ${message}`,
      replyTo: email,
    });
    res.status(200).json({ message: 'Mail gönderildi' });
  } catch (error) {
    res.status(500).json({ message: 'Mail gönderilemedi', error });
  }
}; 