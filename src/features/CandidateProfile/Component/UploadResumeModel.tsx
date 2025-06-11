import Model from "../../../Components/Model";
import { useResumeContext } from "../Context/ResumeContext";

const UploadResumeModel = () => {
  const { HandeClickBtn, handleTriggerUploadResume } = useResumeContext();

  return (
    <>
      <Model
        Header="Upload a file"
        isExit={true}
        onCLickExit={handleTriggerUploadResume}
      >
        <div className="mt-5">
          <button
            onClick={HandeClickBtn}
            className="w-20 hover:bg-gray-500 rounded-full py-2 transition-all duration-500 cursor-pointer"
          >
            Back
          </button>
          <p className="text-gray-500 text-md my-4 font-bold">
            Upload a resume or an attachment below
          </p>
          <div className="border-2 border-purple-500 border-dashed py-4 rounded-xl flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-xl font-bold">Drop File here</h1>
              <p>.doc, .docx, .pdf, .rtf (under 9 MB)</p>
              <p>Or</p>
              <button className="w-32 bg-purple-500 mt-3 py-2 rounded-2xl cursor-pointer hover:bg-purple-800 transition-all duration-500">
                Select File
              </button>
            </div>
          </div>
        </div>
      </Model>
    </>
  );
};

export default UploadResumeModel;
