import { createContext, ReactNode, useContext, useState } from "react";

const dasboardContext = createContext<any>(null);

enum ActiveSidebar {
  Active = "Active",
  UnActive = "UnActive",
}

interface DashboardContextProps {
  children: ReactNode;
}

const DashboardProvider = ({ children }: DashboardContextProps) => {
  const [Active, setActive] = useState<ActiveSidebar>(ActiveSidebar.UnActive);

  const handleClickActive = async () => {
    setActive(
      Active === ActiveSidebar.Active
        ? ActiveSidebar.UnActive
        : ActiveSidebar.Active
    );
  };
  return (
    <dasboardContext.Provider value={{ Active, handleClickActive }}>
      {children}
    </dasboardContext.Provider>
  );
};

export default DashboardProvider;

export const useDashboardContext = () => useContext(dasboardContext);
