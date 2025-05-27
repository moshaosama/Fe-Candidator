import Model from "../../../Components/Model";
import useGetJobById from "../../Jobs/Hooks/useGetJobById";
import { useApplyJob } from "../Hooks/useApplyJob";

const ApplyModel = () => {
  const { jobByID } = useGetJobById();
  const { handleApplyJob, handleSubmit, register } = useApplyJob();

  return (
    <Model Header="Submit Application">
      <div className="text-white">
        <p className="text-xl">{jobByID?.jobs?.result?.[0]?.Department}</p>
        <p className="text-gray-500">{jobByID?.jobs?.result?.[0]?.Location}</p>
        <p className="my-5">
          <span className="text-red-500">* </span>Required fields
        </p>
        <form
          className="mt-5 grid grid-cols-2 gap-5"
          onSubmit={handleSubmit(handleApplyJob)}
        >
          <p className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="CV"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              CV <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
              {...register("Cv", { required: "Cv is required" })}
            />
          </p>
          <p className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="Current_Salary"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Current_Salary <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
              {...register("Current_Salary", {
                required: "Current_Salary is required",
              })}
            />
          </p>
          <p className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="Expected_Salary"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Expected_Salary <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
              {...register("Expected_Salary", {
                required: "Expected_Salary is required",
              })}
            />
          </p>
          <p className="col-span-2 flex flex-col gap-2">
            <label
              htmlFor="Currency"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Currency<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="bg-zinc-800 p-2 rounded-lg border-1 border-gray-500 text-white"
              {...register("Currency", {
                required: "Currency is required",
              })}
            />
          </p>
          <p className="col-span-2 mt-4 flex justify-end items-center gap-3">
            <button className="border-purple-200 cursor-pointer text-purple-200 px-3 rounded-xl py-1 border-1 ">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-200 cursor-pointer text-black font-bold px-3 rounded-xl py-1 border-1"
            >
              Apply Job
            </button>
          </p>
        </form>
      </div>
    </Model>
  );
};

export default ApplyModel;
