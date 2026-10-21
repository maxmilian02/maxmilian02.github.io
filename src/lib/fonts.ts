import { IBM_Plex_Mono, IBM_Plex_Sans, Schibsted_Grotesk } from "next/font/google";

// Títulos: grotesca de jornal, firme sem ser larga.
export const display = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Texto corrido. Variável: um arquivo só para todos os pesos.
export const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Datas e números. Não disputa banda com o texto no carregamento.
export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  preload: false,
  variable: "--font-mono-face",
  display: "swap",
});

export const fontVars = `${display.variable} ${body.variable} ${mono.variable}`;
