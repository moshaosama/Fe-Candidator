import { MdOutlineEdit, MdOutlineEmail } from "react-icons/md";
import { CardDetails } from "../../../Components/CardDetails";
import { useGetCandidateById } from "../../OverView/Hooks/useGetCandidateById";
import { CiLink, CiLocationOn, CiPhone } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import Model from "../../../Components/Model";
import { useDetailsProfileFun } from "../Hooks/useDetailsProfileFun";

const DetaiilsProfile = () => {
  const { CandidateById } = useGetCandidateById();
  const {
    isOpen,
    handleTriggerOpen,
    register,
    errors,
    handleSubmit,
    onSubmit,
  } = useDetailsProfileFun();

  return (
    <>
      <div className="flex justify-between border-2 px-10 py-5 mt-5 border-gray-500 rounded-xl">
        <div className="text-white grid grid-cols-2 gap-x-56 gap-y-8">
          <CardDetails
            Header={CandidateById?.candidator?.result?.[0]?.Email}
            Icon={<MdOutlineEmail size={28} />}
            Text="Email"
          />
          <CardDetails
            Header={
              CandidateById?.candidator?.result?.[0]?.LinkedInProfile
                ? CandidateById?.candidator?.result?.[0]?.LinkedInProfile
                : "no LinkedIn"
            }
            Icon={<CiLink size={28} />}
            Text="Links"
          />
          <CardDetails
            Header={
              CandidateById?.candidator?.result?.[0]?.Location
                ? CandidateById?.candidator?.result?.[0]?.Location
                : "Location"
            }
            Icon={<CiLocationOn size={28} />}
            Text="Links"
          />
          <CardDetails
            Header={
              CandidateById?.candidator?.result?.[0]?.phoneNumber
                ? CandidateById?.candidator?.result?.[0]?.phoneNumber
                : "phoneNumber"
            }
            Icon={<CiPhone size={28} />}
            Text="Phone"
          />
          <CardDetails
            Header={CandidateById?.candidator?.result?.[0]?.FirstName}
            Icon={<IoPersonOutline size={28} />}
            Text="First Name"
          />
          <CardDetails
            Header={CandidateById?.candidator?.result?.[0]?.LastName}
            Icon={<IoPersonOutline size={28} />}
            Text="Last Name"
          />
        </div>
        <div onClick={handleTriggerOpen}>
          <MdOutlineEdit size={28} color={"white"} cursor={"pointer"} />
        </div>
      </div>

      {/* Form Edit */}
      {isOpen && (
        <div>
          <Model Header="Edit Fields">
            <form
              className="grid grid-cols-2 gap-2 mt-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="text-lg flex flex-col col-span-2 gap-1">
                <label
                  htmlFor="Email"
                  className="text-gray-500 font-semibold font-sans mx-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
                  {...register("Email", {
                    required: "Email is required",
                  })}
                />
                {errors.Email && (
                  <p className="text-red-500">
                    {errors.Email.message as string}
                  </p>
                )}
              </p>
              <p className="text-lg flex flex-col col-span-1 gap-1">
                <label
                  htmlFor="FirstName"
                  className="text-gray-500 font-semibold font-sans mx-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
                  {...register("FirstName", {
                    required: "FirstName is required",
                  })}
                />
                {errors.FirstName && (
                  <p className="text-red-500">
                    {errors.FirstName.message as string}
                  </p>
                )}
              </p>
              <p className="text-lg flex flex-col col-span-1 gap-1">
                <label
                  htmlFor="LastName"
                  className="text-gray-500 font-semibold font-sans mx-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
                  {...register("LastName", {
                    required: "LastName is required",
                  })}
                />
                {errors.LastName && (
                  <p className="text-red-500">
                    {errors.LastName.message as string}
                  </p>
                )}
              </p>
              <p className="text-lg flex flex-col col-span-2 gap-1">
                <label
                  htmlFor="Phone"
                  className="text-gray-500 font-semibold font-sans mx-1"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
                  {...register("phoneNumber", {
                    required: "phoneNumber is required",
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">
                    {errors.phoneNumber.message as string}
                  </p>
                )}
              </p>
              <p className="text-lg flex flex-col col-span-2 gap-1">
                <label
                  htmlFor="Location"
                  className="text-gray-500 font-semibold font-sans mx-1"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="Location"
                  className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
                  {...register("Location", {
                    required: "Location is required",
                  })}
                />
                {errors.Location && (
                  <p className="text-red-500">
                    {errors.Location.message as string}
                  </p>
                )}
              </p>
              <p className="text-lg flex flex-col col-span-2 gap-1">
                <label
                  htmlFor="LinkedIn"
                  className="text-gray-500 font-semibold font-sans mx-1"
                >
                  LinkedIn
                </label>
                <input
                  type="text"
                  id="LinkedInProfile"
                  className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
                  {...register("LinkedInProfile", {
                    required: "LinkedInProfile is required",
                  })}
                />
                {errors.LinkedInProfile && (
                  <p className="text-red-500">
                    {errors.LinkedInProfile.message as string}
                  </p>
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
        </div>
      )}
    </>
  );
};

export default DetaiilsProfile;
