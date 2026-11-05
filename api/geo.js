export default async function handler(req, res) {
  let country = 
    req.headers['x-vercel-ip-country'] || 
    req.headers['cf-ipcountry'] || 
    req.headers['x-country-code'] || 
    '';

  // If in local development and headers are empty, detect via IP lookup
  if (!country) {
    try {
      const response = await fetch('https://api.country.is');
      if (response.ok) {
        const data = await response.json();
        country = data.country || '';
      }
    } catch {
      // Fallback
    }
  }

  const countryCode = typeof country === 'string' ? country.toUpperCase().trim() : '';

  res.status(200).json({
    success: true,
    country: countryCode,
    isIndia: countryCode === 'IN',
    currency: countryCode === 'IN' ? 'inr' : 'usd'
  });
}
