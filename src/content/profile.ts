import type { L } from "@/lib/i18n";

export const profile = {
  name: "Maxmilian Duarte",
  github: "https://github.com/maxmilian02",
  githubUser: "maxmilian02",
  siteRepo: "https://github.com/maxmilian02/maxmilian02.github.io",
  // Deixe vazio para esconder do contato.
  linkedin: "https://www.linkedin.com/in/maxmilian-duarte-python/",
  email: "abc.max@hotmail.com",
  phone: "+55 11 97433-0108",
  whatsapp: "https://wa.me/5511974330108",
  location: "São Paulo, SP",
  cv: { pt: "/cv/maxmilian-duarte-curriculo.pdf", en: "/cv/maxmilian-duarte-resume.pdf" } as L,
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

export interface Job {
  id: string;
  org: string | L;
  role: L;
  from: string; // "YYYY-MM"
  to: string;
  where: L;
  points: L[];
  slugs?: string[];
}

/** Experiência profissional, igual ao currículo (mais recente primeiro). */
export const experience: Job[] = [
  {
    id: "netbiis",
    org: "Netbiis | Data Driven Technologies",
    role: { pt: "Engenheiro de Software (Python, Backend e Dados)", en: "Software Engineer (Python, Backend & Data)" },
    from: "2024-09",
    to: "2026-05",
    where: { pt: "Remoto", en: "Remote" },
    points: [
      {
        pt: "Criei e mantive uma aplicação web interna (Flask + SQL) que automatizou a validação de dados das campanhas, reduzindo em 40% o tempo de verificação manual da equipe.",
        en: "Built and owned an internal Flask + SQL web application that automated data validation for campaign operations, cutting the team's manual verification time by 40%.",
      },
      {
        pt: "Escrevi e otimizei consultas SQL complexas e stored procedures para extração e segmentação de grandes volumes de dados no Adobe Campaign.",
        en: "Wrote and optimized complex SQL queries and stored procedures for high-volume data extraction and audience segmentation in Adobe Campaign.",
      },
      {
        pt: "Suporte L3 a pipelines de automação em produção: análise de logs, causa raiz, correção e acompanhamento.",
        en: "L3 support for production automation pipelines: log-based root-cause analysis, fixes and follow-up.",
      },
    ],
    slugs: ["marketing-ops"],
  },
  {
    id: "consulting",
    org: { pt: "Consultor independente — HG7, ExportSul", en: "Independent Consultant — HG7, ExportSul" },
    role: { pt: "Desenvolvedor Backend", en: "Backend Developer" },
    from: "2024-02",
    to: "2024-08",
    where: { pt: "Híbrido", en: "Hybrid" },
    points: [
      {
        pt: "HG7 (corretora de seguros): sistema de importação e conciliação de extratos OFX (Python, Flask, MySQL) em três versões, integrado ao ERP em PHP e alimentando a DRE. O trabalho começou em meio período em 2023, em paralelo ao estágio.",
        en: "HG7 (insurance brokerage): OFX bank-statement import and reconciliation (Python, Flask, MySQL) across three iterations, embedded in the PHP ERP and feeding the income statement. The engagement began part-time in 2023, alongside the internship.",
      },
      {
        pt: "HG7: integração do CRM RD Station e da telefonia 3CX; ETL do RD Station e do Microsoft Graph para MongoDB, alimentando painéis no Power BI.",
        en: "HG7: RD Station CRM and 3CX telephony integrations; ETL from RD Station and Microsoft Graph into MongoDB for Power BI dashboards.",
      },
      {
        pt: "ExportSul: robôs Selenium que processam faturas num ERP, com retentativas e estado por item para retomar de onde pararam.",
        en: "ExportSul: Selenium bots that process invoices in an ERP, with retries and per-item state so runs resume where they stopped.",
      },
      {
        pt: "Deploy de serviços em contêiner na AWS (EC2), com S3 para arquivos.",
        en: "Containerized services deployed on AWS EC2, with S3 for file storage.",
      },
    ],
    slugs: ["conciliacao-financeira"],
  },
  {
    id: "plug",
    org: "Plug Benefícios",
    role: { pt: "Desenvolvedor Python (Estágio)", en: "Python Developer (Internship)" },
    from: "2022-08",
    to: "2024-02",
    where: { pt: "São Paulo", en: "São Paulo" },
    points: [
      {
        pt: "15 robôs de automação em produção (Python, Selenium, Playwright) para 4 portais de operadoras de saúde a partir de uma fila de chamados no MySQL, além de faturas, boletos e holerites.",
        en: "15 production automation bots (Python, Selenium, Playwright) across 4 health-insurer portals, driven by a MySQL ticket queue, plus invoices, payment slips and payslips.",
      },
      {
        pt: "Serviço Flask + Celery + RabbitMQ que executa os robôs em paralelo atrás de uma API REST, com a concorrência dimensionada por teste de carga.",
        en: "A Flask + Celery + RabbitMQ service that runs the bots in parallel behind a REST API, with concurrency sized by a load test.",
      },
      {
        pt: "Biblioteca Python interna (wheel) com o código comum dos robôs; MySQL, MongoDB e painéis internos em Django e Flask.",
        en: "An internal Python package (wheel) with the bots' shared code; MySQL, MongoDB and internal dashboards in Django and Flask.",
      },
    ],
    slugs: ["automacao-rpa"],
  },
  {
    id: "microcamp",
    org: "Microcamp Tecnologia",
    role: { pt: "Instrutor Técnico (Lógica e Algoritmos)", en: "Tech Instructor (Logic & Algorithms)" },
    from: "2021-10",
    to: "2022-02",
    where: { pt: "São Paulo", en: "São Paulo" },
    points: [
      {
        pt: "Aulas de lógica de programação, algoritmos e Python para mais de 50 alunos.",
        en: "Taught programming logic, algorithms and Python to 50+ students.",
      },
    ],
  },
];

export const education = {
  course: { pt: "Bacharelado em Engenharia da Computação", en: "Bachelor of Computer Engineering" } as L,
  school: "Impacta Tecnologia",
  until: { pt: "Previsão de formatura: 2027", en: "Expected graduation: 2027" } as L,
  languages: [
    { pt: "Português — nativo", en: "Portuguese — native" },
    { pt: "Inglês — avançado (leitura, escrita e documentação técnica)", en: "English — advanced (reading, writing, technical documentation)" },
  ] as L[],
};

export interface StackGroup {
  title: L;
  /** slugs = estudos de caso; jobs = ids de `experience`. */
  items: { name: string | L; slugs: string[]; jobs?: string[] }[];
}

export const stack: StackGroup[] = [
  {
    title: { pt: "Backend", en: "Backend" },
    items: [
      { name: "Python", slugs: ["maxtools-radio", "pallab", "maxtools", "automacao-rpa", "conciliacao-financeira", "marketing-ops"] },
      { name: "Flask", slugs: ["maxtools-radio", "pallab", "meus-contatos-ms", "conciliacao-financeira", "marketing-ops"] },
      { name: "FastAPI", slugs: ["maxtools"] },
      { name: "Celery · RabbitMQ", slugs: ["automacao-rpa"], jobs: ["plug"] },
      { name: "Django", slugs: [], jobs: ["plug"] },
      { name: "OAuth2 · PKCE · MSAL", slugs: ["maxtools-radio", "meus-contatos-ms"] },
      { name: "SSE · REST", slugs: ["maxtools-radio", "pallab", "maxtools"] },
    ],
  },
  {
    title: { pt: "Dados", en: "Data" },
    items: [
      { name: "SQLite", slugs: ["maxtools-radio", "marketing-ops"] },
      { name: "MySQL", slugs: ["automacao-rpa", "conciliacao-financeira"] },
      { name: { pt: "SQL avançado · stored procedures", en: "Advanced SQL · stored procedures" }, slugs: ["marketing-ops"], jobs: ["netbiis"] },
      { name: "MongoDB", slugs: ["conciliacao-financeira"], jobs: ["plug", "consulting"] },
      { name: "ETL · Power BI", slugs: [], jobs: ["consulting"] },
      { name: { pt: "Formatos binários (Oodle, OFX)", en: "Binary formats (Oodle, OFX)" }, slugs: ["pallab", "conciliacao-financeira"] },
    ],
  },
  {
    title: { pt: "Frontend", en: "Frontend" },
    items: [
      { name: "TypeScript · React · Next.js", slugs: ["maxtools"] },
      { name: "Vue 3 · Pinia", slugs: ["meus-contatos-ms"] },
      { name: "Tailwind CSS", slugs: ["maxtools", "meus-contatos-ms"] },
      { name: { pt: "JavaScript sem framework", en: "Framework-free JavaScript" }, slugs: ["pallab", "maxtools-radio"] },
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
      { name: "AWS (EC2, S3)", slugs: [], jobs: ["consulting"] },
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
