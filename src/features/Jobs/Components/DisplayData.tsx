import useGetData from "../Hooks/useGetData";
import { JobData } from "../Types/JobData";

const DisplayData = () => {
  const { Jobs } = useGetData();
  return (
    <>
      {Jobs.jobs?.result?.map((job: JobData) => (
        <div
          key={job.id}
          className="p-4 bg-[#272727ab] rounded-lg text-white font-semibold max-sm:text-[10px] cursor-pointer"
        >
          <div className="grid grid-cols-10  text-white font-semibold max-sm:text-[10px]">
            <p>{job.JobTitle}</p>
            <p>{job.Description}</p>
            <p>{job.Department}</p>
            <p>{job.NumNeeded}</p>
            <p>-</p>
            <p>{job.Location}</p>
            <p>-</p>
            <p>{job.Commitment}</p>
            <p>-</p>
            <p>{job.Contact}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayData;
