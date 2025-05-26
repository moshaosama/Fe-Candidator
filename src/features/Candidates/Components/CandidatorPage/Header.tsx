import { NavLink } from "react-router";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="rounded-2xl my-5 max-sm:w-[50vh] max-sm:mx-2 bg-gradient-to-r h-fit from-purple-700 to-50% border-1 border-white flex items-center gap-14 py-7 px-4">
        <h1 className="text-3xl text-white font-bold">Mploya</h1>
        <div className="flex items-center gap-10 mt-2 text-white text-xl">
          <NavLink to={"/careerhub/overview"}>Overview</NavLink>
          <NavLink to={"/careerhub/jobs"}>Jobs</NavLink>
          <NavLink to={""} className="flex items-center gap-1">
            My Activity <IoMdArrowDropdown className="mt-2" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
