import useGetCandidateByStage from "../Hooks/useGetCandidateByStage";
const DisplayData = () => {
  const { candidatorByStage } = useGetCandidateByStage();

  return (
    <>
      {candidatorByStage?.candidator?.result?.map(
        (candidate: any, index: number) => (
          <div className="bg-[#272727ab] mt-4 py-5 px-4 rounded-lg cursor-pointer">
            <div
              className="grid grid-cols-6 text-white max-sm:text-[10px]"
              key={index}
            >
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-full max-sm:w-2 max-sm:h-2"
                />
                {candidate?.FirstName || "No Name"}
              </label>
              <h1>{candidate?.LastName || "No Last Name"}</h1>
              <h1>{candidate?.Email || "No Email"}</h1>
              <h1>{candidate?.LinkedInProfile || "No LinkedIn Profile"}</h1>
              <h1>{candidate?.Stages || "No Stage"}</h1>
              <h1>-</h1>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default DisplayData;
