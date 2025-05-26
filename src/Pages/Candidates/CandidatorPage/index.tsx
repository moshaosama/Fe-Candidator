import { Outlet } from "react-router";
import Header from "../../../features/Candidates/Components/CandidatorPage/Header";

const ViewCandidatorPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ViewCandidatorPage;
