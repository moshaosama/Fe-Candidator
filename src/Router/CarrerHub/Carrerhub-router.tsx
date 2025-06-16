import ResumeProvider from "../../features/CareerHub/CandidateProfile/Context/ResumeContext";
import { ApplyJob } from "../../features/CareerHub/JobsCandidatePage/Components/ApplyJob";
import { CreateJobFavProvider } from "../../features/CareerHub/JobsCandidatePage/Context/CreatejobFavContext";
import { JobsAvaliable } from "../../Pages/CareerHub/JobsAvaliable";
import My_Application from "../../Pages/CareerHub/myApplication";
import MyProfile from "../../Pages/CareerHub/MyProfile";
import OverView from "../../Pages/CareerHub/OverView";
import Saved_Jobs from "../../Pages/CareerHub/SavedJobs";
import SettingsCandidate from "../../Pages/CareerHub/SettingCandidate";
import { Split_My_Applications } from "../../Pages/CareerHub/SplitmyApplication";

export const carrerHub_Router = {
  path: "careerhub",
  children: [
    {
      index: true,
    },
    {
      path: "settings",
      element: <SettingsCandidate />,
    },
    {
      path: "",
      element: <Split_My_Applications />,
      children: [
        {
          path: "applications",
          element: <My_Application />,
        },
        {
          path: "saved_jobs",
          element: <Saved_Jobs />,
        },
      ],
    },
    {
      path: "me/edit",
      element: (
        <ResumeProvider>
          <MyProfile />
        </ResumeProvider>
      ),
    },
    {
      path: "overview",
      element: <OverView />,
    },
    {
      path: "jobs",
      element: (
        <CreateJobFavProvider>
          <JobsAvaliable />
        </CreateJobFavProvider>
      ),
      children: [
        {
          path: ":jobId",
          element: (
            <CreateJobFavProvider>
              <ApplyJob />
            </CreateJobFavProvider>
          ),
        },
      ],
    },
  ],
};
