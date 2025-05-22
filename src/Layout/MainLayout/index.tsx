import Dashboard from "../../Components/Dashboard";
import Sidebar from "../../Components/Sidebar";
import { FormLogin } from "../../features/Login/Component/FormLogin";
import useGetPathName from "../../Hooks/useGetIsRegister";
import SplitLayout from "../SplitLayout";

const MainLayout = () => {
  const { isRegister } = useGetPathName();
  return (
    <>
      {isRegister ? (
        <FormLogin />
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
