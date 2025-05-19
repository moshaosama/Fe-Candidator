import { Company } from "../../Companies/Types/CompanyType";
import UseGetCompanyByID from "../Hooks/UseGetCompanyByID";

import { JobData } from "../Types/JobData";

const DisplayData = () => {
  const { CompanyByID } = UseGetCompanyByID();

  console.log(CompanyByID);

  return (
    <>
      {CompanyByID.company.result?.map((company: Company) => {
        let jobs: JobData[] = [];

        if (typeof company.Jobs === "string") {
          try {
            jobs = JSON.parse(company.Jobs);
          } catch (err) {
            console.error("خطأ في تحويل Jobs:", err);
            return null;
          }
        }

        return (
          <div key={company.id}>
            {jobs.map((job: JobData) => (
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
          </div>
        );
      })}
    </>
  );
};

export default DisplayData;
