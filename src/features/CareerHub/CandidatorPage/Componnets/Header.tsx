import { NavLink } from "react-router";
import { IoMdArrowDropdown } from "react-icons/io";
import { useGetToken } from "../../../../Hooks/useGetToken";
import { SideBarActivite } from "./SideBarActivites";
import useOpenSidebar from "../../../Candidates/Hooks/useOpenSidebar";
import { SidebarProfile } from "./SidebarProfile";

const Header = () => {
  const { User } = useGetToken();
  const userProfile = User?.result;
  const {
    isOpen,
    handleTriggerOpenSidebar,
    isOpenSideBarProfile,
    handleTriggerOpenSidebarProfile,
    handleCloseAll,
  } = useOpenSidebar();

  return (
    <>
      <div className="rounded-t-2xl my-5 max-sm:w-[50vh] max-sm:mx-2 bg-gradient-to-r h-fit from-purple-700 to-50% border-1 border-white flex items-center justify-between  py-7 px-4">
        <div className="flex items-center gap-14 ml-40">
          <h1 className="text-3xl text-white font-bold">Mploya</h1>
          <div className="flex items-center gap-10 mt-2 text-white text-xl">
            <NavLink to={"/careerhub/overview"} onClick={handleCloseAll}>
              Overview
            </NavLink>
            <NavLink to={"/careerhub/jobs"} onClick={handleCloseAll}>
              Jobs
            </NavLink>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={handleTriggerOpenSidebar}
            >
              My Activity <IoMdArrowDropdown className="mt-2" />
            </div>
          </div>
        </div>
        <div
          className="mr-40 text-white flex items-center gap-2 cursor-pointer"
          onClick={handleTriggerOpenSidebarProfile}
        >
          <h1 className="text-2xl font-bold">
            {userProfile?.FirstName?.charAt(0)}
            {userProfile?.LastName?.charAt(0)}
          </h1>
          <i>
            <IoMdArrowDropdown className="mt-1 text-2xl" />
          </i>
        </div>
      </div>
      {isOpen && <SideBarActivite />}
      {isOpenSideBarProfile && <SidebarProfile />}
    </>
  );
};

export default Header;
