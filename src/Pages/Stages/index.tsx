import SearchBar from "../../Components/SearchBar";
import Header from "../../features/Stages/Components/Header";
import LabelStagesData from "../../features/Stages/Components/LabelStagesData";
import StagesSection from "../../features/Stages/Components/StagesSection";

const Stages = () => {
  return (
    <>
      <Header />
      <div className="mt-4">
        <SearchBar Title="Add Stages">
          <h1 className="cursor-pointer">Add Candidate</h1>
        </SearchBar>
      </div>
      <div className="flex gap-5 mt-3">
        <StagesSection />
        <LabelStagesData />
      </div>
    </>
  );
};

export default Stages;
