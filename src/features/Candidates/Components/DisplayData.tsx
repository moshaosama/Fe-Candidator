import clsx from "clsx";
import { useGetCandidator } from "../Hooks/useGetCandidator";
import { useToggleTheme } from "../../../Context/useToggleThemeContext";

const DisplayData = () => {
  const { Candidator } = useGetCandidator();
  const { Theme } = useToggleTheme();
  return (
    <div className="flex flex-col gap-4">
      {Candidator?.candidator?.result?.map((candidator: any, index: number) => (
        <div
          key={index}
          className={clsx(
            "grid grid-cols-7 p-4  rounded-lg  font-semibold max-sm:text-[10px]",
            Theme == "dark" ? "bg-[#272727ab] text-white" : "bg-[#a5a4a4ab]"
          )}
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-4 h-4 max-sm:w-2 max-sm:h-2 rounded-full"
            />
            <p>{candidator.FirstName}</p>
          </div>
          <p>{candidator.LastName}</p>
          <p>{candidator.Email}</p>
          <p>{candidator.LinkedInProfile}</p>
          <p>-</p>
          <p>-</p>
          <p>{candidator.Resume ? candidator.Resume : "-"}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
