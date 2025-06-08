import { MdOutlineEdit } from "react-icons/md";
import useSkillsData from "../Hooks/useSkillsData";
import Model from "../../../Components/Model";
import { useGetCandidateById } from "../../OverView/Hooks/useGetCandidateById";
import { IoAddOutline } from "react-icons/io5";

const SkiilsProfile = () => {
  const {
    isOpenSkillModel,
    handleTriggerOpen,
    isOpenInput,
    handleOpenInput,
    register,
    errors,
    handleSubmit,
    OnSubmit,
  } = useSkillsData();
  const { CandidateById } = useGetCandidateById();

  return (
    <div className="border-2 px-10 py-5 mt-5  text-white flex justify-between gap-5 rounded-xl  border-gray-500">
      <div>
        <h1 className="text-2xl font-bold">Skills</h1>
      </div>
      <div>
        <MdOutlineEdit
          size={28}
          cursor={"pointer"}
          onClick={handleTriggerOpen}
        />
      </div>
      {isOpenSkillModel && (
        <Model Header="Edit Skills">
          <form action="" className="mt-5" onSubmit={handleSubmit(OnSubmit)}>
            <p className="text-md">
              Edit, add or remove skills to your profile
            </p>
            <p className="mt-7">
              {CandidateById?.candidator?.result?.[0]?.Skills == null ? (
                <>
                  <h1 className="text-red-400 text-center font-bold">
                    you don't have any skill
                  </h1>
                  {!isOpenInput && (
                    <button
                      className="border-2 cursor-pointer border-green-300 rounded-full w-10 h-10 flex justify-center items-center"
                      onClick={handleOpenInput}
                    >
                      <IoAddOutline size={30} />
                    </button>
                  )}
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="border-2 border-gray-500 w-20 p-1 flex justify-center rounded-xl gap-2">
                    <h1>{CandidateById?.candidator?.result?.[0]?.Skills}</h1>
                  </div>
                  {!isOpenInput && (
                    <button
                      className="border-2 cursor-pointer border-green-300 rounded-full w-10 h-10 flex justify-center items-center"
                      onClick={handleOpenInput}
                    >
                      <IoAddOutline size={30} />
                    </button>
                  )}
                </div>
              )}
            </p>
            {isOpenInput && (
              <p className="mt-5">
                <input
                  type="text"
                  placeholder="Type to search"
                  className="w-full py-3 border-2 border-gray-500 px-2 rounded-xl"
                  {...register("Skills", { required: "Skill is required" })}
                />
              </p>
            )}
            <p className="w-full flex justify-end gap-2 mt-5">
              <button
                className="border-2 border-gray-400 w-24 cursor-pointer py-2 rounded-xl"
                onClick={handleTriggerOpen}
              >
                Cancel
              </button>
              <button className="border-2 border-gray-400 w-36 cursor-pointer py-2 rounded-xl">
                Save Changes
              </button>
            </p>
          </form>
        </Model>
      )}
    </div>
  );
};

export default SkiilsProfile;
