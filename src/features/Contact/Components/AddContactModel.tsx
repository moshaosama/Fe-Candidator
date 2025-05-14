import Model from "../../../Components/Model";
import { useAddContactModalContext } from "../Context/AddContactModalContext";
import { useFormData } from "../Hooks/useFormData";

const AddContactModel = () => {
  const { handleOpenModal } = useAddContactModalContext();
  const { register, handleSubmit, errors, onSubmit } = useFormData();
  return (
    <>
      <Model Header="Add Contact">
        <form
          className="grid grid-cols-2 gap-2 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="col-span-1 flex flex-col gap-2">
            <label
              htmlFor="First Name"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              First Name
            </label>
            <input
              type="text"
              className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
              {...register("FirstName", { required: "First Name is required" })}
            />
            {errors.FirstName && (
              <p className="text-red-500 text-sm">
                {errors.FirstName.message as string}
              </p>
            )}
          </p>
          <p className="col-span-1 flex flex-col gap-2">
            <label
              htmlFor="Last Name"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Last Name
            </label>
            <input
              type="text"
              className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
              {...register("LastName", { required: "Last Name is required" })}
            />
            {errors.LastName && (
              <p className="text-red-500 text-sm">
                {errors.LastName.message as string}
              </p>
            )}
          </p>
          <p className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="Email"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Email
            </label>
            <input
              type="text"
              id="Email"
              className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
              {...register("Email", { required: "Email is required" })}
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">
                {errors.Email.message as string}
              </p>
            )}
          </p>
          <p className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="Password"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
              {...register("Password", { required: "Password is required" })}
            />
            {errors.Password && (
              <p className="text-red-500 text-sm">
                {errors.Password.message as string}
              </p>
            )}
          </p>
          <p className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="Telephone"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Telephone
            </label>
            <input
              type="number"
              id="Telephone"
              className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
              {...register("Telephone", { required: "Telephone is required" })}
            />
            {errors.Telephone && (
              <p className="text-red-500 text-sm">
                {errors.Telephone.message as string}
              </p>
            )}
          </p>
          <p className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="LinkedURL"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              LinkedURL
            </label>
            <input
              type="text"
              id="LinkedURL"
              className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
              {...register("LinkedinUrl", {
                required: "LinkedURL is required",
              })}
            />
            {errors.LinkedURL && (
              <p className="text-red-500 text-sm">
                {errors.LinkedURL.message as string}
              </p>
            )}
          </p>
          <div className="col-span-2 mt-4 flex justify-end items-center gap-3">
            <button
              className="border-purple-200 cursor-pointer text-purple-200 px-3 rounded-xl py-1 border-1 "
              onClick={handleOpenModal}
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

export default AddContactModel;
