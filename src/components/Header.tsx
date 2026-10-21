import Link from "next/link";
import { profile } from "@/content/profile";
import { paths, ui, type Lang } from "@/lib/i18n";
import { LangLink } from "./LangLink";
import { ThemeToggle } from "./ThemeToggle";

export const SECTIONS = [
  { id: "work", label: ui.nav.work },
  { id: "path", label: ui.nav.path },
  { id: "stack", label: ui.nav.stack },
  { id: "contact", label: ui.nav.contact },
] as const;

export function Header({ lang }: { lang: Lang }) {
  const home = paths.home(lang);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href={home} className="brand">
          {profile.name}
        </Link>

        <nav aria-label={lang === "pt" ? "Principal" : "Main"} className="header-nav">
          {SECTIONS.map((s) => (
            <Link key={s.id} href={`${home}#${s.id}`}>
              {s.label[lang]}
            </Link>
          ))}
        </nav>

        <div className="header-tools">
          <a href={profile.cv[lang]} className="header-cv" target="_blank" rel="noopener">
            {ui.cvShort[lang]}
          </a>
          <LangLink lang={lang} title={ui.switchLang[lang]} />
          <ThemeToggle label={ui.toggleTheme[lang]} />
        </div>
      </div>
    </header>
  );
}
