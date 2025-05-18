import SearchBar from "../../Components/SearchBar";
import { AddModalCandidator } from "../../features/Candidates/Components/AddModalCandidator";
import LabelCandidateData from "../../features/Candidates/Components/LabelCandidateData";
import { useOprenAddModalCandidator } from "../../features/Candidates/Context/OpenAddModalContext";
const Candidates = () => {
  const { openAddModalCandidator, handleOpenAddModalCandidator } =
    useOprenAddModalCandidator();
  return (
    <>
      <SearchBar
        Title="Add Candidate"
        handleClick={handleOpenAddModalCandidator}
      />
      <LabelCandidateData />
      {openAddModalCandidator && <AddModalCandidator />}
    </>
  );
};

export default Candidates;
