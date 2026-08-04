export default async function handler(req, res) {
  const baseOffset = 300344;
  let currentHits = 1;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1500); // 1.5s strict timeout protection

    const counterRes = await fetch("https://api.counterapi.dev/v1/markangel_github_profile_views_2026/views/up", {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Vercel-Badge-Worker/2.0" },
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (counterRes.ok) {
      const data = await counterRes.json();
      if (data && typeof data.count === 'number') {
        currentHits = data.count;
      }
    }
  } catch (err) {
    console.error("Atomic counter fetch fallback:", err.message || err);
    // Graceful fallback to prevent GitHub Camo image timeouts
    currentHits = 5;
  }

  const totalCount = baseOffset + currentHits;
  const formattedCount = totalCount.toLocaleString('en-US');

  // Zero-latency pixel-perfect shields.io flat-square SVG generated directly in Node memory
  const textWidth = formattedCount.length * 7 + 10;
  const totalWidth = 94 + textWidth;
  const textPos = 940 + (textWidth * 5);

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalWidth}" height="20" role="img" aria-label="PROFILE VIEWS: ${formattedCount}">
  <title>PROFILE VIEWS: ${formattedCount}</title>
  <g shape-rendering="crispEdges">
    <rect width="94" height="20" fill="#555"/>
    <rect x="94" width="${textWidth}" height="20" fill="#007EC6"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
    <text x="480" y="140" transform="scale(.1)" fill="#fff" textLength="840">PROFILE VIEWS</text>
    <text x="${textPos}" y="140" transform="scale(.1)" fill="#fff" textLength="${textWidth * 8}">${formattedCount}</text>
  </g>
</svg>`;

  // Strict image headers without charset parameters for flawless GitHub Camo CDN compatibility
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  return res.status(200).send(svgContent);
}
