import NoData from "../../Components/NoData";
import SearchBar from "../../Components/SearchBar";
import ToastNotify from "../../Components/ToastContainer";
import AddCompanyModal from "../../features/Companies/Components/AddCompanyModal";
import LabelComaniesData from "../../features/Companies/Components/LabelComaniesData";
import { useAddCompanyModalContext } from "../../features/Companies/Context/AddModalCompanyContext";
import useGetCompanyData from "../../features/Companies/Hooks/useGetCompanyData";

const Companies = () => {
  const { handleTriggerModal, isOpen } = useAddCompanyModalContext();
  const { Company } = useGetCompanyData();
  return (
    <>
      <SearchBar Title="Add Company" handleClick={handleTriggerModal} />
      {Company?.company?.result?.length === 0 ? (
        <NoData Title="Company" />
      ) : (
        <LabelComaniesData />
      )}
      {isOpen && <AddCompanyModal />}
      <ToastNotify />
    </>
  );
};

export default Companies;
