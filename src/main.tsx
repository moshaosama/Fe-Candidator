import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./Store/store.ts";
import { Provider } from "react-redux";
import { HasAccountProvider } from "./Context/useHasAccountContext.tsx";
import HeaderProvider from "./Layout/Header/Context/HeaderContext.tsx";

createRoot(document.getElementById("root")!).render(
  <HeaderProvider>
    <Provider store={store}>
      <HasAccountProvider>
        <App />
      </HasAccountProvider>
    </Provider>
  </HeaderProvider>
);
