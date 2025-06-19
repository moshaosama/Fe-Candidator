import { Outlet } from "react-router";
import SidebarSetting from "./SidebarSetting";

const AccountDetails = () => {
  return (
    <>
      <div>
        <h1 className="text-white font-bold text-3xl mt-10 ml-10 ">
          Account Settings
        </h1>
        <div className="flex gap-10 items-center">
          <SidebarSetting />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
