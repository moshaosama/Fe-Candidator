import SearchBar from "../../Components/SearchBar";
import ToastNotify from "../../Components/ToastContainer";
import AddContactModel from "../../features/Contact/Components/AddContactModel";
import LabelContactData from "../../features/Contact/Components/LabelContactData";
import { useAddContactModalContext } from "../../features/Contact/Context/AddContactModalContext";

const Contacts = () => {
  const { openModal, handleOpenModal } = useAddContactModalContext();
  return (
    <>
      <SearchBar Title="Add Contact" handleClick={handleOpenModal} />
      <LabelContactData />
      {openModal && <AddContactModel />}
      <ToastNotify />
    </>
  );
};

export default Contacts;

// import SearchBar from "../../Components/SearchBar";
// import ToastNotify from "../../Components/ToastContainer";
// import AddContactModel from "../../features/Contact/Components/AddContactModel";
// import LabelContactData from "../../features/Contact/Components/LabelContactData";
// import { useAddContactModalContext } from "../../features/Contact/Context/AddContactModalContext";
// import useGetData from "../../features/Users/Hook/useGetData";
// import { ISFoundData } from "../../Utils/ISFoundData";

// const Contacts = () => {
//   const { openModal, handleOpenModal } = useAddContactModalContext();
//   const { Contact } = useGetData();
//   const LabelData = ISFoundData(LabelContactData, "contact");
//   return (
//     <>
//       <SearchBar Title="Add Contact" handleClick={handleOpenModal} />
//       <LabelData Data={Contact} />
//       {openModal && <AddContactModel />}
//       <ToastNotify />
//     </>
//   );
// };

// export default Contacts;
