import { useLocation } from "react-router";
import OpenSidebarFactory from "../../Utils/OpenSidebarFactory";
import { useDashboardContext } from "./Context/DashboardContext";
import TextDashboardFactory from "../../Utils/TextDashboardFactory";

const Dashboard = () => {
  const { pathname } = useLocation();

  const { Active, handleClickActive } = useDashboardContext();

  return (
    <div className="my-5 flex items-center justify-center gap-2 px-3 text-white text-3xl">
      <OpenSidebarFactory Type={Active} onClick={handleClickActive} />
      <hr className="h-7 border-gray-500 border-1" />
      <h1 className="text-[19px] font-bold" key={pathname}>
        <TextDashboardFactory />
      </h1>
    </div>
  );
};

export default Dashboard;
