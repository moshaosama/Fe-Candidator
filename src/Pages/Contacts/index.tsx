import NoData from "../../Components/NoData";
import SearchBar from "../../Components/SearchBar";
import ToastNotify from "../../Components/ToastContainer";
import AddContactModel from "../../features/Contact/Components/AddContactModel";
import LabelContactData from "../../features/Contact/Components/LabelContactData";
import { useAddContactModalContext } from "../../features/Contact/Context/AddContactModalContext";
import useGetContact from "../../features/Jobs/Hooks/useGetData";
const Contacts = () => {
  const { openModal, handleOpenModal } = useAddContactModalContext();
  const { Contact } = useGetContact();
  console.log(Contact);

  return (
    <>
      <SearchBar Title="Add Contact" handleClick={handleOpenModal} />
      {Contact?.contact?.result?.length === 0 ? (
        <NoData Title="Contacts" />
      ) : (
        <LabelContactData />
      )}
      {openModal && <AddContactModel />}
      <ToastNotify />
    </>
  );
};

export default Contacts;
