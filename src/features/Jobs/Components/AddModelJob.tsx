import Model from "../../../Components/Model";
import { ContactData } from "../../Contact/Types/ContactData";
import { useAddOpenModelJobContext } from "../Context/useAddOpenModelContext";
import useFormData from "../Hooks/useFormData";
import useGetContact from "../Hooks/useGetData";

const AddModelJob = () => {
  const { handleOpenModel } = useAddOpenModelJobContext();
  const { Contact } = useGetContact();
  const { register, handleSubmit, errors, onSubmit } = useFormData();
  return (
    <Model Header="Add Job">
      <form
        className="grid grid-cols-2 gap-5 mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="col-span-2 flex flex-col gap-2">
          <label
            htmlFor="Title"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            Job Title
          </label>
          <input
            type="text"
            id="Title"
            className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
            {...register("JobTitle", { required: "Job Title is required" })}
          />
          {errors.JobTitle && (
            <p className="text-red-500 text-sm">
              {errors.JobTitle.message as string}
            </p>
          )}
        </p>
        <p className="col-span-2 flex flex-col gap-2">
          <label
            htmlFor="Description"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            Description
          </label>
          <textarea
            id="Description"
            className="bg-zinc-800 p-2 h-24 rounded-lg border-1 border-gray-500 text-white"
            {...register("Description", {
              required: "Description is required",
            })}
          />
          {errors.Description && (
            <p className="text-red-500 text-sm">
              {errors.Description.message as string}
            </p>
          )}
        </p>
        <p className="col-span-1 flex flex-col gap-2">
          <label
            htmlFor="Gender"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            Gender
          </label>
          <select
            id="Gender"
            className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
            {...register("Gender", {
              required: "Gender is required",
            })}
          >
            <option value="Gender">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.Gender && (
            <p className="text-red-500 text-sm">
              {errors.Gender.message as string}
            </p>
          )}
        </p>
        <p className="col-span-1 flex flex-col gap-2">
          <label
            htmlFor="Nedded"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            Number Needed
          </label>
          <input
            type="number"
            id="Nedded"
            className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
            {...register("NumNeeded", {
              required: "Number Needed is required",
            })}
          />
          {errors.NumNeeded && (
            <p className="text-red-500 text-sm">
              {errors.NumNeeded.message as string}
            </p>
          )}
        </p>
        <p className="col-span-1 flex flex-col gap-2">
          <label
            htmlFor="Location"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            Location *
          </label>
          <input
            type="text"
            id="Location"
            className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
            {...register("Location", {
              required: "Location is required",
            })}
          />
          {errors.Location && (
            <p className="text-red-500 text-sm">
              {errors.Location.message as string}
            </p>
          )}
        </p>
        <p className="col-span-1 flex flex-col gap-2">
          <label
            htmlFor="Commitment"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            Commitment *
          </label>
          <input
            type="text"
            id="Commitment"
            className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
            {...register("Commitment", {
              required: "Commitment is required",
            })}
          />
          {errors.Commitment && (
            <p className="text-red-500 text-sm">
              {errors.Commitment.message as string}
            </p>
          )}
        </p>
        <p className="col-span-1 flex flex-col gap-2">
          <label
            htmlFor="Department"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            Department *
          </label>
          <input
            type="text"
            id="Department"
            className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
            {...register("Department", {
              required: "Department is required",
            })}
          />
          {errors.Department && (
            <p className="text-red-500 text-sm">
              {errors.Department.message as string}
            </p>
          )}
        </p>
        <p className="col-span-2 flex flex-col gap-2">
          <label
            htmlFor="Hiring Team"
            className="text-gray-500 font-semibold font-sans mx-1"
          >
            Hiring Team Contact *
          </label>
          <select
            id="Hiring Team"
            className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
            {...register("Contact", {
              required: "Hiring Team Contact is required",
            })}
          >
            {Contact?.contact?.result?.map(
              (contact: ContactData, index: number) => (
                <option
                  value={contact.FirstName + " " + contact.LastName}
                  key={index}
                >
                  {contact.FirstName + " " + contact.LastName ==
                  "Hiring Team Contact"
                    ? "Hiring Team Contact"
                    : contact.FirstName + " " + contact.LastName}
                </option>
              )
            )}
          </select>
          {errors.Contact && (
            <p className="text-red-500 text-sm">
              {errors.Contact.message as string}
            </p>
          )}
        </p>
        <div className="col-span-2 mt-4 flex justify-end items-center gap-3">
          <button
            className="border-purple-200 cursor-pointer text-purple-200 px-3 rounded-xl py-1 border-1 "
            onClick={handleOpenModel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-purple-200 cursor-pointer text-black font-bold px-3 rounded-xl py-1 border-1"
          >
            Save Change
          </button>
        </div>
      </form>
    </Model>
  );
};

export default AddModelJob;
