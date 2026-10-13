"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      className="icon-btn"
      aria-label={label}
      title={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Os dois ícones existem; o CSS mostra o do tema atual (sem flash na hidratação). */}
      <Sun className="theme-icon-light" size={16} aria-hidden />
      <Moon className="theme-icon-dark" size={16} aria-hidden />
    </button>
  );
}
