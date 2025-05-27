import { MdFavoriteBorder } from "react-icons/md";
import useGetJobById from "../Jobs/Hooks/useGetJobById";
import { RiShareForwardLine } from "react-icons/ri";
import { DetailsJob } from "./DetailsJob";
import JobInsights from "./JobInsights";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import useAddCandidate from "../Stages/Hooks/useAddCandidate";
import { useGetToken } from "../../Hooks/useGetToken";

export const ApplyJob = () => {
  const { jobByID, jobId } = useGetJobById();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isLoadingFun = async () => {
      setIsLoading(false);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsLoading(true);
    };

    isLoadingFun();
  }, [jobId]);

  const { onSubmit } = useAddCandidate();
  const { User } = useGetToken();

  console.log(User?.result?.id);

  return (
    <>
      {isLoading ? (
        <>
          <div className="text-white mt-3 border-2 border-[#432f52] w-[75pc] py-8 rounded-xl">
            <div className="flex justify-end mr-10 gap-10">
              <i>
                <MdFavoriteBorder size={20} cursor={"pointer"} />
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
                onClick={() =>
                  onSubmit({
                    CandidateID: String(User?.result?.id),
                  })
                }
                className="mt-7 border-white w-40 py-4 rounded-full cursor-pointer hover:bg-white transition-all duration-500  hover:text-black text-lg font-bold border-2"
              >
                Apply Now
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
