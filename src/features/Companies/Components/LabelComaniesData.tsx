import LabelData from "../../../Components/LabelData";
import { LabelDataCompany } from "../Data/LabelData";
import DisplayData from "./DisplayData";

const LabelComaniesData = () => {
  return (
    <>
      <LabelData labels={LabelDataCompany} />
      <DisplayData />
    </>
  );
};

export default LabelComaniesData;
