import LabelData from "../../../Components/LabelData";
import { labelContactData } from "../Data/LabelContactData";
import DisplayData from "./DisplayData";

const LabelContactData = () => {
  return (
    <>
      <LabelData labels={labelContactData} />
      <DisplayData />
    </>
  );
};

export default LabelContactData;
