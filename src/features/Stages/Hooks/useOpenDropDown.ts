import { useState } from "react";

const useOpenDropDown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  return { openDropDown, handleOpenDropDown };
};

export default useOpenDropDown;
