"use client";
import React, { createContext, useEffect, useState, useContext } from 'react';
//import useLocalStorage from "use-local-storage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = defaultDark ? "dark" : "light";
      setTheme(initialTheme);
      localStorage.setItem("theme", initialTheme);
    }
  }, []);
  //const [theme, setTheme] = useState('light');
  console.log('ThemeProvider is rendering');
  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Persist the theme
      console.log("New theme:", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {console.log('ThemeContext value:', { theme, toggleTheme })}
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () =>  {
  console.log('Current Theme:', ThemeContext);
  return useContext(ThemeContext)
};

// "use client";
// import React, { createContext, useState } from 'react';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');
//   console.log('ThemeProvider is rendering');
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {console.log('ThemeContext value:', { theme, toggleTheme })}
//       {children}
//     </ThemeContext.Provider>
//   );
// };

