import { Outlet } from "react-router";
import Header from "../../../features/CareerHub/CandidatorPage/Componnets/Header";
import { Footer } from "../../../features/CareerHub/CandidatorPage/Componnets/Footer";

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
