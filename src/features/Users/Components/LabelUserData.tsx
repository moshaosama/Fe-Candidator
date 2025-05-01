import LabelData from "../../../Components/LabelData";

const LabelUser = [
  {
    name: "First Name",
  },
  {
    name: "Last Name",
  },
  {
    name: "Email",
  },
  {
    name: "First Name",
  },
  {
    name: "Last Name",
  },
  {
    name: "Email",
  },
];

const LabelUserData = () => {
  return (
    <>
      <LabelData LabelData={LabelUser} />
    </>
  );
};

export default LabelUserData;
