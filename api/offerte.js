const { Resend } = require('resend');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { voornaam, achternaam, bedrijf, email, telefoon, pakket, toelichting } = req.body;

  if (!voornaam || !achternaam || !email) {
    return res.status(400).json({ error: 'Voornaam, achternaam en e-mail zijn verplicht.' });
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
      subject: `Nieuwe offerte aanvraag — ${voornaam} ${achternaam}`,
      html: `
        <h2>Nieuwe offerte aanvraag</h2>
        <p><strong>Naam:</strong> ${voornaam} ${achternaam}</p>
        <p><strong>Bedrijf:</strong> ${bedrijf || '—'}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${telefoon || '—'}</p>
        <p><strong>Pakket:</strong> ${pakket || '—'}</p>
        <p><strong>Toelichting:</strong><br>${(toelichting || '—').replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error (offerte):', err);
    return res.status(500).json({ error: 'Verzenden mislukt. Probeer het later opnieuw.' });
  }
};
