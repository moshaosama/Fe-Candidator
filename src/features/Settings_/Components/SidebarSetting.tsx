import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import useSetActive from "../Hooks/useSetActive";
import { Link } from "react-router";

const SidebarSetting = () => {
  const { handleClick } = useSetActive();
  return (
    <>
      <div className="mx-10 mt-10 h-fit bg-white w-60 rounded-xl shadow-2xl shadow-black">
        <Link to={"/settings/account-setting"}>
          <div
            onClick={handleClick}
            className="flex items-center p-3 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:rounded-t-lg Active"
          >
            <IoMdPerson />
            <h1>Profile Settings</h1>
          </div>
        </Link>
        <Link to={"change-password"}>
          <div
            onClick={handleClick}
            className="flex items-center p-3 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:rounded-b-lg"
          >
            <RiLockPasswordLine />
            <h1>Password</h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SidebarSetting;
