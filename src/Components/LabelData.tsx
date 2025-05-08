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

  // تعريف الأنماط داخل كائن styles
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
        <h1 key={index} style={styles.item}>
          {data.name}
        </h1>
      ))}
    </div>
  );
};

export default LabelData;
