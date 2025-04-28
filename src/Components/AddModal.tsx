interface AddMoodalProps {
  Title: string;
}

const AddModal = ({ Title }: AddMoodalProps) => {
  return (
    <button className="bg-purple-700 rounded-xl hover:bg-purple-500 transition-all duration-300 text-white w-20 h-9 cursor-pointer">
      {Title}
    </button>
  );
};

export default AddModal;
