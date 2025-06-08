import { MdFavoriteBorder } from "react-icons/md";
import useGetJobById from "../../Jobs/Hooks/useGetJobById";
import { RiShareForwardLine } from "react-icons/ri";
import { DetailsJob } from "./DetailsJob";
import { ClipLoader } from "react-spinners";
import JobInsights from "./JobInsights";
import clsx from "clsx";
import { useApplyJob } from "../Hooks/useApplyJob";
import { useCreateJobFav } from "../Context/CreatejobFavContext";

export const ApplyJob = () => {
  const { jobByID } = useGetJobById();
  const { isLoading, handleApplyJob, FilterationAppliedJob } = useApplyJob();
  const { isFav, handleTriggerIsLove } = useCreateJobFav();
  return (
    <>
      {isLoading ? (
        <>
          <div className="text-white mt-3 border-2 border-[#432f52] w-[75pc] py-8 rounded-xl">
            <div className="flex justify-end mr-10 gap-10">
              <i onClick={handleTriggerIsLove}>
                <MdFavoriteBorder
                  size={20}
                  cursor={"pointer"}
                  className={clsx(isFav && "text-red-600")}
                />
              </i>
              <i>
                <RiShareForwardLine size={20} cursor={"pointer"} />
              </i>
            </div>
            <div className="flex justify-center flex-col items-center gap-2">
              <h1 className="text-2xl font-bold">
                {jobByID?.jobs?.result?.[0]?.JobTitle}
              </h1>
              <p>{jobByID?.jobs?.result?.[0]?.Location}</p>
              <button
                disabled={FilterationAppliedJob?.find(
                  (applyjob: any) =>
                    applyjob.id === jobByID?.jobs?.result?.[0]?.id
                )}
                onClick={handleApplyJob}
                className={clsx(
                  "mt-7 border-white w-40 py-4 rounded-full cursor-pointer hover:bg-white transition-all duration-500  hover:text-black text-lg font-bold border-2",
                  FilterationAppliedJob?.find(
                    (applyjob: any) =>
                      applyjob.id === jobByID?.jobs?.result?.[0]?.id
                  )
                    ? "opacity-10"
                    : "opacity-100"
                )}
              >
                {FilterationAppliedJob?.find(
                  (applyjob: any) =>
                    applyjob.id === jobByID?.jobs?.result?.[0]?.id
                )
                  ? "Applied"
                  : "Apply Now"}
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <DetailsJob />
            <JobInsights />
          </div>
        </>
      ) : (
        <div className="flex justify-center w-[75pc] mt-10">
          <ClipLoader size={100} color="white" />
        </div>
      )}
    </>
  );
};
