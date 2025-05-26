import { FaArrowRight } from "react-icons/fa6";
import { useGetToken } from "../../Hooks/useGetToken";

export const TasksOverFlow = () => {
  const { User } = useGetToken();
  return (
    <>
      <div className="border-2 border-gray-400  p-5 my-3 mx-20 rounded-xl text-white w-96">
        <h1 className="font-bold">Hi {User?.result?.FirstName}</h1>
        <p>Welcome to your Career Hub!</p>
        <hr className="my-3 bg-gray-500 h-1 border-none rounded-full" />
        <div className="my-5  flex flex-col gap-5">
          <h1 className="font-bold">My tasks</h1>
          <div className="flex justify-between items-center">
            <h1>Update your profile</h1>
            <button className="border-2 rounded-full p-2 hover:bg-purble-500">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
