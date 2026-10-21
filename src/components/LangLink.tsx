"use client";

import { usePathname } from "next/navigation";
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
