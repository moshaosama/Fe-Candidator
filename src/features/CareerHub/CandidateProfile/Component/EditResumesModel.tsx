import { CiFileOn } from "react-icons/ci";
import { useResumeContext } from "../Context/ResumeContext";
import Model from "../../../../Components/Model";
import useGetResumes from "../Hooks/useGetResumes";
import { MdDelete } from "react-icons/md";

const EditResumes = () => {
  const { HandeClickBtn, handleTriggerEditResume } = useResumeContext();
  const { Resumes } = useGetResumes();
  return (
    <>
      <Model
        Header="Edit Resumes"
        isExit={true}
        onCLickExit={handleTriggerEditResume}
      >
        <div className="mt-5">
          <button
            onClick={HandeClickBtn}
            className="border-2 border-purple-400 w-32 cursor-pointer hover:bg-purple-400 transition-all duration-500 hover:text-white font-bold py-2 rounded-full"
          >
            Uplead New
          </button>
          <p className="mt-5 text-sm">
            This is the repository of the documents you have used / attached so
            far. If they are relevant for specific applications, please make
            sure to add them as you apply or edit your application afterwards to
            add them (select them from the dropdown). Otherwise they will not be
            considered!
          </p>
          <div className="mt-3 border-2 p-5 rounded-2xl border-gray-500 shadow-2xl">
            <h1 className="text-xl font-bold">CV</h1>
            <div>
              {Resumes?.resumes?.result?.map((resume) => (
                <div className="flex justify-between items-center">
                  <div className="mt-5">
                    <div className="flex gap-3 items-center">
                      <CiFileOn />
                      <h1 className="underline text-blue-300 cursor-pointer">
                        {resume.Resume}
                      </h1>
                    </div>
                    <p className="mx-7 text-sm text-gray-500 mt-1">
                      {resume.Date}
                    </p>
                  </div>
                  <div>
                    <MdDelete size={25} cursor={"pointer"} color="purple" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Model>
    </>
  );
};

export default EditResumes;
