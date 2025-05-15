import LabelData from "../../../Components/LabelData";
import { LabelUser } from "../Data/LabelUserData";
import DisplayData from "./DisplayData";

const LabelUserData = () => {
  return (
    <>
      <LabelData labels={LabelUser} />
      <DisplayData />
    </>
  );
};

export default LabelUserData;
