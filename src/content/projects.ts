import type { L } from "@/lib/i18n";

export type Category = "product" | "automation" | "web" | "study";

export const CATEGORIES: { id: Category; label: L }[] = [
  { id: "product", label: { pt: "Produto", en: "Product" } },
  { id: "automation", label: { pt: "Automação", en: "Automation" } },
  { id: "web", label: { pt: "Web", en: "Web" } },
  { id: "study", label: { pt: "Estudo", en: "Study" } },
];

export interface Metric {
  value: string;
  label: L;
}

export interface Step {
  title: L;
  body: L;
}

export interface ChainNode {
  name: string;
  detail: L;
}

export interface CaseStudy {
  problem: L;
  approach: Step[];
  /** Cadeia principal de dados, da origem ao usuário. */
  chain: ChainNode[];
  learned: L;
}

export interface Project {
  slug: string;
  title: string;
  category: Category;
  visibility: "public" | "private";
  /** Só para repositórios públicos. */
  repo?: string;
  start: string; // "YYYY-MM"
  end: string; // "YYYY-MM"
  commits: number;
  stack: string[];
  tagline: L;
  /** Para trabalho feito para empresas: quem era o cliente, sem nomeá-lo. */
  context?: L;
  metrics?: Metric[];
  /** 1 = estudo de caso principal, 2 = estudo de caso secundário. */
  tier?: 1 | 2;
  caseStudy?: CaseStudy;
}

const GH = "https://github.com/maxmilian02";

export const projects: Project[] = [
  {
    slug: "maxtools-radio",
    title: "MaxTools Radio",
    category: "product",
    visibility: "private",
    start: "2026-08",
    end: "2026-10",
    commits: 213,
    tier: 1,
    stack: ["Python", "discord.py", "Flask", "SQLite", "FFmpeg", "Kotlin", "Jetpack Compose", "Media3", "Docker"],
    tagline: {
      pt: "Rádio coletiva para o Discord: bot que não corta a música, painel dentro da chamada de voz e app Android próprio.",
      en: "A shared radio for Discord: a bot that never cuts the song, a panel inside the voice call and its own Android app.",
    },
    metrics: [
      { value: "213", label: { pt: "commits em 7 semanas", en: "commits in 7 weeks" } },
      { value: "600+", label: { pt: "testes Python, ~0,2 s", en: "Python tests, ~0.2 s" } },
      { value: "132", label: { pt: "testes unitários Android", en: "Android unit tests" } },
      { value: "~72k", label: { pt: "linhas Python + Kotlin", en: "lines of Python + Kotlin" } },
    ],
    caseStudy: {
      problem: {
        pt: "Quase todo bot de música toca a URL de mídia do YouTube direto no FFmpeg. Medindo, descobri que o YouTube só entrega os primeiros 40–60 segundos por HTTP puro — o corte é por tempo, não por bytes, e não gera erro nenhum: a música simplesmente acaba. Além disso, várias pessoas dividem a mesma caixa de som, e nenhum bot mostra quem pediu o quê.",
        en: "Nearly every music bot pipes YouTube's media URL straight into FFmpeg. By measuring it, I found YouTube only serves the first 40–60 seconds over plain HTTP — the cut is time-based, not byte-based, and raises no error: the song just ends. On top of that, several people share one speaker, and no bot shows who requested what.",
      },
      approach: [
        {
          title: { pt: "Áudio vem de um serviço próprio", en: "Audio comes from my own service" },
          body: {
            pt: "O bot não fala com o YouTube. Ele pede a faixa ao MaxTools, que resolve, baixa ou — quando o download direto não serve — grava tocando num navegador e emenda os pedaços com volume calibrado. O bot recebe PCM 48 kHz estéreo pronto e só empurra quadros de 20 ms para o canal de voz.",
            en: "The bot never talks to YouTube. It asks MaxTools for the track, which resolves it, downloads it or — when direct download fails — records it playing in a browser and stitches the chunks with calibrated volume. The bot receives ready 48 kHz stereo PCM and only pushes 20 ms frames into the voice channel.",
          },
        },
        {
          title: { pt: "DSP em tempo real", en: "Real-time DSP" },
          body: {
            pt: "Cadeia de efeitos inteira em audioop (C): crossfade, nivelamento de volume entre faixas, limitador real até 1000%, equalizador de 10 bandas e 17 efeitos. O servidor mede oito oitavas do que está saindo e manda o espectro para o painel — o áudio toca no Discord, então o navegador não tem o que analisar.",
            en: "The whole effect chain runs on audioop (C): crossfade, loudness levelling across tracks, a real limiter up to 1000%, a 10-band equaliser and 17 effects. The server measures eight octaves of what it's sending and streams the spectrum to the panel — the audio plays in Discord, so the browser has nothing to analyse.",
          },
        },
        {
          title: { pt: "Painel dentro da chamada", en: "A panel inside the call" },
          body: {
            pt: "Uma Discord Activity com login pelo Discord: capa, letra sincronizada, biblioteca da casa, rankings por pessoa. A fila é justa — reveza entre quem pediu — e cada item é assinado. Para aguentar cem telas abertas medi o p95, troquei o servidor de desenvolvimento do Flask pelo waitress e passei a empurrar eventos por SSE.",
            en: "A Discord Activity with Discord login: cover art, synced lyrics, the house library, per-person rankings. The queue is fair — it rotates between requesters — and every item is signed. To hold a hundred open screens I measured p95, swapped Flask's dev server for waitress and moved to pushing events over SSE.",
          },
        },
        {
          title: { pt: "Sobrevive a deploy", en: "Survives deploys" },
          body: {
            pt: "Fila e posição são fotografadas a cada 5 s em SQLite. No boot, o bot volta ao canal e retoma de onde parou; sessões continuam válidas e o painel se recarrega sozinho quando a página muda.",
            en: "Queue and position are snapshotted every 5 s into SQLite. On boot the bot rejoins the channel and resumes where it stopped; sessions stay valid and the panel reloads itself when the page changes.",
          },
        },
        {
          title: { pt: "App Android independente", en: "Standalone Android app" },
          body: {
            pt: "Kotlin, Jetpack Compose e Media3. Busca, extração de áudio, cache e biblioteca rodam no próprio celular para tirar carga do servidor; suporta Android Auto. A aba “Discord Radio” sintoniza a sala ao vivo. Import do Spotify via OAuth PKCE, sem segredo no servidor.",
            en: "Kotlin, Jetpack Compose and Media3. Search, audio extraction, cache and library run on the phone itself to offload the server; Android Auto supported. The “Discord Radio” tab tunes into the live room. Spotify import via OAuth PKCE, with no secret on the server.",
          },
        },
      ],
      chain: [
        { name: "YouTube · Spotify · streams", detail: { pt: "fontes", en: "sources" } },
        { name: "MaxTools", detail: { pt: "resolve, baixa, captura, cacheia", en: "resolve, download, capture, cache" } },
        { name: "Bot", detail: { pt: "PCM 48 kHz → efeitos → voz", en: "48 kHz PCM → effects → voice" } },
        { name: "API + SSE", detail: { pt: "estado, espectro, fila", en: "state, spectrum, queue" } },
        { name: "Activity · Android", detail: { pt: "quem ouve", en: "listeners" } },
      ],
      learned: {
        pt: "Medir antes de supor. “A música acaba sozinha” parecia bug do player; era um limite de tempo do provedor, e só um teste de bancada provou. A suíte de testes cobre justamente o que já quebrou de verdade em produção.",
        en: "Measure before assuming. “The song just ends” looked like a player bug; it was a provider time limit, and only a bench test proved it. The test suite covers exactly what has actually broken in production.",
      },
    },
  },
  {
    slug: "pallab",
    title: "PalLab",
    category: "product",
    visibility: "private",
    start: "2026-07",
    end: "2026-08",
    commits: 33,
    tier: 1,
    stack: ["Python", "Flask", "C (Oodle)", "JavaScript", "Leaflet", "Docker"],
    tagline: {
      pt: "Companion do servidor de Palworld da casa: lê o save binário real do jogo e a API oficial do servidor dedicado.",
      en: "Companion app for our Palworld server: reads the game's real binary save and the dedicated server's official API.",
    },
    metrics: [
      { value: "99,6%", label: { pt: "da fórmula validada contra o jogo", en: "of the formula validated against the game" } },
      { value: "2.466", label: { pt: "itens indexados", en: "items indexed" } },
      { value: "460", label: { pt: "habilidades (375 + 85)", en: "skills (375 + 85)" } },
      { value: "33.930", label: { pt: "pares de breeding conferidos", en: "breeding pairs checked" } },
    ],
    caseStudy: {
      problem: {
        pt: "As ferramentas da comunidade são genéricas: não sabem o que cada jogador do nosso servidor já capturou. E o save do jogo é binário, compactado com Oodle num formato novo que a biblioteca do PyPI não lê.",
        en: "Community tools are generic: they don't know what each player on our server has already caught. And the game save is binary, Oodle-compressed in a new format the PyPI library can't read.",
      },
      approach: [
        {
          title: { pt: "Ler o save de verdade", en: "Reading the real save" },
          body: {
            pt: "Parser baseado no palsav com a extensão Oodle em C compilada dentro da imagem Docker. O Level.sav é relido por mtime a cada autosave, então os dados acompanham o jogo sem reiniciar nada.",
            en: "A parser built on palsav with the Oodle C extension compiled inside the Docker image. Level.sav is re-read by mtime on every autosave, so data follows the game without restarting anything.",
          },
        },
        {
          title: { pt: "Fórmula de breeding validada", en: "A validated breeding formula" },
          body: {
            pt: "Reimplementei o cálculo e validei contra as tabelas do jogo: 33.778 de 33.930 pares conferem. Foi assim que apareceram as regras que a comunidade erra — filhos de combinação única nunca saem pela fórmula e empate de rank é decidido pelo maior.",
            en: "I reimplemented the calculation and validated it against the game's tables: 33,778 of 33,930 pairs match. That's how the rules the community gets wrong surfaced — unique-combo children never come from the formula, and rank ties go to the higher one.",
          },
        },
        {
          title: { pt: "Planejamento em várias gerações", en: "Multi-generation planning" },
          body: {
            pt: "O fecho transitivo do breeding a partir do Palbox de cada jogador responde “consigo chegar nesse Pal?” e reconstrói a cadeia passo a passo, escolhendo o melhor casal real (♂×♀) pela soma de IVs.",
            en: "The transitive closure of breeding from each player's Palbox answers “can I reach this Pal?” and rebuilds the chain step by step, picking the best real couple (♂×♀) by IV sum.",
          },
        },
        {
          title: { pt: "Mapa e radar ao vivo", en: "Live map and radar" },
          body: {
            pt: "Mapa Leaflet de 8192 px com a transformação de coordenadas do jogo, progresso por jogador e radar de quem está online via proxy da REST API oficial com cache de 3 s.",
            en: "An 8192 px Leaflet map with the game's coordinate transform, per-player progress and a radar of who's online via a proxy to the official REST API with a 3 s cache.",
          },
        },
        {
          title: { pt: "Admin que confere o resultado", en: "An admin that verifies results" },
          body: {
            pt: "A tela de configuração escreve as variáveis do contêiner do servidor e faz polling até o .ini regerado bater com o valor pedido. Limites mínimos/máximos nunca são aplicados em silêncio.",
            en: "The settings screen writes the server container's environment and polls until the regenerated .ini matches the requested value. Min/max clamps are never applied silently.",
          },
        },
      ],
      chain: [
        { name: "Level.sav", detail: { pt: "binário PlM / Oodle", en: "PlM / Oodle binary" } },
        { name: "palsav (C)", detail: { pt: "descompacta e decodifica", en: "decompress and decode" } },
        { name: "Flask API", detail: { pt: "breeding, dex, mapa, admin", en: "breeding, dex, map, admin" } },
        { name: "REST do servidor", detail: { pt: "jogadores online, cache 3 s", en: "online players, 3 s cache" } },
        { name: "SPA vanilla", detail: { pt: "sem build step", en: "no build step" } },
      ],
      learned: {
        pt: "Fórmula da comunidade não é fórmula do jogo. As exceções só apareceram quando validei contra a tabela inteira em vez de uns casos de exemplo — hoje um caso-teste trava cada uma delas.",
        en: "The community's formula isn't the game's formula. The exceptions only showed up when I validated against the whole table instead of a few examples — today a test case pins each of them down.",
      },
    },
  },
  {
    slug: "maxtools",
    title: "MaxTools",
    category: "product",
    visibility: "private",
    start: "2026-07",
    end: "2026-07",
    commits: 33,
    tier: 1,
    stack: ["FastAPI", "Python", "Next.js", "React", "TypeScript", "Tailwind CSS", "yt-dlp", "FFmpeg", "nginx"],
    tagline: {
      pt: "Plataforma modular em que cada ferramenta é um plugin: o backend descobre sozinho e o front monta o painel a partir do manifesto.",
      en: "A modular platform where each tool is a plugin: the backend discovers it and the frontend builds the dashboard from its manifest.",
    },
    metrics: [
      { value: "14", label: { pt: "ferramentas plugáveis", en: "pluggable tools" } },
      { value: "1", label: { pt: "pasta para criar uma nova", en: "folder to add a new one" } },
      { value: "0", label: { pt: "mudanças no core por plugin", en: "core changes per plugin" } },
    ],
    caseStudy: {
      problem: {
        pt: "Eu tinha scripts soltos para baixar vídeo, converter mídia, gerar QR, tratar PDF e OFX. Cada um precisava de interface própria e nenhum compartilhava autenticação, fila ou limpeza de arquivos.",
        en: "I had loose scripts to download video, convert media, generate QR codes, handle PDFs and OFX. Each needed its own UI, and none shared auth, job queueing or file cleanup.",
      },
      approach: [
        {
          title: { pt: "Contrato de plugin", en: "A plugin contract" },
          body: {
            pt: "Cada pasta em tools/ exporta um manifest (id, nome, categoria, ícone, tags) e um APIRouter. Um registry descobre as pastas no boot e monta as rotas em /api/tools/<id>; o core não conhece nenhuma ferramenta pelo nome.",
            en: "Each folder in tools/ exports a manifest (id, name, category, icon, tags) and an APIRouter. A registry discovers the folders at boot and mounts routes under /api/tools/<id>; the core doesn't know any tool by name.",
          },
        },
        {
          title: { pt: "Front guiado por manifesto", en: "Manifest-driven frontend" },
          body: {
            pt: "Next.js (App Router) lê GET /api/tools e renderiza o painel dinamicamente; uma página dedicada é opcional. Adicionar uma ferramenta não exige tocar no front.",
            en: "Next.js (App Router) reads GET /api/tools and renders the dashboard dynamically; a dedicated page is optional. Adding a tool doesn't require touching the frontend.",
          },
        },
        {
          title: { pt: "Corte frame a frame", en: "Frame-accurate trimming" },
          body: {
            pt: "O backend serve um proxy ≤480p com HTTP Range; o editor anda quadro a quadro, marca entrada/saída e toca a seleção em loop. O download final baixa só o trecho, em qualidade cheia, com corte forçado em keyframe.",
            en: "The backend serves a ≤480p proxy over HTTP Range; the editor steps frame by frame, marks in/out and loops the selection. The final download fetches only that range, at full quality, with keyframe-forced cuts.",
          },
        },
        {
          title: { pt: "Plataforma, não só UI", en: "A platform, not just UI" },
          body: {
            pt: "Jobs assíncronos com progresso, autenticação opcional por API key e um janitor que apaga arquivos por TTL. Os mesmos plugins servem de backend de áudio para o MaxTools Radio.",
            en: "Async jobs with progress, optional API-key auth and a janitor that deletes files by TTL. The same plugins act as the audio backend for MaxTools Radio.",
          },
        },
      ],
      chain: [
        { name: "tools/<plugin>/", detail: { pt: "manifest + router", en: "manifest + router" } },
        { name: "Registry", detail: { pt: "descoberta no boot", en: "discovered at boot" } },
        { name: "GET /api/tools", detail: { pt: "manifesto", en: "manifest" } },
        { name: "Next.js", detail: { pt: "painel dinâmico", en: "dynamic dashboard" } },
      ],
      learned: {
        pt: "Investir no contrato antes das features. Depois que o formato do plugin estabilizou, ferramentas novas viraram trabalho de uma tarde — e o Radio pôde reaproveitar a plataforma inteira.",
        en: "Invest in the contract before features. Once the plugin shape settled, new tools became an afternoon's work — and the Radio could reuse the whole platform.",
      },
    },
  },
  {
    slug: "automacao-rpa",
    title: "RPA para corretora de benefícios",
    category: "automation",
    visibility: "private",
    start: "2022-08",
    end: "2023-11",
    commits: 193,
    tier: 1,
    stack: ["Python", "Selenium", "Playwright", "MySQL", "Celery", "RabbitMQ", "FTP", "Excel"],
    context: {
      pt: "Trabalho para uma corretora de planos de saúde e benefícios. Cliente e credenciais omitidos.",
      en: "Work for a health-plan and benefits brokerage. Client and credentials omitted.",
    },
    tagline: {
      pt: "Quinze robôs que tiraram do operacional a digitação em portais de operadoras de saúde, faturas, boletos e holerites.",
      en: "Fifteen bots that took typing into health-insurer portals, invoices, payment slips and payslips off the operations team.",
    },
    metrics: [
      { value: "15", label: { pt: "repositórios de robôs", en: "bot repositories" } },
      { value: "193", label: { pt: "commits", en: "commits" } },
      { value: "4", label: { pt: "portais de operadoras integrados", en: "insurer portals integrated" } },
    ],
    caseStudy: {
      problem: {
        pt: "A equipe digitava à mão cada movimentação de beneficiário — inclusão, exclusão, alteração — em portais diferentes de cada operadora, baixava faturas e boletos um a um e distribuía holerites para as empresas clientes por e-mail.",
        en: "The team hand-typed every beneficiary change — additions, removals, updates — into each insurer's own portal, downloaded invoices and payment slips one by one and emailed payslips to client companies.",
      },
      approach: [
        {
          title: { pt: "Fila no banco, um módulo por operadora", en: "A database queue, one module per insurer" },
          body: {
            pt: "O robô principal lê os chamados pendentes no MySQL do sistema da corretora e despacha cada um para o módulo da operadora certa, que preenche o portal e grava o status de volta. 80 commits só nele.",
            en: "The main bot reads pending tickets from the brokerage system's MySQL and dispatches each one to the right insurer module, which fills the portal and writes the status back. 80 commits in that one alone.",
          },
        },
        {
          title: { pt: "Faturas, boletos e holerites", en: "Invoices, slips and payslips" },
          body: {
            pt: "Robôs de login, download, renomeação padronizada e geração de PDF; relatórios em Excel enviados por e-mail; holerites lidos do banco, separados por empresa e publicados via FTP.",
            en: "Bots for login, download, standardised renaming and PDF generation; Excel reports sent by email; payslips read from the database, split per company and published over FTP.",
          },
        },
        {
          title: { pt: "Uma biblioteca interna", en: "An internal library" },
          body: {
            pt: "O que se repetia entre robôs — inicialização do navegador, contorno de bloqueios de UI, utilitários de arquivo — virou um pacote Python distribuído como wheel e instalado em todos eles.",
            en: "What repeated across bots — browser start-up, working around UI blockers, file utilities — became a Python package shipped as a wheel and installed in all of them.",
          },
        },
        {
          title: { pt: "Orquestração em paralelo", en: "Parallel orchestration" },
          body: {
            pt: "O ROMA foi a prova de conceito para rodar robôs em paralelo: Flask + Socket.IO na frente, Celery com RabbitMQ atrás, e um cenário de carga para medir quanto a concorrência rendia antes de ir para produção.",
            en: "ROMA was the proof of concept for running bots in parallel: Flask + Socket.IO in front, Celery with RabbitMQ behind, and a load scenario to measure how much concurrency paid off before going to production.",
          },
        },
      ],
      chain: [
        { name: "Sistema da corretora", detail: { pt: "chamados no MySQL", en: "tickets in MySQL" } },
        { name: "Despachante", detail: { pt: "um módulo por operadora", en: "one module per insurer" } },
        { name: "Portais", detail: { pt: "Selenium / Playwright", en: "Selenium / Playwright" } },
        { name: "Status + arquivos", detail: { pt: "banco, e-mail, FTP", en: "database, email, FTP" } },
      ],
      learned: {
        pt: "Robô de produção precisa de log, estado no banco e retomada — não de mais velocidade. Os maiores ganhos vieram de saber exatamente onde cada chamado parou.",
        en: "A production bot needs logging, state in the database and resumability — not more speed. The biggest wins came from knowing exactly where each ticket stopped.",
      },
    },
  },
  {
    slug: "meus-contatos-ms",
    title: "Meus Contatos MS",
    category: "web",
    visibility: "public",
    repo: `${GH}/meus-contatos-ms`,
    start: "2025-11",
    end: "2025-11",
    commits: 42,
    tier: 2,
    stack: ["Flask", "Vue 3", "Pinia", "Tailwind CSS", "MSAL", "Microsoft Graph", "Firebase"],
    context: {
      pt: "Teste técnico para a Conecta Suite, entregue em dois dias.",
      en: "Technical assessment for Conecta Suite, delivered in two days.",
    },
    tagline: {
      pt: "Login com conta Microsoft, contatos via Graph API agrupados por domínio, busca e exportação para CSV, JSON e Excel.",
      en: "Microsoft account login, contacts via the Graph API grouped by domain, search and export to CSV, JSON and Excel.",
    },
    metrics: [
      { value: "42", label: { pt: "commits em 2 dias", en: "commits in 2 days" } },
      { value: "3", label: { pt: "formatos de exportação", en: "export formats" } },
      { value: "2", label: { pt: "idiomas e temas", en: "languages and themes" } },
    ],
    caseStudy: {
      problem: {
        pt: "O desafio: autenticar com Microsoft, buscar os contatos do usuário e apresentá-los organizados por domínio de e-mail, numa interface alinhada à identidade visual da empresa.",
        en: "The brief: authenticate with Microsoft, fetch the user's contacts and present them organised by email domain, in a UI matching the company's visual identity.",
      },
      approach: [
        {
          title: { pt: "OAuth2 feito direito", en: "OAuth2 done properly" },
          body: {
            pt: "Fluxo de código com MSAL no Flask e validação do parâmetro state contra CSRF. O backend troca o código por token e só expõe ao front o que ele precisa.",
            en: "Authorisation-code flow with MSAL in Flask and state-parameter validation against CSRF. The backend exchanges the code for a token and exposes only what the frontend needs.",
          },
        },
        {
          title: { pt: "Regra de negócio testada", en: "Tested business logic" },
          body: {
            pt: "O agrupamento por domínio fica isolado no backend com testes em pytest; o front em Vue 3 + Pinia cuida de grade/lista, busca em tempo real e exportação.",
            en: "Domain grouping lives isolated in the backend with pytest tests; the Vue 3 + Pinia frontend handles grid/list views, live search and export.",
          },
        },
        {
          title: { pt: "Acabamento", en: "Finish" },
          body: {
            pt: "Tema claro/escuro com detecção do sistema, i18n PT/EN, backend em Docker e deploy no Firebase (Hosting + Functions), com README de instalação passo a passo.",
            en: "Light/dark theme with system detection, PT/EN i18n, a Dockerised backend and Firebase deploy (Hosting + Functions), with a step-by-step setup README.",
          },
        },
      ],
      chain: [
        { name: "Conta Microsoft", detail: { pt: "OAuth2 + state", en: "OAuth2 + state" } },
        { name: "Flask + MSAL", detail: { pt: "token e Graph API", en: "token and Graph API" } },
        { name: "Agrupamento", detail: { pt: "por domínio, testado", en: "by domain, tested" } },
        { name: "Vue 3", detail: { pt: "busca, export", en: "search, export" } },
      ],
      learned: {
        pt: "Em teste técnico, o README é parte da entrega: quem avalia precisa rodar o projeto em minutos, e documentar as decisões de arquitetura economiza a conversa depois.",
        en: "In a technical assessment, the README is part of the deliverable: the reviewer needs to run it in minutes, and documenting architecture decisions saves the conversation later.",
      },
    },
  },
  {
    slug: "conciliacao-financeira",
    title: "Conciliação OFX & integrações de CRM",
    category: "automation",
    visibility: "private",
    start: "2023-08",
    end: "2025-01",
    commits: 70,
    tier: 2,
    stack: ["Python", "Flask", "MySQL", "PHP", "MongoDB", "Plotly", "Selenium", "REST APIs"],
    context: {
      pt: "Trabalho para uma corretora de seguros. Cliente e credenciais omitidos.",
      en: "Work for an insurance brokerage. Client and credentials omitted.",
    },
    tagline: {
      pt: "Importação e conciliação de extratos bancários OFX em três gerações, mais integrações entre CRM, telefonia e o ERP.",
      en: "Bank statement (OFX) import and reconciliation across three generations, plus integrations between CRM, telephony and the ERP.",
    },
    metrics: [
      { value: "3", label: { pt: "gerações do sistema", en: "system generations" } },
      { value: "70", label: { pt: "commits", en: "commits" } },
      { value: "18", label: { pt: "meses em uso", en: "months in use" } },
    ],
    caseStudy: {
      problem: {
        pt: "A conciliação de extratos com os lançamentos era feita em planilha, linha a linha. CRM e telefonia não conversavam com o ERP, então o mesmo dado era digitado em três lugares.",
        en: "Reconciling statements against ledger entries was done in spreadsheets, line by line. CRM and telephony didn't talk to the ERP, so the same data was typed in three places.",
      },
      approach: [
        {
          title: { pt: "Leitor de OFX com mapeamento", en: "OFX reader with mapping" },
          body: {
            pt: "Upload do OFX num app Flask, normalização das transações e um mapa de históricos que classifica cada lançamento automaticamente antes de gravar no MySQL.",
            en: "OFX upload in a Flask app, transaction normalisation and a memo map that classifies each entry automatically before writing to MySQL.",
          },
        },
        {
          title: { pt: "Dentro do ERP existente", en: "Inside the existing ERP" },
          body: {
            pt: "Na terceira geração, as telas de edição e transferência de agrupamentos passaram a viver dentro do ERP em PHP que a empresa já usava, com um fluxo de promoção dev → prod.",
            en: "In the third generation, the editing and regrouping screens moved inside the PHP ERP the company already used, with a dev → prod promotion flow.",
          },
        },
        {
          title: { pt: "CRM, telefonia e dados", en: "CRM, telephony and data" },
          body: {
            pt: "Integrações com a API do CRM para atualizar etapas e empresas, captura de chamadas da central telefônica e painéis com Plotly e Seaborn sobre os dados consolidados em MongoDB.",
            en: "Integrations with the CRM API to update stages and companies, call capture from the phone system and Plotly/Seaborn dashboards over data consolidated in MongoDB.",
          },
        },
      ],
      chain: [
        { name: "Extrato OFX", detail: { pt: "upload", en: "upload" } },
        { name: "Normalização", detail: { pt: "mapa de históricos", en: "memo mapping" } },
        { name: "MySQL", detail: { pt: "lançamentos", en: "ledger" } },
        { name: "ERP (PHP)", detail: { pt: "revisão e agrupamento", en: "review and grouping" } },
      ],
      learned: {
        pt: "Encontrar o usuário onde ele já trabalha. A adoção só decolou quando a ferramenta passou a morar dentro do ERP em vez de ser mais uma aba aberta.",
        en: "Meet users where they already work. Adoption only took off once the tool lived inside the ERP instead of being yet another open tab.",
      },
    },
  },
  {
    slug: "marketing-ops",
    title: "Marketing Ops Toolkit",
    category: "web",
    visibility: "private",
    start: "2025-04",
    end: "2025-08",
    commits: 6,
    tier: 2,
    stack: ["Python", "Flask", "SQLite", "Jinja", "Jira API", "SOAP"],
    context: {
      pt: "Ferramenta interna para um time de CRM e e-mail marketing.",
      en: "Internal tool for a CRM and email-marketing team.",
    },
    tagline: {
      pt: "Suíte web interna que gera scripts de segmentação, limpa listas de e-mail, lê briefings e confere tickets no Jira.",
      en: "An internal web suite that generates segmentation scripts, cleans email lists, parses briefings and checks Jira tickets.",
    },
    metrics: [
      { value: "8", label: { pt: "ferramentas num só painel", en: "tools in one dashboard" } },
      { value: "1", label: { pt: "contêiner self-hosted", en: "self-hosted container" } },
    ],
    caseStudy: {
      problem: {
        pt: "Cada campanha exigia montar scripts de segmentação à mão, limpar listas de e-mail, conferir briefing e checar o status no Jira — tarefas repetitivas, propensas a erro e espalhadas em planilhas.",
        en: "Every campaign meant hand-building segmentation scripts, cleaning email lists, checking the briefing and the Jira status — repetitive, error-prone tasks scattered across spreadsheets.",
      },
      approach: [
        {
          title: { pt: "Modelo de dados primeiro", en: "Data model first" },
          body: {
            pt: "SQLite com segmentos, listas e itens; scripts de carga leem as planilhas de origem e um CRUD web mantém tudo atualizado sem tocar no banco.",
            en: "SQLite with segments, lists and items; loader scripts read the source spreadsheets and a web CRUD keeps everything current without touching the database.",
          },
        },
        {
          title: { pt: "Ferramentas pequenas e focadas", en: "Small, focused tools" },
          body: {
            pt: "Gerador de script de segmento, limpador de listas, formatador de SKU, personalização de assunto, parser de briefing e checagem de tickets no Jira, todos atrás de login.",
            en: "Segment script generator, list cleaner, SKU formatter, subject personalisation, briefing parser and Jira ticket checks, all behind a login.",
          },
        },
      ],
      chain: [
        { name: "Planilhas", detail: { pt: "origem", en: "source" } },
        { name: "SQLite", detail: { pt: "segmentos e listas", en: "segments and lists" } },
        { name: "Flask", detail: { pt: "8 ferramentas", en: "8 tools" } },
        { name: "Jira", detail: { pt: "status da campanha", en: "campaign status" } },
      ],
      learned: {
        pt: "Ferramenta interna boa é chata: faz uma coisa, sempre do mesmo jeito. Documentar a API e o modelo de dados com diagramas fez o time adotar sem treinamento.",
        en: "A good internal tool is boring: it does one thing, the same way every time. Documenting the API and data model with diagrams let the team adopt it without training.",
      },
    },
  },

  // ——— Índice (sem estudo de caso) ———
  {
    slug: "localiza-api",
    title: "LocalizaAPI",
    category: "automation",
    visibility: "public",
    repo: `${GH}/LocalizaAPI`,
    start: "2023-08",
    end: "2023-08",
    commits: 4,
    stack: ["Python", "Selenium", "Flask", "Chart.js"],
    tagline: {
      pt: "Monitora preços de aluguel de carro por categoria e mostra o histórico num gráfico.",
      en: "Tracks car-rental prices by category and charts their history.",
    },
  },
  {
    slug: "techpowerup-news",
    title: "TechPowerUp News",
    category: "automation",
    visibility: "public",
    repo: `${GH}/Techpowerup_noticias`,
    start: "2023-02",
    end: "2023-02",
    commits: 1,
    stack: ["Python", "BeautifulSoup", "googletrans"],
    tagline: {
      pt: "Coleta as notícias novas de um site de hardware, traduz e cola onde o cursor estiver.",
      en: "Scrapes new posts from a hardware news site, translates them and pastes wherever the cursor is.",
    },
  },
  {
    slug: "checkboxrace-bot",
    title: "Checkbox Race Bot",
    category: "automation",
    visibility: "public",
    repo: `${GH}/Checkboxrace_bot`,
    start: "2022-04",
    end: "2022-04",
    commits: 13,
    stack: ["Python", "PyAutoGUI", "threading"],
    tagline: {
      pt: "Bot de reconhecimento de imagem na tela para um jogo de marcar caixas o mais rápido possível.",
      en: "An on-screen image-recognition bot for a game about ticking boxes as fast as possible.",
    },
  },
  {
    slug: "unity-2d",
    title: "Protótipo 2D em Unity",
    category: "study",
    visibility: "private",
    start: "2023-03",
    end: "2023-03",
    commits: 2,
    stack: ["C#", "Unity"],
    tagline: {
      pt: "Movimento, animação de personagem e terreno em tilemap por chunks.",
      en: "Movement, character animation and chunked tilemap terrain.",
    },
  },
  {
    slug: "devinhouse",
    title: "DEVinHouse",
    category: "study",
    visibility: "public",
    repo: `${GH}/DevInHouse`,
    start: "2022-04",
    end: "2023-08",
    commits: 62,
    stack: ["HTML", "CSS", "JavaScript"],
    tagline: {
      pt: "Exercícios e projeto final do bootcamp DEVinHouse (SENAI/SC), de layout responsivo a DOM e eventos.",
      en: "Exercises and final project from the DEVinHouse bootcamp (SENAI/SC), from responsive layout to DOM and events.",
    },
  },
  {
    slug: "javascript-curso",
    title: "Curso de JavaScript",
    category: "study",
    visibility: "public",
    repo: `${GH}/Javascript-Curso`,
    start: "2023-06",
    end: "2023-06",
    commits: 12,
    stack: ["JavaScript"],
    tagline: {
      pt: "Quinze aulas comentadas, de variáveis a async/await — o repositório público com mais estrelas.",
      en: "Fifteen annotated lessons, from variables to async/await — my most-starred public repository.",
    },
  },
  {
    slug: "flask-panel",
    title: "Flask REST Panel",
    category: "web",
    visibility: "private",
    start: "2023-04",
    end: "2023-08",
    commits: 2,
    stack: ["Python", "Flask", "WSGI"],
    tagline: {
      pt: "Painel e API REST mínimos para disparar e acompanhar scripts pela web.",
      en: "A minimal panel and REST API to trigger and follow scripts over the web.",
    },
  },
  {
    slug: "landing-page",
    title: "Landing page",
    category: "study",
    visibility: "public",
    repo: `${GH}/landing-page`,
    start: "2022-04",
    end: "2022-04",
    commits: 2,
    stack: ["HTML", "CSS", "JavaScript"],
    tagline: {
      pt: "Primeiro exercício de landing page — o começo da linha do tempo.",
      en: "First landing page exercise — where the timeline starts.",
    },
  },
];

export const caseStudies = projects.filter((p) => p.caseStudy);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
