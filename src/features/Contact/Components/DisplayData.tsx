import clsx from "clsx";
import useGetContact from "../../Jobs/Hooks/useGetData";
import { ContactData } from "../Types/ContactData";
import { useToggleTheme } from "../../../Context/useToggleThemeContext";

const DisplayData = () => {
  const { Contact } = useGetContact();
  const { Theme } = useToggleTheme();
  return (
    <>
      <div className="flex flex-col gap-4">
        {Contact?.contact?.result?.map(
          (contact: ContactData, index: number) => (
            <div
              key={index}
              className={clsx(
                "grid grid-cols-5 p-4  rounded-lg  font-semibold max-sm:text-[10px]",
                Theme == "dark" ? "bg-[#272727ab] text-white" : "bg-[#a5a4a4ab]"
              )}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 max-sm:w-2 max-sm:h-2 rounded-full"
                />
                <p>{contact.FirstName}</p>
              </div>
              <p>{contact.LastName}</p>
              <p>{contact.Email}</p>
              <p>{contact.Telephone}</p>
              <p>{contact.LinkedinUrl}</p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default DisplayData;
