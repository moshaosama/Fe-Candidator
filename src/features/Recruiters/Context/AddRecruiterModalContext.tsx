import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface AddRecruiterModalProviderProps {
    children: ReactNode;
}


const AddRecruiterContext =  createContext<any>(null)


const AddRecruiterModalProvider = ({ children }: AddRecruiterModalProviderProps) => {

    const [AddModal , setAddModal] = useState(false);


    const handleClickAddModel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setAddModal((prev) => !prev);
        },
        []
      );
    
    return (
        <AddRecruiterContext.Provider value={{handleClickAddModel, AddModal}}>
            {children}
        </AddRecruiterContext.Provider>
    )
}


export default AddRecruiterModalProvider;



export const useAddRecruiterModalContext = () => useContext(AddRecruiterContext)
