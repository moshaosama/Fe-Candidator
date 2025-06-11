import clsx from "clsx";
import { useGetSavedJobs } from "../../ApplicationCandidator/Hooks/useGetSavedJobs";

const FavJobs = () => {
  const { savedJobs } = useGetSavedJobs();
  //   console.log(savedJobs?.savedJobs?.result);

  return (
    <>
      <div>
        <h1 className="text-white font-bold text-2xl">Favorites</h1>
        <div className="flex gap-14 my-3 rounded-xl">
          {savedJobs?.savedJobs?.result?.map((job) => (
            <div className="relative cursor-pointer rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-white">
              <div className="absolute left-4 top-0.5 px-2 py-1 rounded-b-xl bg-green-900 text-white font-bold">
                <h1>Job</h1>
              </div>
              <div className="border-2 flex flex-col gap-3 p-4 py-10 border-gray-500 rounded-xl w-96 text-white">
                <h1 className="text-xl font-bold">{job.JobTitle}</h1>
                <p>{job.Location}</p>
                <p>{job.NumNeeded} NumNeeded</p>
                <p className="flex items-center gap-5">
                  <div
                    className={clsx(
                      job.Commitment === "Full time"
                        ? "bg-red-500"
                        : "bg-green-500",
                      "w-3 h-3 rounded-full shadow-xl"
                    )}
                  ></div>
                  <h1>{job.Commitment}</h1>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavJobs;
