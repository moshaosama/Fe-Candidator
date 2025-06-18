import { PiFlagBanner } from "react-icons/pi";

import useGetJobById from "../../Jobs/Hooks/useGetJobById";
import useGetCandidateByStage from "../Hooks/useGetCandidateByStage";
import { HiOutlineDotsVertical } from "react-icons/hi";
import DropDownStage from "./DropDownStage";
import useOpenDropDown from "../Hooks/useOpenDropDown";
import clsx from "clsx";
interface DefaultStage {
  stageTitle: string;
  id: number;
}

const StagesSection = () => {
  const { jobByID } = useGetJobById();
  const rawStages = jobByID?.jobs?.result?.[0]?.Stages;
  const stages = rawStages
    ? typeof rawStages === "string"
      ? JSON.parse(rawStages)
      : rawStages
    : [];
  const { handleClick } = useGetCandidateByStage();
  const { openDropDown, handleOpenDropDown } = useOpenDropDown();
  return (
    <>
      <div className="border-1 border-gray-600 w-72 h-[67vh] rounded-xl  text-white">
        <div className="flex justify-between  items-center p-3 rounded-t-xl  bg-[#3f37c9]">
          <div className="flex items-center gap-5 text-white">
            <PiFlagBanner className=" text-xl" />
            <h1 className="text-2xl">Stages</h1>
          </div>
          <div className="bg-gray-700 w-7 h-7 rounded-full flex justify-center items-center text-white">
            {stages?.length}
          </div>
          <hr className=" text-gray-500" />
        </div>
        <div className="relative">
          {stages?.map((defStage: DefaultStage) => (
            <div
              className={clsx(
                defStage.stageTitle == "Pending" ? "Active" : "",
                "cursor-pointer hover:bg-[#383663] rounded-xl hover:rounded-none transition-all duration-300"
              )}
              key={defStage.id}
              onClick={(e: any) => handleClick(defStage.stageTitle, e)}
            >
              <div className="flex justify-between items-center">
                <h1 className="my-4 mx-4 cursor-pointer font-bold text-md">
                  {defStage.stageTitle}
                </h1>
                <div className="flex items-center mr-4 gap-3">
                  <div className="bg-gray-700 w-7 h-7 rounded-full flex justify-center items-center text-white">
                    0
                  </div>
                  <div>
                    {defStage.stageTitle === "Pending" ||
                    defStage.stageTitle === "Hired" ||
                    defStage.stageTitle === "Rejected" ? null : (
                      <HiOutlineDotsVertical
                        className="hover:bg-gray-700 rounded-full text-2xl p-1"
                        onClick={handleOpenDropDown}
                      />
                    )}
                  </div>
                </div>
              </div>
              <hr className="mt-2 text-gray-500" />
            </div>
          ))}
          {openDropDown && <DropDownStage />}
        </div>
      </div>
    </>
  );
};

export default StagesSection;
