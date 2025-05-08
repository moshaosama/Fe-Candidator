import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Users from "../Pages/Users";
import Tasks from "../Pages/Tasks";
import Accounts from "../Pages/Account";
import Candidates from "../Pages/Candidates";
import Companies from "../Pages/Companies";
import Contacts from "../Pages/Contacts";
import Roles from "../Pages/Roles";
import Recruiters from "../Pages/Recruiters";
import AddAccountProvider from "../features/Account/Context/AddAccountContext";
import AddAccountByGoogleProvider from "../features/Account/Context/AddAccountByGoogleContext";
import AddUserModelProvider from "../features/Users/Context/AddUserModelConext";
import AddRecruiterModalProvider from "../features/Recruiters/Context/AddRecruiterModalContext";

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
          element: <Candidates />,
        },
        {
          path: "companies",
          element: <Companies />,
        },
        {
          path: "recruiters",
          element: (
            <AddRecruiterModalProvider>
              <Recruiters />
            </AddRecruiterModalProvider>
          ),
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        {
          path: "roles",
          element: <Roles />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default RouterPages;
