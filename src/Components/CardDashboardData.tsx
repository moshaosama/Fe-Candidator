import clsx from "clsx";
import { CardDashboardProps } from "../Types/CardDashboardData";
import { useToggleTheme } from "../Context/useToggleThemeContext";

export const CardDashboardData = (props: CardDashboardProps) => {
  const { Theme } = useToggleTheme();
  return (
    <>
      <div
        className={clsx(
          " shadow-lg shadow-black hover:scale-105 transition-all duration-700 flex flex-col gap-5 border-gray-800 border-2  rounded-xl p-2 mt-5",
          Theme === "dark"
            ? "text-white bg-gradient-to-l to-purple-700 from-50%"
            : "text-white bg-black"
        )}
      >
        <h1 className={clsx(" text-2xl")}>{props.Title}</h1>
        <p className="font-bold text-2xl">{props.numofData}</p>
      </div>
    </>
  );
};
