import LabelData from "../../../Components/LabelData";
import { StageData } from "../Data/StageData";
import DisplayData from "./DisplayData";
const LabelStagesData = () => {
  return (
    <div className="border-2 border-gray-500 w-full rounded-xl">
      <LabelData labels={StageData} />
      <DisplayData />
    </div>
  );
};

export default LabelStagesData;
