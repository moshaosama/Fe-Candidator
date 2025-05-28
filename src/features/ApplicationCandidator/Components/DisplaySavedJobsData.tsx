import { AiOutlineMore } from "react-icons/ai";
import { useGetSavedJobs } from "../Hooks/useGetSavedJobs";

const DisplaySavedJobsData = () => {
  const { savedJobs } = useGetSavedJobs();

  return (
    <>
      {savedJobs.savedJobs.result?.length > 0 ? (
        <>
          <div className="mt-10 rounded-xl">
            <table className="min-w-full bg-white rounded-xl border-none shadow-md overflow-hidden">
              <thead>
                <tr className="bg-[#432f52] text-white text-left">
                  <th className="py-3 px-4">JobTitle</th>
                  <th className="py-3 px-4">Req ID</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Save Date</th>

                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {savedJobs.savedJobs.result?.map((jobs: any, index: number) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-300"
                    } border-b hover:bg-gray-200 transition`}
                  >
                    <td className="py-3 px-4">{jobs.JobTitle}</td>
                    <td className="py-3 px-4">{jobs.id}</td>
                    <td className="py-3 px-4">{jobs.Department}</td>
                    <td className="py-3 px-4">{jobs.Location}</td>
                    <td className="py-3 px-4">May 16, 2025</td>
                    <td className="py-3 px-4">
                      <AiOutlineMore />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <h1 className="text-red-400 text-2xl  font-bold">
              No Application Yet
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default DisplaySavedJobsData;
