import { MdOutlineEdit, MdOutlineEmail } from "react-icons/md";
import { CardDetails } from "../../../Components/CardDetails";
import { useGetCandidateById } from "../../OverView/Hooks/useGetCandidateById";
import { CiLink, CiLocationOn, CiPhone } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const DetaiilsProfile = () => {
  const { CandidateById } = useGetCandidateById();

  console.log(CandidateById?.candidator?.result?.[0]?.LinkedInProfile);

  return (
    <>
      <div className="flex justify-between border-2 px-10 py-5 mt-5 border-gray-500 rounded-xl">
        <div className="text-white grid grid-cols-2 gap-x-56 gap-y-8">
          <CardDetails
            Header={CandidateById?.candidator?.result?.[0]?.Email}
            Icon={<MdOutlineEmail size={28} />}
            Text="Email"
          />
          <CardDetails
            Header={
              CandidateById?.candidator?.result?.[0]?.LinkedInProfile
                ? CandidateById?.candidator?.result?.[0]?.LinkedInProfile
                : "no LinkedIn"
            }
            Icon={<CiLink size={28} />}
            Text="Links"
          />
          <CardDetails
            Header={
              CandidateById?.candidator?.result?.[0]?.Location
                ? CandidateById?.candidator?.result?.[0]?.Location
                : "Location"
            }
            Icon={<CiLocationOn size={28} />}
            Text="Links"
          />
          <CardDetails
            Header={
              CandidateById?.candidator?.result?.[0]?.phoneNumber
                ? CandidateById?.candidator?.result?.[0]?.phoneNumber
                : "phoneNumber"
            }
            Icon={<CiPhone size={28} />}
            Text="Phone"
          />
          <CardDetails
            Header={CandidateById?.candidator?.result?.[0]?.FirstName}
            Icon={<IoPersonOutline size={28} />}
            Text="First Name"
          />
          <CardDetails
            Header={CandidateById?.candidator?.result?.[0]?.LastName}
            Icon={<IoPersonOutline size={28} />}
            Text="Last Name"
          />
        </div>
        <div>
          <MdOutlineEdit size={28} color={"white"} />
        </div>
      </div>
    </>
  );
};

export default DetaiilsProfile;
