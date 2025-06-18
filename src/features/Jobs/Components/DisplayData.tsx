import { Link } from "react-router";
import useGetJobByCompanyId from "../Hooks/useGetJobByCompanyId";

const DisplayData = () => {
  const { jobByCompanyId } = useGetJobByCompanyId();

  return (
    <>
      {jobByCompanyId.jobs.result?.map((job: any) => {
        return (
          <div key={job.id}>
            <Link to={`jobs/${job.id}`}>
              <div
                key={job.id}
                className="p-4 bg-[#272727ab] rounded-lg text-white font-semibold max-sm:text-[10px] cursor-pointer mt-3"
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
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default DisplayData;
