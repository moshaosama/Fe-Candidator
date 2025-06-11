import { MdOutlineEdit } from "react-icons/md";
import useSkillsData from "../Hooks/useSkillsData";

import { IoAddOutline } from "react-icons/io5";
import Model from "../../../../Components/Model";

const SkiilsProfile = () => {
  const {
    isOpenSkillModel,
    handleTriggerOpen,
    isOpenInput,
    handleOpenInput,
    register,
    handleSubmit,
    OnSubmit,
    Skills,
  } = useSkillsData();

  return (
    <div className="border-2 px-10 py-5 mt-5  text-white flex justify-between gap-5 rounded-xl  border-gray-500">
      <div>
        <h1 className="text-2xl font-bold">Skills</h1>
        <div className="flex gap-5 mt-4">
          {Skills?.result?.result?.map((skill: any, index: number) => (
            <div
              key={index}
              className="flex items-center gap-4 cursor-pointer hover:bg-black hover:text-white font-bold transition-all duration-500 rounded-xl"
            >
              <div className="border-2 border-gray-500 w-20 p-1 flex justify-center rounded-xl gap-2">
                <h1>{skill.Skill}</h1>
              </div>
            </div>
          ))}
        </div>
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
          <form action="" className="mt-5 " onSubmit={handleSubmit(OnSubmit)}>
            <p className="text-md">
              Edit, add or remove skills to your profile
            </p>
            <p className="mt-7  gap-5 grid grid-cols-7">
              {Skills?.result?.result?.map((skill: any, index: number) => (
                <div key={index} className="flex items-center gap-4 ">
                  <div className="border-2 border-gray-500 hover:bg-black  cursor-pointer transition-all duration-500  w-20 p-1 flex justify-center rounded-xl gap-2">
                    <h1>{skill.Skill}</h1>
                  </div>
                </div>
              ))}
              {!isOpenInput && (
                <button
                  className="border-2 cursor-pointer border-green-300 rounded-full w-10 h-10 flex justify-center items-center"
                  onClick={handleOpenInput}
                >
                  <IoAddOutline size={30} />
                </button>
              )}
            </p>
            {isOpenInput && (
              <p className="mt-5">
                <input
                  type="text"
                  placeholder="Type to search"
                  className="w-full py-3 border-2 border-gray-500 px-2 rounded-xl"
                  {...register("Skill", { required: "Skill is required" })}
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
