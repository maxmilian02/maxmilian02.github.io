import { ImageResponse } from "next/og";
import { profile, repos, totals } from "@/content/profile";
import { ui, type Lang } from "@/lib/i18n";

export const OG_SIZE = { width: 1200, height: 630 };

/** Cartão de compartilhamento: nome, papel e o mesmo espectro do hero. */
export function renderOg(lang: Lang) {
  const max = Math.log(1 + 213);
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
          background: "#121418",
          color: "#eaebed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#8e949d", letterSpacing: 2 }}>
            <div style={{ width: 12, height: 12, borderRadius: 12, background: "#ff5148" }} />
            {ui.role[lang].toUpperCase()}
          </div>
          <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -4, marginTop: 20, lineHeight: 1 }}>
            {profile.name}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 7, height: 210 }}>
          {repos.map((r, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${Math.round((0.08 + 0.92 * (Math.log(1 + r.commits) / max)) * 100)}%`,
                background: r.slug ? "#ffa21a" : "#4a505a",
                borderRadius: 2,
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#8e949d" }}>
          <span>
            {totals.repos} {ui.repos[lang]} · {totals.commits} {ui.commits[lang]}
          </span>
          <span>maxmilian02.github.io</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
