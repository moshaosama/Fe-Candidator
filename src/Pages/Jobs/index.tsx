import SearchBar from "../../Components/SearchBar";
import AddModelJob from "../../features/Jobs/Components/AddModelJob";
import Header from "../../features/Jobs/Components/Header";
import LabelJobData from "../../features/Jobs/Components/LabelJobData";
import { useAddOpenModelJobContext } from "../../features/Jobs/Context/useAddOpenModelContext";
const Jobs = () => {
  const { openModel, handleOpenModel } = useAddOpenModelJobContext();
  return (
    <>
      <Header />
      <div className="mt-5">
        <SearchBar Title="Add Job" handleClick={handleOpenModel} />
      </div>
      <LabelJobData />
      {openModel && <AddModelJob />}
    </>
  );
};

export default Jobs;
