import React, { useEffect, useRef, useState } from "react";
import { ModelProps } from "../Types/ModelType";
import clsk from "clsx";

const Model = ({ children, Header }: ModelProps) => {
  const [Open, setOpen] = useState(false);
  const Model = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOpen = async () => {
      try {
        if (Model.current) {
          setOpen(true);
        }
      } catch (err) {
        throw new Error(err as string);
      }
    };
    handleOpen();
  }, [Open]);
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#030303b3]">
      <div
        className={clsk(
          "bg-gradient-to-b max-sm:w-[42vh] from-orange-950 from-5% to-indigo-950 to-95% w-[35pc] rounded-lg p-3 shadow-lg  shadow-orange-950 transition-all duration-600",
          Open
            ? "opacity-100 scale-100 max-h-fit"
            : "opacity-0 scale-95 max-h-0"
        )}
        ref={Model}
      >
        <div className="">
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
