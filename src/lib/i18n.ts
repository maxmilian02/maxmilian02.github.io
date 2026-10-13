export type Lang = "pt" | "en";
export type L = Record<Lang, string>;

export const LANGS: Lang[] = ["pt", "en"];

export const SITE_URL = "https://maxmilian02.github.io";

/** Rotas por idioma: PT na raiz, EN em /en. */
export const paths = {
  home: (lang: Lang) => (lang === "pt" ? "/" : "/en/"),
  project: (lang: Lang, slug: string) =>
    lang === "pt" ? `/projetos/${slug}/` : `/en/projects/${slug}/`,
};

/** Mesma página no outro idioma: /projetos/x/ ↔ /en/projects/x/. */
export function altPath(pathname: string, lang: Lang) {
  const slug = pathname.match(/\/(?:projetos|projects)\/([^/]+)/)?.[1];
  const other: Lang = lang === "pt" ? "en" : "pt";
  return slug ? paths.project(other, slug) : paths.home(other);
}

export const ui = {
  nav: {
    work: { pt: "Projetos", en: "Work" },
    path: { pt: "Experiência", en: "Experience" },
    stack: { pt: "Stack", en: "Stack" },
    infra: { pt: "Infra", en: "Infra" },
    contact: { pt: "Contato", en: "Contact" },
  },
  role: {
    pt: "Engenheiro Backend Python · APIs, dados, automação e infraestrutura",
    en: "Python Backend Engineer · APIs, data, automation and infrastructure",
  },
  thesis: {
    pt: "Há mais de 4 anos construo backends, automações e ferramentas internas que tiram trabalho manual das equipes — e mantenho a infraestrutura onde meus próprios projetos rodam.",
    en: "For over 4 years I've built backends, automations and internal tools that take manual work off teams — and I run the infrastructure my own projects live on.",
  },
  spectrumCaption: {
    pt: "Cada barra é um repositório meu, em ordem de criação. Altura = commits (escala log). Em âmbar, os que viraram estudo de caso.",
    en: "Each bar is one of my repositories, in creation order. Height = commits (log scale). Amber bars became case studies.",
  },
  spectrumLabel: {
    pt: "Espectro dos repositórios do GitHub. Use as setas para percorrer.",
    en: "Spectrum of GitHub repositories. Use the arrow keys to browse.",
  },
  repos: { pt: "repositórios", en: "repositories" },
  commits: { pt: "commits", en: "commits" },
  ctaWork: { pt: "Ver estudos de caso", en: "See case studies" },
  ctaGithub: { pt: "GitHub", en: "GitHub" },
  casesTitle: { pt: "Estudos de caso", en: "Case studies" },
  casesIntro: {
    pt: "A maior parte do que construí é privada — código de clientes ou projetos pessoais que rodam em produção. Aqui está o que cada um resolve e como, com os números tirados dos próprios repositórios.",
    en: "Most of what I've built is private — client code or personal projects running in production. Here is what each one solves and how, with numbers taken from the repositories themselves.",
  },
  moreCases: { pt: "Também vale ler", en: "Also worth reading" },
  readCase: { pt: "Ler estudo de caso", en: "Read case study" },
  indexTitle: { pt: "Todos os projetos", en: "All projects" },
  indexIntro: {
    pt: "O índice completo, dos primeiros scripts aos sistemas atuais.",
    en: "The full index, from the first scripts to current systems.",
  },
  search: { pt: "Filtrar por nome ou tecnologia", en: "Filter by name or technology" },
  all: { pt: "Todos", en: "All" },
  noResults: {
    pt: "Nenhum projeto com esse filtro. Limpe a busca para ver todos.",
    en: "No project matches this filter. Clear the search to see all of them.",
  },
  colProject: { pt: "Projeto", en: "Project" },
  colYear: { pt: "Ano", en: "Year" },
  colStack: { pt: "Stack", en: "Stack" },
  colKind: { pt: "Tipo", en: "Kind" },
  private: { pt: "Código privado", en: "Private code" },
  public: { pt: "Código aberto", en: "Open source" },
  pathTitle: { pt: "Experiência", en: "Experience" },
  pathIntro: {
    pt: "Onde trabalhei e o que entreguei — os estudos de caso acima mostram o como.",
    en: "Where I've worked and what I delivered — the case studies above show the how.",
  },
  education: { pt: "Formação", en: "Education" },
  languages: { pt: "Idiomas", en: "Languages" },
  related: { pt: "Relacionado", en: "Related" },
  cv: { pt: "Baixar currículo (PDF)", en: "Download résumé (PDF)" },
  cvShort: { pt: "Currículo", en: "Résumé" },
  whatsapp: { pt: "WhatsApp", en: "WhatsApp" },
  now: { pt: "hoje", en: "now" },
  stackTitle: { pt: "Stack, com evidência", en: "Stack, with evidence" },
  stackIntro: {
    pt: "Só entra aqui o que aparece num projeto ou numa experiência acima — cada tecnologia aponta onde foi usada.",
    en: "Only what appears in a project or role above makes it here — each technology points to where it was used.",
  },
  usedIn: { pt: "Usado em", en: "Used in" },
  infraTitle: { pt: "O servidor de casa", en: "The home server" },
  infraIntro: {
    pt: "Os projetos pessoais não rodam em nuvem gerenciada: rodam num nó Proxmox que eu monto, roteio e mantenho. Firewall, DNS, proxy reverso com HTTPS e cada serviço isolado em seu contêiner.",
    en: "My personal projects don't run on a managed cloud: they run on a Proxmox node I build, route and maintain. Firewall, DNS, HTTPS reverse proxy and each service isolated in its own container.",
  },
  contactTitle: { pt: "Vamos conversar", en: "Let's talk" },
  contactBody: {
    pt: "Estou aberto a vagas de backend e full-stack com Python — remoto ou híbrido em São Paulo. Responde rápido por e-mail, LinkedIn ou WhatsApp.",
    en: "I'm open to Python backend and full-stack roles — remote, or hybrid in São Paulo. Email, LinkedIn or WhatsApp get a quick reply.",
  },
  problem: { pt: "O problema", en: "The problem" },
  approach: { pt: "Como resolvi", en: "How I solved it" },
  chain: { pt: "Como os dados fluem", en: "How data flows" },
  learned: { pt: "O que ficou de lição", en: "What I took away" },
  period: { pt: "Período", en: "Period" },
  context: { pt: "Contexto", en: "Context" },
  code: { pt: "Código", en: "Code" },
  viewRepo: { pt: "Ver repositório", en: "View repository" },
  back: { pt: "Voltar aos projetos", en: "Back to projects" },
  next: { pt: "Próximo estudo", en: "Next case" },
  palette: { pt: "Buscar", en: "Search" },
  palettePlaceholder: {
    pt: "Ir para um projeto, seção ou ação…",
    en: "Jump to a project, section or action…",
  },
  paletteEmpty: { pt: "Nada encontrado.", en: "Nothing found." },
  groupProjects: { pt: "Projetos", en: "Projects" },
  groupSections: { pt: "Seções", en: "Sections" },
  groupActions: { pt: "Ações", en: "Actions" },
  switchLang: { pt: "Read in English", en: "Ler em português" },
  toggleTheme: { pt: "Alternar tema claro/escuro", en: "Toggle light/dark theme" },
  openGithub: { pt: "Abrir GitHub", en: "Open GitHub" },
  skip: { pt: "Pular para o conteúdo", en: "Skip to content" },
  updated: { pt: "Dados do GitHub de outubro de 2026.", en: "GitHub data as of October 2026." },
  builtWith: {
    pt: "Feito com Next.js 16, React 19 e Tailwind CSS 4 — exportado estático e publicado pelo GitHub Actions.",
    en: "Built with Next.js 16, React 19 and Tailwind CSS 4 — statically exported and deployed by GitHub Actions.",
  },
  sourceOfSite: { pt: "Código deste site", en: "Source of this site" },
} satisfies Record<string, L | Record<string, L>>;

export function t(l: L, lang: Lang) {
  return l[lang];
}

const MONTHS: L[] = [
  { pt: "jan", en: "Jan" }, { pt: "fev", en: "Feb" }, { pt: "mar", en: "Mar" },
  { pt: "abr", en: "Apr" }, { pt: "mai", en: "May" }, { pt: "jun", en: "Jun" },
  { pt: "jul", en: "Jul" }, { pt: "ago", en: "Aug" }, { pt: "set", en: "Sep" },
  { pt: "out", en: "Oct" }, { pt: "nov", en: "Nov" }, { pt: "dez", en: "Dec" },
];

/** "2026-08" → "ago 2026" / "Aug 2026" */
export function month(ym: string, lang: Lang) {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1][lang]} ${y}`;
}

export function fmtInt(n: number, lang: Lang) {
  return n.toLocaleString(lang === "pt" ? "pt-BR" : "en-US");
}
