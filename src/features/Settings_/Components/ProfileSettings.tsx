import { useForm } from "react-hook-form";
import { useGetToken } from "../../../Hooks/useGetToken";

const ProfileSettings = () => {
  const { User } = useGetToken();
  //   console.log(User?.result?.FirstName);

  return (
    <>
      <div className="text-white">
        <div>
          <img
            src="/photo-handsome-unshaven-guy-looks-with-pleasant-expression-directly-camera_176532-8164.avif"
            alt="profile.png"
            className="w-40 rounded-full  h-40 object-fill"
          />
        </div>

        <form action="" className="grid grid-cols-2 gap-3 mt-5 w-[43pc]">
          <p className="col-span-1 flex flex-col gap-3">
            <label className="text-white font-bold mx-1">FirstName</label>
            <input
              type="text"
              className="border-2 rounded-xl border-gray-500 p-2"
              value={User?.result?.FirstName}
            />
          </p>
          <p className="col-span-1 flex flex-col gap-3">
            <label className="text-white font-bold mx-1">FirstName</label>
            <input
              type="text"
              className="border-2 rounded-xl border-gray-500 p-2"
              value={User?.result?.LastName}
            />
          </p>
          <p className="col-span-2 flex flex-col gap-3">
            <label className="text-white font-bold mx-1">Email</label>
            <input
              type="email"
              className="border-2 rounded-xl border-gray-500 p-2"
              value={User?.result?.Email}
            />
          </p>
          <p className="col-span-2 flex flex-col items-start gap-3 my-5">
            <button className="bg-white w-32 py-2 rounded-xl text-black font-bold hover:bg-gray-300 cursor-pointer transition-all duration-700">
              Save Change
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default ProfileSettings;
