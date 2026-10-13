import type { ChainNode } from "@/content/projects";
import type { Lang } from "@/lib/i18n";

/** Diagrama da cadeia de dados: horizontal no desktop, vertical no celular. */
export function SignalChain({ nodes, lang }: { nodes: ChainNode[]; lang: Lang }) {
  return (
    <ol className="chain" style={{ ["--n" as string]: nodes.length }}>
      {nodes.map((n, i) => (
        <li key={n.name} className="chain-node">
          <span className="chain-jack" aria-hidden>
            {String(i + 1).padStart(2, "0")}
          </span>
          <strong className="chain-name">{n.name}</strong>
          <span className="chain-detail">{n.detail[lang]}</span>
        </li>
      ))}
    </ol>
  );
}
