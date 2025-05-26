import useGetData from "../Jobs/Hooks/useGetData";

export const HeaderJobCandidator = () => {
  const { Jobs } = useGetData();

  console.log(Jobs.jobs?.result?.length);

  return (
    <div>
      <div className="bg-[#432f52] w-full -mt-5 h-32 ">
        <h1 className="text-4xl font-bold p-10">Jobs</h1>
      </div>
      <div className="mt-4 text-white p-10">
        <h1 className="text-lg font-bold">
          There are {Jobs.jobs?.result?.length} open jobs. To see relevant jobs
          based on your profile
        </h1>
      </div>
    </div>
  );
};
