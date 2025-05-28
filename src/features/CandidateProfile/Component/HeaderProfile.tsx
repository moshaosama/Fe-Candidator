import { Link } from "react-router";

const HeaderProfile = () => {
  return (
    <>
      <div className="border-4 px-10 py-5 flex flex-col gap-4 rounded-xl shadow-lg shadow-black border-gray-500 text-gray-500">
        <h1 className="text-2xl font-extrabold">Welcome to Mploya Careers</h1>
        <p className="w-[61pc]">
          Verify your information for accuracy. The more complete your profile,
          the better we can match you to ideal opportunities and get you into
          your next career move!
        </p>
        <Link to={"/"}>
          <button className="p-3 border-[#432f52] border-4 hover:bg-[#432f52] transition-all duration-300 cursor-pointer font-bold w-fit rounded-full ">
            Go To Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeaderProfile;
