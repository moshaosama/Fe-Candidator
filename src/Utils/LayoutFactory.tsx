import Dashboard from "../Components/Dashboard";
import Sidebar from "../Components/Sidebar";
import SplitLayout from "../Layout/SplitLayout";
import HasAccountFactory from "./HasAccountFactory";
import useGetPathName from "../Hooks/useGetIsRegister";
import { useGetToken } from "../Hooks/useGetToken";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import ViewCandidatorPage from "../Pages/Candidates/CandidatorPage";

export const LayoutByRoleFactory = () => {
  const { User } = useGetToken();
  const { isRegister } = useGetPathName();
  const Navigate = useNavigate();

  if (User?.result?.Role === "Candidate") {
    useEffect(() => {
      Navigate("/careerhub/overview");
    }, []);
    return <ViewCandidatorPage />;
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
