import { Archivo, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";

// Archivo variável no eixo de largura: títulos largos, rótulos condensados.
export const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

// Variável: um arquivo só para todos os pesos (menos requisições no caminho do LCP).
export const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Mono só aparece em rótulos: não disputa banda com o texto principal no carregamento.
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  preload: false,
  variable: "--font-mono-face",
  display: "swap",
});

export const fontVars = `${display.variable} ${body.variable} ${mono.variable}`;
