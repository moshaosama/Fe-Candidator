import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./Store/store.ts";
import { Provider } from "react-redux";
import { HasAccountProvider } from "./Context/useHasAccountContext.tsx";
import HeaderProvider from "./Layout/Header/Context/HeaderContext.tsx";
import ToggleThemeProvider from "./Context/useToggleThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <HeaderProvider>
    <Provider store={store}>
      <HasAccountProvider>
        <ToggleThemeProvider>
          <App />
        </ToggleThemeProvider>
      </HasAccountProvider>
    </Provider>
  </HeaderProvider>
);
