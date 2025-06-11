import { Outlet } from "react-router";
import Header from "../../../features/Candidates/Components/CandidatorPage/Header";
import { Footer } from "../../../features/Candidates/Components/CandidatorPage/Footer";

const LayoutCandidatePages = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutCandidatePages;
