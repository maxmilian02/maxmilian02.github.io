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
  org: string;
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
    role: { pt: "Engenheiro de Software (Python & Automação)", en: "Software Engineer (Python & Automation)" },
    from: "2024-09",
    to: "2026-05",
    where: { pt: "Híbrido", en: "Hybrid" },
    points: [
      {
        pt: "Liderei o desenvolvimento full-stack de uma aplicação web (Flask + SQL) para orquestração e validação de dados, reduzindo em 40% o tempo de verificação manual da equipe.",
        en: "Led the full-stack development of a web app (Flask + SQL) to orchestrate data validation, cutting the team's manual verification time by 40%.",
      },
      {
        pt: "Scripts SQL complexos e stored procedures para extração e segmentação de grandes volumes de dados no Adobe Campaign.",
        en: "Complex SQL scripts and stored procedures to extract and segment high-volume data in Adobe Campaign.",
      },
      {
        pt: "Suporte L3 a pipelines de automação críticos: análise de logs, causa raiz e disponibilidade.",
        en: "L3 support for critical automation pipelines: log analysis, root cause and availability.",
      },
    ],
    slugs: ["marketing-ops"],
  },
  {
    id: "consulting",
    org: "Consultor independente — HG7, Plug, ExportSul",
    role: { pt: "Engenheiro de Backend & Consultor", en: "Backend Engineer & Consultant" },
    from: "2021-01",
    to: "2024-08",
    where: { pt: "Híbrido", en: "Hybrid" },
    points: [
      {
        pt: "Plug: API REST centralizada (Flask, RabbitMQ, Celery) para filas de tarefas assíncronas, resolvendo gargalos de performance.",
        en: "Plug: a centralised REST API (Flask, RabbitMQ, Celery) for async task queues, removing performance bottlenecks.",
      },
      {
        pt: "HG7: sistema de gestão financeira (DRE) com processamento automático de arquivos OFX.",
        en: "HG7: a financial management system (income statement) with automatic OFX file processing.",
      },
      {
        pt: "Pipelines ETL de APIs externas (Microsoft Graph, RD Station) para MongoDB, alimentando análises no Power BI; deploy de contêineres na AWS (EC2, S3).",
        en: "ETL pipelines from external APIs (Microsoft Graph, RD Station) into MongoDB for Power BI analytics; container deploys on AWS (EC2, S3).",
      },
    ],
    slugs: ["conciliacao-financeira", "automacao-rpa"],
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
        pt: "Robôs RPA para portais de operadoras de saúde, faturas, boletos e holerites, com fila de chamados no MySQL.",
        en: "RPA bots for health-insurer portals, invoices, payment slips and payslips, driven by a MySQL ticket queue.",
      },
      {
        pt: "Filas assíncronas com Celery e RabbitMQ; MySQL para dados transacionais e MongoDB para dados não estruturados.",
        en: "Async queues with Celery and RabbitMQ; MySQL for transactional data and MongoDB for unstructured data.",
      },
      {
        pt: "Painéis internos com Django e Flask para métricas de negócio.",
        en: "Internal dashboards with Django and Flask for business metrics.",
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
        pt: "Mentoria para mais de 50 alunos em lógica de programação, algoritmos e arquitetura de computadores.",
        en: "Mentored 50+ students in programming logic, algorithms and computer architecture.",
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
      { name: "Celery · RabbitMQ", slugs: ["automacao-rpa"], jobs: ["plug", "consulting"] },
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
