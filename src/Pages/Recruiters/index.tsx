import SearchBar from "../../Components/SearchBar";
import AddRecruitwerModal from "../../features/Recruiters/Components/AddRecruitwerModal";
import DisplayData from "../../features/Recruiters/Components/DisplayData";
import LabelRecruiterData from "../../features/Recruiters/Components/LabelRecruiterData";
import { useAddRecruiterModalContext } from "../../features/Recruiters/Context/AddRecruiterModalContext";

const Recruiters = () => {
  const {AddModal, handleClickAddModel} = useAddRecruiterModalContext();
  return (
    <>
      <SearchBar Title="Add Recruiter" handleClick={handleClickAddModel} />
      <LabelRecruiterData />
      {AddModal && <AddRecruitwerModal/>}
      <DisplayData/>
    </>
  );
};

export default Recruiters;
