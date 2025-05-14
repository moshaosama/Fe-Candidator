import SearchBar from "../../Components/SearchBar";
import Header from "../../features/Jobs/Components/Header";

const Jobs = () => {
  return (
    <>
      <Header />
      <div className="mt-5">
        <SearchBar Title="Add Job" />
      </div>
    </>
  );
};

export default Jobs;
