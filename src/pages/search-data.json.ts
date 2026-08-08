import type { APIRoute } from "astro";
import { projects } from "@/data/projects";

const postModules = import.meta.glob("../pages/posts/*.astro", { eager: true });
const posts = Object.values(postModules)
  .map((mod: any) => mod.post)
  .filter(Boolean)
  .sort((a: any, b: any) => b.pubDate.valueOf() - a.pubDate.valueOf());

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
];

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(searchData), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
