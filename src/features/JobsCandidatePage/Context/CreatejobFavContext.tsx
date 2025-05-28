import { createContext, ReactNode, useContext, useState } from "react";

interface CreateJobFavContextType {
  isFav: boolean;
  handleTriggerIsLove: (e: any) => void;
}

const CreateJobFavContext = createContext<CreateJobFavContextType | null>(null);

interface CreatejobFavContextProps {
  children: ReactNode;
}

export const CreateJobFavProvider = ({
  children,
}: CreatejobFavContextProps) => {
  const [isFav, setIsFav] = useState(false);

  const handleTriggerIsLove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFav((prev) => !prev);
    console.log(e.currentTarget);
  };

  return (
    <>
      <CreateJobFavContext.Provider value={{ handleTriggerIsLove, isFav }}>
        {children}
      </CreateJobFavContext.Provider>
    </>
  );
};

export const useCreateJobFav = () => {
  const context = useContext(CreateJobFavContext);
  if (!context) {
    throw new Error(
      "useCreateJobFav must be used within a CreateJobFavProvider"
    );
  }
  return context;
};
