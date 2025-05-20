import Model from "../../../Components/Model";
import { useGetCandidator } from "../../Candidates/Hooks/useGetCandidator";
import { useAddCandidateModelContext } from "../Context/useAddCandidateModelContext";
import useAddCandidate from "../Hooks/useAddCandidate";

const AddModelCandidate = () => {
  const { Candidator } = useGetCandidator();
  const { handleClickAddModal } = useAddCandidateModelContext();
  const { register, handleSubmit, errors, onSubmit } = useAddCandidate();

  return (
    <>
      <Model Header="Add New Candidate">
        <form
          className="mt-5 grid grid-cols-2 gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-lg flex flex-col col-span-2 gap-1">
            <label
              htmlFor="Candidates"
              className="text-gray-500 font-semibold font-sans mx-1"
            >
              Candidates
            </label>
            <select
              className="bg-zinc-800 p-1 rounded-lg border-1 border-gray-500 text-white"
              {...register("CandidateID", {
                required: "Candidate is required",
              })}
            >
              {Candidator.candidator.result?.map((candidate: any) => (
                <option value={candidate.id} key={candidate.id}>
                  {candidate.FirstName} {candidate.LastName}
                </option>
              ))}
            </select>
          </p>
          <p className="col-span-2 mt-4 flex justify-end items-center gap-3">
            <button
              className="border-purple-200 cursor-pointer text-purple-200 px-3 rounded-xl py-1 border-1 "
              onClick={handleClickAddModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-200 cursor-pointer text-black font-bold px-3 rounded-xl py-1 border-1"
            >
              Add Company
            </button>
          </p>
        </form>
      </Model>
    </>
  );
};

export default AddModelCandidate;
