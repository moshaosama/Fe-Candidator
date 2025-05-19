import { PiFlagBanner } from "react-icons/pi";
import { useParams } from "react-router";
import useGetJobById from "../../Jobs/Hooks/useGetJobById";

interface DefaultStage {
  stageTitle: string;
  id: number;
}

const StagesSection = () => {
  const { jobId } = useParams();

  const { jobByID } = useGetJobById(Number(jobId));

  const rawStages = jobByID?.jobs?.result?.[0]?.Stages;
  const stages = rawStages
    ? typeof rawStages === "string"
      ? JSON.parse(rawStages)
      : rawStages
    : [];

  return (
    <>
      <div className="border-1 border-gray-600 w-72 h-[67vh] rounded-xl  text-white">
        <div className="flex justify-between  items-center p-3 rounded-t-xl  bg-[#3f37c9]">
          <div className="flex items-center gap-5 text-white">
            <PiFlagBanner className=" text-xl" />
            <h1 className="text-2xl">Stages</h1>
          </div>
          <div className="bg-gray-700 w-7 h-7 rounded-full flex justify-center items-center text-white">
            0
          </div>
          <hr className="mt-4 text-gray-500" />
        </div>
        <div>
          {stages?.map((defStage: DefaultStage) => (
            <div className="mb-4" key={defStage.id}>
              <div className="flex justify-between items-center">
                <h1 className="my-4 mx-4 cursor-pointer font-bold text-md">
                  {defStage.stageTitle}
                </h1>
                <div className="bg-gray-700 w-7 h-7 rounded-full flex justify-center items-center text-white mr-4">
                  0
                </div>
              </div>
              <hr className="mt-2 text-gray-500" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StagesSection;
