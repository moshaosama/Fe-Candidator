import Model from "../../../Components/Model";
import { useHasAccountContext } from "../../../Context/useHasAccountContext";
import { useFormData } from "../Hooks/useFormData";

export const FormLogin = () => {
  const { toggleHasAccount } = useHasAccountContext();
  const { OnSubmit, errors, handleSubmit, register } = useFormData();
  return (
    <>
      <Model Header="Login">
        <form
          action=""
          className="grid grid-cols-2 mt-3"
          onSubmit={handleSubmit(OnSubmit)}
        >
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
              {...register("Email", { required: "Email is required" })}
            />
          </p>
          {errors.Email && (
            <p className="text-red-500">{errors.Email.message as string}</p>
          )}
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
              {...register("Password", { required: "Password is required" })}
            />
          </p>
          {errors.Password && (
            <p className="text-red-500">{errors.Password.message as string}</p>
          )}
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
