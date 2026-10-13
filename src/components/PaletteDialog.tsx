"use client";

import { Command } from "cmdk";
import { ArrowUpRight, FileText, Hash, Languages, SunMoon } from "lucide-react";
import type { PaletteItem, PaletteStrings } from "./CommandPalette";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projects: PaletteItem[];
  sections: PaletteItem[];
  altHref: string;
  github: string;
  s: PaletteStrings;
  go: (href: string) => void;
  toggleTheme: () => void;
}

/** O diálogo em si: carregado só na primeira vez que a paleta abre. */
export default function PaletteDialog({ open, onOpenChange, projects, sections, altHref, github, s, go, toggleTheme }: Props) {
  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label={s.trigger}
      className="palette"
      overlayClassName="palette-overlay"
      contentClassName="palette-content"
    >
      <Command.Input className="palette-input" placeholder={s.placeholder} />
      <Command.List className="palette-list">
        <Command.Empty className="palette-empty">{s.empty}</Command.Empty>
        <Command.Group heading={s.projects}>
          {projects.map((p) => (
            <Command.Item key={p.href} value={`${p.label} ${p.hint ?? ""}`} onSelect={() => go(p.href)}>
              <FileText size={15} aria-hidden />
              <span>{p.label}</span>
              {p.hint && <span className="palette-hint">{p.hint}</span>}
            </Command.Item>
          ))}
        </Command.Group>
        <Command.Group heading={s.sections}>
          {sections.map((p) => (
            <Command.Item key={p.href} value={p.label} onSelect={() => go(p.href)}>
              <Hash size={15} aria-hidden />
              <span>{p.label}</span>
            </Command.Item>
          ))}
        </Command.Group>
        <Command.Group heading={s.actions}>
          <Command.Item value={s.switchLang} onSelect={() => go(altHref)}>
            <Languages size={15} aria-hidden />
            <span>{s.switchLang}</span>
          </Command.Item>
          <Command.Item value={s.toggleTheme} onSelect={toggleTheme}>
            <SunMoon size={15} aria-hidden />
            <span>{s.toggleTheme}</span>
          </Command.Item>
          <Command.Item value={s.openGithub} onSelect={() => go(github)}>
            <ArrowUpRight size={15} aria-hidden />
            <span>{s.openGithub}</span>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
