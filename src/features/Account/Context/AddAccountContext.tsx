import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface AddAccountContextProps {
  children: ReactNode;
}

const AddAccountContext = createContext<any>(null);
const AddAccountProvider = ({ children }: AddAccountContextProps) => {
  const [OpenModel, setOpenModel] = useState<boolean>(false);

  const handleOpenModel = useCallback(() => {
    setOpenModel(!OpenModel);
  }, [OpenModel]);

  return (
    <AddAccountContext.Provider value={{ OpenModel, handleOpenModel }}>
      {children}
    </AddAccountContext.Provider>
  );
};

export default AddAccountProvider;

export const useAddAccountContext = () => useContext(AddAccountContext);
