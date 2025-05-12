import Model from "../../../Components/Model";
import { useAddCompanyModalContext } from "../Context/AddModalCompanyContext";

const AddCompanyModal = () => {
  const { handleTriggerModal } = useAddCompanyModalContext();
  return (
    <>
      <Model Header="Add New Company">
        <form className="grid grid-cols-2 gap-2 mt-3">
          <p className="text-lg flex flex-col col-span-1 gap-1">
            <label
              htmlFor="FirstName"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              First Name
            </label>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
          </p>
          <p className="text-lg flex flex-col col-span-1 gap-1">
            <label
              htmlFor="LastName"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Last Name
            </label>
            <input
              type="text"
              name="LastName"
              id="LastName"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
          </p>
          <p className="text-lg flex flex-col col-span-2 gap-1">
            <label
              htmlFor="Language"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Language
            </label>
            <select
              name="Language"
              id="Language"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            >
              <option value="Language" selected>
                Language
              </option>
              <option value="En">En</option>
              <option value="Ar">Ar</option>
            </select>
          </p>
          <p className="text-lg flex flex-col col-span-2 gap-1">
            <label
              htmlFor="email"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Email
            </label>
            <input
              type="text"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
          </p>
          <p className="text-lg flex flex-col col-span-2 gap-1">
            <label
              htmlFor="password"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Password
            </label>
            <input
              type="password"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
          </p>
          <p className="col-span-2 flex justify-end items-center gap-3 mt-5">
            <button className="bg-purple-200 cursor-pointer hover:bg-purple-300 text-black font-bold px-3 rounded-xl py-1 border-1">
              Add Company
            </button>
            <button
              className="border-purple-200 cursor-pointer  text-purple-200 px-3 rounded-xl py-1 border-1"
              onClick={handleTriggerModal}
            >
              Cancel
            </button>
          </p>
        </form>
      </Model>
    </>
  );
};

export default AddCompanyModal;
