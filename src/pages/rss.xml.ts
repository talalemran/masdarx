const postModules = import.meta.glob("./posts/*.astro", { eager: true });
const posts = Object.values(postModules)
  .map((mod: any) => mod.post)
  .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

const siteUrl = "https://www.masdarx.com";
const toISODate = (d: Date) => d.toISOString().split("T")[0];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>مصدر إكس</title>
    <link>${siteUrl}</link>
    <description>أخبار البرمجيات مفتوحة المصدر والتقنيات الحديثة</description>
    <language>ar</language>
    <lastBuildDate>${toISODate(new Date())}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${posts.map((post) => {
  const cats = Array.isArray(post.category) ? post.category : [post.category];
  const categoryXml = cats.map((c) => `      <category>${escapeXml(c)}</category>`).join("\n");
  return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/posts/${post.slug}/</link>
      <guid isPermaLink="true">${siteUrl}/posts/${post.slug}/</guid>
      <description>${escapeXml(post.description)}</description>
${categoryXml}
      <pubDate>${post.pubDate ? toISODate(new Date(post.pubDate)) : ""}</pubDate>
      ${post.thumbnail ? `<media:content url="${siteUrl}${post.thumbnail}" medium="image" />` : ""}
      ${post.thumbnail ? `<enclosure url="${siteUrl}${post.thumbnail}" type="image/webp" length="0" />` : ""}
    </item>`;
}).join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
