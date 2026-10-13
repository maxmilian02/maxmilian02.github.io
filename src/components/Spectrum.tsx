"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, type KeyboardEvent } from "react";
import type { Repo } from "@/content/profile";
import { fmtInt, month, paths, type Lang } from "@/lib/i18n";

interface Props {
  repos: Repo[];
  totals: { repos: number; commits: number; first: string; last: string };
  lang: Lang;
  label: string;
  words: { repos: string; commits: string };
}

const MAX = Math.log(1 + 213);

/** Altura em escala log: 1 commit ainda aparece, 213 enche a barra. */
function level(commits: number) {
  // String fixa: o float cru difere entre servidor e cliente e quebra a hidratação.
  return (0.08 + 0.92 * (Math.log(1 + commits) / MAX)).toFixed(4);
}

export function Spectrum({ repos, totals, lang, label, words }: Props) {
  const router = useRouter();
  const [active, setActive] = useState<number | null>(null);
  const [focusIdx, setFocusIdx] = useState(repos.length - 1);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const years = repos.reduce<{ year: string; at: number }[]>((acc, r, i) => {
    const y = r.date.slice(0, 4);
    if (!acc.length || acc[acc.length - 1].year !== y) acc.push({ year: y, at: i });
    return acc;
  }, []);
  // Todo ano ganha um traço; o rótulo só aparece se não colidir com o próximo (o ano atual sempre).
  const labeled = new Set<string>();
  let next = Infinity;
  for (const y of [...years].reverse()) {
    if (next - y.at >= 5) {
      labeled.add(y.year);
      next = y.at;
    }
  }

  function move(to: number) {
    const i = Math.max(0, Math.min(repos.length - 1, to));
    setFocusIdx(i);
    setActive(i);
    refs.current[i]?.focus();
  }

  function onKey(e: KeyboardEvent) {
    const keys: Record<string, number> = {
      ArrowRight: focusIdx + 1,
      ArrowLeft: focusIdx - 1,
      Home: 0,
      End: repos.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      move(keys[e.key]);
    }
  }

  const cur = active === null ? null : repos[active];

  return (
    <figure className="spectrum">
      <div className="readout" aria-live="polite">
        <span className="readout-led" data-on={cur ? "true" : "false"} aria-hidden />
        {cur ? (
          <span>
            <b>{cur.label}</b>
            <span className="readout-sep">·</span>
            {fmtInt(cur.commits, lang)} {words.commits}
            <span className="readout-sep">·</span>
            {month(cur.date, lang)}
            <span className="readout-sep">·</span>
            {cur.lang}
          </span>
        ) : (
          <span>
            <b>{totals.repos}</b> {words.repos}
            <span className="readout-sep">·</span>
            <b>{fmtInt(totals.commits, lang)}</b> {words.commits}
            <span className="readout-sep">·</span>
            {month(totals.first, lang)} → {month(totals.last, lang)}
          </span>
        )}
      </div>

      <div
        className="bars"
        role="toolbar"
        aria-orientation="horizontal"
        aria-label={label}
        onKeyDown={onKey}
        onMouseLeave={() => setActive(null)}
      >
        {repos.map((r, i) => {
          const featured = Boolean(r.slug);
          return (
            <button
              key={`${r.label}-${i}`}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              className="bar"
              data-featured={featured}
              data-active={active === i}
              data-dim={active !== null && active !== i}
              tabIndex={i === focusIdx ? 0 : -1}
              style={{ ["--lvl" as string]: level(r.commits), ["--i" as string]: String(i) }}
              aria-label={`${r.label}, ${r.commits} ${words.commits}, ${month(r.date, lang)}`}
              aria-disabled={!featured}
              onMouseEnter={() => setActive(i)}
              onFocus={() => {
                setFocusIdx(i);
                setActive(i);
              }}
              onBlur={() => setActive(null)}
              onClick={() => r.slug && router.push(paths.project(lang, r.slug))}
            >
              <span className="bar-fill" />
              <span className="bar-peak" />
            </button>
          );
        })}
      </div>

      <div className="axis" aria-hidden>
        {years.map((y) => (
          <span key={y.year} style={{ left: `${((y.at / repos.length) * 100).toFixed(3)}%` }}>
            {labeled.has(y.year) ? y.year : ""}
          </span>
        ))}
      </div>
    </figure>
  );
}
