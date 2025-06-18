import { ReactNode } from "react";
import ButtonModel from "./ButtonModel";
import DeleteModal from "./DeleteModal";
import clsx from "clsx";
import { useToggleTheme } from "../Context/useToggleThemeContext";

interface SearchBarProps {
  Title: string;
  isDelete?: boolean;
  handleClick?: () => void;
  handleDelete?: () => void;
  children?: ReactNode;
}

const SearchBar = ({
  Title,
  handleClick,
  isDelete,
  handleDelete,
  children,
}: SearchBarProps) => {
  const { Theme } = useToggleTheme();
  return (
    <div className="flex justify-between">
      <input
        type="text"
        className={clsx(
          "border-gray-700 w-52 max-sm:w-32 border-1 h-10 rounded-xl text-sm px-2",
          Theme == "dark" ? "text-gray-400 " : "bg-[#a5a4a4ab] text-black"
        )}
        placeholder="Search"
      />
      <div className="flex items-center gap-4">
        <div className="text-gray-500 font-bold">{children}</div>
        <div className="flex gap-2 items-center">
          <ButtonModel Title={Title} handleClick={handleClick} />
          {isDelete ? <DeleteModal handleDelete={handleDelete!} /> : null}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
