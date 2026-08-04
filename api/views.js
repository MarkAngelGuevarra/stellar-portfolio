export default async function handler(req, res) {
  const baseOffset = 300344;
  let currentHits = 1;

  try {
    // Ping hits.sh to trigger a fresh view increment and get the live counter tally
    const hitsRes = await fetch("https://hits.sh/mark-github-profile-views-tracker.svg", {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Vercel-Badge-Worker/1.0" }
    });
    const text = await hitsRes.text();
    
    // Extract integer count from SVG title or aria-label (e.g. ": 12")
    const match = text.match(/:\s*([0-9,]+)/);
    if (match && match[1]) {
      currentHits = parseInt(match[1].replace(/,/g, ''), 10) || 1;
    }
  } catch (err) {
    console.error("Failed to fetch live hits:", err);
  }

  const totalCount = baseOffset + currentHits;
  const formattedCount = totalCount.toLocaleString('en-US');

  // Fetch the pristine SVG image from shields.io with the dynamically boosted count
  let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="20"></svg>`;
  try {
    const shieldRes = await fetch(
      `https://img.shields.io/badge/PROFILE_VIEWS-${encodeURIComponent(formattedCount)}-007EC6?style=flat-square`,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Vercel-Badge-Worker/1.0" } }
    );
    svgContent = await shieldRes.text();
  } catch (err) {
    console.error("Failed to generate shield SVG:", err);
  }

  res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  return res.status(200).send(svgContent);
}
