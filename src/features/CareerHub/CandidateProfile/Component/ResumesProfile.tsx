import { CiFileOn } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import EditResumes from "./EditResumesModel";
import UploadResumeModel from "./UploadResumeModel";
import { useResumeContext } from "../Context/ResumeContext";
import useGetResumes from "../Hooks/useGetResumes";

export const ResumesProfile = () => {
  const { isEditResume, isUploadResume, handleTriggerEditResume } =
    useResumeContext();
  const { Resumes } = useGetResumes();

  return (
    <>
      <div className="rounded-xl  border-gray-500 border-2 p-5 mt-5 text-white">
        <div className="flex justify-between gap-5">
          <div>
            <h1 className="text-2xl font-bold">Resumes</h1>
          </div>
          <div>
            <MdOutlineEdit
              size={28}
              cursor={"pointer"}
              onClick={handleTriggerEditResume}
            />
          </div>
        </div>
        <div>
          {Resumes?.resumes?.result?.map((resumes) => (
            <div className="mt-5">
              <div className="flex gap-3 items-center">
                <CiFileOn />
                <h1 className="underline text-blue-300 cursor-pointer">
                  {resumes.Resume}
                </h1>
              </div>
              <p className="mx-7 text-sm text-gray-500 mt-1">{resumes.Date}</p>
            </div>
          ))}
        </div>
        {isEditResume && <EditResumes />}
        {isUploadResume && <UploadResumeModel />}
      </div>
    </>
  );
};
