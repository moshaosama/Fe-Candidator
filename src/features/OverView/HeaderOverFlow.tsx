import { useGetToken } from "../../Hooks/useGetToken";

const HeaderOverView = () => {
  const { User } = useGetToken();
  console.log(User?.result?.FirstName);

  return (
    <>
      <div className="relative -mt-5">
        <img
          src="/ChatGPT Image May 26, 2025, 11_18_45 PM.png"
          alt="Header.png"
          className="object-cover h-[40pc]  w-[120pc]"
        />
        <div className="absolute top-52 left-80 flex flex-col items-center gap-5 justify-center">
          <div className="bg-black w-36 h-36 rounded-full  flex justify-center  items-center  text-white">
            <h1 className="text-5xl font-bold">
              {User?.result?.FirstName.charAt(0)}
              {User?.result?.LastName.charAt(0)}
            </h1>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              {User?.result?.FirstName} {User?.result?.LastName}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOverView;
