"use client";

import React, { useMemo, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getIsDarkFromDOM(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => getIsDarkFromDOM());

  const label = useMemo(() => (isDark ? "Тёмная" : "Светлая"), [isDark]);

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-3 py-2 text-sm text-foreground transition hover:bg-foreground/10"
      onClick={() => {
        const next: Theme = isDark ? "light" : "dark";
        applyTheme(next);
        setIsDark(next === "dark");
      }}
      aria-label={`Переключить тему (сейчас: ${label})`}
    >
      <span className="hidden sm:inline">Тема</span>
      <span className="opacity-80">{label}</span>
    </button>
  );
};

