import React from "react";
import { ModelProps } from "../Types/ModelType";

const Model = ({ children, Header }: ModelProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[#030303b3]">
      <div className="bg-gradient-to-b from-orange-950 from-5% to-indigo-950 to-95% w-[35pc] rounded-lg p-3 shadow-lg  shadow-orange-950">
        <div>
          <h1 className="text-md font-bold text-white">{Header}</h1>
          {React.Children.map(children, () => {
            if (React.isValidElement(children)) {
              return React.cloneElement(children);
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Model;
