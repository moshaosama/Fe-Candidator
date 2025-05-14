import { createContext, useContext, useState } from "react";

const AddContactModalContext = createContext<any>(null);

export const AddContactModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <AddContactModalContext.Provider value={{ openModal, handleOpenModal }}>
      {children}
    </AddContactModalContext.Provider>
  );
};

export const useAddContactModalContext = () =>
  useContext(AddContactModalContext);
