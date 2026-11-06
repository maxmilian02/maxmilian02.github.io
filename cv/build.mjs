// Gera os currículos em PDF (PT e EN) a partir de cv/content.mjs.
// Uso: npm run cv   (CHROME_PATH aponta para o Chrome se não estiver no caminho padrão do Windows)
// Variante sob medida (fora do site): CV_VARIANT=<arquivo .mjs> CV_VARIANT_OUT=<pasta> node cv/build.mjs
// O módulo exporta default (cv) => ({ lang, ...conteúdo }); sai um PDF só, na pasta indicada.
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer-core";
import { contact, cv } from "./content.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const variant = process.env.CV_VARIANT
  ? (await import(pathToFileURL(process.env.CV_VARIANT).href)).default(cv)
  : null;
if (variant && !process.env.CV_VARIANT_OUT) throw new Error("CV_VARIANT_OUT é obrigatório com CV_VARIANT");
const outDirs = variant
  ? [process.env.CV_VARIANT_OUT]
  : [join(here, "..", "public", "cv"), ...(process.env.CV_EXTRA_OUT ? [process.env.CV_EXTRA_OUT] : [])];
const builds = variant ? [[variant.lang, variant]] : [["en", cv.en], ["pt", cv.pt]];
const chrome = process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function html(lang, c) {
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
  body { font: 9pt/1.27 "IBM Plex Sans", "Segoe UI", Arial, sans-serif; color: #1b1e23; background: #fff; padding: 20pt 32pt 10pt; }
  a { color: inherit; text-decoration: none; }
  header { padding-bottom: 8pt; border-bottom: 1.2pt solid #1b1e23; }
  h1 { font-size: 20pt; line-height: 1; font-weight: 700; }
  .title { margin-top: 5pt; font-size: 11pt; font-weight: 600; }
  .contact { margin-top: 5pt; font-size: 8.6pt; line-height: 1.5; }
  section { margin-top: 6.5pt; }
  h2 { font-size: 8.6pt; font-weight: 700; text-transform: uppercase; margin-bottom: 3.5pt;
       padding-bottom: 1.5pt; border-bottom: 0.5pt solid #1b1e23; }
  h2 small { font-weight: 500; text-transform: none; }
  /* competências em linhas simples "Rótulo: itens" (sem grade), mais seguro para ATS */
  .skill + .skill { margin-top: 1.5pt; }
  .job { margin-top: 4.5pt; break-inside: avoid; }
  .job:first-of-type { margin-top: 0; }
  .job-head { display: flex; justify-content: space-between; gap: 12pt; }
  .org { font-weight: 700; font-size: 10.2pt; }
  .when { font-size: 8.8pt; white-space: nowrap; }
  .role { font-weight: 500; }
  .note { font-size: 8.6pt; font-style: italic; }
  /* o "•" é texto de verdade (não marcador de CSS) para o ATS enxergar a lista ao extrair o texto do PDF */
  ul { margin-top: 2.5pt; list-style: none; padding-left: 0; }
  li { margin-top: 1pt; position: relative; padding-left: 11pt; }
  li .b { position: absolute; left: 1.5pt; }
  .proj-note { font-size: 8.6pt; margin-bottom: 1pt; }
  .proj { margin-top: 2.5pt; break-inside: avoid; }
  .proj b { font-weight: 700; }
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 16pt; }
</style>
</head>
<body>
<header>
  <h1>${esc(contact.name)}</h1>
  <div class="title">${esc(c.title)}</div>
  <div class="contact">
    ${esc(c.location)} | ${link(`tel:${contact.phone.replace(/[^+\d]/g, "")}`, contact.phone)} | ${link(`mailto:${contact.email}`, contact.email)}<br>
    ${link(`https://${contact.linkedin}`, contact.linkedin)} | ${link(`https://${contact.github}`, contact.github)} | ${link(`https://${contact.site}`, contact.site)}
  </div>
</header>

<section><h2>${esc(c.h.summary)}</h2><p class="summary">${esc(c.summary)}</p></section>

<section><h2>${esc(c.h.skills)}</h2>
  ${c.skills.map(([k, v]) => `<p class="skill"><b>${esc(k)}:</b> ${esc(v)}</p>`).join("\n  ")}
</section>

<section><h2>${esc(c.h.experience)}</h2>
${c.jobs
  .map(
    (j) => `<div class="job">
  <div class="job-head"><span class="org">${esc(j.role)}</span><span class="when">${esc(j.when)}</span></div>
  <div class="job-head"><span class="role">${esc(j.org)}</span><span class="when">${esc(j.where)}</span></div>
  ${j.note ? `<div class="note">${esc(j.note)}</div>` : ""}
  ${j.points.length ? `<ul>${j.points.map((p) => `<li><span class="b">•</span> ${esc(p)}</li>`).join("")}</ul>` : ""}
</div>`,
  )
  .join("\n")}
</section>

<section><h2>${esc(c.h.projects)}</h2>
<p class="proj-note">${link(`https://${contact.site}`, c.h.projectsNote)}</p>
${c.projects.map(([n, d]) => `<p class="proj"><b>${esc(n)}</b>: ${esc(d)}</p>`).join("\n")}
</section>

<section><h2>${esc(c.h.languages)}</h2><p>${esc(c.languages)}</p></section>

<section><h2>${esc(c.h.education)}</h2><p>${esc(c.education)}</p></section>
</body>
</html>`;
}

const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
try {
  for (const [lang, c] of builds) {
    const page = await browser.newPage();
    await page.setViewport({ width: c.paper === "A4" ? 794 : 816, height: 1200 });
    await page.setContent(html(lang, c), { waitUntil: "networkidle0" });
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
    // Checagem de ATS: os pontos em que a ferramenta de currículo já ganhou de nós não podem voltar.
    const text = await page.evaluate(() => document.body.innerText);
    const bullets = c.jobs.reduce((n, j) => n + j.points.length, 0);
    const problems = [
      [/[~·]/.test(text), "tem '~' ou '·' (alguns parsers descartam)"],
      [(text.match(/•/g) || []).length !== bullets, "algum bullet sem o caractere '•' no texto"],
      [!text.includes(c.title), "falta o cargo-alvo abaixo do nome"],
      [!text.includes(contact.linkedin) || !text.includes(contact.github), "LinkedIn/GitHub sem o endereço por extenso"],
      [c.projects.some(([n, d]) => `${n}: ${d}`.split(":").length > 2), "projeto com dois-pontos repetidos"],
    ].filter(([bad]) => bad);
    for (const [, msg] of problems) console.log(`  ⚠ ATS (${lang}): ${msg}`);
    if (problems.length) process.exitCode = 1;
    await page.close();
  }
} finally {
  await browser.close();
}
