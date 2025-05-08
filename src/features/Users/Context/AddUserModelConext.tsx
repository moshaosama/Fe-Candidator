import { useState, useCallback, createContext, useContext } from "react";
import { ContextProps } from "../../../Types/ContextType";

const AddUserModelContext = createContext<any>(null);

const AddUserModelProvider = ({ children }: ContextProps) => {
  const [AddModel, setAddModel] = useState(false);

  const handleClickAddModel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setAddModel((prev) => !prev);
    },
    []
  );

  return (
    <AddUserModelContext.Provider value={{ AddModel, handleClickAddModel }}>
      {children}
    </AddUserModelContext.Provider>
  );
};

export const userAddUserModelContext = () => useContext(AddUserModelContext);

export default AddUserModelProvider;
