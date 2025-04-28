import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useLocation } from "react-router";

const Dashboard = () => {
  const { pathname } = useLocation();
  const [pathName, setPathName] = useState(pathname);

  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <div className="my-5 flex items-center justify-center gap-2 px-3 text-white text-3xl">
      <MdKeyboardDoubleArrowRight />
      <hr className="h-7 border-gray-500 border-1" />
      <h1 className="text-[19px] font-bold" key={pathname}>
        {pathName.slice(1)}
      </h1>
    </div>
  );
};

export default Dashboard;
