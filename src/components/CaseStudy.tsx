import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";
import { ViewTransition } from "react";
import { CATEGORIES, caseStudies, projectTitle, tr, type Project } from "@/content/projects";
import { month, paths, ui, type Lang } from "@/lib/i18n";
import { SignalChain } from "./SignalChain";

export function CaseStudy({ project: p, lang }: { project: Project; lang: Lang }) {
  const cs = p.caseStudy!;
  const idx = caseStudies.findIndex((c) => c.slug === p.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const cat = CATEGORIES.find((c) => c.id === p.category)!.label[lang];
  const who = p.org ? tr(p.org, lang) : ui.ownProduct[lang];
  const when =
    p.start === p.end ? month(p.start, lang) : `${month(p.start, lang)} – ${month(p.end, lang)}`;

  return (
    <article className="cs wrap">
      <Link href={`${paths.home(lang)}#work`} className="back">
        <ArrowLeft size={15} aria-hidden /> {ui.back[lang]}
      </Link>

      <header className="cs-head">
        <p className="case-meta">
          <span className="case-org">{who}</span>
          {p.org && <span>{cat}</span>}
          <span className="mono">{when}</span>
        </p>
        <ViewTransition name={`title-${p.slug}`} share="morph" default="none">
          <h1 className="cs-title">{projectTitle(p, lang)}</h1>
        </ViewTransition>
        <p className="cs-tagline">{p.tagline[lang]}</p>
        {(p.links || p.repo) && (
          <p className="cs-actions">
            {p.links?.map((l, i) => (
              <a key={l.href} href={l.href} className={i === 0 ? "btn btn-primary" : "btn"} target="_blank" rel="noopener noreferrer">
                {l.label[lang]} <ArrowUpRight size={16} aria-hidden />
              </a>
            ))}
            {p.repo && (
              <a href={p.repo} className="btn" target="_blank" rel="noopener noreferrer">
                {ui.viewRepo[lang]} <ArrowUpRight size={16} aria-hidden />
              </a>
            )}
          </p>
        )}
      </header>

      {p.image && (
        <figure className="cs-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image.src} alt={p.image.alt[lang]} width={1600} height={1000} />
        </figure>
      )}

      <div className="cs-grid">
        <aside className="spec" aria-label={lang === "pt" ? "Ficha técnica" : "Fact sheet"}>
          <dl>
            <div>
              <dt>{ui.period[lang]}</dt>
              <dd className="mono">{when}</dd>
            </div>
            {p.commits !== undefined && (
              <div>
                <dt>{ui.commits[lang]}</dt>
                <dd className="mono">{p.commits}</dd>
              </div>
            )}
            {p.context && (
              <div>
                <dt>{ui.context[lang]}</dt>
                <dd>{p.context[lang]}</dd>
              </div>
            )}
            {p.links && (
              <div>
                <dt>{ui.live[lang]}</dt>
                <dd className="spec-links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label[lang]} <ArrowUpRight size={13} aria-hidden />
                    </a>
                  ))}
                </dd>
              </div>
            )}
            <div>
              <dt>{ui.code[lang]}</dt>
              <dd>
                {p.repo ? (
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">
                    {ui.viewRepo[lang]} <ArrowUpRight size={13} aria-hidden />
                  </a>
                ) : (
                  <span className="badge">
                    <Lock size={11} aria-hidden /> {ui.private[lang]}
                  </span>
                )}
              </dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>
                <ul className="tags">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>

        <div className="cs-main">
          {p.metrics && (
            <dl className="figures figures-lg">
              {p.metrics.map((m) => (
                <div key={m.label.pt}>
                  <dt>{m.label[lang]}</dt>
                  <dd>{tr(m.value, lang)}</dd>
                </div>
              ))}
            </dl>
          )}

          <section aria-labelledby="problem">
            <h2 id="problem">{ui.problem[lang]}</h2>
            <p className="lede">{cs.problem[lang]}</p>
          </section>

          <section aria-labelledby="chain">
            <h2 id="chain">{ui.chain[lang]}</h2>
            <SignalChain nodes={cs.chain} lang={lang} />
          </section>

          <section aria-labelledby="approach">
            <h2 id="approach">{ui.approach[lang]}</h2>
            <div className="steps">
              {cs.approach.map((s) => (
                <div key={s.title.pt} className="step">
                  <h3>{s.title[lang]}</h3>
                  <p>{s.body[lang]}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="learned" className="learned">
            <h2 id="learned">{ui.learned[lang]}</h2>
            <blockquote>{cs.learned[lang]}</blockquote>
          </section>

          <Link href={paths.project(lang, next.slug)} className="next-case">
            <span className="label">{ui.next[lang]}</span>
            <span className="next-title">
              {projectTitle(next, lang)} <ArrowRight size={20} aria-hidden />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
