import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Tasks from "../Pages/Tasks";
import Accounts from "../Pages/Account";
import Companies from "../Pages/Companies";
import Contacts from "../Pages/Contacts";
import Roles from "../Pages/Roles";
import Recruiters from "../Pages/Recruiters";
import AddAccountProvider from "../features/Account/Context/AddAccountContext";
import AddAccountByGoogleProvider from "../features/Account/Context/AddAccountByGoogleContext";
import AddUserModelProvider from "../features/Users/Context/AddUserModelConext";
import AddRecruiterModalProvider from "../features/Recruiters/Context/AddRecruiterModalContext";
import GetRecruiterIDProvider from "../features/Recruiters/Context/useGetRecruiterIDContext";
import AddModalCompanyProvider from "../features/Companies/Context/AddModalCompanyContext";
import Jobs from "../Pages/Jobs";
import AddOpenModelJobProvider from "../features/Jobs/Context/useAddOpenModelContext";
import { AddContactModalProvider } from "../features/Contact/Context/AddContactModalContext";
import { OpenAddModalCandidatorProvider } from "../features/Candidates/Context/OpenAddModalContext";
import Stages from "../Pages/Stages";
import AddCandidateModelProvider from "../features/Stages/Context/useAddCandidateModelContext";
import AddStageModelProvider from "../features/Stages/Context/useAddStageContext";
import Users from "../Pages/Users";
import Candidates from "../Pages/Candidates";
import { JobsAvaliable } from "../Pages/CareerHub/JobsAvaliable";
import OverView from "../Pages/CareerHub/OverView";
import { Split_My_Applications } from "../Pages/CareerHub/SplitmyApplication";
import My_Application from "../Pages/CareerHub/myApplication";
import Saved_Jobs from "../Pages/CareerHub/SavedJobs";
import MyProfile from "../Pages/CareerHub/MyProfile";
import SettingsCandidate from "../Pages/CareerHub/SettingCandidate";
import ResumeProvider from "../features/CareerHub/CandidateProfile/Context/ResumeContext";
import { CreateJobFavProvider } from "../features/CareerHub/JobsCandidatePage/Context/CreatejobFavContext";
import { ApplyJob } from "../features/CareerHub/JobsCandidatePage/Components/ApplyJob";

const RouterPages = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <h1 className="text-white">Error</h1>,
      children: [
        {
          index: true,
          element: (
            <AddUserModelProvider>
              <Users />
            </AddUserModelProvider>
          ),
        },
        {
          path: "tasks",
          element: <Tasks />,
        },
        {
          path: "accounts",
          element: (
            <AddAccountProvider>
              <AddAccountByGoogleProvider>
                <Accounts />
              </AddAccountByGoogleProvider>
            </AddAccountProvider>
          ),
        },
        {
          path: "candidates",
          element: (
            <OpenAddModalCandidatorProvider>
              <Candidates />
            </OpenAddModalCandidatorProvider>
          ),
        },
        {
          path: "companies",
          children: [
            {
              index: true,
              element: (
                <AddModalCompanyProvider>
                  <Companies />
                </AddModalCompanyProvider>
              ),
            },
            {
              path: ":companyId",
              children: [
                {
                  index: true,
                  element: (
                    <AddOpenModelJobProvider>
                      <Jobs />
                    </AddOpenModelJobProvider>
                  ),
                },
                {
                  path: "jobs/:jobId",
                  element: (
                    <AddCandidateModelProvider>
                      <AddStageModelProvider>
                        <Stages />
                      </AddStageModelProvider>
                    </AddCandidateModelProvider>
                  ),
                },
              ],
            },
          ],
        },
        {
          path: "recruiters",
          element: (
            <AddRecruiterModalProvider>
              <GetRecruiterIDProvider>
                <Recruiters />
              </GetRecruiterIDProvider>
            </AddRecruiterModalProvider>
          ),
        },
        {
          path: "contacts",
          element: (
            <AddContactModalProvider>
              <Contacts />
            </AddContactModalProvider>
          ),
        },
        {
          path: "roles",
          element: <Roles />,
        },

        {
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
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default RouterPages;
