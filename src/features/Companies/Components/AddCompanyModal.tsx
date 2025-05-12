import Model from "../../../Components/Model";
import { useAddCompanyModalContext } from "../Context/AddModalCompanyContext";
import useFormData from "../Hooks/useFormData";
const AddCompanyModal = () => {
  const { handleTriggerModal } = useAddCompanyModalContext();
  const { register, handleSubmit, errors, onSubmit } = useFormData();
  return (
    <>
      <Model Header="Add New Company">
        <form
          className="grid grid-cols-2 gap-2 mt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-lg flex flex-col col-span-1 gap-1">
            <label
              htmlFor="FirstName"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="FirstName"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
              {...register("FirstName", { required: "First Name is required" })}
            />
            {errors.FirstName && (
              <p className="text-red-500 text-sm">
                {errors.FirstName.message as string}
              </p>
            )}
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
              id="LastName"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
              {...register("LastName", { required: "Last Name is required" })}
            />
            {errors.LastName && (
              <p className="text-red-500 text-sm">
                {errors.LastName.message as string}
              </p>
            )}
          </p>
          <p className="text-lg flex flex-col col-span-2 gap-1">
            <label
              htmlFor="Language"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Language
            </label>
            <select
              id="Language"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
              {...register("Language", { required: "Language is required" })}
            >
              <option value="Language" selected>
                Language
              </option>
              <option value="En">En</option>
              <option value="Ar">Ar</option>
            </select>
            {errors.Language && (
              <p className="text-red-500 text-sm">
                {errors.Language.message as string}
              </p>
            )}
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
              id="Email"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
              {...register("Email", { required: "Email is required" })}
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">
                {errors.Email.message as string}
              </p>
            )}
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
              id="Password"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
              {...register("Password", { required: "Password is required" })}
            />
            {errors.Password && (
              <p className="text-red-500 text-sm">
                {errors.Password.message as string}
              </p>
            )}
          </p>

          <div className="col-span-2 mt-4 flex justify-end items-center gap-3">
            <button
              className="border-purple-200 cursor-pointer text-purple-200 px-3 rounded-xl py-1 border-1 "
              onClick={handleTriggerModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-200 cursor-pointer text-black font-bold px-3 rounded-xl py-1 border-1"
            >
              Add Company
            </button>
          </div>
        </form>
      </Model>
    </>
  );
};

export default AddCompanyModal;
