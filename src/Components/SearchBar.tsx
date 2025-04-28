import AddModal from "./AddModal";

interface SearchBarProps {
  Title: string;
}

const SearchBar = ({ Title }: SearchBarProps) => {
  return (
    <form className="flex justify-between">
      <input
        type="text"
        className="border-gray-700 w-52 border-1 h-10 rounded-xl text-gray-400 text-sm px-2"
        placeholder="Search"
      />
      <AddModal Title={Title} />
    </form>
  );
};

export default SearchBar;
