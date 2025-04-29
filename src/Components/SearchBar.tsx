import ButtonModel from "./ButtonModel";

interface SearchBarProps {
  Title: string;
  handleClick?: () => void;
}

const SearchBar = ({ Title, handleClick }: SearchBarProps) => {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        className="border-gray-700 w-52 border-1 h-10 rounded-xl text-gray-400 text-sm px-2"
        placeholder="Search"
      />
      <ButtonModel Title={Title} handleClick={handleClick} />
    </div>
  );
};

export default SearchBar;
