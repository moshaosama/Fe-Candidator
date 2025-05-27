import { DisplayJobData } from "../../../../features/JobsCandidatePage/DisplayJobData";
import { Filteration } from "../../../../features/JobsCandidatePage/Filteration";
import { HeaderJobCandidator } from "../../../../features/JobsCandidatePage/HeaderJobCandidator";

export const JobsAvaliable = () => {
  return (
    <>
      <HeaderJobCandidator />
      <Filteration />
      <DisplayJobData />
    </>
  );
};
