import type { APIRoute } from "astro";
import { projects } from "@/data/projects";

const postModules = import.meta.glob("../pages/posts/*.astro", { eager: true });
const posts = Object.values(postModules)
  .map((mod: any) => mod.post)
  .filter(Boolean)
  .sort((a: any, b: any) => b.pubDate.valueOf() - a.pubDate.valueOf());

const wikiPages = [
  {
    slug: "linux-wiki",
    title: "دليل لينكس الشامل",
    description: "كل ما تحتاج معرفته عن نظام تشغيل لينكس — من المبتدئ إلى المتقدم",
    tags: ["لينكس", "Linux", "نواة لينكس", "توزيعات لينكس", "بيئة سطح المكتب"],
    category: ["لينكس", "موسوعة"],
    thumbnail: "/images/linux-wiki.webp",
    url: "/wiki/linux-wiki/",
  },
  {
    slug: "what-is-open-source",
    title: "ما هي المصادر المفتوحة؟",
    description: "شرح مفصل لمفهوم المصادر المفتوحة: كيف نشأت، كيف تعمل، فوائدها، الترخيصات المستخدمة، وأمثلة حقيقية من حياتنا اليومية.",
    tags: ["مصادر مفتوحة", "open source", "برمجيات حرة", "رخصة جنو", "GPL", "رخصة MIT"],
    category: ["مصادر مفتوحة", "موسوعة"],
    thumbnail: "",
    url: "/wiki/what-is-open-source/",
  },
];

const searchData = [
  ...posts.map((p: any) => ({
    type: "post",
    slug: p.slug,
    title: p.title,
    description: p.description,
    tags: p.tags || [],
    category: Array.isArray(p.category) ? p.category : [p.category],
    thumbnail: p.thumbnail || "",
    url: `/posts/${p.slug}/`,
  })),
  ...projects.map((p) => ({
    type: "project",
    slug: p.slug,
    title: p.name,
    description: p.description,
    tags: p.tags || [],
    category: Array.isArray(p.category) ? p.category : [p.category],
    thumbnail: p.thumbnail || "",
    url: `/projects/${p.slug}/`,
  })),
  ...wikiPages.map((w) => ({
    type: "wiki",
    slug: w.slug,
    title: w.title,
    description: w.description,
    tags: w.tags,
    category: w.category,
    thumbnail: w.thumbnail,
    url: w.url,
  })),
];

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(searchData), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
