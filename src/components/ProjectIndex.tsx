"use client";

import { ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

export interface IndexRow {
  slug: string;
  title: string;
  year: string;
  stack: string[];
  category: string;
  categoryLabel: string;
  tagline: string;
  /** Estudo de caso interno. */
  href?: string;
  /** Repositório público. */
  repo?: string;
  isPrivate: boolean;
}

interface Props {
  rows: IndexRow[];
  categories: { id: string; label: string }[];
  s: {
    search: string;
    all: string;
    empty: string;
    project: string;
    year: string;
    stack: string;
    kind: string;
    private: string;
  };
}

export function ProjectIndex({ rows, categories, s }: Props) {
  const [cat, setCat] = useState<string>("all");
  const [query, setQuery] = useState("");
  const q = useDeferredValue(query.trim().toLowerCase());

  const visible = useMemo(
    () =>
      rows.filter(
        (r) =>
          (cat === "all" || r.category === cat) &&
          (!q || `${r.title} ${r.stack.join(" ")} ${r.tagline}`.toLowerCase().includes(q)),
      ),
    [rows, cat, q],
  );

  return (
    <div className="index">
      <div className="index-controls">
        <div className="chips" role="group" aria-label={s.kind}>
          {[{ id: "all", label: s.all }, ...categories].map((c) => (
            <button
              key={c.id}
              type="button"
              className="chip"
              aria-pressed={cat === c.id}
              onClick={() => setCat(c.id)}
            >
              {c.label}
              <span className="chip-count">
                {c.id === "all" ? rows.length : rows.filter((r) => r.category === c.id).length}
              </span>
            </button>
          ))}
        </div>
        <label className="search">
          <span className="sr-only">{s.search}</span>
          <input
            type="search"
            value={query}
            placeholder={s.search}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>

      <table className="index-table">
        <thead>
          <tr>
            <th scope="col">{s.project}</th>
            <th scope="col" className="col-year">{s.year}</th>
            <th scope="col" className="col-stack">{s.stack}</th>
            <th scope="col" className="col-kind">{s.kind}</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((r) => (
            <tr key={r.slug}>
              <td>
                <div className="index-title">
                  {r.href ? (
                    <Link href={r.href}>{r.title}</Link>
                  ) : r.repo ? (
                    <a href={r.repo} target="_blank" rel="noopener noreferrer">
                      {r.title}
                      <ArrowUpRight size={13} aria-hidden />
                    </a>
                  ) : (
                    <span>{r.title}</span>
                  )}
                  {r.isPrivate && (
                    <Lock size={12} className="lock" aria-label={s.private} />
                  )}
                </div>
                <p className="index-tagline">{r.tagline}</p>
              </td>
              <td className="col-year mono">{r.year}</td>
              <td className="col-stack">{r.stack.slice(0, 4).join(" · ")}</td>
              <td className="col-kind">{r.categoryLabel}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {visible.length === 0 && <p className="index-empty">{s.empty}</p>}
    </div>
  );
}
