import { useState, useEffect, useRef } from "react";

// Matches --color-bg-primary in index.css and the theme-color tags in index.html
const THEME_COLORS = { light: "#f9fafb", dark: "#111827" };
const STORAGE_KEY = "darkMode";

// localStorage throws when storage is blocked or full (e.g. Safari private mode); treat that as no stored choice
const readStoredPreference = (): boolean | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored !== null ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const storePreference = (isDark: boolean) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(isDark));
  } catch {
    // The choice still applies for this visit; it just won't persist
  }
};

export const useDarkMode = () => {
  // Remembers an explicit choice in memory even if it could not be stored
  const hasExplicitChoice = useRef(false);

  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage first
    const stored = readStoredPreference();
    if (stored !== null) {
      return stored;
    }

    // Fall back to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);

    // Point both media variants at the active theme so the browser UI follows the toggle
    const themeColor = isDark ? THEME_COLORS.dark : THEME_COLORS.light;
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((meta) => meta.setAttribute("content", themeColor));
  }, [isDark]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a preference
      if (!hasExplicitChoice.current && readStoredPreference() === null) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Only an explicit choice is stored, so visitors who never toggle keep following the OS
  const toggle = () => {
    const next = !isDark;
    hasExplicitChoice.current = true;
    storePreference(next);
    setIsDark(next);
  };

  return { isDark, toggle };
};
