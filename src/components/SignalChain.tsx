import { tr, type ChainNode } from "@/content/projects";
import type { Lang } from "@/lib/i18n";

/** Caminho dos dados, da origem a quem usa: em linha no desktop, em coluna no celular. */
export function SignalChain({ nodes, lang }: { nodes: ChainNode[]; lang: Lang }) {
  return (
    <ol className="chain" style={{ ["--n" as string]: nodes.length }}>
      {nodes.map((n) => (
        <li key={tr(n.name, "pt")} className="chain-node">
          <strong className="chain-name">{tr(n.name, lang)}</strong>
          <span className="chain-detail">{n.detail[lang]}</span>
        </li>
      ))}
    </ol>
  );
}
