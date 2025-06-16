import { createContext, ReactNode, useContext, useState } from "react";

const headerContext = createContext<any>(null);

enum ActiveSidebar {
  Active = "Active",
  UnActive = "UnActive",
}

interface HeaderContextProps {
  children: ReactNode;
}

const HeaderProvider = ({ children }: HeaderContextProps) => {
  const [Active, setActive] = useState<ActiveSidebar>(ActiveSidebar.UnActive);

  const handleClickActive = async () => {
    setActive(
      Active === ActiveSidebar.Active
        ? ActiveSidebar.UnActive
        : ActiveSidebar.Active
    );
  };
  return (
    <headerContext.Provider value={{ Active, handleClickActive }}>
      {children}
    </headerContext.Provider>
  );
};

export default HeaderProvider;

export const useHeaderContext = () => useContext(headerContext);
