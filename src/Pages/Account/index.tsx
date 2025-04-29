import SearchBar from "../../Components/SearchBar";
import AddAccountModel from "../../features/Account/Components/AddAccountModel";
import useAddAccountModel from "../../features/Account/Hooks/useAddAccountModel";

const Accounts = () => {
  const { handleOpenModel, OpenModel } = useAddAccountModel();

  return (
    <>
      <SearchBar Title="Add Account" handleClick={handleOpenModel} />
      {OpenModel && <AddAccountModel handleClick={handleOpenModel} />}
    </>
  );
};

export default Accounts;
