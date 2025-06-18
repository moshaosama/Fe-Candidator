import { createContext, useContext, useEffect, useState } from "react";
import {
  ToggleThemeContextProps,
  ToggleThemeContextType,
} from "../Types/ToggleThemeContext";

export const ToggleThemeContext = createContext<ToggleThemeContextType | null>(
  null
);

const ToggleThemeProvider = ({ children }: ToggleThemeContextProps) => {
  const [Theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    window.localStorage.setItem("theme", Theme);
  }, [Theme]);

  const handleToggleTheme = () => {
    setTheme(Theme === "dark" ? "light" : "dark");
  };

  return (
    <ToggleThemeContext.Provider value={{ Theme, handleToggleTheme }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export default ToggleThemeProvider;

export const useToggleTheme = () => {
  const context = useContext(ToggleThemeContext);
  if (!context) {
    throw new Error("useToggleTheme must be used within a ToggleThemeProvider");
  }
  return context;
};
