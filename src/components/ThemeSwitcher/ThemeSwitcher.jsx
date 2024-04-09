//"use client";

import { useEffect, useMemo, useState } from 'react';
import './ThemeSwitcher.css';
import PropTypes from 'prop-types';

const ThemeSwitcher = ({ darkClassName }) => {
  // Check the user's preferred color scheme
  const prefersDarkMode = useMemo(() => {
    if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${darkClassName})`).matches) {
      return true;
    }
    return false;
  }, [darkClassName]);

  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  // Apply the selected theme (dark or light) when the component mounts
  useEffect(() => {
    applyTheme();
  });

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    applyTheme();
  };

  // Apply the selected theme by adding/removing a class to the body element
  const applyTheme = () => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);
      return;
    }
    document.body.classList.remove(darkClassName);
  };

  return (
    <div>
      <button onClick={toggleTheme} data-testid="themeSwitcherButton" className="btn">
        {isDarkMode ? 'To Dark Mode' : 'To Light Mode'}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
  darkClassName: 'dark',
};

export default ThemeSwitcher;
