import { createContext, useContext, useState } from "react";

const OpenAddModel = createContext<any>(null);

export const OpenAddModalCandidatorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openAddModalCandidator, setOpenAddModalCandidator] = useState(false);

  const handleOpenAddModalCandidator = () => {
    setOpenAddModalCandidator(true);
  };

  const handleCloseAddModalCandidator = () => {
    setOpenAddModalCandidator(false);
  };

  return (
    <OpenAddModel.Provider
      value={{
        openAddModalCandidator,
        handleOpenAddModalCandidator,
        handleCloseAddModalCandidator,
      }}
    >
      {children}
    </OpenAddModel.Provider>
  );
};

export const useOprenAddModalCandidator = () => useContext(OpenAddModel);
