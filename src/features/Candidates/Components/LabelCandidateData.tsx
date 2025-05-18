import LabelData from "../../../Components/LabelData";
import { CandidatesData } from "../Data/CandidatesData";
import DisplayData from "./DisplayData";

const LabelCandidateData = () => {
  return (
    <>
      <LabelData labels={CandidatesData} />
      <DisplayData />
    </>
  );
};

export default LabelCandidateData;
