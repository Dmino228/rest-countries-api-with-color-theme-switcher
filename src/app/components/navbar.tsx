"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMount(true);
  }, []);

  return mount ? (
    <nav className="w-full h-24 flex justify-between items-center px-20 relative z-10 font-semibold shadow-md shadow-primary-shadow text-light-mode-text dark:bg-dark-mode-elements dark:text-white max-md:px-4">
      <h1 className="font-extrabold text-2xl max-md:text-base">
        Where in the world?
      </h1>
      <button
        className="flex justify-center items-center gap-3"
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      >
        {currentTheme === "light" ? (
          <FaSun className="max-md:w-4" size={24} />
        ) : (
          <FaMoon className="max-md:w-4" size={24} />
        )}
        <span className="max-md:text-sm">Dark Mode</span>
      </button>
    </nav>
  ) : null;
}
