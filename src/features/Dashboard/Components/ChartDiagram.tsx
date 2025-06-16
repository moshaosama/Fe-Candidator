import { BarChart } from "@mui/x-charts";
import ueGetCompany from "../Hooks/ueGetCompany";

const ChartDiagram = () => {
  const { dataset } = ueGetCompany();

  return (
    <div className="flex mt-14 gap-4">
      <div className="border-2 text-white hover:scale-105 transition-all duration-700 border-gray-800 shadow-lg shadow-black w-1/2 bg-[#1e1e1e] p-6 rounded-lg">
        <h1 className="text-white font-bold text-2xl mb-4">Company Growth</h1>
        <BarChart
          dataset={dataset}
          xAxis={[
            {
              dataKey: "month",
              label: "Month",
              tickLabelStyle: {
                fill: "white",
              },
            },
          ]}
          yAxis={[
            {
              tickLabelStyle: {
                fill: "white",
              },
            },
          ]}
          series={[{ dataKey: "count", label: "Company Count" }]}
          height={200}
          colors={["#8200db"]}
        />
      </div>
    </div>
  );
};

export default ChartDiagram;
