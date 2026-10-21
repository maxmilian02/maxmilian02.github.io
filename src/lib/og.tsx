import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile, proof } from "@/content/profile";
import { ui, type Lang } from "@/lib/i18n";

export const OG_SIZE = { width: 1200, height: 630 };

const photo = `data:image/jpeg;base64,${readFileSync(join(process.cwd(), "public/img/max.jpg")).toString("base64")}`;

/** Cartão de compartilhamento: foto, nome, papel e os resultados do topo da página. */
export function renderOg(lang: Lang) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#f3f4f1",
          color: "#141816",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} width={168} height={168} style={{ borderRadius: 84 }} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, color: "#0b6b4f", fontWeight: 600 }}>{ui.role[lang]}</div>
            <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -3, marginTop: 6, lineHeight: 1 }}>
              {profile.name}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", borderTop: "2px solid #141816" }}>
          {proof.slice(0, 3).map((r) => (
            <div
              key={r.slug}
              style={{ display: "flex", alignItems: "baseline", gap: 28, padding: "14px 0", borderBottom: "1px solid #d8ddd8", fontSize: 26 }}
            >
              <span style={{ width: 120, fontSize: 36, fontWeight: 800 }}>{typeof r.value === "string" ? r.value : r.value[lang]}</span>
              <span style={{ flex: 1, color: "#3c4440" }}>{r.label[lang]}</span>
              <span style={{ color: "#66706b", fontSize: 22 }}>{r.where}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#66706b" }}>
          <span>{profile.location}</span>
          <span>maxmilian02.github.io</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
