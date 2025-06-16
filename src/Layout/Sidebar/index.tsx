import { FaPersonCircleCheck } from "react-icons/fa6";
import { LiaTasksSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";

import {
  MdAccountBalance,
  MdPersonSearch,
  MdOutlinePermContactCalendar,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import { RiGovernmentFill } from "react-icons/ri";
import { TbCircleLetterMFilled } from "react-icons/tb";
import { NavLink } from "react-router";
import { clsx } from "clsx";
import { useHeaderContext } from "../Header/Context/HeaderContext";

const Sidebar = () => {
  const { Active } = useHeaderContext();
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="my-5 flex flex-col  items-center gap-10">
        <TbCircleLetterMFilled className="text-white text-3xl" />
        <div className="text-white text-xl flex flex-col gap-7 ">
          <NavLink to={"/"} className="flex items-center gap-3 cursor-pointer">
            <PiUsersThreeBold />
            <label className={clsx(Active == "Active" ? "" : "hidden")}>
              Users
            </label>
          </NavLink>
          <NavLink
            to={"/accounts"}
            className="flex items-center gap-3 cursor-pointer"
          >
            <MdAccountBalance />
            <label className={clsx(Active == "Active" ? "" : "hidden")}>
              Accounts
            </label>
          </NavLink>
          <NavLink
            to={"/recruiters"}
            className="flex items-center gap-3 cursor-pointer"
          >
            <MdPersonSearch />
            <label className={clsx(Active == "Active" ? "" : "hidden")}>
              Recruiters
            </label>
          </NavLink>
          <NavLink
            to={"/contacts"}
            className="flex items-center gap-3 cursor-pointer"
          >
            <MdOutlinePermContactCalendar />
            <label className={clsx(Active == "Active" ? "" : "hidden")}>
              Contacts
            </label>
          </NavLink>
          <NavLink
            to={"/candidates"}
            className="flex items-center gap-3 cursor-pointer"
          >
            <FaPersonCircleCheck />
            <label className={clsx(Active == "Active" ? "" : "hidden")}>
              Candidates
            </label>
          </NavLink>
          <NavLink
            to={"/companies"}
            className="flex items-center gap-3 cursor-pointer"
          >
            <RiGovernmentFill />
            <label className={clsx(Active == "Active" ? "" : "hidden")}>
              Company
            </label>
          </NavLink>
          <NavLink
            to={"/roles"}
            className="flex items-center gap-3 cursor-pointer"
          >
            <MdOutlineLibraryBooks />
            <label className={clsx(Active == "Active" ? "" : "hidden")}>
              Roles
            </label>
          </NavLink>
          <NavLink
            to={"/tasks"}
            className="flex items-center gap-3 cursor-pointer"
          >
            <LiaTasksSolid />
            <label className={clsx(Active == "Active" ? "" : "hidden")}>
              Tasks
            </label>
          </NavLink>
        </div>
      </div>
      <div className="mb-5 text-white text-xl flex flex-col gap-7 ">
        <NavLink
          to={"/dashboard"}
          className="flex items-center gap-3 cursor-pointer"
        >
          <RxDashboard />
          <label className={clsx(Active == "Active" ? "" : "hidden")}>
            Dashboard
          </label>
        </NavLink>
        <NavLink
          to={"/settings"}
          className="flex items-center gap-3 cursor-pointer"
        >
          <CiSettings />
          <label className={clsx(Active == "Active" ? "" : "hidden")}>
            Settings
          </label>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
