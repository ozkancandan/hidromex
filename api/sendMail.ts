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
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // 465 için true, 587 için false
    auth: {
      user: 'hidromexdanismanlik@gmail.com',
      pass: 'kucukoz*2025',
    },
  });

  try {
    await transporter.sendMail({
      from: `Hidromex İletişim <${process.env.MAIL_USER}>`,
      to: 'info@hidromex.com.tr',
      cc: 'ozkancandan@gmail.com',
      subject: `Yeni İletişim Formu Mesajı - ${name}`,
      text: `Ad: ${name}\nEmail: ${email}\nTelefon: ${phone}\nMesaj: ${message}`,
      replyTo: email,
    });
    res.status(200).json({ message: 'Mail gönderildi' });
  } catch (error) {
    res.status(500).json({ message: 'Mail gönderilemedi', error });
  }
}; 