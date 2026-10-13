import Link from "next/link";
import { profile } from "@/content/profile";
import { caseStudies } from "@/content/projects";
import { paths, ui, type Lang } from "@/lib/i18n";
import { CommandPalette, LangLink } from "./CommandPalette";
import { ThemeToggle } from "./ThemeToggle";

export const SECTIONS = [
  { id: "work", label: ui.nav.work },
  { id: "path", label: ui.nav.path },
  { id: "stack", label: ui.nav.stack },
  { id: "infra", label: ui.nav.infra },
  { id: "contact", label: ui.nav.contact },
] as const;

export function Header({ lang }: { lang: Lang }) {
  const home = paths.home(lang);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href={home} className="brand">
          <span className="brand-mark" aria-hidden>
            MD
          </span>
          <span className="brand-name">{profile.name}</span>
        </Link>

        <nav aria-label={lang === "pt" ? "Principal" : "Main"} className="header-nav">
          {SECTIONS.slice(0, 4).map((s) => (
            <Link key={s.id} href={`${home}#${s.id}`}>
              {s.label[lang]}
            </Link>
          ))}
        </nav>

        <div className="header-tools">
          <CommandPalette
            lang={lang}
            github={profile.github}
            projects={caseStudies.map((p) => ({
              label: p.title,
              hint: p.stack.slice(0, 3).join(" · "),
              href: paths.project(lang, p.slug),
            }))}
            sections={SECTIONS.map((s) => ({ label: s.label[lang], href: `${home}#${s.id}` }))}
            s={{
              trigger: ui.palette[lang],
              placeholder: ui.palettePlaceholder[lang],
              empty: ui.paletteEmpty[lang],
              projects: ui.groupProjects[lang],
              sections: ui.groupSections[lang],
              actions: ui.groupActions[lang],
              switchLang: ui.switchLang[lang],
              toggleTheme: ui.toggleTheme[lang],
              openGithub: ui.openGithub[lang],
            }}
          />
          <LangLink lang={lang} title={ui.switchLang[lang]} />
          <ThemeToggle label={ui.toggleTheme[lang]} />
        </div>
      </div>
    </header>
  );
}
