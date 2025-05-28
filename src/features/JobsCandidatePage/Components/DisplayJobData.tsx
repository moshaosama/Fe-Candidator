import clsx from "clsx";
import useGetData from "../../Jobs/Hooks/useGetData";
import { Link, Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

export const DisplayJobData = () => {
  const { Jobs } = useGetData();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${Jobs?.jobs?.result?.[0]?.id}`);
  }, [Jobs?.jobs?.result?.[0]?.id]);

  return (
    <div className="ml-44 mt-20 flex gap-10">
      <div className="sticky top-0 h-[33pc] overflow-y-scroll">
        {Jobs.jobs.result?.map((job: any, index: number) => (
          <Link to={`${job.id}`} key={index}>
            <div className="border-2 cursor-pointer border-[#432f52] w-80 p-5 text-white mt-3 rounded-xl">
              <div className="flex flex-col gap-5">
                <h1 className="font-bold text-lg">{job.JobTitle}</h1>
                <p>{job.Location}</p>
              </div>
              <div className="mt-10 flex flex-col gap-5">
                <p>Skills</p>
                <div className="flex items-center gap-3">
                  <div
                    className={clsx(
                      job.Commitment === "Full time"
                        ? "bg-red-500"
                        : "bg-green-500",
                      "w-3 h-3 rounded-full shadow-xl"
                    )}
                  ></div>
                  <p>{job.Commitment}</p>
                </div>
              </div>
              <p className="mt-7 text-sm">Posted {job.Days} days ago</p>
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
