import { DisplayJobData } from "../../../../features/JobsCandidatePage/Components/DisplayJobData";
import { Filteration } from "../../../../features/JobsCandidatePage/Components/Filteration";
import { HeaderJobCandidator } from "../../../../features/JobsCandidatePage/Components/HeaderJobCandidator";

export const JobsAvaliable = () => {
  return (
    <>
      <HeaderJobCandidator />
      <Filteration />
      <DisplayJobData />
      {/* <ApplyModel /> */}
    </>
  );
};
