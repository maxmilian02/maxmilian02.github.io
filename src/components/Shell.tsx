import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { profile } from "@/content/profile";
import { fontVars } from "@/lib/fonts";
import { SITE_URL, ui, type Lang } from "@/lib/i18n";
import { Header } from "./Header";

/** Casca HTML de cada idioma (cada um é um root layout próprio). */
export function Shell({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    image: `${SITE_URL}${profile.photo}`,
    jobTitle: ui.role[lang],
    sameAs: [profile.github, profile.linkedin].filter(Boolean),
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Faculdade Impacta" },
    knowsAbout: ["Python", "Flask", "FastAPI", "SQL", "Selenium", "RPA", "Docker", "Next.js", "TypeScript", "Kotlin"],
  };

  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"} className={fontVars} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <a className="skip" href="#main">
            {ui.skip[lang]}
          </a>
          <Header lang={lang} />
          <main id="main">{children}</main>
          <footer className="site-footer">
            <div className="wrap footer-row">
              <span>© 2026 {profile.name}</span>
              <span>{ui.updated[lang]}</span>
              <a href={profile.siteRepo}>{ui.sourceOfSite[lang]}</a>
            </div>
          </footer>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
