"use client";

import { useEffect, useMemo, useState } from "react";
import "./ThemeSwitcher.css";
import PropTypes from "prop-types";

const ThemeSwitcher = ({ darkClassName = "dark" }) => {
  const [isClient, setIsClient] = useState(false);
  // Apply the selected theme (dark or light) when the component mounts
  useEffect(() => {
    setIsClient(true);
    console.log("prefersDarkMode:");
  }, []);

  // Check the user's preferred color scheme
  const prefersDarkMode = useMemo(() => {
    if (!isClient) {
      return false;
    }
    console.log("window:", typeof window);
    if (typeof window !== "undefined") {
      if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${darkClassName})`).matches) {
        return true;
      }
    }
    return false;
  }, [darkClassName, isClient]);

  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply the selected theme by adding/removing a class to the body element
  const applyTheme = () => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);
      return;
    }
    document.body.classList.remove(darkClassName);
  };

  // Toggle between dark and light mode
  const toggleTheme = () => {
    //setIsDarkMode((isDarkMode) => !isDarkMode);
    setIsDarkMode(!isDarkMode);
    applyTheme();
  };

  return (
    <div>
      <button onClick={toggleTheme} className="btn" >
      {isDarkMode ? <img src="black-moon.png" className="icon" alt="Dark mode img" /> : <img src="yellow-sun.png" className="icon" alt="Light mode img" />}
        {//isDarkMode ? "To Dark Mode" : "To Light Mode"
        }
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};
export default ThemeSwitcher;
