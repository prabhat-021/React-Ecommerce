import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";
import { FilterContextProvider } from "./context/FilterContext.js";
import { AppProvider } from "./context/ProductContext.js";
import { CartProvider } from "./context/CartContext.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);
