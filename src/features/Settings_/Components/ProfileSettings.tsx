import clsx from "clsx";
import useChangeProfileUser from "../Hooks/useChangeProfileUser";

const ProfileSettings = () => {
  const {
    handleChangeProfileUser,
    handleSubmitChangeProfile,
    registerChangeProfile,

    isChange,
  } = useChangeProfileUser();
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

        <form
          onSubmit={handleSubmitChangeProfile(handleChangeProfileUser)}
          className="grid grid-cols-2 gap-3 mt-5 w-[43pc]"
        >
          <p className="col-span-1 flex flex-col gap-3">
            <label className="text-white font-bold mx-1">FirstName</label>
            <input
              type="text"
              className="border-2 rounded-xl border-gray-500 p-2"
              {...registerChangeProfile("FirstName")}
            />
          </p>
          <p className="col-span-1 flex flex-col gap-3">
            <label className="text-white font-bold mx-1">LastName</label>
            <input
              type="text"
              className="border-2 rounded-xl border-gray-500 p-2"
              {...registerChangeProfile("LastName")}
            />
          </p>
          <p className="col-span-2 flex flex-col gap-3">
            <label className="text-white font-bold mx-1">Email</label>
            <input
              type="email"
              className="border-2 rounded-xl border-gray-500 p-2"
              {...registerChangeProfile("Email")}
            />
          </p>
          <p className="col-span-2 flex flex-col items-start gap-3 my-5">
            <button
              disabled={isChange}
              className={clsx(
                "w-32 py-2 rounded-xl text-black font-bold transition-all duration-700",
                isChange
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-white hover:bg-gray-300 cursor-pointer"
              )}
            >
              Save Change
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default ProfileSettings;
