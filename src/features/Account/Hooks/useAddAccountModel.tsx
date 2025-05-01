import { useCallback, useState } from "react";

const useAddAccountModel = () => {
  const [OpenModel, setOpenModel] = useState<boolean>(false);

  const handleOpenModel = useCallback(() => {
    setOpenModel(!OpenModel);
  }, [OpenModel]);

  return {
    OpenModel,
    handleOpenModel,
  };
};

export default useAddAccountModel;
