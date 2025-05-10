import { RiDeleteBin6Fill } from "react-icons/ri";

interface DeleteModalProps {
  handleDelete: () => void;
}

const DeleteModal = ({ handleDelete }: DeleteModalProps) => {
  return (
    <>
      <button
        onClick={handleDelete}
        className="flex items-center gap-3 hover:bg-red-500 hover:text-black border-purple-500 border-2 transition-all duration-300 text-white w-fit px-4 rounded-xl h-9 cursor-pointer"
      >
        Delete <RiDeleteBin6Fill />
      </button>
    </>
  );
};

export default DeleteModal;
