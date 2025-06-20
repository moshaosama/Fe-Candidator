import { Outlet } from "react-router";
import SidebarSetting from "./SidebarSetting";

const AccountDetails = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-white font-bold text-3xl mt-10 ml-10 ">
          Account Settings
        </h1>
        <div className="flex gap-5 max-sm:flex-col">
          <SidebarSetting />
          <div className="mt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
