import { ReactNode } from "react";
import { Outlet } from "react-router";
import { clsx } from "clsx";
import SidebarResponsive from "../Sidebar/SidebarResponsive";
import { useHeaderContext } from "../Header/Context/HeaderContext";

interface SplitLayoutProps {
  children: [ReactNode, ReactNode];
}

const SplitLayout = ({ children }: SplitLayoutProps) => {
  const [Header, Sidebar] = children;
  const { Active } = useHeaderContext();

  return (
    <div className="flex gap-10">
      <div
        className={clsx(
          "transition-all max-sm:hidden duration-700 border-white border-1 h-[95.5vh] mx-3 my-5 flex justify-center rounded-2xl bg-gradient-to-b from-purple-700 to-10%",
          Active === "Active" ? "w-56" : "w-20"
        )}
      >
        {Sidebar}
      </div>

      <div className="sm:hidden absolute">
        <SidebarResponsive />
      </div>
      <div className="flex flex-col w-full mr-20">
        <div className="rounded-2xl my-5 max-sm:w-[50vh] max-sm:mx-2 bg-gradient-to-r h-fit from-purple-700 to-50% border-1 border-white flex">
          {Header}
        </div>
        <div className="max-sm:mx-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SplitLayout;
