import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/CaseStudy";
import { caseStudies, getProject } from "@/content/projects";
import { paths } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/en/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.tagline.en,
    alternates: {
      canonical: paths.project("en", slug),
      languages: { "pt-BR": paths.project("pt", slug), en: paths.project("en", slug) },
    },
    openGraph: { title: p.title, description: p.tagline.en, url: paths.project("en", slug), images: [{ url: "/en/og.png", width: 1200, height: 630 }] },
  };
}

export default async function Page({ params }: PageProps<"/en/projects/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p?.caseStudy) notFound();
  return <CaseStudy project={p} lang="en" />;
}
