import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/projects";
import { LANGS, SITE_URL, paths } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = LANGS.map((l) => ({ url: SITE_URL + paths.home(l), priority: 1 }));
  const cases = caseStudies.flatMap((p) =>
    LANGS.map((l) => ({ url: SITE_URL + paths.project(l, p.slug), priority: p.tier === 1 ? 0.8 : 0.6 })),
  );
  return [...home, ...cases];
}
