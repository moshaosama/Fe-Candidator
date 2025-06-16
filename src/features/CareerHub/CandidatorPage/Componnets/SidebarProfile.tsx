import { Link } from "react-router";
import useLogout from "../Hooks/useLogout";

export const SidebarProfile = () => {
  const { handleLogout } = useLogout();
  return (
    <>
      <div className="bg-white w-52 z-50 absolute p-2 -mt-5 mx-[102pc] shadow-lg rounded-2xl shadow-black">
        <Link to={"careerhub/me/edit"}>
          <div className="hover:bg-gray-400 p-2 rounded-xl cursor-pointer">
            <h1>My profile</h1>
          </div>
        </Link>
        <Link to={"careerhub/settings"}>
          <div className="hover:bg-gray-400 p-2 rounded-xl cursor-pointer">
            <h1>Setting</h1>
          </div>
        </Link>
        <div
          className="hover:bg-gray-400 p-2 rounded-xl cursor-pointer"
          onClick={handleLogout}
        >
          <h1>Logout</h1>
        </div>
      </div>
    </>
  );
};
