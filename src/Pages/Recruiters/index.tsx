import SearchBar from "../../Components/SearchBar";
import AddRecruitwerModal from "../../features/Recruiters/Components/AddRecruitwerModal";
import LabelRecruiterData from "../../features/Recruiters/Components/LabelRecruiterData";
import { useAddRecruiterModalContext } from "../../features/Recruiters/Context/AddRecruiterModalContext";
import useDeleteRecruiter from "../../features/Recruiters/Hooks/useDeleteRecruiter";
import ToastNotify from "../../Components/ToastContainer";
const Recruiters = () => {
  const { AddModal, handleClickAddModel } = useAddRecruiterModalContext();
  const { checked, handleChecked, handleDeleteRecruiterById } =
    useDeleteRecruiter();

  return (
    <>
      <SearchBar
        Title="Add Recruiter"
        handleClick={handleClickAddModel}
        isDelete={checked}
        handleDelete={handleDeleteRecruiterById}
      />
      <LabelRecruiterData checked={checked} handleChecked={handleChecked} />
      {AddModal && <AddRecruitwerModal />}
      <ToastNotify />
    </>
  );
};
export default Recruiters;
