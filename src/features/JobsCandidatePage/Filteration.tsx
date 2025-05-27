import useGetData from "../Jobs/Hooks/useGetData";

export const Filteration = () => {
  const { Jobs } = useGetData();

  return (
    <div className="mt-4 text-white ml-44">
      <h1 className="text-lg font-bold">
        There are {Jobs.jobs?.result?.length} open jobs. To see relevant jobs
        based on your profile
      </h1>
    </div>
  );
};
