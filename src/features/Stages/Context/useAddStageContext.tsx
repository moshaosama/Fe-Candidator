import { createContext, useContext, useState } from "react";

const AddStageModelContext = createContext<any>(null);

const AddStageModelProvider = ({ children }: { children: React.ReactNode }) => {
  const [OpenModel, setOpenModel] = useState(false);

  const handleClickAddStageModel = () => {
    setOpenModel(!OpenModel);
  };

  return (
    <AddStageModelContext.Provider
      value={{ OpenModel, handleClickAddStageModel }}
    >
      {children}
    </AddStageModelContext.Provider>
  );
};

export default AddStageModelProvider;

export const useAddStageModelContext = () => useContext(AddStageModelContext);
