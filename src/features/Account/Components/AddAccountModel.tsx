interface AddAcountModelProps {
  handleClick: () => void;
}
import * as motion from "motion/react-client";

import { CgMail } from "react-icons/cg";
import { RiAppsLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { backgroundUrl } from "../Utils";

const box = {
  width: 170,
  height: 150,
  backgroundImage: `url(${backgroundUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: 5,
  position: "relative" as any,
  cursor: "pointer",
};

const AddAccountModel = ({ handleClick }: AddAcountModelProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#030303b3]">
      <h1 className="text-gray-300 text-2xl">Add New Account</h1>
      <div className="flex gap-7 my-5">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <div className="absolute right-0 bottom-0 z-0">
            <SiGmail className="text-8xl text-gray-700" />
          </div>
          <div className="m-3 z-50 flex flex-col gap-2">
            <CgMail className="bg-red-800 text-white text-3xl p-1 rounded-lg" />
            <div>
              <h1 className="text-white font-semibold text-2xl">Gmail</h1>
              <p className="text-[10px] text-gray-600">0 Account</p>
            </div>
            <h1 className="text-white font-semibold text-sm">Select {">"}</h1>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <div className="absolute right-0 bottom-0">
            <RiAppsLine className="text-8xl text-gray-700" /> 
          </div>
          <div className="m-3 z-50 flex flex-col gap-2">
            <RiAppsLine className="bg-blue-800 text-white text-3xl p-1 rounded-lg" />
            <div>
              <h1 className="text-white font-semibold text-2xl">Outlook</h1>
              <p className="text-[10px] text-gray-600">0 Account</p>
            </div>
            <h1 className="text-white font-semibold text-sm">Select {">"}</h1>
          </div>
        </motion.div>
      </div>
      <div className="w-80 flex justify-end text-white">
        <h1 className="cursor-pointer" onClick={handleClick}>
          Cancel
        </h1>
      </div>
    </div>
  );
};

export default AddAccountModel;
