import { MdOutlineEdit } from "react-icons/md";

const AboutProfile = () => {
  return (
    <div className="border-2 px-10 py-5 mt-5 text-white flex justify-between gap-5 rounded-xl  border-gray-500">
      <div>
        <h1 className="text-2xl font-bold">About</h1>
      </div>
      <div>
        <MdOutlineEdit size={28} />
      </div>
    </div>
  );
};

export default AboutProfile;
