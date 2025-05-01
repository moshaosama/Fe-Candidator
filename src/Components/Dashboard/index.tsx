import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import OpenSidebarFactory from "../../Utils/OpenSidebarFactory";
import { useDashboardContext } from "./Context/DashboardContext";

const Dashboard = () => {
  const { pathname } = useLocation();
  const [pathName, setPathName] = useState(pathname);
  const { Active, handleClickActive } = useDashboardContext();

  const SidebarElement = document.getElementById("Sidebar");
  useEffect(() => {
    const GetSidebarElement = async () => {
      try {
        if (SidebarElement) {
          console.log(SidebarElement);
        }
      } catch (err) {
        return err;
      }
    };

    GetSidebarElement();
  }, []);

  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <div className="my-5 flex items-center justify-center gap-2 px-3 text-white text-3xl">
      <OpenSidebarFactory Type={Active} onClick={handleClickActive} />
      <hr className="h-7 border-gray-500 border-1" />
      <h1 className="text-[19px] font-bold" key={pathname}>
        {pathName.slice(1).charAt(0).toUpperCase() +
          pathName.slice(2).toLowerCase()}
      </h1>
    </div>
  );
};

export default Dashboard;
