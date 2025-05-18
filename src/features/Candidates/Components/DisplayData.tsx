import { useGetCandidator } from "../Hooks/useGetCandidator";

const DisplayData = () => {
  const { Candidator } = useGetCandidator();
  return (
    <div className="flex flex-col gap-4">
      {Candidator?.candidator?.result?.map((candidator: any, index: number) => (
        <div
          key={index}
          className="grid grid-cols-7 p-4 bg-[#272727ab] rounded-lg text-white font-semibold max-sm:text-[10px]"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-4 h-4 max-sm:w-2 max-sm:h-2 rounded-full"
            />
            <p>{candidator.FirstName}</p>
          </div>
          <p>{candidator.LastName}</p>
          <p>{candidator.Email}</p>
          <p>{candidator.LinkedInProfile}</p>
          <p>-</p>
          <p>-</p>
          <p>{candidator.Resume ? candidator.Resume : "-"}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
