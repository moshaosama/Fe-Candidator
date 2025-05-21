import useGetJobById from "../../Jobs/Hooks/useGetJobById";

const Header = () => {
  const { jobByID } = useGetJobById();

  return (
    <>
      <h1 className="text-3xl text-white font-bold mt-10">
        {jobByID.jobs?.result?.[0]?.JobTitle}
      </h1>
      <hr className="mt-5  text-gray-500" />
    </>
  );
};

export default Header;
