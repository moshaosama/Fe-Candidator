import clsx from "clsx";
import { useToggleTheme } from "./Context/useToggleThemeContext";
import RouterPages from "./Router/Router";

function App() {
  const { Theme } = useToggleTheme();
  return (
    <>
      <div className={clsx(Theme === "dark" ? "bg-[#1c1c2c]" : "bg-white")}>
        <RouterPages />
      </div>
    </>
  );
}

export default App;
