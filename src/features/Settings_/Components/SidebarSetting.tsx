import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import useSetActive from "../Hooks/useSetActive";
import { Link } from "react-router";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../../Hooks/useLogout";

const SidebarSetting = () => {
  const { handleClick } = useSetActive();
  const { handleLogout } = useLogout();
  return (
    <>
      <div className="mx-10 mt-10 h-fit bg-white w-60 rounded-xl shadow-2xl shadow-black">
        <Link to={"/settings/account-setting"}>
          <div
            onClick={handleClick}
            className="flex gap-5 items-center p-3 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:rounded-t-lg Active"
          >
            <IoMdPerson />
            <h1>Profile Settings</h1>
          </div>
        </Link>
        <Link to={"change-password"}>
          <div
            onClick={handleClick}
            className="flex gap-5 items-center p-3 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:rounded-b-lg"
          >
            <RiLockPasswordLine />
            <h1>Password</h1>
          </div>
        </Link>
        <div
          onClick={handleLogout}
          className="flex gap-5 items-center p-3 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:rounded-b-lg"
        >
          <CiLogout />
          <h1>Logout</h1>
        </div>
      </div>
    </>
  );
};

export default SidebarSetting;
