"use client";

import React, { useMemo, useState } from "react";
import clsx from "clsx";

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
      className="inline-flex items-center justify-center"
      onClick={() => {
        const next: Theme = isDark ? "light" : "dark";
        applyTheme(next);
        setIsDark(next === "dark");
      }}
      aria-label={`Переключить тему (сейчас: ${label})`}
    >
      <span className="relative inline-flex h-7 w-14 items-center rounded-full bg-background/60 px-0.5 ring-1 ring-foreground/10">
        <span
          aria-hidden="true"
          className={clsx(
            "h-5 w-5 rounded-full bg-foreground transition-transform duration-200",
            isDark ? "translate-x-7" : "translate-x-0",
          )}
        />
      </span>
    </button>
  );
};

