import clsx from "clsx";
import useGetData from "../Jobs/Hooks/useGetData";
import { Link, Outlet } from "react-router";
import { MdFavoriteBorder } from "react-icons/md";

export const DisplayJobData = () => {
  const { Jobs } = useGetData();

  return (
    <div className="ml-44 mt-20 flex gap-10">
      <div className="sticky top-0 h-screen overflow-y-auto">
        {Jobs.jobs.result?.map((jobs: any, index: number) => (
          <Link to={`${jobs.id}`}>
            <div
              className=" border-2 cursor-pointer border-[#432f52] w-80 p-5 text-white mt-3 rounded-xl"
              key={index}
            >
              <i className="flex justify-end text-xl">
                <MdFavoriteBorder />
              </i>
              <div className="flex flex-col gap-5">
                <h1 className="font-bold text-lg">{jobs.JobTitle}</h1>
                <p>{jobs.Location}</p>
              </div>
              <div className="mt-10 flex flex-col gap-5">
                <p>Skills</p>
                <div className="flex items-center gap-3">
                  <div
                    className={clsx(
                      jobs.Commitment === "Full time"
                        ? "bg-red-500"
                        : "bg-green-500",
                      "w-3 h-3 rounded-full shadow-xl"
                    )}
                  ></div>
                  <p>{jobs.Commitment}</p>
                </div>
              </div>
              <p className="mt-7 text-sm">Posted {jobs.Days} days ago</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
