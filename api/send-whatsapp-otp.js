export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { phone, otp } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({ success: false, message: 'Phone and OTP are required' });
  }

  // Clean the phone number: remove any non-digit characters (including spaces or +)
  const cleanPhone = phone.replace(/\D/g, '');

  const url = `https://graph.facebook.com/v17.0/${process.env.META_WHATSAPP_PHONE_NUMBER_ID}/messages`;
  
  const payload = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: cleanPhone,
    type: 'template',
    template: {
      name: 'otp_verification_creamstack_website_demo', // Using your newly created OTP template
      language: {
        code: 'en_US' // Change this to your template's language code if different
      },
      components: [
        {
          type: 'body',
          parameters: [
            {
              type: 'text',
              text: otp.toString()
            }
          ]
        },
        {
          type: 'button',
          sub_type: 'url',
          index: '0',
          parameters: [
            {
              type: 'text',
              text: otp.toString()
            }
          ]
        }
      ]
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.META_WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('WhatsApp API Error:', data);
      const metaError = data.error?.message || data.error?.error_user_msg || JSON.stringify(data);
      return res.status(response.status).json({ success: false, message: `Meta API Error: ${metaError}`, error: data });
    }

    return res.status(200).json({ success: true, message: 'OTP sent successfully', data });
  } catch (error) {
    console.error('Error sending WhatsApp OTP:', error);
    return res.status(500).json({ success: false, message: 'An unexpected error occurred.', error: error.message });
  }
}
