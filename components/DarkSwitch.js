import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const [manualTheme, setManualTheme] = useState("light"); // Disable dark mode by default

  // When mounted on the client, now we can show the UI
  useEffect(() => setMounted(true), []);

  // Load the preferred theme from local storage if available
  useEffect(() => {
    const preferredTheme = localStorage.getItem("theme");
    if (preferredTheme) {
      setManualTheme(preferredTheme);
    }
  }, []);

  // Save the preferred theme to local storage when it changes
  useEffect(() => {
    localStorage.setItem("theme", manualTheme);
  }, [manualTheme]);

  const { setTheme } = useTheme();

  // Manually set the theme based on the manualTheme state
  useEffect(() => {
    setTheme(manualTheme);
  }, [manualTheme, setTheme]);

  if (!mounted) return null;

  const toggleTheme = () => {
    setManualTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex items-center">
      {manualTheme === "dark" ? (
        <button
          onClick={toggleTheme}
          className="text-gray-300 rounded-full outline-none focus:outline-none"
        >
          <span className="sr-only">Light Mode</span>
          {/* Your light mode SVG icon here */}
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          className="text-gray-500 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20"
        >
          <span className="sr-only">Dark Mode</span>
          {/* Your dark mode SVG icon here */}
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
