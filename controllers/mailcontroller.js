
const nodemailer = require('nodemailer');

exports.sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL, 
        pass: process.env.SMTP_PASSWORD, 
      },
    });


    const mailOptions = {
      from: email, 
      to: "1234trishasahu@gmail.com", 
      subject: `Contact Us Message from ${name}`,
      text: message,
      html: `
        <p>You have received a new message from the Contact Us form:</p>
        <h3>Contact Details:</h3>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${message}</p>
      `, // HTML body
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);

    return res.status(500).json({ success: false, message: 'Error sending email' });
  }
};
