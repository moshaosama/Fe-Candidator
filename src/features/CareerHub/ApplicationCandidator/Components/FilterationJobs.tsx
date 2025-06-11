import useGetApplications from "../Hooks/useGetApplications";

export const FilterationApplication = () => {
  const { jobApplication } = useGetApplications();
  return (
    <>
      <div className="flex justify-between items-center text-white">
        <input
          type="text"
          placeholder="Filter Jobs"
          className="bg-gray-600 py-2 w-96 px-3 rounded-full"
        />
        <div>
          <h1 className="font-bold">Showing {jobApplication?.length} Jobs</h1>
        </div>
      </div>
    </>
  );
};
