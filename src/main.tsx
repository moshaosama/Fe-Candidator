import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import DashboardProvider from "./Components/Dashboard/Context/DashboardContext.tsx";
import { store } from "./Store/store.ts";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")!).render(
  <DashboardProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </DashboardProvider>
);
