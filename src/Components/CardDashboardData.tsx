import { CardDashboardProps } from "../Types/CardDashboardData";

export const CardDashboardData = (props: CardDashboardProps) => {
  return (
    <>
      <div className="bg-gradient-to-l to-purple-700 from-50% shadow-lg shadow-black hover:scale-105 transition-all duration-700 flex flex-col gap-5 border-gray-800 border-2  rounded-xl p-2 mt-5">
        <h1 className="text-white  text-2xl">{props.Title}</h1>
        <p className="text-white font-bold text-2xl">{props.numofData}</p>
      </div>
    </>
  );
};
