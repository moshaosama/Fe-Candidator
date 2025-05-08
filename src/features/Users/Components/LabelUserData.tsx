import LabelData from "../../../Components/LabelData";

const LabelUser = [
  {
    name: "Email",
  },
  {
    name: "Role"
  }
];

const LabelUserData = () => {
  return (
    <>
      <LabelData labels={LabelUser} />
    </>
  );
};

export default LabelUserData;
