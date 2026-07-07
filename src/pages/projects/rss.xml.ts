import { projects } from "../../data/projects";

const siteUrl = "https://www.masdarx.com";

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
    <title>مشاريع مفتوحة المصدر - مصدر إكس</title>
    <link>${siteUrl}/projects/</link>
    <description>مشاريع مفتوحة المصدر على مصدر إكس</description>
    <language>ar</language>
    <lastBuildDate>${new Date().toISOString().split("T")[0]}</lastBuildDate>
    <atom:link href="${siteUrl}/projects/rss.xml" rel="self" type="application/rss+xml" />
${projects.map((project) => {
  const cats = Array.isArray(project.category) ? project.category : [project.category];
  const categoryXml = cats.map((c) => `      <category>${escapeXml(c)}</category>`).join("\n");
  return `    <item>
      <title>${escapeXml(project.name)}</title>
      <link>${siteUrl}/projects/${project.slug}/</link>
      <guid isPermaLink="true">${siteUrl}/projects/${project.slug}/</guid>
      <description>${escapeXml(project.description)}</description>
${categoryXml}
      <pubDate>${new Date().toISOString().split("T")[0]}</pubDate>
      ${project.thumbnail ? `<media:content url="${siteUrl}${project.thumbnail}" medium="image" />` : ""}
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
