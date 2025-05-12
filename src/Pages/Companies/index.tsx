import SearchBar from "../../Components/SearchBar";
import AddCompanyModal from "../../features/Companies/Components/AddCompanyModal";
import LabelComaniesData from "../../features/Companies/Components/LabelComaniesData";

const Companies = () => {
  return (
    <>
      <SearchBar Title="Add Company" />
      <LabelComaniesData />
      <AddCompanyModal />
    </>
  );
};

export default Companies;
