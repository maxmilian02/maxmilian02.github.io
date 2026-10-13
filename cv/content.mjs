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
    location: "São Paulo, Brazil (UTC−3) · open to remote",
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
      "Backend engineer with 4 years of production Python: REST APIs, asynchronous processing with Celery and RabbitMQ, data workflows built on advanced SQL, and automation that takes manual work off operations teams. I own systems end to end — design, implementation, tests and deployment with Docker on Linux — and run the Proxmox infrastructure my own projects live on.",
    skills: [
      ["Backend", "Python, Flask, FastAPI, Django, REST APIs, Celery, RabbitMQ, OAuth2 / PKCE, Server-Sent Events"],
      ["Data", "MySQL, SQLite, MongoDB, advanced SQL and stored procedures, ETL"],
      ["Infra", "Docker / Compose, Linux, systemd, nginx, Proxmox / LXC, AWS (EC2, S3), GitHub Actions"],
      ["Quality", "pytest, end-to-end tests, type hints, production support (L3), log analysis"],
      ["Also", "TypeScript / Next.js, Vue 3, Kotlin / Jetpack Compose, Selenium / Playwright, FFmpeg"],
    ],
    jobs: [
      {
        org: "Netbiis | Data Driven Technologies",
        role: "Software Engineer (Python, Backend & Data)",
        when: "Sep 2024 – May 2026",
        where: "Remote",
        points: [
          "Built and owned an internal Flask + SQL web application that automated data validation for campaign operations, cutting the team's manual verification time by 40%.",
          "Wrote and optimized complex SQL queries and stored procedures for high-volume data extraction and audience segmentation in Adobe Campaign.",
          "Provided L3 support for production automation pipelines: log-based root-cause analysis, fixes and follow-up.",
        ],
      },
      {
        org: "Independent Consultant",
        role: "Backend Developer — clients HG7 (insurance brokerage) and ExportSul",
        when: "Feb 2024 – Aug 2024",
        where: "Hybrid",
        note: "The HG7 engagement began part-time in 2023, alongside the internship.",
        points: [
          "HG7: built an OFX bank-statement import and reconciliation system (Python, Flask, MySQL) across three iterations, embedded in the company's PHP ERP and feeding its income statement (DRE), replacing line-by-line spreadsheet reconciliation.",
          "HG7: integrated RD Station CRM and 3CX telephony with internal systems; ETL from RD Station and Microsoft Graph into MongoDB for Power BI dashboards.",
          "ExportSul: Selenium bots that automate invoice processing in an ERP, with retries and per-item state so runs resume where they stopped.",
          "Deployed containerized services on AWS EC2 with S3 for file storage.",
        ],
      },
      {
        org: "Plug Benefícios",
        role: "Python Developer (Internship)",
        when: "Aug 2022 – Feb 2024",
        where: "São Paulo",
        points: [
          "Built and maintained 15 production automation bots (Python, Selenium, Playwright) that processed beneficiary changes across 4 health-insurer portals from a MySQL ticket queue, plus invoices, payment slips and payslips (email, FTP).",
          "Designed a Flask + Celery + RabbitMQ service that runs the bots in parallel behind a REST API, sizing concurrency with a load test before going live.",
          "Extracted shared automation code into an internal Python package (wheel) reused by every bot; MySQL for transactional data, MongoDB for scraped data, internal dashboards in Django and Flask.",
        ],
      },
      {
        org: "Microcamp Tecnologia",
        role: "Tech Instructor — programming logic, algorithms and Python for 50+ students",
        when: "Oct 2021 – Feb 2022",
        where: "São Paulo",
        points: [],
      },
    ],
    projects: [
      [
        "MaxTools Radio",
        "Discord radio: Python bot streaming 48 kHz PCM through a real-time DSP chain, Flask API with Server-Sent Events, in-call web panel and a Kotlin / Jetpack Compose Android app; state survives deploys. 600+ Python tests, 132 Android unit tests.",
      ],
      [
        "MaxTools",
        "FastAPI plugin platform: a registry auto-discovers tool modules and a Next.js dashboard renders from their manifest. Async jobs with progress, API-key auth, TTL cleanup and frame-accurate video trimming over HTTP Range.",
      ],
      [
        "PalLab",
        "Game-server companion: parses an Oodle-compressed binary save (C extension in Docker), breeding formula validated against 33,930 game-table pairs (99.6% match), live map from the server's REST API.",
      ],
    ],
    education: "B.Sc. Computer Engineering — Impacta Tecnologia (expected 2027)",
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
      "Engenheiro backend com 4 anos de Python em produção: APIs REST, processamento assíncrono com Celery e RabbitMQ, fluxos de dados com SQL avançado e automações que tiram trabalho manual das equipes de operação. Cuido dos sistemas de ponta a ponta — desenho, implementação, testes e deploy com Docker em Linux — e mantenho a infraestrutura Proxmox onde meus projetos pessoais rodam.",
    skills: [
      ["Backend", "Python, Flask, FastAPI, Django, APIs REST, Celery, RabbitMQ, OAuth2 / PKCE, Server-Sent Events"],
      ["Dados", "MySQL, SQLite, MongoDB, SQL avançado e stored procedures, ETL"],
      ["Infra", "Docker / Compose, Linux, systemd, nginx, Proxmox / LXC, AWS (EC2, S3), GitHub Actions"],
      ["Qualidade", "pytest, testes ponta a ponta, type hints, suporte de produção (L3), análise de logs"],
      ["Também", "TypeScript / Next.js, Vue 3, Kotlin / Jetpack Compose, Selenium / Playwright, FFmpeg"],
    ],
    jobs: [
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
        role: "Desenvolvedor Backend — clientes HG7 (corretora de seguros) e ExportSul",
        when: "fev 2024 – ago 2024",
        where: "Híbrido",
        note: "O trabalho com a HG7 começou em meio período em 2023, em paralelo ao estágio.",
        points: [
          "HG7: sistema de importação e conciliação de extratos bancários OFX (Python, Flask, MySQL) em três versões, integrado ao ERP em PHP da empresa e alimentando a DRE, substituindo a conciliação linha a linha em planilha.",
          "HG7: integração do CRM RD Station e da telefonia 3CX com os sistemas internos; ETL do RD Station e do Microsoft Graph para MongoDB, alimentando painéis no Power BI.",
          "ExportSul: robôs Selenium que automatizam o processamento de faturas num ERP, com retentativas e estado por item para retomar de onde pararam.",
          "Deploy de serviços em contêiner na AWS (EC2), com S3 para armazenamento de arquivos.",
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
        role: "Instrutor Técnico — lógica de programação, algoritmos e Python para mais de 50 alunos",
        when: "out 2021 – fev 2022",
        where: "São Paulo",
        points: [],
      },
    ],
    projects: [
      [
        "MaxTools Radio",
        "Rádio para o Discord: bot em Python que transmite PCM 48 kHz por uma cadeia de DSP em tempo real, API Flask com Server-Sent Events, painel web dentro da chamada e app Android em Kotlin / Jetpack Compose; o estado sobrevive a deploys. 600+ testes Python, 132 testes Android.",
      ],
      [
        "MaxTools",
        "Plataforma de plugins em FastAPI: um registry descobre os módulos e um painel Next.js é montado a partir do manifesto. Jobs assíncronos com progresso, autenticação por API key, limpeza por TTL e corte de vídeo quadro a quadro via HTTP Range.",
      ],
      [
        "PalLab",
        "Companion de servidor de jogo: lê um save binário compactado com Oodle (extensão em C no Docker), fórmula de breeding validada contra 33.930 pares das tabelas do jogo (99,6% de acerto), mapa ao vivo pela REST API do servidor.",
      ],
    ],
    education: "Bacharelado em Engenharia da Computação — Impacta Tecnologia (previsão 2027)",
    languages: "Português (nativo) · Inglês (avançado: leitura, escrita e documentação técnica)",
  },
};
