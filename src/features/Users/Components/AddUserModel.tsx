import Model from "../../../Components/Model";
import { userAddUserModelContext } from "../Context/AddUserModelConext";

const AddUserModel = () => {
  const { handleClickAddModel } = userAddUserModelContext();
  return (
    <Model Header="Add New User">
      <form action="" className="mt-5 grid grid-cols-2 gap-2">
        <p className="text-lg flex flex-col col-span-1 gap-1">
          <label
            htmlFor="firstname"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            First Name
          </label>
          <input
            type="text"
            className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
          />
        </p>
        <p className="text-lg flex flex-col col-span-1 gap-1">
          <label
            htmlFor="firstname"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            Last Name
          </label>
          <input
            type="text"
            className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500  text-white"
          />
        </p>
        <p className="text-lg flex flex-col col-span-2 gap-1">
          <label
            htmlFor="firstname"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            Email
          </label>
          <input
            type="text"
            className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500  text-white"
          />
        </p>
        <p className="text-lg flex flex-col col-span-2 gap-1">
          <label
            htmlFor="firstname"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            Password
          </label>
          <input
            type="password"
            className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500  text-white"
          />
        </p>
        <div className="col-span-2 mt-4 flex justify-end items-center gap-3">
          <button
            className="border-purple-200 cursor-pointer text-purple-200 px-3 rounded-xl py-1 border-1 "
            onClick={handleClickAddModel}
          >
            Cancel
          </button>
          <button className="bg-purple-200  cursor-pointer text-black font-bold px-3 rounded-xl py-1 border-1 ">
            Add User
          </button>
        </div>
      </form>
    </Model>
  );
};

export default AddUserModel;
