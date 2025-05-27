import { HeaderCandidatorPage } from "../../../Components/HeaderCandidatorPage";
import { DisplayJobData } from "../../../features/JobsCandidatePage/Components/DisplayJobData";
import { Filteration } from "../../../features/JobsCandidatePage/Components/Filteration";

export const JobsAvaliable = () => {
  return (
    <>
      <HeaderCandidatorPage Title="Jobs" />
      <Filteration />
      <DisplayJobData />
      {/* <ApplyModel /> */}
    </>
  );
};
