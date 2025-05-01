import { useAddAccountByGoogleContext } from "../Context/AddAccountByGoogleContext";
import useAddAccountByGoogle from "../Hooks/useAddAccountByGoogle";

const AddAccountbyGoogle = () => {
  const { handleBackBtn } = useAddAccountByGoogle();
  const { handleAddModelGoogle } = useAddAccountByGoogleContext();

  return (
    <div className="absolute top-0 left-0 bg-[#030303b3] flex flex-col gap-5 justify-center items-center w-full h-full">
      <h1 className="text-gray-300 text-2xl">Add New Account</h1>
      <div className="flex gap-7">
        <button className="bg-purple-700 hover:bg-purple-400 cursor-pointer transition-all duration-500 p-2 rounded-xl text-white font-bold">
          Login With Google
        </button>
      </div>
      <div className="flex text-white gap-5 w-96 justify-end items-center">
        <div>
          <h1 className="cursor-pointer" onClick={handleAddModelGoogle}>
            Cancel
          </h1>
        </div>
        <div>
          <h1
            onClick={handleBackBtn}
            className="cursor-pointer border-1 border-gray-500 text-gray-500 rounded-xl hover:border-white px-3"
          >
            Back
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AddAccountbyGoogle;
