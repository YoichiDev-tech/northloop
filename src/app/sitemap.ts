import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["/", "/product", "/solutions", "/pricing", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${site.domain}`;

  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
