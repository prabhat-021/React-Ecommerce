import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";
import { AppProvider } from "./context/ProductContext.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
