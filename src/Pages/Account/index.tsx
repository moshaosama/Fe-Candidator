import SearchBar from "../../Components/SearchBar";

import AddAccountbyGoogle from "../../features/Account/Components/AddAccountbyGoogle";
import AddAccountModel from "../../features/Account/Components/AddAccountModel";
import { useAddAccountByGoogleContext } from "../../features/Account/Context/AddAccountByGoogleContext";
import { useAddAccountContext } from "../../features/Account/Context/AddAccountContext";
const Accounts = () => {
  const { handleOpenModel, OpenModel } = useAddAccountContext();
  const { AddModelGoogle, handleAddModelGoogle } =
    useAddAccountByGoogleContext();

  return (
    <>
      <SearchBar Title="Add Account" handleClick={handleOpenModel} />
      {OpenModel && (
        <AddAccountModel
          handleClickModel={handleOpenModel}
          handleAddModelGoogle={handleAddModelGoogle}
        />
      )}
      {AddModelGoogle && <AddAccountbyGoogle />}
    </>
  );
};

export default Accounts;
