import Dashboard from "../../Components/Dashboard";
import Sidebar from "../../Components/Sidebar";
import SplitLayout from "../SplitLayout";

const MainLayout = () => {
  return (
    <SplitLayout>
      <Dashboard />
      <Sidebar />
    </SplitLayout>
  );
};

export default MainLayout;
