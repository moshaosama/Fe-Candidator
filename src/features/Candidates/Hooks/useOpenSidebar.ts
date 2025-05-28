import { useState } from "react";

const useOpenSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSideBarProfile, setIsOpenSideBarProfile] = useState(false);

  const handleTriggerOpenSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleTriggerOpenSidebarProfile = () => {
    setIsOpenSideBarProfile(!isOpenSideBarProfile);
  };
  const handleCloseSidebar = () => {
    setIsOpen(false);
  };
  const handleCloseSidebarProfile = () => {
    setIsOpenSideBarProfile(false);
  };

  const handleCloseAll = () => {
    handleCloseSidebar();
    handleCloseSidebarProfile();
  };

  return {
    handleTriggerOpenSidebar,
    isOpen,
    isOpenSideBarProfile,
    handleCloseSidebar,
    handleTriggerOpenSidebarProfile,
    handleCloseSidebarProfile,
    handleCloseAll,
  };
};

export default useOpenSidebar;
