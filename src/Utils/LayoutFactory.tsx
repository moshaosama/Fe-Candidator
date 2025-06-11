import Dashboard from "../Components/Dashboard";
import Sidebar from "../Components/Sidebar";
import SplitLayout from "../Layout/SplitLayout";
import HasAccountFactory from "./HasAccountFactory";
import useGetPathName from "../Hooks/useGetIsRegister";
import { useGetToken } from "../Hooks/useGetToken";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import LayoutCandidatePages from "../Pages/CareerHub/LayoutPage";

export const LayoutByRoleFactory = () => {
  const { User } = useGetToken();
  const { isRegister } = useGetPathName();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (User?.result?.Role === "Candidate") {
    useEffect(() => {
      if (
        (User?.result?.Role === "Candidate" && pathname === "/") ||
        pathname === "/careerhub/" ||
        pathname === "/careerhub"
      ) {
        navigate("/careerhub/overview");
      }
    }, [User, pathname, navigate]);
    return <LayoutCandidatePages />;
  } else {
    {
      return isRegister ? (
        <HasAccountFactory />
      ) : (
        <SplitLayout>
          <Dashboard />
          <Sidebar />
        </SplitLayout>
      );
    }
  }
};
