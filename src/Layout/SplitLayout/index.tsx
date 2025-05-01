import { ReactNode } from "react";
import { Outlet } from "react-router";
import { clsx } from "clsx";
import { useDashboardContext } from "../../Components/Dashboard/Context/DashboardContext";

interface SplitLayoutProps {
  children: [ReactNode, ReactNode];
}

const SplitLayout = ({ children }: SplitLayoutProps) => {
  const [Dashboard, Sidebar] = children;
  const { Active } = useDashboardContext();

  return (
    <div className="flex gap-10">
      <div
        className={clsx(
          "transition-all duration-700 border-white border-1 h-[50pc] mx-3 my-5 flex justify-center rounded-2xl bg-gradient-to-b from-purple-700 to-10%",
          Active === "Active" ? "w-56" : "w-20"
        )}
      >
        {Sidebar}
      </div>
      <div className="flex flex-col w-full mr-20">
        <div className="rounded-2xl my-5 bg-gradient-to-r h-fit from-purple-700 to-50% border-1 border-white flex">
          {Dashboard}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SplitLayout;
