import React, { createContext, ReactNode, useContext, useState } from "react";

interface ResumeContextData {
  isEditResume: boolean;
  isUploadResume: boolean;
  handleTriggerEditResume: () => void;
  handleTriggerUploadResume: () => void;
  HandeClickBtn: () => void;
}

interface ResumeProviderProps {
  children: ReactNode;
}

const ResumeContext = createContext<ResumeContextData | null>(null);

const ResumeProvider = ({ children }: ResumeProviderProps) => {
  const [isEditResume, setIsEditResume] = useState(false);
  const [isUploadResume, setIsUploadResume] = useState(false);

  const handleTriggerEditResume = () => {
    setIsEditResume((prev) => !prev);
  };

  const handleTriggerUploadResume = () => {
    setIsUploadResume((prev) => !prev);
  };

  const HandeClickBtn = () => {
    handleTriggerUploadResume();
    handleTriggerEditResume();
  };

  return (
    <ResumeContext.Provider
      value={{
        isEditResume,
        isUploadResume,
        handleTriggerEditResume,
        handleTriggerUploadResume,
        HandeClickBtn,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;

export const useResumeContext = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error("useResumeContext must be used within a ResumeProvider");
  }

  return context;
};
