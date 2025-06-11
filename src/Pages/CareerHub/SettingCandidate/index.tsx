import { HeaderCandidatorPage } from "../../../Components/HeaderCandidatorPage";
import DataPrivacy from "../../../features/CareerHub/SettingCandidate/Components/DataPrivacy";
import JobAlerts from "../../../features/CareerHub/SettingCandidate/Components/JobAlerts";
import Settings from "../../../features/CareerHub/SettingCandidate/Components/Settings";

const SettingsCandidate = () => {
  return (
    <>
      <HeaderCandidatorPage Title="Settings" />
      <Settings />
      <DataPrivacy />
      <JobAlerts />
    </>
  );
};

export default SettingsCandidate;
