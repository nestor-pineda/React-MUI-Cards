import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemUpdateContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemUpdateContext);
};

export function ThemeProviderLightDark({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemUpdateContext.Provider value={toggleTheme}>{children}</ThemUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

//
