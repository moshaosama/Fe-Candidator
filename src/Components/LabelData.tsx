import { LabelDataProps } from "../Types/LabelData";

const LabelData = ({ LabelData }: LabelDataProps) => {
  return (
    <div className="grid grid-cols-6 mt-10">
      {LabelData.map((data, index) => (
        <h1 className="text-white font-bold" key={index}>
          {data.name}
        </h1>
      ))}
    </div>
  );
};

export default LabelData;
