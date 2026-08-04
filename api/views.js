export default async function handler(req, res) {
  const baseOffset = 300344;
  let currentHits = 1;

  try {
    // Call atomic counter API to guarantee an unthrottled +1 increment on every reload
    const counterRes = await fetch("https://api.counterapi.dev/v1/markangel_github_profile_views_2026/views/up", {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Vercel-Badge-Worker" }
    });
    const data = await counterRes.json();
    if (data && typeof data.count === 'number') {
      currentHits = data.count;
    }
  } catch (err) {
    console.error("Failed to fetch atomic hit count:", err);
  }

  const totalCount = baseOffset + currentHits;
  const formattedCount = totalCount.toLocaleString('en-US');

  // Fetch the SVG image from shields.io with the newly incremented total
  let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="154" height="20" role="img" aria-label="PROFILE VIEWS: ${formattedCount}"><title>PROFILE VIEWS: ${formattedCount}</title><text x="10" y="15" fill="#ffffff">PROFILE VIEWS | ${formattedCount}</text></svg>`;
  try {
    const shieldRes = await fetch(
      `https://img.shields.io/badge/PROFILE_VIEWS-${encodeURIComponent(formattedCount)}-007EC6?style=flat-square`,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Vercel-Badge-Worker/1.0" } }
    );
    if (shieldRes.ok) {
      svgContent = await shieldRes.text();
    }
  } catch (err) {
    console.error("Failed to fetch shield SVG:", err);
  }

  // Set rigorous anti-caching headers to force GitHub Camo CDN to reload on every refresh
  res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('ETag', `"${Date.now()}"`);

  return res.status(200).send(svgContent);
}
