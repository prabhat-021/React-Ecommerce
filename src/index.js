import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";
import { FilterContextProvider } from "./context/FilterContext.js";
import { AppProvider } from "./context/ProductContext.js";
import { CartProvider } from "./context/CartContext.js";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// const domain =process.env.REACT_APP_AUTH_DOMAIN;
// const clientId=process.env.REACT_APP_CLIENT_ID;

root.render(
  <Auth0Provider
    domain="prabhat-021.us.auth0.com"
    clientId="UEhtHAtL4QXfJiDS1XN9IV8JQSgf4Zv3"
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);
