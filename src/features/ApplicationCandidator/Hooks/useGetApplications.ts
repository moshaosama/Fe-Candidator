import useGetData from "../../Jobs/Hooks/useGetData";
import { useGetCandidateById } from "../../OverView/Hooks/useGetCandidateById";

const useGetApplications = () => {
  const { Jobs } = useGetData();
  const { CandidateById } = useGetCandidateById();

  const jobIds = CandidateById?.candidator?.result?.[0]?.jobId;
  const parsedJobIds = jobIds ? JSON.parse(jobIds) : [];
  let result = parsedJobIds?.map((e: any) => {
    return Jobs.jobs.result.find((el) => String(el.id) === String(e.jobId));
  });

  return { result };
};

export default useGetApplications;
