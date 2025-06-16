import ChartDiagram from "../../features/Dashboard/Components/ChartDiagram";
import DisplayData from "../../features/Dashboard/Components/DisplayData";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-white font-bold text-4xl mt-10">Dahsboard</h1>
      <DisplayData />
      <ChartDiagram />
    </>
  );
};

export default Dashboard;
