import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CotizacionProvider } from "./context/CotizacionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CotizacionProvider>
      <App />
    </CotizacionProvider>
  </React.StrictMode>
);

