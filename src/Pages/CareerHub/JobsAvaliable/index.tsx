import { HeaderCandidatorPage } from "../../../Components/HeaderCandidatorPage";
import { DisplayJobData } from "../../../features/CareerHub/JobsCandidatePage/Components/DisplayJobData";
import { Filteration } from "../../../features/CareerHub/JobsCandidatePage/Components/Filteration";

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
