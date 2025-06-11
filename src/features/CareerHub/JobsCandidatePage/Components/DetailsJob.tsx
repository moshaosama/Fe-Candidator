import { CiFolderOn } from "react-icons/ci";
import { BiBuilding } from "react-icons/bi";
import { BsBing } from "react-icons/bs";
import { CardDetails } from "../../../../Components/CardDetails";
import useGetJobById from "../../../Jobs/Hooks/useGetJobById";

export const DetailsJob = () => {
  const { jobByID } = useGetJobById();
  return (
    <>
      <div className="text-white mt-3 border-2 border-[#432f52] w-[45pc] py-8 rounded-xl px-10 flex flex-col gap-10">
        <div className=" grid grid-cols-2  gap-10">
          <CardDetails
            Header="Jop ID"
            Icon={<CiFolderOn size={28} />}
            Text={jobByID?.jobs?.result?.[0]?.id}
          />
          <CardDetails
            Header="Company"
            Icon={<BiBuilding size={28} />}
            Text="Anytime Software"
          />
          <CardDetails
            Header="Job Family"
            Icon={<BsBing size={28} />}
            Text={jobByID?.jobs?.result?.[0]?.Department}
          />
          <CardDetails
            Header="Full Time / Part Time"
            Icon={<BsBing size={28} />}
            Text={jobByID?.jobs?.result?.[0]?.Commitment}
          />
        </div>
        <hr className="h-1 bg-[#432f52] border-none w-[40pc]" />

        <div>
          <p>{jobByID?.jobs?.result?.[0]?.Description}</p>
        </div>
      </div>
    </>
  );
};
