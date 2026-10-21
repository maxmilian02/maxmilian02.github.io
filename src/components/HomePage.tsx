import { ArrowRight, ArrowUpRight, FileDown, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ViewTransition, type ReactNode } from "react";
import { education, experience, host, profile, proof, rack, services, stack } from "@/content/profile";
import { CATEGORIES, caseStudies, getProject, projects, projectTitle, tr, type Project } from "@/content/projects";
import { month, paths, ui, type Lang } from "@/lib/i18n";
import { ProjectIndex } from "./ProjectIndex";

function years(p: Project) {
  const a = p.start.slice(0, 4);
  const b = p.end.slice(0, 4);
  return a === b ? a : `${a}–${b}`;
}

/** "Netbiis | Data Driven…" → "Netbiis"; "Consultoria independente (HG7…)" → "Consultoria independente". */
function jobName(id: string, lang: Lang) {
  const job = experience.find((j) => j.id === id);
  const org = job ? tr(job.org, lang) : id;
  return org.split(" (")[0].split(" |")[0];
}

function SectionHead({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <header className="section-head">
      <h2 id={`${id}-title`}>{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
  );
}

function ExtLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children} <ArrowUpRight size={14} aria-hidden />
    </a>
  );
}

function CaseRow({ p, lang }: { p: Project; lang: Lang }) {
  const href = paths.project(lang, p.slug);
  const who = p.org ? tr(p.org, lang) : ui.ownProduct[lang];
  return (
    <article className={p.image ? "case has-shot" : "case"}>
      <p className="case-meta">
        <span className="case-org">{who}</span>
        <span className="mono">{years(p)}</span>
      </p>
      <div className="case-text">
        <h4 className="case-title">
          <Link href={href}>
            <ViewTransition name={`title-${p.slug}`} share="morph" default="none">
              <span>{projectTitle(p, lang)}</span>
            </ViewTransition>
          </Link>
        </h4>
        <p className="case-tagline">{p.tagline[lang]}</p>
        {p.caseStudy && (
          <p className="case-path mono">
            <span className="sr-only">{ui.chain[lang]}: </span>
            {p.caseStudy.chain.map((n) => tr(n.name, lang)).join(" → ")}
          </p>
        )}
        {p.metrics && (
          <dl className="figures">
            {p.metrics.slice(0, 3).map((m) => (
              <div key={m.label.pt}>
                <dt>{m.label[lang]}</dt>
                <dd>{tr(m.value, lang)}</dd>
              </div>
            ))}
          </dl>
        )}
        <p className="case-actions">
          <Link href={href} className="case-link">
            {ui.readCase[lang]} <ArrowRight size={15} aria-hidden />
          </Link>
          {p.links?.map((l) => (
            <ExtLink key={l.href} href={l.href} className="case-ext">
              {l.label[lang]}
            </ExtLink>
          ))}
          {p.repo && (
            <ExtLink href={p.repo} className="case-ext">
              {ui.viewRepo[lang]}
            </ExtLink>
          )}
        </p>
      </div>
      {p.image && (
        <Link href={href} className="case-shot" tabIndex={-1} aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image.src} alt="" width={1600} height={1000} loading="lazy" decoding="async" />
        </Link>
      )}
    </article>
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const client = caseStudies.filter((p) => p.tier === 1 && p.origin === "client");
  const own = caseStudies.filter((p) => p.tier === 1 && p.origin !== "client");
  const minor = caseStudies.filter((p) => p.tier === 2);
  const catLabel = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label[lang]]));

  return (
    <>
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="hero-kicker">
              {ui.role[lang]} <span aria-hidden>·</span> {profile.location}
            </p>
            <h1 id="hero-title" className="hero-name">
              {profile.name}
            </h1>
            <p className="hero-thesis">{ui.thesis[lang]}</p>
            <p className="hero-status">{ui.available[lang]}.</p>
            <div className="hero-ctas">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail size={16} aria-hidden /> {ui.ctaContact[lang]}
              </a>
              <a href={profile.linkedin} className="btn" target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={16} aria-hidden />
              </a>
              <a href={profile.cv[lang]} className="btn" target="_blank" rel="noopener">
                <FileDown size={16} aria-hidden /> {ui.cvShort[lang]}
              </a>
              <a href={profile.github} className="btn" target="_blank" rel="noopener noreferrer">
                GitHub <ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-photo" src={profile.photo} alt={profile.name} width={640} height={640} fetchPriority="high" />
        </div>

        {/* Cada resultado leva ao estudo de caso que o sustenta */}
        <section className="results" aria-labelledby="results-title">
          <h2 id="results-title" className="label">
            {ui.proofTitle[lang]}
          </h2>
          <ul>
            {proof.map((r) => (
              <li key={r.slug}>
                <Link href={paths.project(lang, r.slug)} className="result">
                  <span className="result-value">{tr(r.value, lang)}</span>
                  <span className="result-label">{r.label[lang]}</span>
                  <span className="result-where">
                    {r.where} <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section id="services" className="section wrap" aria-labelledby="services-title">
        <SectionHead id="services" title={ui.servicesTitle[lang]} intro={ui.servicesIntro[lang]} />
        <ul className="services">
          {services.map((sv) => (
            <li key={sv.title.pt} className="service">
              <h3>{sv.title[lang]}</h3>
              <p>{sv.body[lang]}</p>
              <p className="service-where">
                {ui.doneIn[lang]}:{" "}
                {sv.slugs
                  .map((slug) => getProject(slug))
                  .filter((p): p is Project => Boolean(p))
                  .map((p, i) => (
                    <span key={p.slug}>
                      {i > 0 && ", "}
                      <Link href={paths.project(lang, p.slug)}>{projectTitle(p, lang)}</Link>
                    </span>
                  ))}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="work" className="section wrap" aria-labelledby="work-title">
        <SectionHead id="work" title={ui.casesTitle[lang]} intro={ui.casesIntro[lang]} />

        <header className="group-head">
          <h3>{ui.clientTitle[lang]}</h3>
          <p>{ui.clientIntro[lang]}</p>
        </header>
        <div className="cases">
          {client.map((p) => (
            <CaseRow key={p.slug} p={p} lang={lang} />
          ))}
        </div>

        <header className="group-head">
          <h3>{ui.ownTitle[lang]}</h3>
          <p>{ui.ownIntro[lang]}</p>
        </header>
        <div className="cases">
          {own.map((p) => (
            <CaseRow key={p.slug} p={p} lang={lang} />
          ))}
        </div>

        <header className="group-head">
          <h3>{ui.moreCases[lang]}</h3>
        </header>
        <div className="cases">
          {minor.map((p) => (
            <CaseRow key={p.slug} p={p} lang={lang} />
          ))}
        </div>
      </section>

      <section id="path" className="section wrap" aria-labelledby="path-title">
        <SectionHead id="path" title={ui.pathTitle[lang]} intro={ui.pathIntro[lang]} />
        <ol className="jobs">
          {experience.map((j) => (
            <li key={j.id} className="job">
              <p className="job-when mono">
                {month(j.from, lang)} – {month(j.to, lang)}
              </p>
              <div>
                <h3>{tr(j.org, lang)}</h3>
                <p className="job-role">
                  {j.role[lang]} <span aria-hidden>·</span> {j.where[lang]}
                </p>
                <ul className="job-points">
                  {j.points.map((pt) => (
                    <li key={pt.pt}>{pt[lang]}</li>
                  ))}
                </ul>
                <p className="job-links">
                  {j.slugs?.map((slug) => {
                    const p = getProject(slug);
                    return p ? (
                      <Link key={slug} href={paths.project(lang, slug)}>
                        {ui.related[lang]}: {projectTitle(p, lang)} <ArrowRight size={14} aria-hidden />
                      </Link>
                    ) : null;
                  })}
                  {j.links?.map((l) => (
                    <ExtLink key={l.href} href={l.href}>
                      {l.label}
                    </ExtLink>
                  ))}
                </p>
              </div>
            </li>
          ))}
          <li className="job">
            <p className="job-when mono">{education.until[lang]}</p>
            <div>
              <h3>{ui.education[lang]}</h3>
              <p className="job-role">
                {education.course[lang]} <span aria-hidden>·</span> {education.school}
              </p>
              <ul className="job-points">
                {education.languages.map((l) => (
                  <li key={l.pt}>{l[lang]}</li>
                ))}
              </ul>
              <p className="job-links">
                <ExtLink href={education.site}>impacta.edu.br</ExtLink>
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section id="stack" className="section wrap" aria-labelledby="stack-title">
        <SectionHead id="stack" title={ui.stackTitle[lang]} intro={ui.stackIntro[lang]} />
        <div className="tools">
          {stack.map((g) => (
            <div key={g.title.pt} className="tool-group">
              <h3 className="label">{g.title[lang]}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={tr(it.name, "pt")}>
                    <span className="tool-name">{tr(it.name, lang)}</span>
                    <span className="tool-where">
                      <span className="sr-only">{ui.usedIn[lang]}: </span>
                      {[
                        ...it.slugs
                          .map((s) => getProject(s))
                          .filter((p): p is Project => Boolean(p))
                          .map((p) => ({
                            key: p.slug,
                            node: p.caseStudy ? (
                              <Link href={paths.project(lang, p.slug)}>{projectTitle(p, lang)}</Link>
                            ) : (
                              projectTitle(p, lang)
                            ),
                          })),
                        ...(it.jobs ?? []).map((id) => ({
                          key: id,
                          node: <Link href="#path">{jobName(id, lang)}</Link>,
                        })),
                      ].map((x, i) => (
                        <span key={x.key}>
                          {i > 0 && ", "}
                          {x.node}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section id="infra" className="infra" aria-labelledby="infra-title">
          <h3 id="infra-title">{ui.infraTitle[lang]}</h3>
          <p>{ui.infraIntro[lang]}</p>
          <p className="infra-host mono">
            {host.name} · {host.spec[lang]}
          </p>
          <dl className="infra-list">
            {rack.map((u) => (
              <div key={u.name}>
                <dt>{u.slug ? <Link href={paths.project(lang, u.slug)}>{u.name}</Link> : u.name}</dt>
                <dd>{u.role[lang]}</dd>
              </div>
            ))}
          </dl>
        </section>
      </section>

      <section id="index" className="section wrap" aria-labelledby="index-title">
        <SectionHead id="index" title={ui.indexTitle[lang]} intro={ui.indexIntro[lang]} />
        <ProjectIndex
          rows={[...projects]
            .sort((a, b) => b.start.localeCompare(a.start))
            .map((p) => ({
              slug: p.slug,
              title: projectTitle(p, lang),
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

      <section id="contact" className="section wrap contact" aria-labelledby="contact-title">
        <h2 id="contact-title">{ui.contactTitle[lang]}</h2>
        <p>{ui.contactBody[lang]}</p>
        <div className="hero-ctas">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <Mail size={16} aria-hidden /> {profile.email}
          </a>
          <a href={profile.linkedin} className="btn" target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight size={16} aria-hidden />
          </a>
          <a href={profile.whatsapp} className="btn" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} aria-hidden /> {ui.whatsapp[lang]} {profile.phone}
          </a>
          <a href={profile.cv[lang]} className="btn" target="_blank" rel="noopener">
            <FileDown size={16} aria-hidden /> {ui.cv[lang]}
          </a>
        </div>
        <p className="contact-where">{profile.location}</p>
      </section>
    </>
  );
}
