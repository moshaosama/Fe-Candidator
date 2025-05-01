import { useState, useCallback, createContext, useContext } from "react";
import { ContextProps } from "../../../Types/ContextType";

const AddAccountByGoogleContext = createContext<any>(null);

const AddAccountByGoogleProvider = ({ children }: ContextProps) => {
  const [AddModelGoogle, setAddModelGoogle] = useState<boolean>(false);

  const handleAddModelGoogle = useCallback(() => {
    setAddModelGoogle(!AddModelGoogle);
  }, [AddModelGoogle]);
  return (
    <AddAccountByGoogleContext.Provider
      value={{ AddModelGoogle, handleAddModelGoogle }}
    >
      {children}
    </AddAccountByGoogleContext.Provider>
  );
};

export default AddAccountByGoogleProvider;

export const useAddAccountByGoogleContext = () =>
  useContext(AddAccountByGoogleContext);
