import { FaPersonCircleCheck } from "react-icons/fa6";
import { LiaTasksSolid } from "react-icons/lia";
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

const Sidebar = () => {
  return (
    <div className="my-5 flex flex-col items-center gap-10">
      <TbCircleLetterMFilled className="text-white text-3xl" />
      <div className="text-white text-xl flex flex-col gap-7 ">
        <NavLink to={"/"} className="flex items-center gap-3 cursor-pointer">
          <PiUsersThreeBold />
          <label className="Label">Users</label>
        </NavLink>
        <NavLink
          to={"/accounts"}
          className="flex items-center gap-3 cursor-pointer"
        >
          <MdAccountBalance />
          <label className="Label">Accounts</label>
        </NavLink>
        <NavLink
          to={"/recruiters"}
          className="flex items-center gap-3 cursor-pointer"
        >
          <MdPersonSearch />
          <label className="Label">Recruiters</label>
        </NavLink>
        <NavLink
          to={"/contacts"}
          className="flex items-center gap-3 cursor-pointer"
        >
          <MdOutlinePermContactCalendar />
          <label className="Label">Contacts</label>
        </NavLink>
        <NavLink
          to={"/candidates"}
          className="flex items-center gap-3 cursor-pointer"
        >
          <FaPersonCircleCheck />
          <label className="Label">Candidates</label>
        </NavLink>
        <NavLink
          to={"/companies"}
          className="flex items-center gap-3 cursor-pointer"
        >
          <RiGovernmentFill />
          <label className="Label">Company</label>
        </NavLink>
        <NavLink
          to={"/roles"}
          className="flex items-center gap-3 cursor-pointer"
        >
          <MdOutlineLibraryBooks />
          <label className="Label">Roles</label>
        </NavLink>
        <NavLink
          to={"/tasks"}
          className="flex items-center gap-3 cursor-pointer"
        >
          <LiaTasksSolid />
          <label className="Label">Tasks</label>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
