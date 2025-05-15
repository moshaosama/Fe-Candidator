import LabelData from "../../../Components/LabelData";
import { labelJobData } from "../Data/LabelJobdata";
import DisplayData from "./DisplayData";

const LabelJobData = () => {
  return (
    <>
      <LabelData labels={labelJobData} />
      <DisplayData />
    </>
  );
};

export default LabelJobData;
