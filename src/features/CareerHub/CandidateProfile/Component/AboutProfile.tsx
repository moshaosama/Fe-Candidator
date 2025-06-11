import { MdOutlineEdit } from "react-icons/md";
import { useAboutProfile } from "../Hooks/useAboutProfile";
import Model from "../../../../Components/Model";

const AboutProfile = () => {
  const {
    isOpenAboutProfile,
    register,
    errors,
    handleSubmit,
    onSubmit,
    handleTriggerOpen,
    CandidateById,
  } = useAboutProfile();

  return (
    <>
      <div className="text-white flex flex-col justify-between gap-5 rounded-xl border-2 px-10 py-5 mt-5   border-gray-500">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">About</h1>
          </div>
          <div onClick={handleTriggerOpen}>
            <MdOutlineEdit size={28} cursor={"pointer"} />
          </div>
        </div>
        <p className="text-xl break-words">
          {CandidateById?.candidator?.result?.[0]?.About}
        </p>
      </div>

      {isOpenAboutProfile && (
        <Model Header="Edit About">
          <form
            className="grid grid-cols-2 gap-2 mt-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-lg flex flex-col col-span-2 gap-1">
              <label
                htmlFor="About"
                className="text-gray-500 font-semibold font-sans mx-1"
              >
                About
              </label>
              <input
                type="text"
                id="About"
                className="bg-zinc-800 p-1 h-32 rounded-lg border-1 border-gray-500 text-white"
                {...register("About", { required: "About is required" })}
              />
              {errors.About && (
                <p className="text-red-500">{errors.About.message as string}</p>
              )}
            </p>
            <p className="col-span-2 mt-4 flex justify-end items-center gap-3">
              <button
                className="border-purple-200 cursor-pointer text-purple-200 px-3 rounded-xl py-1 border-1 "
                onClick={handleTriggerOpen}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-purple-200 cursor-pointer text-black font-bold px-3 rounded-xl py-1 border-1"
              >
                Save Changes
              </button>
            </p>
          </form>
        </Model>
      )}
    </>
  );
};

export default AboutProfile;
