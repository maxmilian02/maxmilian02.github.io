// Gera os currículos em PDF (PT e EN) a partir de cv/content.mjs.
// Uso: npm run cv   (CHROME_PATH aponta para o Chrome se não estiver no caminho padrão do Windows)
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { contact, cv } from "./content.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const outDirs = [join(here, "..", "public", "cv"), ...(process.env.CV_EXTRA_OUT ? [process.env.CV_EXTRA_OUT] : [])];
const chrome = process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function html(lang) {
  const c = cv[lang];
  const link = (href, text) => `<a href="${href}">${esc(text)}</a>`;
  return `<!doctype html>
<html lang="${lang === "pt" ? "pt-BR" : "en"}">
<head>
<meta charset="utf-8">
<title>${esc(contact.name)} — ${esc(c.title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=block" rel="stylesheet">
<style>
  @page { margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font: 9.2pt/1.32 "IBM Plex Sans", "Segoe UI", Arial, sans-serif; color: #1b1e23; background: #fff; padding: 22pt 34pt 12pt; }
  a { color: inherit; text-decoration: none; }
  header { display: flex; justify-content: space-between; align-items: flex-end; gap: 16pt;
           padding-bottom: 9pt; border-bottom: 1.2pt solid #1b1e23; }
  h1 { font-size: 20pt; line-height: 1; font-weight: 700; }
  .title { margin-top: 5pt; font-size: 11pt; font-weight: 600; color: #8f5200; }
  .contact { text-align: right; font-size: 8.6pt; line-height: 1.55; color: #3a3f47; }
  section { margin-top: 8pt; }
  h2 { font-size: 8.6pt; font-weight: 700; text-transform: uppercase; color: #5d636c;
       margin-bottom: 3.5pt; display: flex; align-items: center; gap: 6pt; }
  h2::before { content: ""; width: 6pt; height: 6pt; background: #e8890c; border-radius: 1pt; }
  h2 small { font-weight: 500; text-transform: none; color: #8a9099; }
  .summary { color: #2b3038; }
  .skills { display: grid; grid-template-columns: 54pt 1fr; gap: 1.5pt 10pt; }
  .skills dt { font-weight: 600; }
  .job { margin-top: 5.5pt; break-inside: avoid; }
  .job:first-of-type { margin-top: 0; }
  .job-head { display: flex; justify-content: space-between; gap: 12pt; }
  .org { font-weight: 700; font-size: 10.2pt; }
  .when { font-size: 8.8pt; color: #3a3f47; white-space: nowrap; }
  .role { font-weight: 500; color: #2b3038; }
  .note { font-size: 8.6pt; color: #5d636c; font-style: italic; }
  ul { margin-top: 2.5pt; padding-left: 11pt; }
  li { margin-top: 1pt; }
  li::marker { color: #e8890c; }
  .proj { margin-top: 2.5pt; break-inside: avoid; }
  .proj b { font-weight: 700; }
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 16pt; }
</style>
</head>
<body>
<header>
  <div>
    <h1>${esc(contact.name)}</h1>
    <div class="title">${esc(c.title)}</div>
  </div>
  <div class="contact">
    ${esc(c.location)}<br>
    ${link(`tel:${contact.phone.replace(/[^+\d]/g, "")}`, contact.phone)} · ${link(`mailto:${contact.email}`, contact.email)}<br>
    ${link(`https://${contact.linkedin}`, contact.linkedin)}<br>
    ${link(`https://${contact.github}`, contact.github)} · ${link(`https://${contact.site}`, contact.site)}
  </div>
</header>

<section><h2>${esc(c.h.summary)}</h2><p class="summary">${esc(c.summary)}</p></section>

<section><h2>${esc(c.h.skills)}</h2>
  <dl class="skills">${c.skills.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
</section>

<section><h2>${esc(c.h.experience)}</h2>
${c.jobs
  .map(
    (j) => `<div class="job">
  <div class="job-head"><span class="org">${esc(j.org)}</span><span class="when">${esc(j.when)} · ${esc(j.where)}</span></div>
  <div class="role">${esc(j.role)}</div>
  ${j.note ? `<div class="note">${esc(j.note)}</div>` : ""}
  ${j.points.length ? `<ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
</div>`,
  )
  .join("\n")}
</section>

<section><h2>${esc(c.h.projects)} <small>— ${link(`https://${contact.site}`, c.h.projectsNote)}</small></h2>
${c.projects.map(([n, d]) => `<p class="proj"><b>${esc(n)}</b> — ${esc(d)}</p>`).join("\n")}
</section>

<section><h2>${esc(c.h.education)} · ${esc(c.h.languages)}</h2>
  <p>${esc(c.education)}</p>
  <p>${esc(c.languages)}</p>
</section>
</body>
</html>`;
}

const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
try {
  for (const lang of ["en", "pt"]) {
    const c = cv[lang];
    const page = await browser.newPage();
    await page.setViewport({ width: c.paper === "A4" ? 794 : 816, height: 1200 });
    await page.setContent(html(lang), { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);
    const pdf = await page.pdf({ format: c.paper, printBackground: true, preferCSSPageSize: false });
    if (process.env.CV_PNG) await page.screenshot({ path: join(process.env.CV_PNG, `${lang}.png`), fullPage: true });
    const { writeFileSync } = await import("node:fs");
    for (const dir of outDirs) {
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, c.file), pdf);
    }
    // altura útil da página em px CSS (96 dpi): A4 = 297 mm, Letter = 11 in
    const pageH = c.paper === "A4" ? 1122.5 : 1056;
    const used = await page.evaluate(() => document.body.getBoundingClientRect().height);
    console.log(`${lang}: ${c.file} — ${Math.round(used)} / ${pageH} px${used > pageH ? " ⚠ passa de 1 página" : ""}`);
    await page.close();
  }
} finally {
  await browser.close();
}
