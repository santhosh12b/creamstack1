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

  try {
    // 1. Prepare Email Promise
    let emailPromise = Promise.resolve();
    
    // Only attempt to create transporter and send email if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      if (type === 'newsletter') {
        emailPromise = transporter.sendMail({
          from: `"Creamstack Website" <${process.env.SMTP_USER}>`,
          to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
          subject: 'New Newsletter Subscriber!',
          text: `You have a new newsletter subscriber: ${email}`,
          html: `<p>You have a new newsletter subscriber: <strong>${email}</strong></p>`
        });
      } else {
        emailPromise = transporter.sendMail({
          from: `"Creamstack Website" <${process.env.SMTP_USER}>`,
          to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
          replyTo: email,
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
    }

    // 2. Prepare Google Sheets Webhook Promise
    let sheetPromise = Promise.resolve();
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      sheetPromise = fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'contact_form',
          type: type || 'contact',
          name: name || '',
          email: email || '',
          company: company || '',
          subject: subject || '',
          message: message || ''
        }),
      }).catch(sheetError => {
        console.error("Error saving to Google Sheets:", sheetError);
      });
    }

    // 3. Execute both concurrently, catching errors individually so one failure doesn't break the other
    await Promise.all([
      emailPromise ? emailPromise.catch(e => console.error("SMTP Error:", e)) : Promise.resolve(),
      sheetPromise ? sheetPromise.catch(e => console.error("Sheet Error:", e)) : Promise.resolve()
    ]);

    // Success response
    res.status(200).json({ success: true, message: 'Request processed successfully!' });
  } catch (error) {
    console.error("General API Error:", error);
    res.status(500).json({ success: false, message: 'An unexpected error occurred.', error: error.message });
  }
}
