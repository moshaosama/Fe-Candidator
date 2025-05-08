import { LabelDataProps } from "../Types/LabelData";
import { CSSProperties } from "react";

const LabelData = ({
  labels,
  color = "white",
  display = "grid",
  gridTemplateColumns = `repeat(${labels.length}, 1fr)`,
  gap = "10px",
  margin = "40px",
}: LabelDataProps) => {
  
  
  const styles: { container: CSSProperties; item: CSSProperties } = {
    container: {
      display: display, 
      gridTemplateColumns: gridTemplateColumns, 
      marginTop: margin, 
      gap: gap,
    },
    item: {
      color: color,
      fontWeight: "bold",
    },
  };

  return (
      <div style={styles.container} className="p-4">
      {labels.map((data, index) => (
        <h1 key={index} style={styles.item} className="flex items-center gap-2 max-sm:text-[10px]">
          {data.name == "First Name" && <input type="checkbox" className="w-4 h-4 max-sm:w-2 max-sm:h-2 rounded-full" />}
          {data.name}
        </h1>
      ))}
    </div>
  );
};

export default LabelData;
