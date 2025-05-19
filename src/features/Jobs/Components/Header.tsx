import UseGetCompanyByID from "../Hooks/UseGetCompanyByID";

const Header = () => {
  const { CompanyByID } = UseGetCompanyByID();
  return (
    <div className="mt-16">
      <h1 className="text-white text-3xl font-bold">
        Jobs for:{" "}
        <span className="text-purple-700 font-bold text-3xl">
          {CompanyByID.company.result?.[0]?.Name
            ? CompanyByID.company.result?.[0]?.Name
            : "Loading..."}
        </span>
      </h1>
      <hr className="mt-5  text-gray-500" />
    </div>
  );
};

export default Header;
