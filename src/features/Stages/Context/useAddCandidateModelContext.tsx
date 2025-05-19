import { createContext, ReactNode, useContext, useState } from "react";

const AddCandidateModelContext = createContext<any>(null);

interface useGetRecruiterIDProviderProps {
  children?: ReactNode;
}

const AddCandidateModelProvider = ({
  children,
}: useGetRecruiterIDProviderProps) => {
  const [AddModal, setAddModal] = useState(false);

  const handleClickAddModal = () => {
    setAddModal(!AddModal);
  };

  return (
    <AddCandidateModelContext.Provider
      value={{ AddModal, handleClickAddModal }}
    >
      {children}
    </AddCandidateModelContext.Provider>
  );
};

export default AddCandidateModelProvider;

export const useAddCandidateModelContext = () =>
  useContext(AddCandidateModelContext);
