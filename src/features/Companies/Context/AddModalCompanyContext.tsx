import { createContext, useCallback, useContext, useState } from "react";
import { ContextProps } from "../../../Types/ContextType";

const AddModalContext = createContext<any>(null);

const AddModalCompanyProvider = ({ children }: ContextProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleTriggerModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <AddModalContext.Provider value={{ handleTriggerModal, isOpen }}>
      {children}
    </AddModalContext.Provider>
  );
};

export const useAddCompanyModalContext = () => useContext(AddModalContext);

export default AddModalCompanyProvider;
