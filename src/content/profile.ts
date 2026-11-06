import type { L } from "@/lib/i18n";

export const profile = {
  name: "Maxmilian Duarte",
  photo: "/img/max.webp",
  github: "https://github.com/maxmilian02",
  githubUser: "maxmilian02",
  siteRepo: "https://github.com/maxmilian02/maxmilian02.github.io",
  // Deixe vazio para esconder do contato.
  linkedin: "https://www.linkedin.com/in/maxmilian-duarte-python/",
  email: "maximiliannduarte@gmail.com",
  phone: "+55 11 97433-0108",
  whatsapp: "https://wa.me/5511974330108",
  location: "São Paulo, SP",
  cv: { pt: "/cv/maxmilian-duarte-curriculo.pdf", en: "/cv/maxmilian-duarte-resume.pdf" } as L,
};

export interface OrgLink {
  label: string;
  href: string;
}

export interface Job {
  id: string;
  org: string | L;
  /** Site de cada empresa citada (só os que conferi que são da empresa certa). */
  links?: OrgLink[];
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
    id: "independent",
    org: { pt: "Desenvolvedor independente", en: "Independent developer" },
    links: [{ label: "github.com/maxmilian02/cnabkit", href: "https://github.com/maxmilian02/cnabkit" }],
    role: { pt: "Produtos próprios e código aberto", en: "Own products and open source" },
    from: "2026-07",
    to: "now",
    where: { pt: "Remoto", en: "Remote" },
    points: [
      {
        pt: "MaxTools Radio: site, app Android e bot de Discord com uma conta por e-mail (OAuth2 com PKCE: Google, Microsoft, Facebook, Discord e Spotify), recursos ligados por chave sem deploy e doações por webhook; 1.268 testes Python (271 ponta a ponta com Playwright) e 472 testes Android.",
        en: "MaxTools Radio: website, Android app and Discord bot with one account per email (OAuth2 with PKCE: Google, Microsoft, Facebook, Discord and Spotify), feature flags switched on without a deploy and donations by webhook; 1,268 Python tests (271 end-to-end in Playwright) and 472 Android tests.",
      },
      {
        pt: "cnabkit: biblioteca Python de código aberto que lê arquivos de banco brasileiros (CNAB 240, CNAB 400 e OFX), com testes, tipagem estrita e CI.",
        en: "cnabkit: open-source Python library that reads Brazilian bank files (CNAB 240, CNAB 400 and OFX), with tests, strict typing and CI.",
      },
      {
        pt: "Infraestrutura própria em produção: Proxmox, Docker, nginx com HTTPS, monitoramento com Uptime Kuma e backups semanais por snapshot.",
        en: "Own production infrastructure: Proxmox, Docker, nginx with HTTPS, Uptime Kuma monitoring and weekly snapshot backups.",
      },
    ],
    slugs: ["maxtools-radio", "cnabkit"],
  },
  {
    id: "netbiis",
    org: "Netbiis | Data Driven Technologies",
    links: [{ label: "netbiis.com", href: "https://www.netbiis.com" }],
    role: { pt: "Engenheiro de Software (Python, Backend e Dados)", en: "Software Engineer (Python, Backend & Data)" },
    from: "2024-09",
    to: "2026-05",
    where: { pt: "Remoto", en: "Remote" },
    points: [
      {
        pt: "Criei e mantive uma aplicação web interna (Flask + SQL) com ferramentas para os operadores (geração de scripts e segmentos, limpeza de listas, checagens no Jira) usadas em cerca de 32 campanhas por dia, reduzindo cada uma de ~20 para ~12 minutos (−40%).",
        en: "Built and owned an internal Flask + SQL web app of operator tools (script and segment generation, list cleaning, Jira checks) used on ~32 campaigns a day, cutting each from ~20 to ~12 minutes (−40%).",
      },
      {
        pt: "Criei um validador em FastAPI que lê o briefing pela API do Jira e os workflows e entregas do Adobe Campaign via SOAP, automatizando o QA de 10 a 15 campanhas por dia.",
        en: "Built a FastAPI validator that reads the brief through the Jira API and the workflows and deliveries from Adobe Campaign over SOAP, automating QA on 10 to 15 campaigns a day.",
      },
      {
        pt: "Escrevi SQL, stored procedures, JavaScript e automações de workflow dentro do Adobe Campaign para extração e segmentação de grandes volumes de dados.",
        en: "Wrote SQL, stored procedures, JavaScript and workflow automations inside Adobe Campaign for high-volume data extraction and audience segmentation.",
      },
      {
        pt: "Suporte L3 a pipelines de automação em produção: análise de logs, causa raiz, correção e acompanhamento.",
        en: "L3 support for production automation pipelines: log-based root-cause analysis, fixes and follow-up.",
      },
    ],
    slugs: ["campaign-qa"],
  },
  {
    id: "consulting",
    org: { pt: "Consultoria independente (grupo HG7)", en: "Independent consulting (HG7 group)" },
    role: { pt: "Desenvolvedor Backend", en: "Backend Developer" },
    from: "2023-02",
    to: "2024-08",
    where: { pt: "Híbrido", en: "Hybrid" },
    points: [
      {
        pt: "HG7 (corretora de seguros) e empresas do mesmo dono, outra corretora e uma clínica: criei o sistema de importação e conciliação de extratos OFX (Python, Flask, MySQL) em três versões, alimentando a DRE mensal, e a conciliação de comissões contra o ERP da corretora, com IRRF e ISS e fechamento do mês.",
        en: "HG7 (insurance brokerage) and two companies with the same owner, another brokerage and a clinic: built an OFX bank-statement import and reconciliation system (Python, Flask, MySQL) across three iterations, feeding the monthly income statement, plus commission reconciliation against the brokerage ERP with tax withholdings and month-end close.",
      },
      {
        pt: "Criei ETLs assíncronos (asyncio, aiohttp) do CRM RD Station e do Exact Spotter para MySQL, alimentando o Power BI, com limite de concorrência, nova tentativa em HTTP 429 e sincronização incremental em horário comercial.",
        en: "Built async ETL (asyncio, aiohttp) from RD Station CRM and Exact Spotter into MySQL for Power BI, with a concurrency cap, retry on HTTP 429 and incremental sync during business hours.",
      },
      {
        pt: "Criei um robô que lê as chamadas atendidas no painel da central 3CX e cria cada oportunidade no RD Station com o vendedor certo, além de RPA no ERP da corretora para extratos e relatórios de comissão.",
        en: "Built a bot that reads answered calls from the 3CX call panel and creates RD Station deals assigned to the right salesperson, plus RPA on the brokerage ERP for statements and commission reports.",
      },
    ],
    slugs: ["conciliacao-financeira"],
  },
  {
    id: "plug",
    org: "Plug Benefícios",
    links: [
      { label: "plugbeneficios.com.br", href: "https://www.plugbeneficios.com.br" },
      { label: "exportsul.com.br", href: "https://www.exportsul.com.br" },
    ],
    role: { pt: "Desenvolvedor Python (Estágio)", en: "Python Developer (Internship)" },
    from: "2022-08",
    to: "2024-02",
    where: { pt: "São Paulo", en: "São Paulo" },
    points: [
      {
        pt: "Criei e mantive 15 robôs em produção (Python, Selenium) que lançavam centenas de movimentações de beneficiários por mês em 4 portais de operadoras de saúde a partir de uma fila de chamados no MySQL, além de faturas, boletos e holerites.",
        en: "Built and maintained 15 production bots (Python, Selenium) entering hundreds of beneficiary changes a month into 4 health-insurer portals from a MySQL ticket queue, plus invoices, slips, and payslips.",
      },
      {
        pt: "Para a ExportSul, corretora cliente, criei robôs nos portais da Akad, Sompo e Tokio Marine que registram averbações de exportação e baixam faturas, retomando de onde a execução parou.",
        en: "For ExportSul, a client brokerage, built bots on the Akad, Sompo, and Tokio Marine portals that register export shipments and download invoices, resuming where a run stopped.",
      },
      {
        pt: "Reuni o código comum (inicialização do navegador, reCAPTCHA resolvido por áudio, envio por FTP) numa biblioteca Python interna (wheel), depois reaproveitada em outros clientes.",
        en: "Packaged shared code (browser setup, audio-based reCAPTCHA solving, FTP upload) into an internal Python wheel, later reused across other client projects.",
      },
      {
        pt: "Montei o servidor Ubuntu da empresa no lugar de um Windows Server instável: compartilhamento de arquivos com Samba para todo o escritório, impressoras para Windows e macOS e o ambiente onde os robôs rodavam.",
        en: "Set up the company's Ubuntu server in place of an unstable Windows Server: Samba file shares for the whole office, printer sharing for Windows and macOS, and the runtime for the bots.",
      },
    ],
    slugs: ["automacao-rpa"],
  },
  {
    id: "microcamp",
    org: "Microcamp Tecnologia",
    links: [{ label: "microcamp.com.br", href: "https://www.microcamp.com.br" }],
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
  school: "Faculdade Impacta",
  site: "https://www.impacta.edu.br",
  until: { pt: "Formatura em 2027", en: "Graduating 2027" } as L,
  languages: [
    { pt: "Português, nativo", en: "Portuguese, native" },
    { pt: "Inglês avançado (leitura, escrita e documentação técnica)", en: "Advanced English (reading, writing, technical documentation)" },
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
      { name: "Python", slugs: ["maxtools-radio", "pallab", "maxtools", "automacao-rpa", "conciliacao-financeira", "campaign-qa"] },
      { name: "Flask", slugs: ["maxtools-radio", "pallab", "meus-contatos-ms", "conciliacao-financeira", "campaign-qa"] },
      { name: "FastAPI", slugs: ["campaign-qa", "maxtools"] },
      { name: "asyncio · aiohttp", slugs: ["conciliacao-financeira"], jobs: ["consulting"] },
      { name: "OAuth2 · PKCE · MSAL", slugs: ["maxtools-radio", "meus-contatos-ms"] },
      { name: "REST · SOAP · SSE · webhooks", slugs: ["campaign-qa", "maxtools-radio", "pallab", "maxtools"] },
    ],
  },
  {
    title: { pt: "Dados", en: "Data" },
    items: [
      { name: "SQLite", slugs: ["maxtools-radio", "campaign-qa"] },
      { name: "MySQL", slugs: ["automacao-rpa", "conciliacao-financeira"] },
      { name: { pt: "SQL avançado · stored procedures", en: "Advanced SQL · stored procedures" }, slugs: ["campaign-qa"], jobs: ["netbiis"] },
      { name: "ETL · Power BI", slugs: [], jobs: ["consulting"] },
      { name: { pt: "Formatos de arquivo (CNAB, OFX, save GVAS)", en: "File formats (CNAB, OFX, GVAS saves)" }, slugs: ["cnabkit", "conciliacao-financeira", "pallab"] },
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
      { name: "Playwright (E2E)", slugs: ["maxtools-radio"] },
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
      { name: "nginx · Caddy · HTTPS", slugs: ["maxtools-radio", "maxtools"] },
      { name: "Linux · Ubuntu Server · Samba", slugs: ["automacao-rpa"], jobs: ["plug"] },
      { name: { pt: "Monitoramento (Uptime Kuma) · backups semanais (vzdump)", en: "Monitoring (Uptime Kuma) · weekly backups (vzdump)" }, slugs: [], jobs: ["independent"] },
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
  spec: { pt: "28 vCPU, 32 GB de RAM, 2,4 TB", en: "28 vCPU, 32 GB RAM, 2.4 TB" } as L,
};

export const rack: RackUnit[] = [
  { name: "pfSense", kind: "vm", role: { pt: "Firewall e gateway da rede", en: "Network firewall and gateway" } },
  { name: "Pi-hole", kind: "lxc", role: { pt: "DNS de toda a casa, com bloqueio", en: "DNS for the whole house, with blocking" } },
  { name: "nginx", kind: "lxc", role: { pt: "Proxy reverso e HTTPS", en: "Reverse proxy and HTTPS" } },
  { name: "MaxTools", kind: "lxc", role: { pt: "FastAPI + Next.js", en: "FastAPI + Next.js" }, slug: "maxtools" },
  { name: "MaxTools Radio", kind: "lxc", role: { pt: "Bot, API, site e backend do app", en: "Bot, API, website and app backend" }, slug: "maxtools-radio" },
  { name: "Palworld + PalLab", kind: "lxc", role: { pt: "Servidor dedicado e companion", en: "Dedicated server and companion" }, slug: "pallab" },
  { name: "LanCache", kind: "lxc", role: { pt: "Cache de downloads de jogos para a rede", en: "Game download cache for the network" } },
  { name: "Minecraft", kind: "lxc", role: { pt: "Servidor com modpack para amigos", en: "Modpack server for friends" } },
];

/** Resultados do topo da página: cada um aponta para o estudo de caso que o sustenta. */
export interface Proof {
  value: string | L;
  label: L;
  where: string;
  slug: string;
}

export const proof: Proof[] = [
  {
    value: "−40%",
    label: { pt: "de tempo por campanha (de ~20 para ~12 min), em 32 campanhas por dia", en: "time per campaign (from ~20 to ~12 min), across 32 campaigns a day" },
    where: "Netbiis",
    slug: "campaign-qa",
  },
  {
    value: "15",
    label: { pt: "robôs em produção em 4 portais de operadoras de saúde", en: "bots in production across 4 health-insurer portals" },
    where: "Plug Benefícios",
    slug: "automacao-rpa",
  },
  {
    value: "3",
    label: { pt: "gerações do sistema de conciliação OFX, alimentando a DRE mensal", en: "generations of the OFX reconciliation system, feeding the monthly income statement" },
    where: "HG7",
    slug: "conciliacao-financeira",
  },
  {
    value: { pt: "1.268", en: "1,268" },
    label: { pt: "testes automatizados num produto com site, app Android e bot", en: "automated tests on a product with a website, an Android app and a bot" },
    where: "MaxTools Radio",
    slug: "maxtools-radio",
  },
];

/** O que eu faço por um time; cada item aponta para onde já fiz. */
export interface Service {
  title: L;
  body: L;
  slugs: string[];
}

export const services: Service[] = [
  {
    title: { pt: "Automação de back-office", en: "Back-office automation" },
    body: {
      pt: "Robôs para portais, ERPs, faturas e documentos, com estado no banco, retentativas e retomada. Uma falha não obriga a começar do zero.",
      en: "Bots for portals, ERPs, invoices and documents, with state in the database, retries and resumable runs. A failure doesn't mean starting over.",
    },
    slugs: ["automacao-rpa", "conciliacao-financeira"],
  },
  {
    title: { pt: "APIs e integrações", en: "APIs and integrations" },
    body: {
      pt: "APIs REST e SOAP, CRMs, ERPs, Jira, Microsoft Graph, OAuth2 e webhooks, ligando os sistemas que o time já usa em vez de abrir mais uma aba.",
      en: "REST and SOAP APIs, CRMs, ERPs, Jira, Microsoft Graph, OAuth2 and webhooks, connecting the systems a team already uses instead of adding another tab.",
    },
    slugs: ["campaign-qa", "conciliacao-financeira", "maxtools-radio"],
  },
  {
    title: { pt: "Jobs em segundo plano e dados", en: "Background jobs and data" },
    body: {
      pt: "Jobs em segundo plano com progresso, ETL assíncrono e SQL avançado. O trabalho pesado sai da requisição e os números fecham.",
      en: "Background jobs with progress, async ETL and advanced SQL. Heavy work leaves the request path and the numbers add up.",
    },
    slugs: ["conciliacao-financeira", "maxtools"],
  },
  {
    title: { pt: "Ferramentas internas no ar", en: "Internal tools, deployed" },
    body: {
      pt: "Apps em Flask e FastAPI com login, testes e Docker, publicados em Linux atrás de nginx, num servidor que eu mesmo mantenho, com monitoramento e backup.",
      en: "Flask and FastAPI apps with login, tests and Docker, deployed on Linux behind nginx, on a server I run myself, with monitoring and backups.",
    },
    slugs: ["campaign-qa", "maxtools", "maxtools-radio"],
  },
];
