import { NavLink, Outlet } from "react-router";

export const ChoosePage = () => {
  return (
    <>
      <div className="mx-44 mt-20 relative">
        <div className="flex gap-10 font-bold">
          <NavLink
            to="/careerhub/applications"
            className={({ isActive }) =>
              isActive
                ? "pb-5 border-b-2 absolute bottom-0 border-[#432f52] text-[#432f52]"
                : "pb-5 border-none text-white absolute bottom-0 "
            }
          >
            Applications
          </NavLink>

          <NavLink
            to="/careerhub/saved_jobs"
            className={({ isActive }) => {
              return isActive
                ? "pb-5 border-b-2 absolute left-32 w-fit right-10 bottom-0 border-[#432f52] text-[#432f52]"
                : "pb-5 border-none absolute text-white left-32 right-10 bottom-0";
            }}
          >
            Saved Jobs
          </NavLink>
        </div>
        <hr className="h-[0.1pc] border-none bg-gray-400" />
      </div>
      <div className="mx-44 mt-10">
        <Outlet />
      </div>
    </>
  );
};
