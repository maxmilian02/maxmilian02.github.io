"use client";

import { Search } from "lucide-react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { altPath, type Lang } from "@/lib/i18n";

/** Link PT/EN que mantém a página atual. */
export function LangLink({ lang, title }: { lang: Lang; title: string }) {
  const href = altPath(usePathname() ?? "/", lang);
  return (
    <a className="icon-btn" href={href} hrefLang={lang === "pt" ? "en" : "pt-BR"} title={title}>
      {lang === "pt" ? "EN" : "PT"}
    </a>
  );
}

export interface PaletteItem {
  label: string;
  hint?: string;
  href: string;
}

export interface PaletteStrings {
  trigger: string;
  placeholder: string;
  empty: string;
  projects: string;
  sections: string;
  actions: string;
  switchLang: string;
  toggleTheme: string;
  openGithub: string;
}

interface Props {
  projects: PaletteItem[];
  sections: PaletteItem[];
  lang: Lang;
  github: string;
  s: PaletteStrings;
}

// cmdk só entra no bundle quando alguém abre a paleta.
const PaletteDialog = dynamic(() => import("./PaletteDialog"), { ssr: false });

export function CommandPalette({ projects, sections, lang, github, s }: Props) {
  const [open, setOpen] = useState(false);
  const [used, setUsed] = useState(false);
  const router = useRouter();
  const altHref = altPath(usePathname() ?? "/", lang);
  const { resolvedTheme, setTheme } = useTheme();

  function toggle(next: boolean) {
    if (next) setUsed(true);
    setOpen(next);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setUsed(true);
        setOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function go(href: string) {
    setOpen(false);
    if (href.startsWith("http")) window.open(href, "_blank", "noopener");
    else router.push(href);
  }

  return (
    <>
      <button type="button" className="palette-trigger" aria-label={s.trigger} onClick={() => toggle(true)}>
        <Search size={14} aria-hidden />
        <span className="palette-trigger-label">{s.trigger}</span>
        <kbd>Ctrl K</kbd>
      </button>
      {used && (
        <PaletteDialog
          open={open}
          onOpenChange={toggle}
          projects={projects}
          sections={sections}
          altHref={altHref}
          github={github}
          s={s}
          go={go}
          toggleTheme={() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
            setOpen(false);
          }}
        />
      )}
    </>
  );
}
