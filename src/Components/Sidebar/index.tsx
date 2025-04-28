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
        <NavLink to={"/"}>
          <PiUsersThreeBold />
        </NavLink>
        <NavLink to={"/accounts"}>
          <MdAccountBalance />
        </NavLink>
        <NavLink to={"/recruiters"}>
          <MdPersonSearch />
        </NavLink>
        <NavLink to={"/contacts"}>
          <MdOutlinePermContactCalendar />
        </NavLink>
        <NavLink to={"/candidates"}>
          <FaPersonCircleCheck />
        </NavLink>
        <NavLink to={"/companies"}>
          <RiGovernmentFill />
        </NavLink>
        <NavLink to={"/roles"}>
          <MdOutlineLibraryBooks />
        </NavLink>
        <NavLink to={"/tasks"}>
          <LiaTasksSolid />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
