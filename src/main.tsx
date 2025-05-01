import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import DashboardProvider from "./Components/Dashboard/Context/DashboardContext.tsx";

createRoot(document.getElementById("root")!).render(
  <DashboardProvider>
    <App />
  </DashboardProvider>
);
