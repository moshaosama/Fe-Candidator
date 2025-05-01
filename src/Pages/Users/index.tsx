import SearchBar from "../../Components/SearchBar";
import AddUserModel from "../../features/Users/Components/AddUserModel";
import { userAddUserModelContext } from "../../features/Users/Context/AddUserModelConext";

const Users = () => {
  const { AddModel, handleClickAddModel } = userAddUserModelContext();
  return (
    <>
      <SearchBar Title="Add User" handleClick={handleClickAddModel} />
      {AddModel && <AddUserModel />}
    </>
  );
};

export default Users;
