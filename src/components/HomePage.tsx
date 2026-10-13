import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";
import { ViewTransition } from "react";
import { host, profile, rack, repos, stack, timeline, totals } from "@/content/profile";
import { CATEGORIES, caseStudies, getProject, projects, type Project } from "@/content/projects";
import { month, paths, ui, type Lang } from "@/lib/i18n";
import { ProjectIndex } from "./ProjectIndex";
import { Spectrum } from "./Spectrum";

function Visibility({ p, lang }: { p: Project; lang: Lang }) {
  return p.visibility === "private" ? (
    <span className="badge">
      <Lock size={11} aria-hidden /> {ui.private[lang]}
    </span>
  ) : (
    <span className="badge badge-open">{ui.public[lang]}</span>
  );
}

function period(p: Project, lang: Lang) {
  return p.start === p.end ? month(p.start, lang) : `${month(p.start, lang)} – ${month(p.end, lang)}`;
}

function SectionHead({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <header className="section-head">
      <h2 id={`${id}-title`}>{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const major = caseStudies.filter((p) => p.tier === 1);
  const minor = caseStudies.filter((p) => p.tier === 2);
  const catLabel = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label[lang]]));

  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero wrap" aria-labelledby="hero-title">
        <p className="eyebrow">
          <span className="on-air" aria-hidden />
          {ui.role[lang]}
        </p>
        <h1 id="hero-title" className="hero-name">
          {profile.name}
        </h1>
        <p className="hero-thesis">{ui.thesis[lang]}</p>
        <div className="hero-ctas">
          <Link href="#work" className="btn btn-primary">
            {ui.ctaWork[lang]} <ArrowRight size={16} aria-hidden />
          </Link>
          <a href={profile.github} className="btn" target="_blank" rel="noopener noreferrer">
            {ui.ctaGithub[lang]} <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>

        <Spectrum
          repos={repos}
          totals={totals}
          lang={lang}
          label={ui.spectrumLabel[lang]}
          words={{ repos: ui.repos[lang], commits: ui.commits[lang] }}
        />
        <p className="spectrum-caption">{ui.spectrumCaption[lang]}</p>
      </section>

      {/* ——— Estudos de caso ——— */}
      <section id="work" className="section wrap" aria-labelledby="work-title">
        <SectionHead id="work" title={ui.casesTitle[lang]} intro={ui.casesIntro[lang]} />

        <div className="cases">
          {major.map((p) => (
            <article key={p.slug} className="case reveal">
              <div className="case-meta">
                <span className="mono">{period(p, lang)}</span>
                <span>{catLabel[p.category]}</span>
                <Visibility p={p} lang={lang} />
              </div>
              <div className="case-body">
                <h3 className="case-title">
                  <Link href={paths.project(lang, p.slug)}>
                    <ViewTransition name={`title-${p.slug}`} share="morph" default="none">
                      <span>{p.title}</span>
                    </ViewTransition>
                  </Link>
                </h3>
                <p className="case-tagline">{p.tagline[lang]}</p>
                {p.metrics && (
                  <dl className="meters">
                    {p.metrics.map((m) => (
                      <div key={m.label.pt} className="meter">
                        <dt>{m.label[lang]}</dt>
                        <dd>{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <ul className="tags" aria-label="Stack">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <Link href={paths.project(lang, p.slug)} className="case-link">
                  {ui.readCase[lang]} <ArrowRight size={15} aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <h3 className="subhead">{ui.moreCases[lang]}</h3>
        <div className="minor-cases">
          {minor.map((p) => (
            <Link key={p.slug} href={paths.project(lang, p.slug)} className="minor-case reveal">
              <div className="case-meta">
                <span className="mono">{period(p, lang)}</span>
                <Visibility p={p} lang={lang} />
              </div>
              <ViewTransition name={`title-${p.slug}`} share="morph" default="none">
                <h4>{p.title}</h4>
              </ViewTransition>
              <p>{p.tagline[lang]}</p>
              <span className="case-link">
                {ui.readCase[lang]} <ArrowRight size={15} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ——— Índice ——— */}
      <section id="index" className="section wrap" aria-labelledby="index-title">
        <SectionHead id="index" title={ui.indexTitle[lang]} intro={ui.indexIntro[lang]} />
        <ProjectIndex
          rows={[...projects]
            .sort((a, b) => b.start.localeCompare(a.start))
            .map((p) => ({
              slug: p.slug,
              title: p.title,
              year: p.start.slice(0, 4),
              stack: p.stack,
              category: p.category,
              categoryLabel: catLabel[p.category],
              tagline: p.tagline[lang],
              href: p.caseStudy ? paths.project(lang, p.slug) : undefined,
              repo: p.repo,
              isPrivate: p.visibility === "private",
            }))}
          categories={CATEGORIES.map((c) => ({ id: c.id, label: c.label[lang] }))}
          s={{
            search: ui.search[lang],
            all: ui.all[lang],
            empty: ui.noResults[lang],
            project: ui.colProject[lang],
            year: ui.colYear[lang],
            stack: ui.colStack[lang],
            kind: ui.colKind[lang],
            private: ui.private[lang],
          }}
        />
      </section>

      {/* ——— Trajetória ——— */}
      <section id="path" className="section wrap" aria-labelledby="path-title">
        <SectionHead id="path" title={ui.pathTitle[lang]} intro={ui.pathIntro[lang]} />
        <ol className="timeline">
          {timeline.map((c) => (
            <li key={c.from} className="tl-item reveal">
              <span className="tl-when mono">
                {month(c.from, lang)} – {month(c.to, lang)}
              </span>
              <div>
                <h3>{c.title[lang]}</h3>
                <p>{c.body[lang]}</p>
                {c.slugs && (
                  <ul className="tl-links">
                    {c.slugs.map((slug) => {
                      const p = getProject(slug);
                      if (!p) return null;
                      return (
                        <li key={slug}>
                          {p.caseStudy ? (
                            <Link href={paths.project(lang, slug)}>{p.title}</Link>
                          ) : p.repo ? (
                            <a href={p.repo} target="_blank" rel="noopener noreferrer">
                              {p.title} ↗
                            </a>
                          ) : (
                            p.title
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— Stack ——— */}
      <section id="stack" className="section wrap" aria-labelledby="stack-title">
        <SectionHead id="stack" title={ui.stackTitle[lang]} intro={ui.stackIntro[lang]} />
        <div className="stack-grid">
          {stack.map((g) => (
            <div key={g.title.pt} className="stack-group reveal">
              <h3>{g.title[lang]}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it.name}>
                    <span className="stack-name">{it.name}</span>
                    <span className="stack-where">
                      <span className="sr-only">{ui.usedIn[lang]}: </span>
                      {it.slugs
                        .map((s) => getProject(s))
                        .filter((p): p is Project => Boolean(p))
                        .map((p, i) => (
                          <span key={p.slug}>
                            {i > 0 && ", "}
                            {p.caseStudy ? <Link href={paths.project(lang, p.slug)}>{p.title}</Link> : p.title}
                          </span>
                        ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Infra ——— */}
      <section id="infra" className="section wrap" aria-labelledby="infra-title">
        <SectionHead id="infra" title={ui.infraTitle[lang]} intro={ui.infraIntro[lang]} />
        <div className="rack reveal">
          <div className="rack-head">
            <span className="mono">{host.name}</span>
            <span className="mono rack-spec">{host.spec}</span>
          </div>
          <ul>
            {rack.map((u) => (
              <li key={u.name} className="rack-unit">
                <span className="rack-led" aria-hidden />
                <span className="rack-kind mono">{u.kind.toUpperCase()}</span>
                <span className="rack-name">
                  {u.slug ? <Link href={paths.project(lang, u.slug)}>{u.name}</Link> : u.name}
                </span>
                <span className="rack-role">{u.role[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Contato ——— */}
      <section id="contact" className="section wrap contact" aria-labelledby="contact-title">
        <h2 id="contact-title">{ui.contactTitle[lang]}</h2>
        <p>{ui.contactBody[lang]}</p>
        <div className="hero-ctas">
          <a href={profile.github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            github.com/{profile.githubUser} <ArrowUpRight size={16} aria-hidden />
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} className="btn" target="_blank" rel="noopener noreferrer">
              LinkedIn <ArrowUpRight size={16} aria-hidden />
            </a>
          )}
          {profile.email && (
            <a href={`mailto:${profile.email}`} className="btn">
              {profile.email}
            </a>
          )}
        </div>
        <p className="fineprint">{ui.updated[lang]}</p>
      </section>
    </>
  );
}
