import { FaArrowRight } from "react-icons/fa6";
import { useGetToken } from "../../../Hooks/useGetToken";
import { Link } from "react-router";
import useGetApplications from "../../ApplicationCandidator/Hooks/useGetApplications";

export const TasksOverFlow = () => {
  const { User } = useGetToken();
  const { result } = useGetApplications();

  return (
    <>
      <div className="flex justify-between">
        <div className="border-2 border-gray-400  p-5 my-3 mx-20 rounded-xl text-white w-96">
          <h1 className="font-bold">Hi {User?.result?.FirstName}</h1>
          <p>Welcome to your Career Hub!</p>
          <hr className="my-3 bg-gray-500 h-1 border-none rounded-full" />
          <div className="my-5  flex flex-col gap-5">
            <h1 className="font-bold">My tasks</h1>
            <div className="flex justify-between items-center">
              <h1>Update your profile</h1>
              <button className="border-2 rounded-full p-2 hover:bg-purple-500 cursor-pointer transition-all duration-300">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <hr className="my-3 bg-gray-500 h-1 border-none rounded-full" />
          <div className="my-5  flex flex-col gap-5">
            <h1 className="font-bold">My Activity</h1>
            <div className="flex justify-between items-center cursor-pointer hover:underline">
              <h1>Job Applications</h1>
              <p>{result?.length}</p>
            </div>
          </div>
        </div>
        <Link
          to={"/careerhub/jobs"}
          className="my-3 mx-20 text-white hover:underline cursor-pointer"
        >
          <h1>See All</h1>
        </Link>
      </div>
    </>
  );
};
