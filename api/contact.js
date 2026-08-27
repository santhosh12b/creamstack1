import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { type, email, name, company, subject, message } = req.body;

  // Validate the incoming payload
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  // Set up Nodemailer transporter using Vercel Environment Variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    if (type === 'newsletter') {
      // Send Newsletter Subscription Notification
      await transporter.sendMail({
        from: `"Creamstack Website" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER, // The inbox that receives notifications
        subject: 'New Newsletter Subscriber!',
        text: `You have a new newsletter subscriber: ${email}`,
        html: `<p>You have a new newsletter subscriber: <strong>${email}</strong></p>`
      });
    } else {
      // Send Contact Form Submission Notification
      await transporter.sendMail({
        from: `"Creamstack Website" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER, // The inbox that receives notifications
        replyTo: email, // So you can hit "Reply" and email the user directly
        subject: `New Contact Form Submission: ${subject || 'General'}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <br />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `
      });
    }

    // Success response
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error("SMTP Error sending email:", error);
    res.status(500).json({ success: false, message: 'Failed to send email. Please check SMTP settings.', error: error.message });
  }
}
