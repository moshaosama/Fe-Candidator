import { useState } from "react";

const useOpenSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerOpenSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  return { handleTriggerOpenSidebar, isOpen, handleCloseSidebar };
};

export default useOpenSidebar;
