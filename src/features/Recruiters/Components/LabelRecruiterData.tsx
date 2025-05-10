import LabelData from "../../../Components/LabelData";
import NoData from "../../../Components/NoData";
import { RecruiterData } from "../Data/Data";
import useDisplayData from "../Hooks/useDisplayData";
import DisplayData from "./DisplayData";

interface LabelRecruiterDataProps {
  checked: boolean;
  handleChecked: () => void;
}

const LabelRecruiterData = ({ handleChecked }: LabelRecruiterDataProps) => {
  const { recruiter } = useDisplayData();
  return (
    <>
      {recruiter.length > 0 ? (
        <div>
          <LabelData labels={RecruiterData} />
          <DisplayData handleChecked={handleChecked} />
        </div>
      ) : (
        <NoData Title="recruiters" />
      )}
    </>
  );
};

export default LabelRecruiterData;
