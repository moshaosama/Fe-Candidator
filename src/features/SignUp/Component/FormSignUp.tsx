import Model from "../../../Components/Model";
import { useHasAccountContext } from "../../../Context/useHasAccountContext";

import useFormData from "../Hooks/useFormData";

const FormSignUp = () => {
  const { toggleHasAccount } = useHasAccountContext();
  const { handleSubmit, onSubmit } = useFormData();
  return (
    <>
      <Model Header="SignUp">
        <form
          className="grid grid-cols-2 gap-4 mt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-lg flex flex-col col-span-1 gap-1">
            <label
              htmlFor="FirstName"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              FirstName
            </label>
            <input
              type="text"
              id="FirstName"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
          </p>
          <p className="text-lg flex flex-col col-span-1 gap-1">
            <label
              htmlFor="LastName"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              LastName
            </label>
            <input
              type="text"
              id="LastName"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
          </p>
          <p className="text-lg flex flex-col col-span-2 gap-1">
            <label
              htmlFor="email"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
          </p>
          <p className="text-lg flex flex-col col-span-2 gap-1">
            <label
              htmlFor="Password"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
          </p>
          <p className="col-span-2 mt-4 flex justify-end items-center gap-3">
            <button
              className="border-purple-200 cursor-pointer text-purple-200 px-3 rounded-xl py-1 border-1 "
              onClick={toggleHasAccount}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-200 cursor-pointer text-black font-bold px-3 rounded-xl py-1 border-1"
            >
              Create Account
            </button>
          </p>
        </form>
      </Model>
    </>
  );
};

export default FormSignUp;
