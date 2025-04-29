interface ButtonModelProps {
  Title: string;
  handleClick?: () => void;
}

const ButtonModel = ({ Title, handleClick }: ButtonModelProps) => {
  return (
    <button
      className="bg-purple-700 rounded-xl hover:bg-purple-500 transition-all duration-300 text-white w-fit px-2 h-9 cursor-pointer"
      onClick={handleClick}
    >
      {Title}
    </button>
  );
};

export default ButtonModel;
