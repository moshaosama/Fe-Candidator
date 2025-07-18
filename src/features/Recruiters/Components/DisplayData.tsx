import clsx from "clsx";
import { useGetRecruiterIDContext } from "../Context/useGetRecruiterIDContext";
import useDisplayData from "../Hooks/useDisplayData";
import { RecruiterData } from "../Types/RecruiterData";
import { useToggleTheme } from "../../../Context/useToggleThemeContext";

interface DisplayDataProps {
  handleChecked: () => void;
}

const DisplayData = ({ handleChecked }: DisplayDataProps) => {
  const { recruiter } = useDisplayData();
  const { handleGetId } = useGetRecruiterIDContext();
  const { Theme } = useToggleTheme();
  return (
    <>
      {recruiter.map((recruiter: RecruiterData, index: number) => (
        <div
          className={clsx(
            " mt-3 py-5 px-4 rounded-lg cursor-pointer",
            Theme == "dark" ? "bg-[#272727ab]" : "bg-[#a5a4a4ab]"
          )}
          key={index}
        >
          <div className="grid grid-cols-4 text-white max-sm:text-[10px]">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded-full max-sm:w-2 max-sm:h-2"
                onChange={() => {
                  handleChecked();
                  handleGetId(recruiter.id);
                }}
              />
              {recruiter.FirstName}
            </label>
            <h1>{recruiter.LastName}</h1>
            <h1>{recruiter.Email}</h1>
            <h1>{recruiter.Role}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayData;
