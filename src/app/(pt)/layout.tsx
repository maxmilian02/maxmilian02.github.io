import type { Metadata, Viewport } from "next";
import { Shell } from "@/components/Shell";
import { profile } from "@/content/profile";
import { SITE_URL, ui } from "@/lib/i18n";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${profile.name} — ${ui.role.pt}`, template: `%s · ${profile.name}` },
  description: ui.thesis.pt,
  authors: [{ name: profile.name, url: profile.github }],
  alternates: { canonical: "/", languages: { "pt-BR": "/", en: "/en/" } },
  openGraph: { type: "website", locale: "pt_BR", siteName: profile.name, url: "/", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7e9ec" },
    { media: "(prefers-color-scheme: dark)", color: "#121418" },
  ],
};

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <Shell lang="pt">
      {children}
    </Shell>
  );
}
