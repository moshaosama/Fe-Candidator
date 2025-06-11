import { IoPersonOutline } from "react-icons/io5";

const Settings = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="mt-5 border-2 border-purple-300 py-5  w-[70pc] rounded-2xl shadow-sm shadow-white text-white">
          <div className="mx-6 my-3">
            <div className="flex items-center gap-2 font-bold">
              <IoPersonOutline size={20} />
              <h1 className="text-2xl">Settings</h1>
            </div>
            <p className="text-sm text-gray-300">
              Manage your account and personal information
            </p>
            <hr className="border-none h-1 mt-7 rounded-full bg-gray-400" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex justify-between items-center mx-6 mt-5">
              <h1 className="text-xl font-bold">Privacy Notice</h1>
              <h1 className="underline text-blue-300 cursor-pointer">View</h1>
            </div>
            <div className="flex justify-between items-center mx-6 mt-5">
              <h1 className="text-xl font-bold">Preferred Language</h1>
              <button className="w-20 py-2 rounded-full border-2 border-purple-400 hover:bg-purple-400 cursor-pointer hover:text-white font-bold">
                English
              </button>
            </div>
            <div className="flex justify-between items-center mx-6 mt-5">
              <h1 className="text-xl font-bold">Password</h1>
              <h1 className="cursor-pointer text-blue-300">Change Password</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
