import NoData from "../../Components/NoData";
import SearchBar from "../../Components/SearchBar";
import { AddModalCandidator } from "../../features/Candidates/Components/AddModalCandidator";
import LabelCandidateData from "../../features/Candidates/Components/LabelCandidateData";
import { useOprenAddModalCandidator } from "../../features/Candidates/Context/OpenAddModalContext";
import { useGetCandidator } from "../../features/Candidates/Hooks/useGetCandidator";
const Candidates = () => {
  const { openAddModalCandidator, handleOpenAddModalCandidator } =
    useOprenAddModalCandidator();
  const { Candidator } = useGetCandidator();
  return (
    <>
      <SearchBar
        Title="Add Candidate"
        handleClick={handleOpenAddModalCandidator}
      />
      {Candidator.candidator.result?.length === 0 ? (
        <NoData Title="Candidator" />
      ) : (
        <LabelCandidateData />
      )}
      {openAddModalCandidator && <AddModalCandidator />}
    </>
  );
};

export default Candidates;

// import SearchBar from "../../Components/SearchBar";
// import { AddModalCandidator } from "../../features/Candidates/Components/AddModalCandidator";
// import LabelCandidateData from "../../features/Candidates/Components/LabelCandidateData";
// import { useOprenAddModalCandidator } from "../../features/Candidates/Context/OpenAddModalContext";
// import { useGetCandidator } from "../../features/Candidates/Hooks/useGetCandidator";
// import { ISFoundData } from "../../Utils/ISFoundData";
// const Candidates = () => {
//   const { openAddModalCandidator, handleOpenAddModalCandidator } =
//     useOprenAddModalCandidator();
//   const { Candidator } = useGetCandidator();
//   const LabelData = ISFoundData(LabelCandidateData, "Candidator"); //HOC
//   return (
//     <>
//       <SearchBar
//         Title="Add Candidate"
//         handleClick={handleOpenAddModalCandidator}
//       />
//       <LabelData Data={Candidator} />
//       {openAddModalCandidator && <AddModalCandidator />}
//     </>
//   );
// };

// export default Candidates;
