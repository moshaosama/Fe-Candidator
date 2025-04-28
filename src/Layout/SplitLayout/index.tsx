interface SplitLayoutProps {
  children: any;
}

const SplitLayout = ({ children }: SplitLayoutProps) => {
  const [Left, Right] = children;

  return (
    <div className="flex gap-10">
      <div className="w-14 border-white border-1 h-[50pc] mx-3 my-5 flex justify-center rounded-2xl bg-gradient-to-b from-purple-400">
        {Left}
      </div>
      <div className="rounded-2xl my-5 w-[70pc] bg-gradient-to-r h-fit from-purple-400 flex">
        {Right}
      </div>
    </div>
  );
};

export default SplitLayout;
