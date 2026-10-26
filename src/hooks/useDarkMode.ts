import { useState, useEffect } from "react";

// Matches --color-bg-primary in index.css and the theme-color tags in index.html
const THEME_COLORS = { light: "#f9fafb", dark: "#111827" };

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage first
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) {
      return JSON.parse(stored);
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
      const stored = localStorage.getItem("darkMode");
      if (stored === null) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Only an explicit choice is stored, so visitors who never toggle keep following the OS
  const toggle = () => {
    const next = !isDark;
    localStorage.setItem("darkMode", JSON.stringify(next));
    setIsDark(next);
  };

  return { isDark, toggle };
};
