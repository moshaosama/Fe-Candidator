import useGetData from "../../Jobs/Hooks/useGetData";
import { useGetCandidateById } from "../../OverView/Hooks/useGetCandidateById";
import { AiOutlineMore } from "react-icons/ai";

export const DisplayApplications = () => {
  const { Jobs } = useGetData();
  const { CandidateById } = useGetCandidateById();
  console.log(CandidateById?.candidator?.result?.[0]?.Stages);

  return (
    <div className="mt-10 rounded-xl">
      <table className="min-w-full bg-white rounded-xl border-none shadow-md overflow-hidden">
        <thead>
          <tr className="bg-[#432f52] text-white text-left">
            <th className="py-3 px-4">JobTitle</th>
            <th className="py-3 px-4">Req ID</th>
            <th className="py-3 px-4">Department</th>
            <th className="py-3 px-4">Location</th>
            <th className="py-3 px-4">Date Applied</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Jobs?.jobs?.result?.map((jobs, index: number) => (
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
                {CandidateById?.candidator?.result?.[0]?.Stages}
              </td>
              <td className="py-3 px-4">
                <AiOutlineMore />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
