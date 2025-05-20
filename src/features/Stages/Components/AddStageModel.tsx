import Model from "../../../Components/Model";
import useAddStage from "../Hooks/useAddStage";
import { useAddStageModelContext } from "../Context/useAddStageContext";
const AddStageModel = () => {
  const { register, handleSubmit, errors, onSubmit } = useAddStage();
  const { handleClickAddStageModel } = useAddStageModelContext();
  return (
    <>
      <Model Header="Add Stage">
        <form
          className="grid grid-cols-2 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="flex flex-col gap-2 col-span-2">
            <label
              htmlFor="stageName"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Stage Name
            </label>
            <input
              type="text"
              id="stageName"
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
              {...register("stageTitle", {
                required: "Stage Name is required",
              })}
            />
            {errors.stageTitle && (
              <p className="text-red-500 text-sm">
                {errors.stageTitle.message as string}
              </p>
            )}
          </p>
          <p className="col-span-2 mt-4 flex justify-end items-center gap-3">
            <button
              className="border-purple-200 cursor-pointer text-purple-200 px-3 rounded-xl py-1 border-1 "
              onClick={handleClickAddStageModel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-200 cursor-pointer text-black font-bold px-3 rounded-xl py-1 border-1"
            >
              Add Stage
            </button>
          </p>
        </form>
      </Model>
    </>
  );
};

export default AddStageModel;
