import { CiLight } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-router";
import { useToggleTheme } from "../../../Context/useToggleThemeContext";
import clsx from "clsx";

const Settings = () => {
  const { handleToggleTheme, Theme } = useToggleTheme();
  return (
    <>
      <div
        className={clsx(
          " ml-10 mt-10",
          Theme == "dark" ? "text-white" : "text-black"
        )}
      >
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>

        <div className="flex flex-col gap-14 mt-5  ml-10 max-sm:ml-0">
          <Link to={"account-setting"}>
            <div>
              <h1 className="text-xl font-bold">Account</h1>
              <div className="flex items-center gap-10 mt-3 cursor-pointer border-2 p-2 hover:bg-gray-700 transition-all duration-700 rounded-xl shadow-lg shadow-black ">
                <RxPerson
                  size={25}
                  className="bg-gray-400 w-10 h-10 p-2 rounded-full"
                />

                <div>
                  <h1 className="text-lg font-semibold">Account Settings</h1>
                  <p>Manage your account detials</p>
                </div>
              </div>
            </div>
          </Link>

          <div>
            <h1 className="text-xl font-bold">Display</h1>
            <div
              onClick={handleToggleTheme}
              className="flex items-center gap-10 mt-3 cursor-pointer border-2 p-2 hover:bg-gray-700 transition-all duration-700 rounded-xl shadow-lg shadow-black "
            >
              <CiLight
                size={25}
                className="bg-gray-400 w-10 h-10 p-2 rounded-full"
              />

              <div>
                <h1 className="text-lg font-semibold">Display Preferences</h1>
                <p>Customize your display Preferences</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl font-bold">Subscriptions</h1>
            <Link to={"/dashboard"}>
              <div className="flex items-center gap-10 mt-3 cursor-pointer border-2 p-2 hover:bg-gray-700 transition-all duration-700 rounded-xl shadow-lg shadow-black ">
                <RxPerson
                  size={25}
                  className="bg-gray-400 w-10 h-10 p-2 rounded-full"
                />

                <div>
                  <h1 className="text-lg font-semibold">
                    Subscriptions Management
                  </h1>
                  <p>Manage your current subscriptions</p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <h1 className="text-xl font-bold">App informations</h1>
            <div className="flex items-center gap-10 mt-3 cursor-pointer border-2 p-2 hover:bg-gray-700 transition-all duration-700  rounded-xl shadow-lg shadow-black ">
              <RxPerson
                size={25}
                className="bg-gray-400 w-10 h-10 p-2 rounded-full"
              />

              <div>
                <h1 className="text-lg font-semibold">App informations</h1>
                <p>Verify app version and other information</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
