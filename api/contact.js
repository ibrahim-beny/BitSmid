const { Resend } = require('resend');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { naam, email, bericht } = req.body;

  if (!naam || !email || !bericht) {
    return res.status(400).json({ error: 'Vul alle velden in.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Ongeldig e-mailadres.' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'BitSmid <info@bitsmid.nl>',
      to: 'info@bitsmid.nl',
      replyTo: email,
      subject: `Nieuw contactbericht van ${naam}`,
      html: `
        <h2>Nieuw contactbericht</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Bericht:</strong><br>${bericht.replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error (contact):', err);
    return res.status(500).json({ error: 'Verzenden mislukt. Probeer het later opnieuw.' });
  }
};
