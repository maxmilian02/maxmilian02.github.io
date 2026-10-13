import type { Metadata, Viewport } from "next";
import { Shell } from "@/components/Shell";
import { profile } from "@/content/profile";
import { SITE_URL, ui } from "@/lib/i18n";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${profile.name} — ${ui.role.en}`, template: `%s · ${profile.name}` },
  description: ui.thesis.en,
  authors: [{ name: profile.name, url: profile.github }],
  alternates: { canonical: "/en/", languages: { "pt-BR": "/", en: "/en/" } },
  openGraph: { type: "website", locale: "en_US", siteName: profile.name, url: "/en/", images: [{ url: "/en/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7e9ec" },
    { media: "(prefers-color-scheme: dark)", color: "#121418" },
  ],
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <Shell lang="en">
      {children}
    </Shell>
  );
}
