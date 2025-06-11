import { IoPersonOutline } from "react-icons/io5";

const DataPrivacy = () => {
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="mt-5 border-2 border-purple-300 py-5  w-[70pc] rounded-2xl shadow-sm shadow-white text-white">
          <div className="mx-6 my-3">
            <div className="flex items-center gap-2 font-bold">
              <IoPersonOutline size={20} />
              <h1 className="text-2xl">Data Privacy</h1>
            </div>
            <p className="text-sm text-gray-300">
              Choose which recruiters can see your profile
            </p>
            <hr className="border-none h-1 mt-7 rounded-full bg-gray-400" />
          </div>
          <div className="mx-6">
            <form action="">
              <p className="flex gap-3 mt-2">
                <input type="radio" checked />
                <label htmlFor="" className="text-sm">
                  Make my data accessible to all relevant Siemens group
                  companies worldwide to consider me for open positions that fit
                  my profile
                </label>
              </p>
              <p className="flex gap-3 mt-2">
                <input type="radio" />
                <label htmlFor="" className="text-sm">
                  Make my data only accessible to Siemens AG and the Siemens
                  group company offering the relevant job position to consider
                  me only for the job I apply for
                </label>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataPrivacy;
