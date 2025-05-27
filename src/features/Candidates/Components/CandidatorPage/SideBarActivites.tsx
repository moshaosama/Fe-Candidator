import { NavLink } from "react-router";

export const SideBarActivite = () => {
  return (
    <div className="bg-white w-52 z-50 absolute p-2 -mt-5 mx-[34pc] shadow-lg rounded-2xl shadow-black">
      <div className="hover:bg-gray-300 p-3 rounded-2xl cursor-pointer">
        <NavLink to={"/careerhub/applications"} className="font-bold">
          My Applications
        </NavLink>
      </div>
    </div>
  );
};
