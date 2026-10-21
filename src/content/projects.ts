import type { L, Lang } from "@/lib/i18n";

export type Category = "product" | "automation" | "web" | "study";

export const CATEGORIES: { id: Category; label: L }[] = [
  { id: "product", label: { pt: "Produto", en: "Product" } },
  { id: "automation", label: { pt: "Automação", en: "Automation" } },
  { id: "web", label: { pt: "Web", en: "Web" } },
  { id: "study", label: { pt: "Estudo", en: "Study" } },
];

export interface Metric {
  value: string | L;
  label: L;
}

export interface Step {
  title: L;
  body: L;
}

export interface ChainNode {
  name: string | L;
  detail: L;
}

export interface CaseStudy {
  problem: L;
  approach: Step[];
  /** Cadeia principal de dados, da origem ao usuário. */
  chain: ChainNode[];
  learned: L;
}

export interface ProjectLink {
  label: L;
  href: string;
}

export interface Project {
  slug: string;
  /** Título em português (e padrão quando não há tradução). */
  title: string;
  titleEn?: string;
  /** Feito para uma empresa (cliente/empregador) ou produto próprio. */
  origin?: "client" | "own";
  /** Empresa para quem foi feito (aparece na linha de contexto do card). */
  org?: string | L;
  category: Category;
  visibility: "public" | "private";
  /** Só para repositórios públicos. */
  repo?: string;
  /** Endereços públicos onde o projeto roda. */
  links?: ProjectLink[];
  /** Captura de tela em /public/img (16:10). */
  image?: { src: string; alt: L };
  start: string; // "YYYY-MM"
  end: string; // "YYYY-MM"
  /** Ausente quando o trabalho não tem um histórico git único para contar. */
  commits?: number;
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
const RADIO = "https://maxtools.duckdns.org:7443";

export const projects: Project[] = [
  {
    slug: "maxtools-radio",
    title: "MaxTools Radio",
    category: "product",
    origin: "own",
    visibility: "private",
    start: "2026-08",
    end: "2026-10",
    commits: 328,
    tier: 1,
    stack: ["Python", "discord.py", "Flask", "SQLite", "FFmpeg", "OAuth2", "Kotlin", "Jetpack Compose", "Media3", "Docker"],
    links: [
      { label: { pt: "Ouvir no navegador", en: "Listen in the browser" }, href: `${RADIO}/web` },
      { label: { pt: "App Android", en: "Android app" }, href: `${RADIO}/baixar` },
    ],
    image: {
      src: "/img/radio.webp",
      alt: {
        pt: "Tela de entrada do MaxTools Radio no navegador, com login por e-mail, Google ou Discord.",
        en: "MaxTools Radio's sign-in screen in the browser, with email, Google or Discord login.",
      },
    },
    tagline: {
      pt: "Rádio coletiva que começou como bot de Discord e virou produto: site, app Android, uma conta por e-mail e a música passando de um aparelho para outro.",
      en: "A shared radio that started as a Discord bot and grew into a product: a website, an Android app, one account per email and music that moves between devices.",
    },
    metrics: [
      { value: "328", label: { pt: "commits em 8 semanas", en: "commits in 8 weeks" } },
      { value: { pt: "1.180", en: "1,180" }, label: { pt: "testes automatizados em Python", en: "automated Python tests" } },
      { value: "340", label: { pt: "testes unitários no Android", en: "Android unit tests" } },
      { value: "3", label: { pt: "idiomas: português, inglês e espanhol", en: "languages: Portuguese, English, Spanish" } },
    ],
    caseStudy: {
      problem: {
        pt: "Quase todo bot de música toca a URL de mídia do YouTube direto no FFmpeg. Medindo, descobri que o YouTube só entrega os primeiros 40 a 60 segundos por HTTP puro. O corte é por tempo, não por bytes, e não gera erro: a música simplesmente acaba. Além disso, várias pessoas dividem a mesma caixa de som e nenhum bot mostra quem pediu o quê.",
        en: "Nearly every music bot pipes YouTube's media URL straight into FFmpeg. By measuring it, I found YouTube only serves the first 40 to 60 seconds over plain HTTP. The cut is time-based, not byte-based, and raises no error: the song just ends. On top of that, several people share one speaker and no bot shows who requested what.",
      },
      approach: [
        {
          title: { pt: "Áudio vem de um serviço próprio", en: "Audio comes from my own service" },
          body: {
            pt: "O bot não fala com o YouTube. Ele pede a faixa ao MaxTools, que resolve, baixa ou, quando o download direto não serve, grava tocando num navegador e emenda os pedaços com volume calibrado. O bot recebe PCM 48 kHz estéreo pronto e só empurra quadros de 20 ms para o canal de voz.",
            en: "The bot never talks to YouTube. It asks MaxTools for the track, which resolves it, downloads it or, when direct download fails, records it playing in a browser and stitches the chunks with calibrated volume. The bot receives ready 48 kHz stereo PCM and only pushes 20 ms frames into the voice channel.",
          },
        },
        {
          title: { pt: "DSP em tempo real", en: "Real-time DSP" },
          body: {
            pt: "A cadeia de efeitos roda em audioop (C): crossfade, nivelamento de volume entre faixas, limitador até 1000%, equalizador de 10 bandas e 17 efeitos. O servidor mede oito oitavas do que está saindo e manda o espectro para o painel, porque o áudio toca no Discord e o navegador não tem o que analisar.",
            en: "The effect chain runs on audioop (C): crossfade, loudness levelling across tracks, a limiter up to 1000%, a 10-band equaliser and 17 effects. The server measures eight octaves of what it's sending and streams the spectrum to the panel, since the audio plays in Discord and the browser has nothing to analyse.",
          },
        },
        {
          title: { pt: "Uma conta, qualquer aparelho", en: "One account, any device" },
          body: {
            pt: "Cada pessoa tem uma conta só, identificada pelo e-mail; Google, Discord e Spotify se vinculam a ela por OAuth. Curtidas, playlists e o que está tocando passam do celular para o navegador. Um link compartilhado abre direto no app (App Links), e o site, o app e o bot falam português, inglês e espanhol.",
            en: "Each person has a single account keyed by email; Google, Discord and Spotify link to it over OAuth. Likes, playlists and what's playing move between phone and browser. A shared link opens straight in the app (App Links), and the site, the app and the bot speak Portuguese, English and Spanish.",
          },
        },
        {
          title: { pt: "Painel dentro da chamada", en: "A panel inside the call" },
          body: {
            pt: "Uma Discord Activity mostra capa, letra sincronizada, biblioteca e rankings por pessoa. A fila reveza entre quem pediu e cada item é assinado. Para aguentar cem telas abertas medi o p95, troquei o servidor de desenvolvimento do Flask pelo waitress e passei a empurrar eventos por SSE.",
            en: "A Discord Activity shows cover art, synced lyrics, the library and per-person rankings. The queue rotates between requesters and every item is signed. To hold a hundred open screens I measured p95, swapped Flask's dev server for waitress and moved to pushing events over SSE.",
          },
        },
        {
          title: { pt: "Recursos atrás de chaves", en: "Features behind flags" },
          body: {
            pt: "Todo recurso novo nasce desligado, atrás de uma chave que o admin liga sem deploy; até os comandos do bot aparecem sozinhos quando a chave liga. Doações do Ko-fi e do Mercado Pago chegam por webhook e ligam o selo de apoiador na conta certa pelo e-mail.",
            en: "Every new feature ships switched off, behind a flag the admin turns on without a deploy; even the bot's commands appear on their own when their flag goes on. Ko-fi and Mercado Pago donations arrive by webhook and switch on the supporter badge on the right account by email.",
          },
        },
        {
          title: { pt: "App Android", en: "Android app" },
          body: {
            pt: "Kotlin, Jetpack Compose e Media3. Busca, extração de áudio, cache e biblioteca rodam no próprio celular para tirar carga do servidor. Toca com a tela desligada, no Android Auto e como despertador; a aba “Discord Radio” sintoniza a sala ao vivo.",
            en: "Kotlin, Jetpack Compose and Media3. Search, audio extraction, cache and library run on the phone itself to offload the server. It plays with the screen off, in Android Auto and as an alarm clock; the “Discord Radio” tab tunes into the live room.",
          },
        },
        {
          title: { pt: "Feito para ficar no ar", en: "Built to stay up" },
          body: {
            pt: "Fila e posição são gravadas a cada 5 s em SQLite, e depois de um deploy o bot volta ao canal de onde parou. Uma auditoria de segurança passou pelo sistema inteiro: sessões guardadas como hash, IP do cliente aceito só do proxy, proteção contra SSRF e CSP no site.",
            en: "Queue and position are saved every 5 s to SQLite, and after a deploy the bot rejoins the channel where it stopped. A security audit went through the whole system: sessions stored as hashes, client IP trusted only from the proxy, SSRF protection and a CSP on the site.",
          },
        },
      ],
      chain: [
        { name: "YouTube · Spotify", detail: { pt: "fontes", en: "sources" } },
        { name: "MaxTools", detail: { pt: "resolve, baixa, captura, cacheia", en: "resolve, download, capture, cache" } },
        { name: "Bot", detail: { pt: "PCM 48 kHz, efeitos, voz", en: "48 kHz PCM, effects, voice" } },
        { name: "API + SSE", detail: { pt: "contas, fila, espectro", en: "accounts, queue, spectrum" } },
        { name: { pt: "Site · Activity · Android", en: "Web · Activity · Android" }, detail: { pt: "quem ouve", en: "listeners" } },
      ],
      learned: {
        pt: "Medir antes de supor. “A música acaba sozinha” parecia bug do player; era um limite de tempo do provedor, e só um teste de bancada provou. A suíte de testes cobre justamente o que já quebrou em produção.",
        en: "Measure before assuming. “The song just ends” looked like a player bug; it was a provider time limit, and only a bench test proved it. The test suite covers exactly what has broken in production.",
      },
    },
  },
  {
    slug: "pallab",
    title: "PalLab",
    category: "product",
    origin: "own",
    visibility: "private",
    start: "2026-07",
    end: "2026-08",
    commits: 33,
    tier: 2,
    stack: ["Python", "Flask", "C (Oodle)", "JavaScript", "Leaflet", "Docker"],
    image: {
      src: "/img/pallab.webp",
      alt: {
        pt: "Página inicial do PalLab: números do servidor, progresso do Paldex e atalhos para mapa, breeding e itens.",
        en: "PalLab's home page: server numbers, Paldex progress and shortcuts to the map, breeding and items.",
      },
    },
    tagline: {
      pt: "Companion do servidor de Palworld da casa: lê o save binário do jogo e a API oficial do servidor dedicado.",
      en: "A companion app for our Palworld server: it reads the game's binary save and the dedicated server's official API.",
    },
    metrics: [
      { value: { pt: "99,6%", en: "99.6%" }, label: { pt: "da fórmula validada contra o jogo", en: "of the formula validated against the game" } },
      { value: { pt: "2.466", en: "2,466" }, label: { pt: "itens indexados", en: "items indexed" } },
      { value: "460", label: { pt: "habilidades (375 + 85)", en: "skills (375 + 85)" } },
      { value: { pt: "33.930", en: "33,930" }, label: { pt: "pares de breeding conferidos", en: "breeding pairs checked" } },
    ],
    caseStudy: {
      problem: {
        pt: "As ferramentas da comunidade são genéricas: não sabem o que cada jogador do nosso servidor já capturou. E o save do jogo é binário, compactado com Oodle num formato novo que a biblioteca do PyPI não lê.",
        en: "Community tools are generic: they don't know what each player on our server has already caught. And the game save is binary, Oodle-compressed in a new format the PyPI library can't read.",
      },
      approach: [
        {
          title: { pt: "Ler o save do jogo", en: "Reading the game save" },
          body: {
            pt: "Parser baseado no palsav com a extensão Oodle em C compilada dentro da imagem Docker. O Level.sav é relido por mtime a cada autosave, então os dados acompanham o jogo sem reiniciar nada.",
            en: "A parser built on palsav with the Oodle C extension compiled inside the Docker image. Level.sav is re-read by mtime on every autosave, so data follows the game without restarting anything.",
          },
        },
        {
          title: { pt: "Fórmula de breeding validada", en: "A validated breeding formula" },
          body: {
            pt: "Reimplementei o cálculo e validei contra as tabelas do jogo: 33.778 de 33.930 pares conferem. Foi assim que apareceram as regras que a comunidade erra: filhos de combinação única nunca saem pela fórmula, e empate de rank é decidido pelo maior.",
            en: "I reimplemented the calculation and validated it against the game's tables: 33,778 of 33,930 pairs match. That's how the rules the community gets wrong surfaced: unique-combo children never come from the formula, and rank ties go to the higher one.",
          },
        },
        {
          title: { pt: "Planejamento em várias gerações", en: "Multi-generation planning" },
          body: {
            pt: "O fecho transitivo do breeding a partir do Palbox de cada jogador responde “consigo chegar nesse Pal?” e reconstrói a cadeia passo a passo, escolhendo o melhor casal (♂×♀) pela soma de IVs.",
            en: "The transitive closure of breeding from each player's Palbox answers “can I reach this Pal?” and rebuilds the chain step by step, picking the best couple (♂×♀) by IV sum.",
          },
        },
        {
          title: { pt: "Mapa e radar ao vivo", en: "Live map and radar" },
          body: {
            pt: "Mapa Leaflet de 8192 px com a transformação de coordenadas do jogo, progresso por jogador e radar de quem está online via proxy da REST API oficial, com cache de 3 s.",
            en: "An 8192 px Leaflet map with the game's coordinate transform, per-player progress and a radar of who's online via a proxy to the official REST API, with a 3 s cache.",
          },
        },
        {
          title: { pt: "Admin que confere o resultado", en: "An admin that verifies results" },
          body: {
            pt: "A tela de configuração escreve as variáveis do contêiner do servidor e faz polling até o .ini regerado bater com o valor pedido. Limites mínimos e máximos nunca são aplicados em silêncio.",
            en: "The settings screen writes the server container's environment and polls until the regenerated .ini matches the requested value. Min/max clamps are never applied silently.",
          },
        },
      ],
      chain: [
        { name: "Level.sav", detail: { pt: "binário PlM / Oodle", en: "PlM / Oodle binary" } },
        { name: "palsav (C)", detail: { pt: "descompacta e decodifica", en: "decompress and decode" } },
        { name: "Flask API", detail: { pt: "breeding, dex, mapa, admin", en: "breeding, dex, map, admin" } },
        { name: { pt: "REST do servidor", en: "Server REST API" }, detail: { pt: "jogadores online, cache 3 s", en: "online players, 3 s cache" } },
        { name: { pt: "Front sem framework", en: "Framework-free UI" }, detail: { pt: "sem build step", en: "no build step" } },
      ],
      learned: {
        pt: "Fórmula da comunidade não é fórmula do jogo. As exceções só apareceram quando validei contra a tabela inteira, e não contra uns casos de exemplo. Hoje um caso-teste trava cada uma delas.",
        en: "The community's formula isn't the game's formula. The exceptions only showed up when I validated against the whole table instead of a few examples. Today a test case pins each of them down.",
      },
    },
  },
  {
    slug: "maxtools",
    title: "MaxTools",
    category: "product",
    origin: "own",
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
            pt: "O backend serve um proxy de até 480p com HTTP Range; o editor anda quadro a quadro, marca entrada e saída e toca a seleção em loop. O download final baixa só o trecho, em qualidade cheia, com corte forçado em keyframe.",
            en: "The backend serves a proxy of up to 480p over HTTP Range; the editor steps frame by frame, marks in and out and loops the selection. The final download fetches only that range, at full quality, with keyframe-forced cuts.",
          },
        },
        {
          title: { pt: "Plataforma, não só interface", en: "A platform, not just a UI" },
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
        pt: "Investir no contrato antes das features. Depois que o formato do plugin estabilizou, uma ferramenta nova passou a levar uma tarde, e o Radio reaproveitou a plataforma inteira.",
        en: "Invest in the contract before features. Once the plugin shape settled, a new tool took an afternoon, and the Radio could reuse the whole platform.",
      },
    },
  },
  {
    slug: "automacao-rpa",
    title: "RPA para corretora de benefícios",
    titleEn: "RPA for a benefits brokerage",
    category: "automation",
    origin: "client",
    org: "Plug Benefícios",
    visibility: "private",
    start: "2022-08",
    end: "2023-11",
    commits: 193,
    tier: 1,
    stack: ["Python", "Selenium", "Playwright", "MySQL", "Celery", "RabbitMQ", "FTP", "Excel"],
    context: {
      pt: "Plug Benefícios (corretora de benefícios), como estagiário de desenvolvimento Python. Credenciais e dados de beneficiários omitidos.",
      en: "Plug Benefícios (benefits brokerage), as a Python development intern. Credentials and beneficiary data omitted.",
    },
    tagline: {
      pt: "Quinze robôs que tiraram do operacional a digitação em portais de operadoras de saúde, faturas, boletos e holerites.",
      en: "Fifteen bots that took typing into health-insurer portals, invoices, payment slips and payslips off the operations team.",
    },
    metrics: [
      { value: "15", label: { pt: "robôs em produção", en: "bots in production" } },
      { value: "4", label: { pt: "portais de operadoras automatizados", en: "insurer portals automated" } },
      { value: "1", label: { pt: "biblioteca interna usada por todos os robôs", en: "internal library shared by every bot" } },
    ],
    caseStudy: {
      problem: {
        pt: "A equipe digitava à mão cada movimentação de beneficiário (inclusão, exclusão, alteração) no portal de cada operadora, baixava faturas e boletos um a um e mandava os holerites às empresas clientes por e-mail.",
        en: "The team hand-typed every beneficiary change (additions, removals, updates) into each insurer's own portal, downloaded invoices and payment slips one by one and emailed payslips to client companies.",
      },
      approach: [
        {
          title: { pt: "Fila no banco, um módulo por operadora", en: "A database queue, one module per insurer" },
          body: {
            pt: "O robô principal lê os chamados pendentes no MySQL do sistema da corretora e despacha cada um para o módulo da operadora certa, que preenche o portal e grava o status de volta. Foram 80 commits só nele.",
            en: "The main bot reads pending tickets from the brokerage system's MySQL and dispatches each one to the right insurer module, which fills the portal and writes the status back. That one alone took 80 commits.",
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
            pt: "O que se repetia entre robôs (inicialização do navegador, contorno de bloqueios de interface, utilitários de arquivo) virou um pacote Python distribuído como wheel e instalado em todos eles.",
            en: "What repeated across bots (browser start-up, working around UI blockers, file utilities) became a Python package shipped as a wheel and installed in all of them.",
          },
        },
        {
          title: { pt: "Fila centralizada para os robôs", en: "A central queue for the bots" },
          body: {
            pt: "O ROMA centralizou a execução numa API REST: Flask + Socket.IO na frente, Celery com RabbitMQ distribuindo as tarefas em paralelo, e um cenário de carga para medir quanto a concorrência rendia antes de ligar em produção.",
            en: "ROMA centralised execution behind a REST API: Flask + Socket.IO in front, Celery with RabbitMQ spreading tasks in parallel, and a load scenario to measure how much concurrency paid off before going live.",
          },
        },
      ],
      chain: [
        { name: { pt: "Sistema da corretora", en: "Brokerage system" }, detail: { pt: "chamados no MySQL", en: "tickets in MySQL" } },
        { name: { pt: "Despachante", en: "Dispatcher" }, detail: { pt: "um módulo por operadora", en: "one module per insurer" } },
        { name: { pt: "Portais", en: "Portals" }, detail: { pt: "Selenium / Playwright", en: "Selenium / Playwright" } },
        { name: { pt: "Status + arquivos", en: "Status + files" }, detail: { pt: "banco, e-mail, FTP", en: "database, email, FTP" } },
      ],
      learned: {
        pt: "Robô de produção precisa de log, estado no banco e retomada, mais do que de velocidade. Os maiores ganhos vieram de saber exatamente onde cada chamado parou.",
        en: "A production bot needs logging, state in the database and resumability more than it needs speed. The biggest wins came from knowing exactly where each ticket stopped.",
      },
    },
  },
  {
    slug: "meus-contatos-ms",
    title: "MS Graph Contacts Explorer",
    category: "web",
    org: { pt: "Teste técnico", en: "Technical assessment" },
    visibility: "public",
    repo: `${GH}/msgraph-contacts-explorer`,
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
          title: { pt: "OAuth2 bem feito", en: "OAuth2 done properly" },
          body: {
            pt: "Fluxo de código com MSAL no Flask e validação do parâmetro state contra CSRF. O backend troca o código por token e só expõe ao front o que ele precisa.",
            en: "Authorisation-code flow with MSAL in Flask and state-parameter validation against CSRF. The backend exchanges the code for a token and exposes only what the frontend needs.",
          },
        },
        {
          title: { pt: "Regra de negócio testada", en: "Tested business logic" },
          body: {
            pt: "O agrupamento por domínio fica isolado no backend com testes em pytest; o front em Vue 3 + Pinia cuida de grade e lista, busca em tempo real e exportação.",
            en: "Domain grouping lives isolated in the backend with pytest tests; the Vue 3 + Pinia frontend handles grid and list views, live search and export.",
          },
        },
        {
          title: { pt: "Acabamento", en: "Finish" },
          body: {
            pt: "Tema claro e escuro com detecção do sistema, i18n PT/EN, backend em Docker e deploy no Firebase (Hosting + Functions), com README de instalação passo a passo.",
            en: "Light and dark themes with system detection, PT/EN i18n, a Dockerised backend and Firebase deploy (Hosting + Functions), with a step-by-step setup README.",
          },
        },
      ],
      chain: [
        { name: { pt: "Conta Microsoft", en: "Microsoft account" }, detail: { pt: "OAuth2 + state", en: "OAuth2 + state" } },
        { name: "Flask + MSAL", detail: { pt: "token e Graph API", en: "token and Graph API" } },
        { name: { pt: "Agrupamento", en: "Grouping" }, detail: { pt: "por domínio, testado", en: "by domain, tested" } },
        { name: "Vue 3", detail: { pt: "busca, export", en: "search, export" } },
      ],
      learned: {
        pt: "Em teste técnico, o README é parte da entrega. Quem avalia precisa rodar o projeto em minutos, e documentar as decisões de arquitetura economiza a conversa depois.",
        en: "In a technical assessment, the README is part of the deliverable. The reviewer needs to run it in minutes, and documenting architecture decisions saves the conversation later.",
      },
    },
  },
  {
    slug: "conciliacao-financeira",
    title: "Conciliação OFX e integrações de CRM",
    titleEn: "OFX reconciliation and CRM integrations",
    category: "automation",
    origin: "client",
    org: "HG7",
    visibility: "private",
    start: "2023-08",
    end: "2025-01",
    commits: 70,
    tier: 1,
    stack: ["Python", "Flask", "MySQL", "PHP", "MongoDB", "Plotly", "Selenium", "REST APIs"],
    context: {
      pt: "Cliente HG7 (corretora de seguros): meio período a partir de 2023, em paralelo ao estágio, e consultoria de backend em 2024. Credenciais e dados financeiros omitidos.",
      en: "Client HG7 (insurance brokerage): part-time from 2023, alongside the internship, then backend consulting in 2024. Credentials and financial data omitted.",
    },
    tagline: {
      pt: "Importação e conciliação de extratos bancários OFX em três gerações, mais integrações entre CRM, telefonia e o ERP.",
      en: "Bank statement (OFX) import and reconciliation across three generations, plus integrations between CRM, telephony and the ERP.",
    },
    metrics: [
      { value: "18", label: { pt: "meses em uso diário", en: "months in daily use" } },
      { value: "3", label: { pt: "gerações, a última dentro do ERP", en: "generations, the last inside the ERP" } },
      { value: "3", label: { pt: "sistemas conectados: CRM, telefonia, ERP", en: "systems connected: CRM, phone, ERP" } },
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
            pt: "Na terceira geração, as telas de edição e transferência de agrupamentos passaram a viver dentro do ERP em PHP que a empresa já usava, com um fluxo de promoção de dev para prod.",
            en: "In the third generation, the editing and regrouping screens moved inside the PHP ERP the company already used, with a dev-to-prod promotion flow.",
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
        { name: { pt: "Extrato OFX", en: "OFX statement" }, detail: { pt: "upload", en: "upload" } },
        { name: { pt: "Normalização", en: "Normalisation" }, detail: { pt: "mapa de históricos", en: "memo mapping" } },
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
    slug: "campaign-qa",
    title: "QA automático de campanhas",
    titleEn: "Campaign QA automation",
    category: "automation",
    origin: "client",
    org: "Netbiis",
    visibility: "private",
    start: "2025-04",
    end: "2026-03",
    tier: 1,
    stack: ["Python", "FastAPI", "Flask", "Adobe Campaign (SOAP)", "Jira API", "SSE", "SQLite", "Jinja", "OpenVPN"],
    context: {
      pt: "Netbiis | Data Driven Technologies, para o time que opera as campanhas de e-mail de um cliente corporativo no Adobe Campaign. Nome do cliente, dados de campanha e procedimentos internos omitidos.",
      en: "Netbiis | Data Driven Technologies, for the team that runs an enterprise client's email campaigns in Adobe Campaign. Client name, campaign data and internal procedures omitted.",
    },
    tagline: {
      pt: "Ferramentas que conferem cada campanha contra o briefing antes do envio e tiram do time de CRM o trabalho repetitivo de preparação.",
      en: "Tools that check every campaign against its briefing before it ships and take the repetitive prep work off the CRM team.",
    },
    metrics: [
      { value: "−40%", label: { pt: "tempo de verificação manual", en: "manual verification time" } },
      { value: "2", label: { pt: "sistemas cruzados por execução (Jira × Adobe)", en: "systems cross-checked per run (Jira × Adobe)" } },
      { value: "8", label: { pt: "ferramentas de preparação num só painel", en: "prep tools in one dashboard" } },
    ],
    caseStudy: {
      problem: {
        pt: "Cada campanha nasce de um briefing no Jira e é montada à mão no Adobe Campaign: workflows, queries de segmentação, deliveries. Antes de cada envio, alguém conferia item por item se o que foi montado batia com o pedido. Era lento e repetitivo, e um detalhe que passasse chegava à caixa de entrada do cliente final. Em volta disso havia mais preparação manual: scripts de segmentação, limpeza de listas, personalização de assunto.",
        en: "Each campaign starts as a Jira briefing and is built by hand in Adobe Campaign: workflows, targeting queries, deliveries. Before every send, someone checked item by item that what was built matched what was asked. It was slow and repetitive, and a missed detail landed in the end customer's inbox. Around it sat more manual prep: segmentation scripts, list cleaning, subject-line personalisation.",
      },
      approach: [
        {
          title: { pt: "Briefing × implementação, numa execução", en: "Briefing vs. build, in one run" },
          body: {
            pt: "A partir da chave do ticket, o validador lê o briefing estruturado pela API de formulários do Jira e baixa a campanha, os workflows e as deliveries pela API SOAP do Adobe Campaign. O XML é normalizado e cruzado com o briefing: rótulos, condições de segmentação e se cada delivery referenciada pelo workflow de execução existe de fato.",
            en: "From a ticket key, the validator reads the structured briefing through Jira's forms API and pulls the campaign, its workflows and deliveries through Adobe Campaign's SOAP API. The XML is normalised and cross-checked against the briefing: labels, targeting conditions, and whether every delivery the execution workflow references actually exists.",
          },
        },
        {
          title: { pt: "Resultado chega enquanto é calculado", en: "Results stream as they're computed" },
          body: {
            pt: "O FastAPI transmite cada seção por Server-Sent Events, então o painel vai se preenchendo conforme as checagens terminam, em vez de travar num carregando. Cada item mostra o esperado e o encontrado lado a lado, com status OK ou NOK.",
            en: "FastAPI streams each section over Server-Sent Events, so the dashboard fills in as checks finish instead of hanging on a spinner. Every item shows expected and found side by side, with an OK or NOK status.",
          },
        },
        {
          title: { pt: "Falhas que se explicam", en: "Failures that explain themselves" },
          body: {
            pt: "A maioria das execuções quebradas não era bug: era token de sessão expirado ou VPN caída. A ferramenta gerencia o cliente de VPN, reconhece os códigos de erro de autenticação da plataforma e marca cada falha com a origem (Jira, Adobe, rede) numa tela de diagnóstico.",
            en: "Most broken runs weren't bugs: an expired session token or a dropped VPN. The tool manages the VPN client, recognises the platform's auth error codes and tags every failure with its origin (Jira, Adobe, network) in a diagnostics view.",
          },
        },
        {
          title: { pt: "Um kit para a preparação repetitiva", en: "A toolkit for the repetitive prep" },
          body: {
            pt: "Uma suíte Flask + SQLite com login: gerador de script de segmento, limpador de listas de e-mail, formatador de SKU, personalização de assunto, leitor de briefing e checagem de tickets no Jira, com o modelo de dados carregado das planilhas de origem do time.",
            en: "A Flask + SQLite suite behind a login: segment-script generator, email-list cleaner, SKU formatter, subject personalisation, briefing parser and Jira ticket checks, with the data model loaded from the team's source spreadsheets.",
          },
        },
      ],
      chain: [
        { name: "Jira", detail: { pt: "briefing estruturado", en: "structured briefing" } },
        { name: "Adobe Campaign", detail: { pt: "SOAP · XML", en: "SOAP · XML" } },
        { name: "FastAPI", detail: { pt: "esperado × encontrado", en: "expected × found" } },
        { name: "SSE", detail: { pt: "relatório ao vivo no painel", en: "live report in the dashboard" } },
      ],
      learned: {
        pt: "Faça cada falha se explicar. Quando o erro passou a dizer de onde veio, “o validador não funciona” virou “renove o token”: uma correção de uma linha no lugar de uma sessão de depuração.",
        en: "Make every failure explain itself. Once each error said where it came from, “the validator is broken” became “renew the token”: a one-line fix instead of a debugging session.",
      },
    },
  },

  // Índice (sem estudo de caso)
  {
    slug: "localiza-api",
    title: "Car Rental Price Tracker",
    category: "automation",
    visibility: "public",
    repo: `${GH}/car-rental-price-tracker`,
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
    title: "Hardware News Translator",
    category: "automation",
    visibility: "public",
    repo: `${GH}/hardware-news-translator`,
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
    repo: `${GH}/checkbox-race-bot`,
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
    titleEn: "2D prototype in Unity",
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
    repo: `${GH}/devinhouse-bootcamp`,
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
    titleEn: "JavaScript course",
    category: "study",
    visibility: "public",
    repo: `${GH}/javascript-fundamentals`,
    start: "2023-06",
    end: "2023-06",
    commits: 12,
    stack: ["JavaScript"],
    tagline: {
      pt: "Quinze aulas comentadas, de variáveis a async/await. É o meu repositório público com mais estrelas.",
      en: "Fifteen annotated lessons, from variables to async/await. My most-starred public repository.",
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
    repo: `${GH}/responsive-landing-page`,
    start: "2022-04",
    end: "2022-04",
    commits: 2,
    stack: ["HTML", "CSS", "JavaScript"],
    tagline: {
      pt: "Meu primeiro exercício de landing page, de 2022.",
      en: "My first landing page exercise, from 2022.",
    },
  },
];

/** Trabalho para empresas primeiro: é o que cliente e recrutador procuram. */
const CASE_ORDER = [
  "campaign-qa",
  "automacao-rpa",
  "conciliacao-financeira",
  "maxtools-radio",
  "maxtools",
  "pallab",
  "meus-contatos-ms",
];

export const caseStudies = projects
  .filter((p) => p.caseStudy)
  .sort((a, b) => CASE_ORDER.indexOf(a.slug) - CASE_ORDER.indexOf(b.slug));

export function projectTitle(p: Project, lang: Lang) {
  return lang === "en" && p.titleEn ? p.titleEn : p.title;
}

/** Texto que pode ou não ter tradução. */
export function tr(v: string | L, lang: Lang) {
  return typeof v === "string" ? v : v[lang];
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
