import useGetContact from "../../Jobs/Hooks/useGetContact";
import { ContactData } from "../Types/ContactData";

const DisplayData = () => {
  const { Contact } = useGetContact();
  return (
    <>
      <div>
        {Contact?.contact?.result?.map(
          (contact: ContactData, index: number) => (
            <div
              key={index}
              className="grid grid-cols-5 p-4 bg-[#272727ab] rounded-lg text-white font-semibold max-sm:text-[10px]"
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
