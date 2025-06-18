import { ReactNode } from "react";

export interface ToggleThemeContextType {
  Theme: string;
  handleToggleTheme: () => void;
}

export interface ToggleThemeContextProps {
  children: ReactNode;
}
