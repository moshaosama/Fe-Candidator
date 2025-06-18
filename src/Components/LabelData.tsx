import { useToggleTheme } from "../Context/useToggleThemeContext";
import { LabelDataProps } from "../Types/LabelData";
import { CSSProperties } from "react";

const LabelData = ({
  labels,
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
      fontWeight: "bold",
    },
  };

  const { Theme } = useToggleTheme();

  return (
    <div style={styles.container} className="p-4">
      {labels.map((data, index) => (
        <>
          <div className={Theme === "dark" ? "text-white" : "text-black"}>
            <h1
              key={index}
              style={styles.item}
              className="flex items-center gap-2 max-sm:text-[10px]"
            >
              {data.name == "First Name" || data.name == "Name" ? (
                <input
                  type="checkbox"
                  className="w-4 h-4 max-sm:w-2 max-sm:h-2 rounded-full"
                />
              ) : null}
              {data.name}
            </h1>
          </div>
        </>
      ))}
    </div>
  );
};

export default LabelData;
