import Model from "../../../Components/Model";
import { useHasAccountContext } from "../../../Context/useHasAccountContext";

export const FormLogin = () => {
  const { toggleHasAccount } = useHasAccountContext();
  return (
    <>
      <Model Header="Login">
        <form action="" className="grid grid-cols-2 mt-3">
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
          <p className="flex flex-col items-center justify-center col-span-2 mt-4">
            <button
              type="submit"
              className="bg-purple-200 cursor-pointer text-black font-bold px-10 rounded-xl py-1 border-1"
            >
              Login
            </button>
            <p className="text-white mt-3">
              Don't have an account?{" "}
              <span
                className="text-gray-500 font-bold hover:underline cursor-pointer"
                onClick={toggleHasAccount}
              >
                Register
              </span>
            </p>
          </p>
        </form>
      </Model>
    </>
  );
};
