"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

function applyTheme(mode: ThemeMode) {
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme-mode") as ThemeMode | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: ThemeMode = stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";
    setMode(initial);
    applyTheme(initial);
    setReady(true);
  }, []);

  const onToggle = () => {
    const next: ThemeMode = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("theme-mode", next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {ready ? (mode === "light" ? "☾ Dark" : "☀ Light") : "Theme"}
    </button>
  );
}
