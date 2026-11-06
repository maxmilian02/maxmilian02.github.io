// Conteúdo do currículo — fonte única para os PDFs em PT e EN.
// Regra: só entra o que dá para sustentar em entrevista; números vêm dos projetos reais.
// Conferido contra o código de todos os repos em 2026-11-05 (auditoria em 5 grupos). O que o código não
// mostra e o dono confirmou: 32 jobs/dia, QA em 10–15, cada job de 20 para 12 min (−40%), stored
// procedures e JS dentro do Adobe Campaign, os 15 robôs da Plug (vários só no servidor Ubuntu da Plug,
// fora do GitHub) e o servidor Ubuntu com Samba e impressoras. HG7 termina em ago/2024 para não
// sobrepor a Netbiis. Não afirmar: MongoDB/Celery/RabbitMQ em produção, PHP escrito à mão, systemd.
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
    location: "São Paulo, Brazil (UTC−3), remote, overlaps US business hours",
    h: {
      summary: "Professional summary",
      skills: "Skills",
      experience: "Work Experience",
      projects: "Projects",
      projectsNote: "Case studies at maxmilian02.github.io",
      education: "Education",
      languages: "Languages",
    },
    summary:
      "Python backend engineer with 4 years of production experience building REST and SOAP integrations, browser automation that runs unattended, and data pipelines on advanced SQL. I own systems end to end, from design and tests to Docker deployment on Linux.",
    skills: [
      ["Backend", "Python, Flask, FastAPI, REST and SOAP APIs, asyncio / aiohttp, OAuth2 / PKCE, Server-Sent Events"],
      ["Data", "MySQL, SQLite, advanced SQL, stored procedures, ETL, Power BI, Adobe Campaign"],
      ["Infra", "Linux (Ubuntu Server, Samba), Docker / Compose, nginx, Proxmox / LXC, GitHub Actions, Uptime Kuma, scheduled backups"],
      ["Quality", "pytest, Playwright end-to-end tests, type hints, production support (L3), log analysis"],
      ["Also", "TypeScript / Next.js, Vue 3, Kotlin / Jetpack Compose, Selenium, FFmpeg, Jira API"],
    ],
    jobs: [
      {
        role: "Independent Developer",
        org: "Own products and open source",
        when: "Jul 2026 – Present",
        where: "Remote",
        points: [
          "Building MaxTools Radio and cnabkit, an open-source Python library for Brazilian bank files (CNAB 240/400, OFX), on self-managed infrastructure: Proxmox, Docker, nginx, Uptime Kuma, and weekly snapshot backups.",
        ],
      },
      {
        role: "Software Engineer (Python, Backend and Data)",
        org: "Netbiis | Data Driven Technologies",
        when: "Sep 2024 – May 2026",
        where: "Remote",
        points: [
          "Built an internal Flask and SQL app of operator tools for 32 daily campaign jobs, cutting each from 20 to 12 min (−40%).",
          "Built a FastAPI validator that checks Jira briefs against Adobe Campaign workflows over SOAP, automating QA on 10 to 15 daily jobs.",
          "Wrote SQL, stored procedures, JavaScript, and workflow automations in Adobe Campaign for high-volume segmentation.",
          "Provided L3 support for production automation pipelines: log-based root-cause analysis, fixes, and follow-up.",
        ],
      },
      {
        role: "Backend Developer, Independent Consultant",
        org: "HG7 Group (Insurance Brokerages and a Clinic)",
        when: "Feb 2023 – Aug 2024",
        where: "Hybrid",
        points: [
          "Built an OFX bank-statement import and reconciliation system (Python, Flask, MySQL) in three iterations, feeding the monthly income statement, plus commission reconciliation against the brokerage ERP.",
          "Built async ETL (aiohttp) from RD Station CRM and Exact Spotter into MySQL for Power BI, with retry on HTTP 429.",
          "Built a bot that reads answered calls from the 3CX call panel and creates RD Station deals assigned to the right salesperson.",
        ],
      },
      {
        role: "Python Developer (Internship)",
        org: "Plug Benefícios",
        when: "Aug 2022 – Feb 2024",
        where: "São Paulo",
        points: [
          "Built and maintained 15 production bots (Python, Selenium) entering hundreds of beneficiary changes a month into 4 health-insurer portals from a MySQL ticket queue, plus invoices, slips, and payslips.",
          "For ExportSul, a client brokerage, built bots on the Akad, Sompo, and Tokio Marine portals that register export shipments and download invoices, resuming where a run stopped.",
          "Packaged shared code (browser setup, audio-based reCAPTCHA solving, FTP upload) into an internal Python wheel, later reused across other client projects.",
          "Set up the company's Ubuntu server, replacing Windows Server: Samba file shares, Windows and macOS printing, bot runtime.",
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
        "Python bot streaming 48 kHz PCM through a real-time DSP chain, Flask API with SSE and OAuth2 / PKCE sign-in, web app, and Kotlin / Jetpack Compose Android app. 1,268 Python tests (271 end-to-end in Playwright) and 472 Android tests.",
      ],
      [
        "MaxTools",
        "FastAPI plugin platform where a registry auto-discovers tool modules and a Next.js dashboard renders from their manifest. Background jobs with progress and cancellation, API-key auth, TTL cleanup, and frame-accurate video trimming over HTTP Range.",
      ],
    ],
    languages: "Portuguese (native), English (advanced: reading, writing, technical documentation)",
    education: "B.Sc. Computer Engineering, Impacta Tecnologia (expected 2027)",
  },

  pt: {
    file: "maxmilian-duarte-curriculo.pdf",
    paper: "A4",
    title: "Engenheiro de Software Backend Python",
    location: "São Paulo, SP, aberto a remoto",
    h: {
      summary: "Resumo profissional",
      skills: "Competências",
      experience: "Experiência profissional",
      projects: "Projetos",
      projectsNote: "Estudos de caso em maxmilian02.github.io",
      education: "Formação",
      languages: "Idiomas",
    },
    summary:
      "Engenheiro backend Python com 4 anos de experiência em produção construindo integrações REST e SOAP, automações de navegador que rodam sem supervisão e pipelines de dados com SQL avançado. Cuido dos sistemas de ponta a ponta: desenho, implementação, testes e deploy com Docker em Linux.",
    skills: [
      ["Backend", "Python, Flask, FastAPI, APIs REST e SOAP, asyncio / aiohttp, OAuth2 / PKCE, Server-Sent Events"],
      ["Dados", "MySQL, SQLite, SQL avançado, stored procedures, ETL, Power BI, Adobe Campaign"],
      ["Infra", "Linux (Ubuntu Server, Samba), Docker / Compose, nginx, Proxmox / LXC, GitHub Actions, Uptime Kuma, backups agendados"],
      ["Qualidade", "pytest, testes ponta a ponta com Playwright, type hints, suporte de produção (L3), análise de logs"],
      ["Também", "TypeScript / Next.js, Vue 3, Kotlin / Jetpack Compose, Selenium, FFmpeg, API do Jira"],
    ],
    jobs: [
      {
        role: "Desenvolvedor Independente",
        org: "Produtos próprios e código aberto",
        when: "jul 2026 – hoje",
        where: "Remoto",
        points: [
          "Desenvolvo o MaxTools Radio e o cnabkit, biblioteca Python de código aberto para arquivos de banco brasileiros (CNAB 240/400, OFX), numa infraestrutura que eu mesmo mantenho: Proxmox, Docker, nginx, Uptime Kuma e backups semanais por snapshot.",
        ],
      },
      {
        role: "Engenheiro de Software (Python, Backend e Dados)",
        org: "Netbiis | Data Driven Technologies",
        when: "set 2024 – mai 2026",
        where: "Remoto",
        points: [
          "Criei e mantive uma aplicação interna (Flask + SQL) com ferramentas para os operadores em 32 jobs de campanha por dia, reduzindo cada um de 20 para 12 minutos (−40%).",
          "Criei um validador em FastAPI que confere o briefing do Jira contra os workflows do Adobe Campaign via SOAP, automatizando o QA de 10 a 15 jobs por dia.",
          "Escrevi SQL, stored procedures, JavaScript e automações de workflow no Adobe Campaign para segmentar grandes volumes.",
          "Prestei suporte L3 a pipelines de automação em produção: análise de logs, causa raiz, correção e acompanhamento.",
        ],
      },
      {
        role: "Desenvolvedor Backend, Consultor Independente",
        org: "Grupo HG7 (corretoras de seguros e uma clínica)",
        when: "fev 2023 – ago 2024",
        where: "Híbrido",
        points: [
          "Criei o sistema de importação e conciliação de extratos bancários OFX (Python, Flask, MySQL) em três versões, alimentando a DRE mensal, além da conciliação de comissões contra o ERP da corretora.",
          "Criei ETLs assíncronos (aiohttp) do RD Station e do Exact Spotter para MySQL, alimentando o Power BI, com retentativa em HTTP 429.",
          "Criei um robô que lê as chamadas atendidas no painel da 3CX e cria cada oportunidade no RD Station com o vendedor certo.",
        ],
      },
      {
        role: "Desenvolvedor Python (Estágio)",
        org: "Plug Benefícios",
        when: "ago 2022 – fev 2024",
        where: "São Paulo",
        points: [
          "Criei e mantive 15 robôs em produção (Python, Selenium) que lançavam centenas de movimentações de beneficiários por mês em 4 portais de operadoras de saúde a partir de uma fila de chamados no MySQL, além de faturas, boletos e holerites.",
          "Para a ExportSul, corretora cliente, criei robôs nos portais da Akad, Sompo e Tokio Marine que registram averbações de exportação e baixam faturas, retomando de onde a execução parou.",
          "Reuni o código comum (inicialização do navegador, reCAPTCHA resolvido por áudio, envio por FTP) numa biblioteca Python interna (wheel), depois reaproveitada em outros clientes.",
          "Montei o servidor Ubuntu da empresa no lugar do Windows Server: arquivos via Samba, impressão Windows/macOS e os robôs.",
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
        "Bot em Python com PCM 48 kHz e DSP em tempo real, API Flask com SSE e login OAuth2 / PKCE, site e app Android em Kotlin / Jetpack Compose. 1.268 testes Python (271 ponta a ponta com Playwright) e 472 testes Android.",
      ],
      [
        "MaxTools",
        "Plataforma de plugins em FastAPI em que um registry descobre os módulos e o painel Next.js nasce do manifesto. Jobs em segundo plano com cancelamento, API key, limpeza por TTL e corte de vídeo quadro a quadro via HTTP Range.",
      ],
    ],
    languages: "Português (nativo), Inglês (avançado: leitura, escrita e documentação técnica)",
    education: "Bacharelado em Engenharia da Computação, Impacta Tecnologia (previsão 2027)",
  },
};
