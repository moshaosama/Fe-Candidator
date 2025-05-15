import useGetData from "../Hook/useGetData";
import { ContactDataDto, RecruiterDataDto } from "../Types/DataDTO";

const DisplayData = () => {
  const { Contact, Recruiter } = useGetData();
  console.log(Recruiter);

  return (
    <>
      <div className="flex flex-col gap-4">
        {Contact.contact?.result?.map(
          (contact: ContactDataDto, index: number) => (
            <div
              key={index}
              className="p-4 bg-[#272727ab] rounded-lg text-white font-semibold max-sm:text-[10px]"
            >
              <div className="grid grid-cols-2  text-white font-semibold max-sm:text-[10px]">
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
