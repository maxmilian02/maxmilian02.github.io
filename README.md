# maxmilian02.github.io

Portfólio de **Maxmilian Duarte** — desenvolvedor full-stack (Python, automação e infraestrutura).
→ **https://maxmilian02.github.io** · [English](https://maxmilian02.github.io/en/)

A maior parte do meu código é privada (clientes e projetos que rodam em produção no meu servidor), então o site conta cada projeto como **estudo de caso**: o problema, como resolvi, como os dados fluem e o que ficou de lição — com os números tirados dos próprios repositórios.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) + React 19, exportado como site estático |
| Estilo | Tailwind CSS 4 + CSS próprio com tokens de tema (claro/escuro) |
| Fontes | Archivo (eixo de largura variável), IBM Plex Sans, JetBrains Mono — via `next/font`, sem requisição a terceiros em runtime |
| Interação | `cmdk` (paleta de comandos, Ctrl/⌘ K), `next-themes` |
| Animação | CSS puro: animações guiadas por scroll (`animation-timeline: view()`) e `<ViewTransition>` do React 19 para o título “voar” da lista até o estudo de caso |
| Deploy | GitHub Actions → GitHub Pages (`lint` + `build` a cada push na `main`) |

## Decisões

- **Zero servidor.** `output: "export"` gera HTML para cada rota no build; páginas de projeto vêm de `generateStaticParams` com `dynamicParams = false`. A imagem de compartilhamento é um route handler estático (`/og.png`) renderizado com `next/og` no build.
- **Bilíngue sem biblioteca.** Dois root layouts (`(pt)` na raiz e `en/`), conteúdo tipado em `{ pt, en }`. O seletor de idioma mantém a página atual.
- **Conteúdo como dado.** Tudo que aparece no site está em [`src/content`](src/content) — projetos, espectro de repositórios, trajetória, stack e infraestrutura. A stack só lista tecnologias que aparecem em algum projeto, e cada uma aponta onde foi usada.
- **Privacidade.** Repositórios de clientes aparecem com rótulo genérico; nomes de empresas e credenciais nunca entram no site.
- **Acessibilidade.** HTML semântico, foco visível, link de pular navegação, espectro navegável por teclado (setas, Home/End, roving tabindex), `prefers-reduced-motion` respeitado.
- **SEO.** Metadados por página com `hreflang`, JSON-LD de `Person`, sitemap e robots.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera ./out
```

## Atualizando

Edite [`src/content/projects.ts`](src/content/projects.ts) (estudos de caso e índice) e [`src/content/profile.ts`](src/content/profile.ts) (espectro, trajetória, stack, infra e contatos). Um push na `main` publica.
