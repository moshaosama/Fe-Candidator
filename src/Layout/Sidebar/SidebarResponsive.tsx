import clsx from "clsx";

import { TbCircleLetterMFilled } from "react-icons/tb";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { NavLink } from "react-router";
import { useHeaderContext } from "../Header/Context/HeaderContext";

const SidebarResponsive = () => {
  const { Active, handleClickActive } = useHeaderContext();
  return (
    <div
      className={clsx(
        "bg-purple-700 h-screen transition-all duration-500",
        Active === "Active" ? "w-80 p-2" : "w-0"
      )}
    >
      <div
        className={clsx(
          Active === "Active" ? "flex justify-between" : "hidden"
        )}
      >
        <TbCircleLetterMFilled className="text-white text-4xl" />
        <MdKeyboardDoubleArrowLeft
          className="text-white text-4xl"
          onClick={handleClickActive}
        />
      </div>
      <div
        className={clsx(
          "flex flex-col gap-10 mt-10",
          Active === "Active" ? "flex" : "hidden"
        )}
      >
        <NavLink
          to={"/"}
          className="text-xl text-white font-bold border border-white py-2 px-2"
        >
          Users
        </NavLink>
        <NavLink
          to={"/accounts"}
          className="text-xl text-white font-bold border border-white py-2 px-2"
        >
          Accounts
        </NavLink>
        <NavLink
          to={"/recruiters"}
          className="text-xl text-white font-bold border border-white py-2 px-2"
        >
          Recruiters
        </NavLink>
        <NavLink
          to={"/contacts"}
          className="text-xl text-white font-bold border border-white py-2 px-2"
        >
          Contacts
        </NavLink>
        <NavLink
          to={"/candidates"}
          className="text-xl text-white font-bold border border-white py-2 px-2"
        >
          Candidates
        </NavLink>
        <NavLink
          to={"/companies"}
          className="text-xl text-white font-bold border border-white py-2 px-2"
        >
          Companies
        </NavLink>
        <NavLink
          to={"/roles"}
          className="text-xl text-white font-bold border border-white py-2 px-2"
        >
          Roles
        </NavLink>
        <NavLink
          to={"/tasks"}
          className="text-xl text-white font-bold border border-white py-2 px-2"
        >
          Tasks
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarResponsive;
