import { createContext, useCallback, useContext, useState } from "react";
import { ContextProps } from "../../../Types/ContextType";

const AddOpenModelJobContext = createContext<any>(null);

const AddOpenModelJobProvider = ({ children }: ContextProps) => {
  const [openModel, setOpenModel] = useState(false);
  const handleOpenModel = useCallback(() => {
    setOpenModel(!openModel);
  }, [openModel]);

  return (
    <AddOpenModelJobContext.Provider value={{ openModel, handleOpenModel }}>
      {children}
    </AddOpenModelJobContext.Provider>
  );
};

export const useAddOpenModelJobContext = () =>
  useContext(AddOpenModelJobContext);

export default AddOpenModelJobProvider;
