import useGetCompanyData from "../Hooks/useGetCompanyData";

const DisplayData = () => {
  const { Company } = useGetCompanyData();

  return (
    <>
      {Company?.company.result?.map((Company, index) => (
        <div
          className="bg-[#272727ab] mt-3 py-5 px-4 rounded-lg cursor-pointer"
          key={index}
        >
          <div
            key={index}
            className="grid grid-cols-4 text-white font-semibold max-sm:text-[10px]"
          >
            <h1>{Company.Name}</h1>
            <h1>{Company.Language}</h1>
            <h1>{Company.Jobs?.length > 0 ? Company.Jobs?.length : 0}</h1>
            <h1>{Company.Tags ? Company.Tags : "-"}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayData;
