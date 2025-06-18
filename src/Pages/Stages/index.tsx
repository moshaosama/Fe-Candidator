import SearchBar from "../../Components/SearchBar";
import Header from "../../features/Stages/Components/Header";
import LabelStagesData from "../../features/Stages/Components/LabelStagesData";
import StagesSection from "../../features/Stages/Components/StagesSection";
import { useAddCandidateModelContext } from "../../features/Stages/Context/useAddCandidateModelContext";
import AddModelCandidate from "../../features/Stages/Components/AddModelCandidate";
import useGetCandidateByStage from "../../features/Stages/Hooks/useGetCandidateByStage";
import NoData from "../../Components/NoData";
import { useAddStageModelContext } from "../../features/Stages/Context/useAddStageContext";
import AddStageModel from "../../features/Stages/Components/AddStageModel";
const Stages = () => {
  const { AddModal, handleClickAddModal } = useAddCandidateModelContext();
  const { candidatorByStage } = useGetCandidateByStage();
  console.log(candidatorByStage);

  const { OpenModel, handleClickAddStageModel } = useAddStageModelContext();
  return (
    <>
      <Header />
      <div className="mt-4">
        <SearchBar Title="Add Stages" handleClick={handleClickAddStageModel}>
          <h1 className="cursor-pointer" onClick={handleClickAddModal}>
            Add Candidate
          </h1>
        </SearchBar>
      </div>
      <div className="flex gap-5 mt-3">
        <StagesSection />
        {candidatorByStage?.candidator?.result?.length > 0 ? (
          <LabelStagesData />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <NoData Title="Candidator" />
          </div>
        )}
      </div>
      {AddModal && <AddModelCandidate />}
      {OpenModel && <AddStageModel />}
    </>
  );
};

export default Stages;
