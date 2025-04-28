import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="my-5 flex items-center gap-2 px-3 text-white text-3xl">
      <MdKeyboardDoubleArrowRight />
      <hr className="h-7 border-gray-500 border-1" />
    </div>
  );
};

export default Dashboard;
