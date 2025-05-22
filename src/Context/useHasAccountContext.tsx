import { createContext, ReactNode, useContext, useState } from "react";

interface HasAccountContextType {
  hasAccount: boolean;
  toggleHasAccount: () => void;
}

const HasAccountContext = createContext<HasAccountContextType | null>(null);

interface HasAccountProviderProps {
  children: ReactNode;
}

export const HasAccountProvider = ({ children }: HasAccountProviderProps) => {
  const [hasAccount, setHasAccount] = useState<boolean>(true);

  const toggleHasAccount = () => {
    setHasAccount((prev) => !prev);
  };

  return (
    <HasAccountContext.Provider value={{ hasAccount, toggleHasAccount }}>
      {children}
    </HasAccountContext.Provider>
  );
};

export const useHasAccountContext = (): HasAccountContextType => {
  const context = useContext(HasAccountContext);
  if (!context) {
    throw new Error(
      "useHasAccountContext must be used within a HasAccountProvider"
    );
  }
  return context;
};
