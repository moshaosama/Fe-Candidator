import { Link } from "react-router";
import useGetCompanyData from "../Hooks/useGetCompanyData";
import clsx from "clsx";
import { useToggleTheme } from "../../../Context/useToggleThemeContext";

const DisplayData = () => {
  const { Company } = useGetCompanyData();
  const { Theme } = useToggleTheme();
  return (
    <>
      {Company?.company.result?.map((Company, index) => (
        <Link key={index} to={`/companies/${Company.id}`}>
          <div
            className={clsx(
              " mt-3 py-5 px-4 rounded-lg cursor-pointer",
              Theme == "dark" ? "bg-[#272727ab] text-white" : "bg-[#a5a4a4ab]"
            )}
          >
            <div
              key={index}
              className="grid grid-cols-4  font-semibold max-sm:text-[10px]"
            >
              <h1>{Company.Name}</h1>
              <h1>{Company.Language}</h1>
              <h1>{Company.Jobs?.length > 0 ? Company.Jobs?.length : 0}</h1>
              <h1>{Company.Tags ? Company.Tags : "-"}</h1>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default DisplayData;
