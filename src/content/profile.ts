import type { L } from "@/lib/i18n";

export const profile = {
  name: "Maxmilian Duarte",
  github: "https://github.com/maxmilian02",
  githubUser: "maxmilian02",
  siteRepo: "https://github.com/maxmilian02/maxmilian02.github.io",
  // Preencha para aparecer no contato (deixe vazio para esconder).
  linkedin: "",
  email: "",
};

/**
 * Um registro por repositório do GitHub (out/2026), em ordem de criação.
 * Repositórios de clientes aparecem com rótulo genérico — o nome real fica de fora.
 */
export interface Repo {
  label: string;
  date: string; // "YYYY-MM" de criação
  commits: number;
  lang: string;
  /** Estudo de caso para onde a barra leva. */
  slug?: string;
}

export const repos: Repo[] = [
  { label: "Landing page", date: "2022-04", commits: 2, lang: "HTML" },
  { label: "DEVinHouse · projeto 1", date: "2022-04", commits: 41, lang: "JavaScript" },
  { label: "Checkbox Race Bot", date: "2022-04", commits: 13, lang: "Python" },
  { label: "RPA · movimentação de beneficiários", date: "2022-08", commits: 80, lang: "Python", slug: "automacao-rpa" },
  { label: "RPA · carga diária de planilhas", date: "2022-09", commits: 3, lang: "Python", slug: "automacao-rpa" },
  { label: "RPA · boletagem semanal", date: "2022-09", commits: 22, lang: "Python", slug: "automacao-rpa" },
  { label: "RPA · boletos bancários", date: "2022-10", commits: 11, lang: "Python", slug: "automacao-rpa" },
  { label: "RPA · faturas de operadoras", date: "2022-12", commits: 16, lang: "Python", slug: "automacao-rpa" },
  { label: "RPA · faturas (v1)", date: "2022-12", commits: 2, lang: "Python", slug: "automacao-rpa" },
  { label: "Django · tema de painel", date: "2022-12", commits: 1, lang: "Python" },
  { label: "Experimento · desktop", date: "2022-12", commits: 3, lang: "Python" },
  { label: "Experimento · e-mail", date: "2022-12", commits: 3, lang: "Python" },
  { label: "Experimento · imagem", date: "2022-12", commits: 3, lang: "Python" },
  { label: "Experimento · Excel", date: "2022-12", commits: 5, lang: "Python" },
  { label: "RPA · portal de boletos", date: "2022-12", commits: 5, lang: "Python", slug: "automacao-rpa" },
  { label: "RPA · distribuição de holerites", date: "2022-12", commits: 8, lang: "Python", slug: "automacao-rpa" },
  { label: "RPA · inclusões em lote", date: "2022-12", commits: 10, lang: "Python", slug: "automacao-rpa" },
  { label: "RPA · portal de seguradora", date: "2023-01", commits: 21, lang: "Python", slug: "automacao-rpa" },
  { label: "TechPowerUp News", date: "2023-02", commits: 1, lang: "Python" },
  { label: "RPA · planos de saúde", date: "2023-02", commits: 1, lang: "Python", slug: "automacao-rpa" },
  { label: "Integrações CRM & telefonia", date: "2023-02", commits: 16, lang: "Python", slug: "conciliacao-financeira" },
  { label: "Protótipo 2D em Unity", date: "2023-03", commits: 2, lang: "C#" },
  { label: "RPA · cotações e faturas", date: "2023-04", commits: 6, lang: "Python", slug: "automacao-rpa" },
  { label: "Biblioteca interna de automação", date: "2023-04", commits: 2, lang: "Python", slug: "automacao-rpa" },
  { label: "Empacotador da biblioteca", date: "2023-04", commits: 3, lang: "Python", slug: "automacao-rpa" },
  { label: "Flask REST Panel", date: "2023-04", commits: 2, lang: "Python" },
  { label: "DEVinHouse · exercícios", date: "2023-06", commits: 21, lang: "HTML" },
  { label: "Curso de JavaScript", date: "2023-06", commits: 12, lang: "JavaScript" },
  { label: "ROMA · orquestrador de robôs", date: "2023-07", commits: 3, lang: "Python", slug: "automacao-rpa" },
  { label: "LocalizaAPI", date: "2023-08", commits: 4, lang: "Python" },
  { label: "Conciliação OFX · v1", date: "2023-08", commits: 3, lang: "Python", slug: "conciliacao-financeira" },
  { label: "Conciliação OFX · v2", date: "2023-09", commits: 12, lang: "Python", slug: "conciliacao-financeira" },
  { label: "Conciliação OFX · v3", date: "2024-02", commits: 39, lang: "Python", slug: "conciliacao-financeira" },
  { label: "Marketing Ops Toolkit", date: "2025-04", commits: 6, lang: "Python", slug: "marketing-ops" },
  { label: "Meus Contatos MS", date: "2025-11", commits: 42, lang: "Vue", slug: "meus-contatos-ms" },
  { label: "MaxTools", date: "2026-07", commits: 33, lang: "TypeScript", slug: "maxtools" },
  { label: "PalLab", date: "2026-07", commits: 33, lang: "JavaScript", slug: "pallab" },
  { label: "MaxTools Radio", date: "2026-08", commits: 213, lang: "Python", slug: "maxtools-radio" },
];

export const totals = {
  repos: repos.length,
  commits: repos.reduce((s, r) => s + r.commits, 0),
  first: repos[0].date,
  last: "2026-10",
};

export interface Chapter {
  from: string;
  to: string;
  title: L;
  body: L;
  slugs?: string[];
}

export const timeline: Chapter[] = [
  {
    from: "2022-04",
    to: "2022-08",
    title: { pt: "Primeiros scripts e bootcamp", en: "First scripts and bootcamp" },
    body: {
      pt: "Bootcamp DEVinHouse (SENAI/SC) no front-end e os primeiros bots em Python, de automação de tela a raspagem de sites.",
      en: "DEVinHouse bootcamp (SENAI/SC) on the front end, and my first Python bots, from screen automation to web scraping.",
    },
    slugs: ["devinhouse", "checkboxrace-bot"],
  },
  {
    from: "2022-08",
    to: "2023-11",
    title: { pt: "Automação para uma corretora de benefícios", en: "Automation for a benefits brokerage" },
    body: {
      pt: "Quinze robôs em produção, uma biblioteca interna empacotada e uma prova de conceito de orquestração com Celery e RabbitMQ.",
      en: "Fifteen bots in production, a packaged internal library and an orchestration proof of concept with Celery and RabbitMQ.",
    },
    slugs: ["automacao-rpa"],
  },
  {
    from: "2023-08",
    to: "2025-01",
    title: { pt: "Sistemas financeiros para uma corretora de seguros", en: "Finance systems for an insurance brokerage" },
    body: {
      pt: "Três gerações de conciliação de extratos OFX, integração com o ERP em PHP e com CRM e telefonia.",
      en: "Three generations of OFX statement reconciliation, integrated with the PHP ERP, CRM and telephony.",
    },
    slugs: ["conciliacao-financeira"],
  },
  {
    from: "2025-04",
    to: "2025-11",
    title: { pt: "Ferramentas internas e full-stack moderno", en: "Internal tools and modern full-stack" },
    body: {
      pt: "Uma suíte interna para um time de CRM e, em novembro, o teste técnico Flask + Vue 3 com OAuth da Microsoft.",
      en: "An internal suite for a CRM team and, in November, the Flask + Vue 3 technical assessment with Microsoft OAuth.",
    },
    slugs: ["marketing-ops", "meus-contatos-ms"],
  },
  {
    from: "2026-06",
    to: "2026-10",
    title: { pt: "Plataforma própria e servidor em casa", en: "My own platform and home server" },
    body: {
      pt: "MaxTools, PalLab e MaxTools Radio — com app Android — rodando num nó Proxmox que eu administro.",
      en: "MaxTools, PalLab and MaxTools Radio — with an Android app — running on a Proxmox node I administer.",
    },
    slugs: ["maxtools", "pallab", "maxtools-radio"],
  },
];

export interface StackGroup {
  title: L;
  items: { name: string; slugs: string[] }[];
}

export const stack: StackGroup[] = [
  {
    title: { pt: "Backend", en: "Backend" },
    items: [
      { name: "Python", slugs: ["maxtools-radio", "pallab", "maxtools", "automacao-rpa", "conciliacao-financeira", "marketing-ops"] },
      { name: "Flask", slugs: ["maxtools-radio", "pallab", "meus-contatos-ms", "conciliacao-financeira", "marketing-ops"] },
      { name: "FastAPI", slugs: ["maxtools"] },
      { name: "Celery · RabbitMQ", slugs: ["automacao-rpa"] },
      { name: "OAuth2 · PKCE · MSAL", slugs: ["maxtools-radio", "meus-contatos-ms"] },
      { name: "SSE · REST", slugs: ["maxtools-radio", "pallab", "maxtools"] },
    ],
  },
  {
    title: { pt: "Dados", en: "Data" },
    items: [
      { name: "SQLite", slugs: ["maxtools-radio", "marketing-ops"] },
      { name: "MySQL", slugs: ["automacao-rpa", "conciliacao-financeira"] },
      { name: "MongoDB", slugs: ["conciliacao-financeira"] },
      { name: "Formatos binários (Oodle, OFX)", slugs: ["pallab", "conciliacao-financeira"] },
    ],
  },
  {
    title: { pt: "Frontend", en: "Frontend" },
    items: [
      { name: "TypeScript · React · Next.js", slugs: ["maxtools"] },
      { name: "Vue 3 · Pinia", slugs: ["meus-contatos-ms"] },
      { name: "Tailwind CSS", slugs: ["maxtools", "meus-contatos-ms"] },
      { name: "JavaScript sem framework", slugs: ["pallab", "maxtools-radio"] },
      { name: "Leaflet", slugs: ["pallab"] },
    ],
  },
  {
    title: { pt: "Mobile", en: "Mobile" },
    items: [
      { name: "Kotlin · Jetpack Compose", slugs: ["maxtools-radio"] },
      { name: "Media3 · Android Auto", slugs: ["maxtools-radio"] },
    ],
  },
  {
    title: { pt: "Automação", en: "Automation" },
    items: [
      { name: "Selenium", slugs: ["automacao-rpa", "conciliacao-financeira", "localiza-api"] },
      { name: "Playwright", slugs: ["automacao-rpa"] },
      { name: "Scraping", slugs: ["localiza-api", "techpowerup-news"] },
    ],
  },
  {
    title: { pt: "Áudio e mídia", en: "Audio and media" },
    items: [
      { name: "FFmpeg · yt-dlp", slugs: ["maxtools", "maxtools-radio"] },
      { name: "DSP (audioop)", slugs: ["maxtools-radio"] },
    ],
  },
  {
    title: { pt: "Infra", en: "Infra" },
    items: [
      { name: "Docker · Compose", slugs: ["maxtools-radio", "pallab", "meus-contatos-ms"] },
      { name: "Proxmox · LXC", slugs: ["maxtools-radio", "pallab", "maxtools"] },
      { name: "nginx · HTTPS", slugs: ["maxtools", "maxtools-radio"] },
      { name: "Linux · systemd", slugs: ["maxtools"] },
    ],
  },
];

export interface RackUnit {
  name: string;
  kind: "vm" | "lxc";
  role: L;
  slug?: string;
}

export const host = {
  name: "Proxmox VE 9",
  spec: "28 vCPU · 32 GB · 2,4 TB",
};

export const rack: RackUnit[] = [
  { name: "pfSense", kind: "vm", role: { pt: "Firewall e gateway da rede", en: "Network firewall and gateway" } },
  { name: "Pi-hole", kind: "lxc", role: { pt: "DNS de toda a casa, com bloqueio", en: "DNS for the whole house, with blocking" } },
  { name: "nginx", kind: "lxc", role: { pt: "Proxy reverso e HTTPS", en: "Reverse proxy and HTTPS" } },
  { name: "MaxTools", kind: "lxc", role: { pt: "FastAPI + Next.js", en: "FastAPI + Next.js" }, slug: "maxtools" },
  { name: "MaxTools Radio", kind: "lxc", role: { pt: "Bot, API e painel do ouvinte", en: "Bot, API and listener panel" }, slug: "maxtools-radio" },
  { name: "Palworld + PalLab", kind: "lxc", role: { pt: "Servidor dedicado e companion", en: "Dedicated server and companion" }, slug: "pallab" },
  { name: "LanCache", kind: "lxc", role: { pt: "Cache de downloads de jogos para a LAN", en: "Game download cache for the LAN" } },
  { name: "Apps", kind: "lxc", role: { pt: "Painel do homelab e serviços menores", en: "Homelab dashboard and smaller services" } },
  { name: "Flask apps", kind: "lxc", role: { pt: "Ferramentas internas", en: "Internal tools" }, slug: "marketing-ops" },
  { name: "Minecraft", kind: "lxc", role: { pt: "Servidor modpack para amigos", en: "Modpack server for friends" } },
];
