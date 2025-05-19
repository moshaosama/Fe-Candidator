import SearchBar from "../../Components/SearchBar";
import Header from "../../features/Stages/Components/Header";
import LabelStagesData from "../../features/Stages/Components/LabelStagesData";
import StagesSection from "../../features/Stages/Components/StagesSection";
import { useAddCandidateModelContext } from "../../features/Stages/Context/useAddCandidateModelContext";
import AddModelCandidate from "../../features/Stages/Components/AddModelCandidate";
const Stages = () => {
  const { AddModal, handleClickAddModal } = useAddCandidateModelContext();
  return (
    <>
      <Header />
      <div className="mt-4">
        <SearchBar Title="Add Stages">
          <h1 className="cursor-pointer" onClick={handleClickAddModal}>
            Add Candidate
          </h1>
        </SearchBar>
      </div>
      <div className="flex gap-5 mt-3">
        <StagesSection />
        <LabelStagesData />
      </div>
      {AddModal && <AddModelCandidate />}
    </>
  );
};

export default Stages;
