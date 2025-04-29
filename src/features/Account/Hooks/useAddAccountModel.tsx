import { useCallback, useState } from "react";

const useAddAccountModel = () => {
  const [OpenModel, setOpenModel] = useState<boolean>(true);

  const handleOpenModel = useCallback(() => {
    setOpenModel(!OpenModel);
  }, [OpenModel]);

  return {
    OpenModel,
    handleOpenModel,
  };
};

export default useAddAccountModel;
