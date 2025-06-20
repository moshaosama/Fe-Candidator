import { useGetToken } from "../../../Hooks/useGetToken";
import useChangeProfileUser from "../Hooks/useChangeProfileUser";

const ChangePassword = () => {
  const { User } = useGetToken();
  const {
    registerChangePassword,
    handleSubmitChangePassword,
    handleChangePassword,
  } = useChangeProfileUser();
  return (
    <>
      <div className="text-white">
        <h1 className="text-4xl text-white font-bold">Change Password</h1>
        <p className="text-gray-500 mt-5 text-start">
          Strong password required. Enter 8–256 characters. Do not include
          common words or names. Combine uppercase letters, lowercase letters,
          numbers, and symbols.
        </p>
        <div className="mt-10 flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-bold">User ID</h1>
            <p className="text-sm">{User?.result?.FirstName}</p>
          </div>
          <form
            className="w-96 grid grid-cols-2 gap-5"
            onSubmit={handleSubmitChangePassword(handleChangePassword)}
          >
            <p className="col-span-2">
              <h1 className="text-xl font-bold">Old password</h1>
              <input
                type="password"
                className="w-[40pc] px-2 mt-2 h-14 rounded-xl border-2 border-gray-400"
                {...registerChangePassword("old_password", {
                  required: "Old_Password is required",
                })}
              />
            </p>
            <p className="col-span-2">
              <h1 className="text-xl font-bold">Create new password</h1>
              <input
                type="password"
                className="w-[40pc] px-2 mt-2 h-14 rounded-xl border-2 border-gray-400"
                {...registerChangePassword("new_password", {
                  required: "New_Password is required",
                })}
              />
            </p>
            <p className="col-span-2">
              <button className="w-24 rounded-xl cursor-pointer hover:bg-[#cc7fff] transition-all duration-300 hover:scale-105 bg-[#8200db] py-2">
                Submit
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
