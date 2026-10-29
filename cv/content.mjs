// Conteúdo do currículo — fonte única para os PDFs em PT e EN.
// Regra: só entra o que dá para sustentar em entrevista; números vêm dos projetos reais.

export const contact = {
  name: "Maxmilian Duarte",
  phone: "+55 11 97433-0108",
  email: "abc.max@hotmail.com",
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
      summary: "Summary",
      skills: "Skills",
      experience: "Experience",
      projects: "Selected projects",
      projectsNote: "case studies at maxmilian02.github.io",
      education: "Education",
      languages: "Languages",
    },
    summary:
      "Backend engineer with 4 years of production Python: REST APIs, asynchronous processing with Celery and RabbitMQ, data workflows built on advanced SQL, and automation that takes manual work off operations teams. I own systems end to end: design, implementation, tests and deployment with Docker on Linux.",
    skills: [
      ["Backend", "Python, Flask, FastAPI, Django, REST APIs, Celery, RabbitMQ, OAuth2 / PKCE, Server-Sent Events"],
      ["Data", "MySQL, SQLite, MongoDB, advanced SQL and stored procedures, ETL"],
      ["Infra", "Docker / Compose, Linux, systemd, nginx, Proxmox / LXC, GitHub Actions, Uptime Kuma, scheduled backups"],
      ["Quality", "pytest, end-to-end tests, type hints, production support (L3), log analysis"],
      ["Also", "TypeScript / Next.js, Vue 3, Kotlin / Jetpack Compose, Selenium / Playwright, FFmpeg"],
    ],
    jobs: [
      {
        org: "Independent Developer",
        role: "Own products and open source",
        when: "Jul 2026 – present",
        where: "Remote",
        points: [
          "Building MaxTools Radio (see below) and cnabkit, an open-source Python library for Brazilian bank files (CNAB 240/400, OFX), on infrastructure I run myself: Proxmox, Docker, nginx, Uptime Kuma, weekly backups.",
        ],
      },
      {
        org: "Netbiis | Data Driven Technologies",
        role: "Software Engineer (Python, Backend & Data)",
        when: "Sep 2024 – May 2026",
        where: "Remote",
        points: [
          "Built and owned an internal Flask + SQL web application that automated data validation for campaign operations, cutting the team's manual verification time by 40%.",
          "Wrote and optimized complex SQL and stored procedures for high-volume extraction and audience segmentation in Adobe Campaign.",
          "Provided L3 support for production automation pipelines: log-based root-cause analysis, fixes and follow-up.",
        ],
      },
      {
        org: "Independent Consultant",
        role: "Backend Developer for HG7 and ExportSul (insurance brokerages)",
        when: "Feb 2024 – Aug 2024",
        where: "Hybrid",
        note: "The HG7 engagement began part-time in 2023, alongside the internship.",
        points: [
          "HG7: built an OFX bank-statement import and reconciliation system (Python, Flask, MySQL) across three iterations, embedded in the company's PHP ERP and feeding its income statement (DRE), replacing line-by-line spreadsheet reconciliation.",
          "HG7: integrated RD Station CRM and 3CX telephony with internal systems; ETL from RD Station and Microsoft Graph into MongoDB for Power BI dashboards.",
          "ExportSul: Selenium bots processing invoices in an ERP, with retries and per-item state so runs resume where they stopped.",
        ],
      },
      {
        org: "Plug Benefícios",
        role: "Python Developer (Internship)",
        when: "Aug 2022 – Feb 2024",
        where: "São Paulo",
        points: [
          "Built and maintained 15 production bots (Python, Selenium, Playwright) processing beneficiary changes across 4 health-insurer portals from a MySQL ticket queue, plus invoices, slips and payslips.",
          "Designed a Flask + Celery + RabbitMQ service that runs the bots in parallel behind a REST API, with concurrency sized by a load test.",
          "Extracted shared automation code into an internal Python package (wheel) reused by every bot; MySQL for transactional data, MongoDB for scraped data, internal dashboards in Django and Flask.",
        ],
      },
      {
        org: "Microcamp Tecnologia",
        role: "Tech Instructor: programming logic, algorithms and Python for 50+ students",
        when: "Oct 2021 – Feb 2022",
        where: "São Paulo",
        points: [],
      },
    ],
    projects: [
      [
        "MaxTools Radio",
        "Python bot streaming 48 kHz PCM through a real-time DSP chain, Flask API with SSE and OAuth accounts (Google, Discord, Spotify), web app and Kotlin / Jetpack Compose Android app. 1,180 Python tests, 340 Android unit tests.",
      ],
      [
        "MaxTools",
        "FastAPI plugin platform: a registry auto-discovers tool modules and a Next.js dashboard renders from their manifest. Async jobs with progress, API-key auth, TTL cleanup and frame-accurate video trimming over HTTP Range.",
      ],
    ],
    education: "B.Sc. Computer Engineering, Impacta Tecnologia (expected 2027)",
    languages: "Portuguese (native) · English (advanced: reading, writing, technical documentation)",
  },

  pt: {
    file: "maxmilian-duarte-curriculo.pdf",
    paper: "A4",
    title: "Engenheiro de Software Backend Python",
    location: "São Paulo, SP · aberto a remoto",
    h: {
      summary: "Resumo",
      skills: "Competências",
      experience: "Experiência",
      projects: "Projetos em destaque",
      projectsNote: "estudos de caso em maxmilian02.github.io",
      education: "Formação",
      languages: "Idiomas",
    },
    summary:
      "Engenheiro backend com 4 anos de Python em produção: APIs REST, processamento assíncrono com Celery e RabbitMQ, fluxos de dados com SQL avançado e automações que tiram trabalho manual das equipes de operação. Cuido dos sistemas de ponta a ponta (desenho, implementação, testes e deploy com Docker em Linux) e mantenho a infraestrutura Proxmox onde meus projetos pessoais rodam.",
    skills: [
      ["Backend", "Python, Flask, FastAPI, Django, APIs REST, Celery, RabbitMQ, OAuth2 / PKCE, Server-Sent Events"],
      ["Dados", "MySQL, SQLite, MongoDB, SQL avançado e stored procedures, ETL"],
      ["Infra", "Docker / Compose, Linux, systemd, nginx, Proxmox / LXC, GitHub Actions, Uptime Kuma, backups agendados"],
      ["Qualidade", "pytest, testes ponta a ponta, type hints, suporte de produção (L3), análise de logs"],
      ["Também", "TypeScript / Next.js, Vue 3, Kotlin / Jetpack Compose, Selenium / Playwright, FFmpeg"],
    ],
    jobs: [
      {
        org: "Desenvolvedor Independente",
        role: "Produtos próprios e código aberto",
        when: "jul 2026 – hoje",
        where: "Remoto",
        points: [
          "Desenvolvo o MaxTools Radio (ver abaixo) e o cnabkit, biblioteca Python de código aberto para arquivos de banco brasileiros (CNAB 240/400, OFX), numa infraestrutura que eu mantenho: Proxmox, Docker, nginx, Uptime Kuma, backups semanais.",
        ],
      },
      {
        org: "Netbiis | Data Driven Technologies",
        role: "Engenheiro de Software (Python, Backend e Dados)",
        when: "set 2024 – mai 2026",
        where: "Remoto",
        points: [
          "Criei e mantive uma aplicação web interna (Flask + SQL) que automatizou a validação de dados das campanhas, reduzindo em 40% o tempo de verificação manual da equipe.",
          "Escrevi e otimizei consultas SQL complexas e stored procedures para extração e segmentação de grandes volumes de dados no Adobe Campaign.",
          "Suporte L3 a pipelines de automação em produção: análise de logs, causa raiz, correção e acompanhamento.",
        ],
      },
      {
        org: "Consultor independente",
        role: "Desenvolvedor Backend para HG7 e ExportSul (corretoras de seguros)",
        when: "fev 2024 – ago 2024",
        where: "Híbrido",
        note: "O trabalho com a HG7 começou em meio período em 2023, em paralelo ao estágio.",
        points: [
          "HG7: sistema de importação e conciliação de extratos bancários OFX (Python, Flask, MySQL) em três versões, integrado ao ERP em PHP da empresa e alimentando a DRE, substituindo a conciliação linha a linha em planilha.",
          "HG7: integração do CRM RD Station e da telefonia 3CX com os sistemas internos; ETL do RD Station e do Microsoft Graph para MongoDB, alimentando painéis no Power BI.",
          "ExportSul: robôs Selenium que automatizam o processamento de faturas num ERP, com retentativas e estado por item para retomar de onde pararam.",
        ],
      },
      {
        org: "Plug Benefícios",
        role: "Desenvolvedor Python (Estágio)",
        when: "ago 2022 – fev 2024",
        where: "São Paulo",
        points: [
          "Criei e mantive 15 robôs de automação em produção (Python, Selenium, Playwright) que processavam movimentações de beneficiários em 4 portais de operadoras de saúde a partir de uma fila de chamados no MySQL, além de faturas, boletos e holerites (e-mail, FTP).",
          "Desenhei um serviço Flask + Celery + RabbitMQ que executa os robôs em paralelo atrás de uma API REST, dimensionando a concorrência com teste de carga antes de ir para produção.",
          "Extraí o código comum dos robôs para uma biblioteca Python interna (wheel) reaproveitada por todos; MySQL para dados transacionais, MongoDB para dados coletados e painéis internos em Django e Flask.",
        ],
      },
      {
        org: "Microcamp Tecnologia",
        role: "Instrutor Técnico: lógica de programação, algoritmos e Python para mais de 50 alunos",
        when: "out 2021 – fev 2022",
        where: "São Paulo",
        points: [],
      },
    ],
    projects: [
      [
        "MaxTools Radio",
        "Bot em Python com PCM 48 kHz e DSP em tempo real, API Flask com SSE e contas OAuth (Google, Discord, Spotify), site e app Android em Kotlin / Jetpack Compose. 1.180 testes Python, 340 testes Android.",
      ],
      [
        "MaxTools",
        "Plataforma de plugins em FastAPI: um registry descobre os módulos e um painel Next.js é montado a partir do manifesto. Jobs assíncronos com progresso, autenticação por API key, limpeza por TTL e corte de vídeo quadro a quadro via HTTP Range.",
      ],
    ],
    education: "Bacharelado em Engenharia da Computação, Impacta Tecnologia (previsão 2027)",
    languages: "Português (nativo) · Inglês (avançado: leitura, escrita e documentação técnica)",
  },
};
