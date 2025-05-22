import Dashboard from "../../Components/Dashboard";
import Sidebar from "../../Components/Sidebar";
import useGetPathName from "../../Hooks/useGetIsRegister";
import HasAccountFactory from "../../Utils/HasAccountFactory";
import SplitLayout from "../SplitLayout";

const MainLayout = () => {
  const { isRegister } = useGetPathName();
  return (
    <>
      {isRegister ? (
        <HasAccountFactory />
      ) : (
        <SplitLayout>
          <Dashboard />
          <Sidebar />
        </SplitLayout>
      )}
    </>
  );
};

export default MainLayout;
