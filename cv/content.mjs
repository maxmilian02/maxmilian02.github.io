// Conteúdo do currículo — fonte única para os PDFs em PT e EN.
// Regra: só entra o que dá para sustentar em entrevista; números vêm dos projetos reais.
// Base: versão revisada por ferramenta de ATS (nov/2026). Exceção: a frase da Netbiis segue os números
// confirmados pelo dono (32 jobs/dia, QA automático em 10–15, cada job de ~20 para ~12 min, −40%).
// Layout: o cargo vai em negrito na primeira linha (role) e a empresa embaixo (org).

export const contact = {
  name: "Maxmilian Duarte",
  phone: "+55 11 97433-0108",
  email: "maximiliannduarte@gmail.com",
  linkedin: "linkedin.com/in/maxmilian-duarte-python",
  github: "github.com/maxmilian02",
  site: "maxmilian02.github.io",
};

export const cv = {
  en: {
    file: "maxmilian-duarte-resume.pdf",
    paper: "Letter",
    title: "Python Backend Engineer",
    location: "São Paulo, Brazil (UTC−3) · remote, overlaps US business hours",
    h: {
      summary: "Professional summary",
      skills: "Skills",
      experience: "Work Experience",
      projects: "Projects",
      projectsNote: "case studies at maxmilian02.github.io",
      education: "Education",
      languages: "Languages",
    },
    summary:
      "Python backend engineer with 4 years of production experience building REST APIs, browser automation that runs unattended, and data pipelines on advanced SQL. I own systems end to end: design, implementation, tests, and deployment with Docker on Linux.",
    skills: [
      ["Backend", "Python, Flask, FastAPI, REST APIs, asyncio / aiohttp, OAuth2 / PKCE, Server-Sent Events"],
      ["Data", "MySQL, SQLite, MongoDB, advanced SQL, stored procedures, ETL"],
      ["Infra", "Docker / Compose, Linux, systemd, nginx, Proxmox / LXC, GitHub Actions, Uptime Kuma, scheduled backups"],
      ["Quality", "pytest, end-to-end tests, type hints, production support (L3), log analysis"],
      ["Also", "TypeScript / Next.js, Vue 3, Kotlin / Jetpack Compose, Selenium / Playwright, FFmpeg"],
    ],
    jobs: [
      {
        role: "Independent Developer",
        org: "Own products and open source",
        when: "Jul 2026 – Present",
        where: "Remote",
        points: [
          "Building MaxTools Radio and cnabkit, an open-source Python library for Brazilian bank files (CNAB 240/400, OFX), on self-managed infrastructure: Proxmox, Docker, nginx, Uptime Kuma, and weekly backups.",
        ],
      },
      {
        role: "Software Engineer (Python, Backend and Data)",
        org: "Netbiis | Data Driven Technologies",
        when: "Sep 2024 – May 2026",
        where: "Remote",
        points: [
          "Built and owned an internal Flask and SQL web application for ~32 daily campaign jobs: automated QA fully covered 10 to 15 of them, and its support tools cut each job from ~20 to ~12 minutes (−40%) across all 32.",
          "Wrote and optimized complex SQL and stored procedures for high-volume extraction and audience segmentation in Adobe Campaign.",
          "Provided L3 support for production automation pipelines: log-based root-cause analysis, fixes, and follow-up.",
        ],
      },
      {
        role: "Backend Developer, HG7 Group (Insurance Brokerages and a Clinic)",
        org: "Independent Consultant",
        when: "Feb 2024 – Aug 2024",
        where: "Hybrid",
        points: [
          "Built an OFX bank-statement import and reconciliation system (Python, Flask, MySQL) across three iterations, embedded in the company's PHP ERP and feeding its income statement, replacing line-by-line spreadsheet reconciliation.",
          "Built async ETL from RD Station CRM into MySQL for Power BI (10 parallel requests per batch, paced to the 120 requests/min rate limit) and from Exact Spotter into MongoDB.",
          "Built a bot that reads answered calls from the 3CX phone system and creates RD Station leads assigned to the right salesperson.",
        ],
      },
      {
        role: "Python Developer (Internship)",
        org: "Plug Benefícios",
        when: "Aug 2022 – Feb 2024",
        where: "São Paulo",
        points: [
          "Built and maintained 15 production bots (Python, Selenium) processing hundreds of beneficiary changes a month across 4 health-insurer portals from a MySQL ticket queue, plus invoices, slips, and payslips.",
          "For ExportSul, a client brokerage, built bots on the Akad, Sompo, and Tokio Marine portals that register export shipments and download invoices, with per-record status in MySQL so runs resume where they stopped.",
          "Packaged shared code (browser setup, audio-based reCAPTCHA solving, FTP upload) into an internal Python wheel, later reused across other client projects.",
        ],
      },
      {
        role: "Tech Instructor",
        org: "Microcamp Tecnologia",
        when: "Oct 2021 – Feb 2022",
        where: "São Paulo",
        points: ["Taught programming logic, algorithms, and Python to 50+ students."],
      },
    ],
    projects: [
      [
        "MaxTools Radio",
        "Python bot streaming 48 kHz PCM through a real-time DSP chain, Flask API with SSE and OAuth accounts (Google, Discord, Spotify), web app, and Kotlin / Jetpack Compose Android app. 1,264 Python tests and 472 Android unit tests.",
      ],
      [
        "MaxTools",
        "FastAPI plugin platform: a registry auto-discovers tool modules and a Next.js dashboard renders from their manifest. Async jobs with progress, API-key auth, TTL cleanup, and frame-accurate video trimming over HTTP Range.",
      ],
    ],
    languages: "Portuguese (native) · English (advanced: reading, writing, technical documentation)",
    education: "B.Sc. Computer Engineering, Impacta Tecnologia (expected 2027)",
  },

  pt: {
    file: "maxmilian-duarte-curriculo.pdf",
    paper: "A4",
    title: "Engenheiro de Software Backend Python",
    location: "São Paulo, SP · aberto a remoto",
    h: {
      summary: "Resumo profissional",
      skills: "Competências",
      experience: "Experiência profissional",
      projects: "Projetos",
      projectsNote: "estudos de caso em maxmilian02.github.io",
      education: "Formação",
      languages: "Idiomas",
    },
    summary:
      "Engenheiro backend Python com 4 anos de experiência em produção construindo APIs REST, automações de navegador que rodam sem supervisão e pipelines de dados com SQL avançado. Cuido dos sistemas de ponta a ponta: desenho, implementação, testes e deploy com Docker em Linux.",
    skills: [
      ["Backend", "Python, Flask, FastAPI, APIs REST, asyncio / aiohttp, OAuth2 / PKCE, Server-Sent Events"],
      ["Dados", "MySQL, SQLite, MongoDB, SQL avançado, stored procedures, ETL"],
      ["Infra", "Docker / Compose, Linux, systemd, nginx, Proxmox / LXC, GitHub Actions, Uptime Kuma, backups agendados"],
      ["Qualidade", "pytest, testes ponta a ponta, type hints, suporte de produção (L3), análise de logs"],
      ["Também", "TypeScript / Next.js, Vue 3, Kotlin / Jetpack Compose, Selenium / Playwright, FFmpeg"],
    ],
    jobs: [
      {
        role: "Desenvolvedor Independente",
        org: "Produtos próprios e código aberto",
        when: "jul 2026 – hoje",
        where: "Remoto",
        points: [
          "Desenvolvo o MaxTools Radio e o cnabkit, biblioteca Python de código aberto para arquivos de banco brasileiros (CNAB 240/400, OFX), numa infraestrutura que eu mesmo mantenho: Proxmox, Docker, nginx, Uptime Kuma e backups semanais.",
        ],
      },
      {
        role: "Engenheiro de Software (Python, Backend e Dados)",
        org: "Netbiis | Data Driven Technologies",
        when: "set 2024 – mai 2026",
        where: "Remoto",
        points: [
          "Criei e mantive uma aplicação web interna (Flask + SQL) para cerca de 32 jobs de campanha por dia: o QA automático cobria de 10 a 15 deles, e as ferramentas de apoio reduziram cada job de ~20 para ~12 minutos (−40%) nos 32.",
          "Escrevi e otimizei consultas SQL complexas e stored procedures para extração e segmentação de grandes volumes de dados no Adobe Campaign.",
          "Prestei suporte L3 a pipelines de automação em produção: análise de logs, causa raiz, correção e acompanhamento.",
        ],
      },
      {
        role: "Desenvolvedor Backend, grupo HG7 (corretoras de seguros e uma clínica)",
        org: "Consultor independente",
        when: "fev 2024 – ago 2024",
        where: "Híbrido",
        points: [
          "Criei o sistema de importação e conciliação de extratos bancários OFX (Python, Flask, MySQL) em três versões, integrado ao ERP em PHP da empresa e alimentando a DRE, substituindo a conciliação linha a linha em planilha.",
          "Criei ETLs assíncronos do CRM RD Station para MySQL, alimentando o Power BI (10 requisições paralelas por lote, no ritmo do limite de 120 por minuto), e do Exact Spotter para MongoDB.",
          "Criei um robô que lê as chamadas atendidas na central 3CX e cadastra cada lead no RD Station com o vendedor certo.",
        ],
      },
      {
        role: "Desenvolvedor Python (Estágio)",
        org: "Plug Benefícios",
        when: "ago 2022 – fev 2024",
        where: "São Paulo",
        points: [
          "Criei e mantive 15 robôs em produção (Python, Selenium) que processavam centenas de movimentações de beneficiários por mês em 4 portais de operadoras de saúde a partir de uma fila de chamados no MySQL, além de faturas, boletos e holerites.",
          "Para a ExportSul, corretora cliente, criei robôs nos portais da Akad, Sompo e Tokio Marine que registram averbações de exportação e baixam faturas, com status por registro no MySQL para retomar de onde pararam.",
          "Reuni o código comum (inicialização do navegador, reCAPTCHA resolvido por áudio, envio por FTP) numa biblioteca Python interna (wheel), depois reaproveitada em outros clientes.",
        ],
      },
      {
        role: "Instrutor Técnico",
        org: "Microcamp Tecnologia",
        when: "out 2021 – fev 2022",
        where: "São Paulo",
        points: ["Ensinei lógica de programação, algoritmos e Python para mais de 50 alunos."],
      },
    ],
    projects: [
      [
        "MaxTools Radio",
        "Bot em Python com PCM 48 kHz e DSP em tempo real, API Flask com SSE e contas OAuth (Google, Discord, Spotify), site e app Android em Kotlin / Jetpack Compose. 1.264 testes Python e 472 testes Android.",
      ],
      [
        "MaxTools",
        "Plataforma de plugins em FastAPI: um registry descobre os módulos e um painel Next.js é montado a partir do manifesto. Jobs assíncronos com progresso, autenticação por API key, limpeza por TTL e corte de vídeo quadro a quadro via HTTP Range.",
      ],
    ],
    languages: "Português (nativo) · Inglês (avançado: leitura, escrita e documentação técnica)",
    education: "Bacharelado em Engenharia da Computação, Impacta Tecnologia (previsão 2027)",
  },
};
