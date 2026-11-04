// Conteúdo do currículo — fonte única para os PDFs em PT e EN.
// Regra: só entra o que dá para sustentar em entrevista; números vêm dos projetos reais.
// Base: versão revisada por ferramenta de ATS (nov/2026). Exceção: a frase da Netbiis segue os números
// confirmados pelo dono (32 jobs/dia, QA automático em 10–15, até +40% de produção dos operadores).
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
      experience: "Experience",
      projects: "Projects",
      projectsNote: "case studies at maxmilian02.github.io",
      education: "Education",
      languages: "Languages",
    },
    summary:
      "Python backend engineer with 4 years of production experience building REST APIs, async processing systems with Celery and RabbitMQ, and data workflows on advanced SQL. I own systems end to end: design, implementation, tests, and deployment with Docker on Linux.",
    skills: [
      ["Backend", "Python, Flask, FastAPI, Django, REST APIs, Celery, RabbitMQ, OAuth2 / PKCE, Server-Sent Events"],
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
          "Built and owned an internal Flask and SQL web application for ~32 daily campaign jobs: automated QA fully covered 10 to 15 of them, and its support tools raised operator output by up to 40% across all 32.",
          "Wrote and optimized complex SQL and stored procedures for high-volume extraction and audience segmentation in Adobe Campaign.",
          "Provided L3 support for production automation pipelines: log-based root-cause analysis, fixes, and follow-up.",
        ],
      },
      {
        role: "Backend Developer, HG7 and ExportSul (insurance brokerages)",
        org: "Independent Consultant",
        when: "Feb 2024 – Aug 2024",
        where: "Hybrid",
        points: [
          "HG7: Built an OFX bank-statement import and reconciliation system (Python, Flask, MySQL) across three iterations, embedded in the company's PHP ERP and feeding its income statement, replacing line-by-line spreadsheet reconciliation.",
          "HG7: Integrated RD Station CRM and 3CX telephony with internal systems; built ETL pipelines from RD Station and Microsoft Graph into MongoDB for Power BI dashboards.",
          "ExportSul: Built Selenium bots processing invoices in an ERP, with retries and per-item state so runs resume where they stopped.",
        ],
      },
      {
        role: "Python Developer (Internship)",
        org: "Plug Benefícios",
        when: "Aug 2022 – Feb 2024",
        where: "São Paulo",
        points: [
          "Built and maintained 15 production bots (Python, Selenium, Playwright) processing beneficiary changes across 4 health-insurer portals from a MySQL ticket queue, plus invoices, slips, and payslips.",
          "Designed a Flask + Celery + RabbitMQ service that runs the bots in parallel behind a REST API, with concurrency sized by a load test.",
          "Extracted shared automation code into an internal Python package (wheel) reused by every bot; used MySQL for transactional data, MongoDB for scraped data, and built internal dashboards in Django and Flask.",
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
        "Python bot streaming 48 kHz PCM through a real-time DSP chain, Flask API with SSE and OAuth accounts (Google, Discord, Spotify), web app, and Kotlin / Jetpack Compose Android app. 1,180 Python tests and 340 Android unit tests.",
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
      experience: "Experiência",
      projects: "Projetos",
      projectsNote: "estudos de caso em maxmilian02.github.io",
      education: "Formação",
      languages: "Idiomas",
    },
    summary:
      "Engenheiro backend Python com 4 anos de experiência em produção construindo APIs REST, processamento assíncrono com Celery e RabbitMQ e fluxos de dados com SQL avançado. Cuido dos sistemas de ponta a ponta: desenho, implementação, testes e deploy com Docker em Linux.",
    skills: [
      ["Backend", "Python, Flask, FastAPI, Django, APIs REST, Celery, RabbitMQ, OAuth2 / PKCE, Server-Sent Events"],
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
          "Criei e mantive uma aplicação web interna (Flask + SQL) para cerca de 32 jobs de campanha por dia: o QA automático cobria de 10 a 15 deles, e as ferramentas de apoio aumentaram em até 40% a produção dos operadores nos 32.",
          "Escrevi e otimizei consultas SQL complexas e stored procedures para extração e segmentação de grandes volumes de dados no Adobe Campaign.",
          "Prestei suporte L3 a pipelines de automação em produção: análise de logs, causa raiz, correção e acompanhamento.",
        ],
      },
      {
        role: "Desenvolvedor Backend, HG7 e ExportSul (corretoras de seguros)",
        org: "Consultor independente",
        when: "fev 2024 – ago 2024",
        where: "Híbrido",
        points: [
          "HG7: criei o sistema de importação e conciliação de extratos bancários OFX (Python, Flask, MySQL) em três versões, integrado ao ERP em PHP da empresa e alimentando a DRE, substituindo a conciliação linha a linha em planilha.",
          "HG7: integrei o CRM RD Station e a telefonia 3CX aos sistemas internos; criei pipelines de ETL do RD Station e do Microsoft Graph para MongoDB, alimentando painéis no Power BI.",
          "ExportSul: criei robôs Selenium que processam faturas num ERP, com retentativas e estado por item para retomar de onde pararam.",
        ],
      },
      {
        role: "Desenvolvedor Python (Estágio)",
        org: "Plug Benefícios",
        when: "ago 2022 – fev 2024",
        where: "São Paulo",
        points: [
          "Criei e mantive 15 robôs em produção (Python, Selenium, Playwright) que processavam movimentações de beneficiários em 4 portais de operadoras de saúde a partir de uma fila de chamados no MySQL, além de faturas, boletos e holerites.",
          "Desenhei um serviço Flask + Celery + RabbitMQ que executa os robôs em paralelo atrás de uma API REST, com a concorrência dimensionada por teste de carga.",
          "Extraí o código comum dos robôs para uma biblioteca Python interna (wheel) reaproveitada por todos; usei MySQL para dados transacionais e MongoDB para dados coletados, e criei painéis internos em Django e Flask.",
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
        "Bot em Python com PCM 48 kHz e DSP em tempo real, API Flask com SSE e contas OAuth (Google, Discord, Spotify), site e app Android em Kotlin / Jetpack Compose. 1.180 testes Python e 340 testes Android.",
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
