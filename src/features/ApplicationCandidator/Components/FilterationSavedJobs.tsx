import { useGetSavedJobs } from "../Hooks/useGetSavedJobs";

const FilterationSavedJobs = () => {
  const { savedJobs } = useGetSavedJobs();
  return (
    <>
      <div className="flex justify-between items-center text-white">
        <input
          type="text"
          placeholder="Filter Jobs"
          className="bg-gray-600 py-2 w-96 px-3 rounded-full"
        />
        <div>
          <h1 className="font-bold">
            Showing {savedJobs?.savedJobs?.result?.length} Jobs
          </h1>
        </div>
      </div>
    </>
  );
};

export default FilterationSavedJobs;
