import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import DashboardProvider from "./Components/Dashboard/Context/DashboardContext.tsx";
import { store } from "./Store/store.ts";
import { Provider } from "react-redux";
import { HasAccountProvider } from "./Context/useHasAccountContext.tsx";

createRoot(document.getElementById("root")!).render(
  <DashboardProvider>
    <Provider store={store}>
      <HasAccountProvider>
        <App />
      </HasAccountProvider>
    </Provider>
  </DashboardProvider>
);
