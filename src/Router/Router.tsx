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
import { carrerHub_Router } from "./CarrerHub/Carrerhub-router";
import Dashboard from "../Pages/Dashboard";
import SettingPage from "../Pages/Settings_";
import Account_Settngs from "../Pages/AccountSettings";
import AccountDetails from "../features/Settings_/Components/AccountDetails";
import ChangePassword from "../features/Settings_/Components/ChangePassword";
import ProfileSettings from "../features/Settings_/Components/ProfileSettings";

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
          path: "settings",
          children: [
            {
              index: true,
              element: <SettingPage />,
            },
            {
              path: "account-setting",
              element: <AccountDetails />,
              children: [
                {
                  index: true,
                  element: <ProfileSettings />,
                },
                {
                  path: "change-password",
                  element: <ChangePassword />,
                },
              ],
            },
          ],
        },
        {
          path: "dashboard",
          element: <Dashboard />,
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
        carrerHub_Router,
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default RouterPages;
