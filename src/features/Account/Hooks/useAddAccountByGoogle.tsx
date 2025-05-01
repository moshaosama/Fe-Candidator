import { useAddAccountByGoogleContext } from "../Context/AddAccountByGoogleContext";
import { useAddAccountContext } from "../Context/AddAccountContext";

const useAddAccountByGoogle = () => {
  const { handleAddModelGoogle } = useAddAccountByGoogleContext();
  const { handleOpenModel } = useAddAccountContext();
  const handleBackBtn = () => {
    handleAddModelGoogle();
    handleOpenModel();
  };

  return { handleBackBtn };
};

export default useAddAccountByGoogle;
