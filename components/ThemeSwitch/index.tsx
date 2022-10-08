import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const ThemeSwitch = (): JSX.Element | null => {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";
  const toggleTheme = () => {
    setTheme(dark ? "light" : "dark");
  };

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="dark:bg-green-900/20 dark:text-gray-50 bg-green-100 text-gray-500 pl-2 pr-2 rounded-md text-xs p-1"
    >
      Toggle theme
    </button>
  );
};

export default ThemeSwitch;
