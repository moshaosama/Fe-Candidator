import ButtonModel from "./ButtonModel";
import DeleteModal from "./DeleteModal";

interface SearchBarProps {
  Title: string;
  isDelete?: boolean;
  handleClick?: () => void;
  handleDelete: () => void;
}

const SearchBar = ({
  Title,
  handleClick,
  isDelete,
  handleDelete,
}: SearchBarProps) => {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        className="border-gray-700 w-52 border-1 h-10 rounded-xl text-gray-400 text-sm px-2"
        placeholder="Search"
      />
      <div className="flex gap-2 items-center">
        <ButtonModel Title={Title} handleClick={handleClick} />
        {isDelete ? <DeleteModal handleDelete={handleDelete!} /> : null}
      </div>
    </div>
  );
};

export default SearchBar;
