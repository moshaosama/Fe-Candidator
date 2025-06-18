import clsx from "clsx";
import useGetData from "../Hook/useGetData";
import { ContactDataDto, RecruiterDataDto } from "../Types/DataDTO";
import { useToggleTheme } from "../../../Context/useToggleThemeContext";

const DisplayData = () => {
  const { Contact, Recruiter } = useGetData();
  const { Theme } = useToggleTheme();
  return (
    <>
      <div className="flex flex-col gap-4">
        {Contact.contact?.result?.map(
          (contact: ContactDataDto, index: number) => (
            <div
              key={index}
              className={clsx("p-4 bg-[#272727ab] rounded-lg text-white font-semibold max-sm:text-[10px]", Theme == "dark" ? "bg-[#272727ab]": "bg-[#a5a4a4ab]" )}
            >
              <div
                className={clsx(
                  "grid grid-cols-2 font-semibold max-sm:text-[10px]",
                  Theme == "dark" ? "text-white" : "text-black"
                )}
              >
                <p>{contact.Email}</p>
                <p>Contact</p>
              </div>
            </div>
          )
        )}
        {Recruiter.recruiter?.map(
          (recruiter: RecruiterDataDto, index: number) => (
            <div
              key={index}
              className="p-4 bg-[#272727ab] rounded-lg text-white font-semibold max-sm:text-[10px]"
            >
              <div className="grid grid-cols-2  text-white font-semibold max-sm:text-[10px]">
                <p>{recruiter.Email}</p>
                <p>Recruiter</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default DisplayData;
