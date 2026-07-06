import type { MetadataRoute } from "next";
import { featuredProjects } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/about",
    "/process",
    "/contact",
    "/brief",
    "/showreel",
    "/blog"
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.domain}${path}`,
      lastModified: new Date()
    })),
    ...featuredProjects.map((project) => ({
      url: `${site.domain}/work/${project.slug}`,
      lastModified: new Date()
    }))
  ];
}
