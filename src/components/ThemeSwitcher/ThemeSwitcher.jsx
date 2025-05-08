"use client";

//import { useEffect, useMemo, useState } from "react";
// import { useTheme } from "../ThemeContext/ThemeContext.jsx";
// import "./ThemeSwitcher.css";
// //import { useTheme } from '../ThemeContext/ThemeContext.jsx';
// import PropTypes from "prop-types";

// const ThemeSwitcher = ({ darkClassName = "dark" }) => {
  
//   //const { theme, togTheme } = useTheme();

//   const [isClient, setIsClient] = useState(false);
//   // Apply the selected theme (dark or light) when the component mounts
//   useEffect(() => {
//     setIsClient(true);
//     console.log("prefersDarkMode:");
//   }, []);

//   // Check the user's preferred color scheme
//   const prefersDarkMode = useMemo(() => {
//     if (!isClient) {
//       return false;
//     }
//     console.log("window:", typeof window);
//     if (typeof window !== "undefined") {
//       if (window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${darkClassName})`).matches) {
//         return true;
//       }
//     }
//     return false;
//   }, [darkClassName, isClient]);

//   // State to hold the selected theme
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   // Apply the selected theme by adding/removing a class to the body element
//   const applyTheme = () => {
//     const ovalContainer = document.querySelector('.oval-container');
//     if (isDarkMode) {
//       document.body.classList.add(darkClassName);
//       ovalContainer.classList.add('dark-mode');
//       ovalContainer.classList.remove('light-mode');
//     } else {
//       document.body.classList.remove(darkClassName);
//       ovalContainer.classList.add('light-mode');
//       ovalContainer.classList.remove('dark-mode');
//     }
//   };

//   // Toggle between dark and light mode
//   const toggleTheme = () => {
//     //togTheme;
//     //setIsDarkMode((isDarkMode) => !isDarkMode);
//     setIsDarkMode(!isDarkMode);
//     applyTheme();
//   };
//   //<button onClick={toggleTheme} className="btn" >
//   //{isDarkMode ? <img src="black-moon.png" className="icon" alt="Dark mode img" /> : <img src="yellow-sun.png" className="icon" alt="Light mode img" />}
//   //</button>
//   return (
//     <div>
//   <div className="theme-switcher">
//     <div className="oval-container">
//       <img src="yellow-sun.png" className="icon left-icon" alt="Light mode" />
//       <label className="switch">
//         <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
//         <span className="slider round"></span>
//       </label>
//       <img src="black-moon.png" className="icon right-icon" alt="Dark mode" />
//     </div>
//   </div>
//     </div>
    
//   );
// };

// ThemeSwitcher.propTypes = {
//   darkClassName: PropTypes.string,
// };
// export default ThemeSwitcher;

import { useEffect} from "react";
import { useTheme } from "../ThemeContext/ThemeContext.jsx";
import "./ThemeSwitcher.css";
import PropTypes from "prop-types";

  // Apply the selected theme by adding/removing a class to the body element
  const applyTheme = (theme, darkClassName) => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add(darkClassName);
      body.classList.remove("light");
    } else {
      body.classList.add("light");
      body.classList.remove(darkClassName);
    }
    const root = document.documentElement; // Access the root element (HTML)
  root.setAttribute("data-theme", theme); // Set the data-theme attribute
  };


  const ThemeSwitcher = ({ darkClassName = "dark" }) => {
    const { theme, toggleTheme } = useTheme();
  
    useEffect(() => {
      applyTheme(theme, darkClassName);
      console.log("Theme applied within the theme switcher and should paply the theme:", theme);
    }, [theme, darkClassName]);
  
    return (
      <div className="theme-switcher">
        <div className="oval-container">
          <img src="yellow-sun.png" className="icon left-icon" alt="Light mode" />
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "light"}
              onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
          <img src="black-moon.png" className="icon right-icon" alt="Dark mode" />
        </div>
      </div>
    );
  };

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default ThemeSwitcher;
