export async function GET() {
  const baseUrl = "https://ecomwordslab.com";

  const pages = [
    { loc: baseUrl, priority: "1.0", changefreq: "weekly" },
    { loc: `${baseUrl}/services`, priority: "0.9", changefreq: "monthly" },
    { loc: `${baseUrl}/blog`, priority: "0.8", changefreq: "weekly" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
