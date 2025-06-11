import { IoSearchOutline } from "react-icons/io5";
import { SiNiconico } from "react-icons/si";
import { Link } from "react-router";
import useGetData from "../../../Jobs/Hooks/useGetData";

const JobAlerts = () => {
  const { Jobs } = useGetData();
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="mt-5 border-2 border-purple-300 py-5  w-[70pc] rounded-2xl shadow-sm shadow-white text-white">
          <div className="mx-6 my-3">
            <div className="flex items-center gap-2 font-bold">
              <IoSearchOutline size={20} />
              <h1 className="text-2xl">My Job Alerts</h1>
            </div>
            <p className="text-sm text-gray-300">
              You will receive email notifications with opportunities matching
              your job alert criteria.
            </p>
            <hr className="border-none h-1 mt-7 rounded-full bg-gray-400" />
          </div>

          <div className="flex justify-center flex-col mt-16 gap-5 items-center">
            <SiNiconico color="purple" size={100} />
            <p className="text-gray-500">No job searches saved yet</p>
            <Link to={`/careerhub/jobs/${Jobs.jobs.result?.[0]?.id}`}>
              <p className="text-xl font-bold text-purple-400 cursor-pointer">
                Serach jobs
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobAlerts;
