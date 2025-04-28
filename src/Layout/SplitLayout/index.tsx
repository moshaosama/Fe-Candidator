import { Outlet } from "react-router";

interface SplitLayoutProps {
  children: any;
}

const SplitLayout = ({ children }: SplitLayoutProps) => {
  const [Left, Right] = children;

  return (
    <div className="flex gap-10">
      <div className="w-14 border-white border-1 h-[50pc] mx-3 my-5 flex justify-center rounded-2xl bg-gradient-to-b from-purple-700 to-10%">
        {Right}
      </div>
      <div className="flex flex-col w-full mr-20">
        <div className="rounded-2xl my-5 bg-gradient-to-r h-fit from-purple-700 to-50% border-1 border-white flex">
          {Left}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SplitLayout;
