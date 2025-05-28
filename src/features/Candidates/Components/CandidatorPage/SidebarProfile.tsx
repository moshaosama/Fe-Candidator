import { Link } from "react-router";

export const SidebarProfile = () => {
  return (
    <>
      <div className="bg-white w-52 z-50 absolute p-2 -mt-5 mx-[102pc] shadow-lg rounded-2xl shadow-black">
        <Link to={"careerhub/me/edit"}>
          <div className="hover:bg-gray-400 p-2 rounded-xl cursor-pointer">
            <h1>My profile</h1>
          </div>
        </Link>
        <div className="hover:bg-gray-400 p-2 rounded-xl cursor-pointer">
          <h1>Setting</h1>
        </div>
        <div className="hover:bg-gray-400 p-2 rounded-xl cursor-pointer">
          <h1>Logout</h1>
        </div>
      </div>
    </>
  );
};
