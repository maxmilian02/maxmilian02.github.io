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
    services: { pt: "Serviços", en: "Services" },
    work: { pt: "Projetos", en: "Work" },
    path: { pt: "Experiência", en: "Experience" },
    stack: { pt: "Ferramentas", en: "Tools" },
    infra: { pt: "Infra", en: "Infra" },
    contact: { pt: "Contato", en: "Contact" },
  },
  role: { pt: "Engenheiro backend Python", en: "Python backend engineer" },
  available: {
    pt: "Disponível para contratos remotos e vagas fixas",
    en: "Available for remote contracts and full-time roles",
  },
  thesis: {
    pt: "Há quatro anos escrevo em Python as integrações, os robôs e as ferramentas internas que tiram trabalho manual de equipes de operação. O trabalho mais recente foi na Netbiis; antes, numa corretora de benefícios e numa corretora de seguros.",
    en: "For four years I've written the Python integrations, bots and internal tools that take manual work off operations teams. Most recently at Netbiis; before that, for a benefits brokerage and an insurance brokerage.",
  },
  ctaContact: { pt: "Enviar e-mail", en: "Email me" },
  proofTitle: { pt: "Resultados", en: "Results" },
  servicesTitle: { pt: "O que eu faço", en: "What I do" },
  servicesIntro: {
    pt: "Quatro tipos de problema que já resolvi em produção.",
    en: "Four kinds of problem I've already solved in production.",
  },
  doneIn: { pt: "Onde já fiz", en: "Where I've done it" },
  repos: { pt: "repositórios", en: "repositories" },
  commits: { pt: "commits", en: "commits" },
  ctaWork: { pt: "Ver projetos", en: "See projects" },
  ctaGithub: { pt: "GitHub", en: "GitHub" },
  casesTitle: { pt: "Projetos", en: "Work" },
  casesIntro: {
    pt: "A maior parte do código é privada. Cada estudo de caso conta o problema, a solução e o resultado.",
    en: "Most of the code is private. Each case study covers the problem, the solution and the result.",
  },
  clientTitle: { pt: "Para empresas", en: "For companies" },
  clientIntro: {
    pt: "Sistemas em produção para empregadores e clientes. Credenciais, dados e procedimentos internos ficam de fora.",
    en: "Production systems for employers and clients. Credentials, data and internal procedures are left out.",
  },
  ownTitle: { pt: "Produtos próprios", en: "My own products" },
  ownIntro: {
    pt: "Do desenho ao deploy, rodando no servidor que eu mantenho.",
    en: "From design to deploy, running on the server I maintain.",
  },
  ownProduct: { pt: "Produto próprio", en: "Own product" },
  moreCases: { pt: "Outros estudos de caso", en: "More case studies" },
  readCase: { pt: "Ler o estudo de caso", en: "Read the case study" },
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
    pt: "Onde trabalhei e o que entreguei.",
    en: "Where I've worked and what I delivered.",
  },
  education: { pt: "Formação", en: "Education" },
  languages: { pt: "Idiomas", en: "Languages" },
  related: { pt: "Estudo de caso", en: "Case study" },
  cv: { pt: "Baixar currículo (PDF)", en: "Download résumé (PDF)" },
  cvShort: { pt: "Currículo", en: "Résumé" },
  whatsapp: { pt: "WhatsApp", en: "WhatsApp" },
  now: { pt: "hoje", en: "now" },
  stackTitle: { pt: "Ferramentas", en: "Tools" },
  stackIntro: {
    pt: "Cada tecnologia com o projeto ou o emprego em que foi usada.",
    en: "Each technology with the project or job where I used it.",
  },
  usedIn: { pt: "Usado em", en: "Used in" },
  infraTitle: { pt: "Onde meus projetos rodam", en: "Where my projects run" },
  infraIntro: {
    pt: "Num servidor Proxmox que eu montei e mantenho em casa: firewall, DNS, proxy reverso com HTTPS e cada serviço no seu contêiner.",
    en: "On a Proxmox server I built and run at home: firewall, DNS, an HTTPS reverse proxy and each service in its own container.",
  },
  contactTitle: { pt: "Contato", en: "Contact" },
  contactBody: {
    pt: "Se a sua equipe perde horas com trabalho manual ou com sistemas que não conversam, me conte o caso. Respondo por e-mail, LinkedIn ou WhatsApp.",
    en: "If your team loses hours to manual work or to systems that don't talk to each other, tell me about it. I answer by email, LinkedIn or WhatsApp.",
  },
  problem: { pt: "O problema", en: "The problem" },
  approach: { pt: "Como resolvi", en: "How I solved it" },
  chain: { pt: "Por onde os dados passam", en: "How data flows" },
  learned: { pt: "O que aprendi", en: "What I learned" },
  period: { pt: "Período", en: "Period" },
  context: { pt: "Contexto", en: "Context" },
  code: { pt: "Código", en: "Code" },
  live: { pt: "No ar", en: "Live" },
  viewRepo: { pt: "Ver repositório", en: "View repository" },
  back: { pt: "Todos os projetos", en: "All projects" },
  next: { pt: "Próximo estudo de caso", en: "Next case study" },
  switchLang: { pt: "Read in English", en: "Ler em português" },
  toggleTheme: { pt: "Alternar tema claro/escuro", en: "Toggle light/dark theme" },
  skip: { pt: "Pular para o conteúdo", en: "Skip to content" },
  updated: { pt: "Atualizado em outubro de 2026.", en: "Updated October 2026." },
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
