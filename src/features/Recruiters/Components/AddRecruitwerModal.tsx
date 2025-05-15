import Model from "../../../Components/Model";
import { useAddRecruiterModalContext } from "../Context/AddRecruiterModalContext";
import useFormData from "../Hooks/useFormData";
const AddRecruitwerModal = () => {
  const { handleClickAddModel } = useAddRecruiterModalContext();
  const { errors, handleSubmit, register, handleFormSubmit } = useFormData();
  return (
    <>
      <Model Header="Add New Recruiter">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="grid grid-cols-2 gap-2 mt-5"
        >
          <p className="text-lg flex flex-col col-span-1 gap-1">
            <label
              htmlFor="firstname"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              First Name
            </label>
            <input
              {...register("FirstName", {
                required: "Please enter your First Name",
              })}
              type="text"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
            {errors.FirstName && (
              <p className="text-white text-sm font-semibold">
                {errors.FirstName?.message as string}
              </p>
            )}
          </p>
          <p className="text-lg flex flex-col col-span-1 gap-1">
            <label
              htmlFor="lastname"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Last Name
            </label>
            <input
              {...register("LastName", {
                required: "Please enter your Last Name",
              })}
              type="text"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
            {errors.LastName && (
              <p className="text-white text-sm font-semibold">
                {errors.LastName?.message as string}
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
              {...register("Email", { required: "Please enter your Email" })}
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
            {errors.Email && (
              <p className="text-white text-sm font-semibold">
                {errors.Email?.message as string}
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
              {...register("Password", {
                required: "Please enter your Password",
              })}
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
            />
            {errors.Password && (
              <p className="text-white text-sm font-semibold">
                {errors.Password?.message as string}
              </p>
            )}
          </p>
          <div className="col-span-2 mt-4 flex justify-end items-center gap-3">
            <button
              className="border-purple-200 cursor-pointer text-purple-200 px-3 rounded-xl py-1 border-1 "
              onClick={handleClickAddModel}
            >
              Cancel
            </button>
            <button className="bg-purple-200 cursor-pointer text-black font-bold px-3 rounded-xl py-1 border-1">
              Add Recruiter
            </button>
          </div>
        </form>
      </Model>
    </>
  );
};

export default AddRecruitwerModal;
