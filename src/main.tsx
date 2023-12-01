import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const isProduction = import.meta.env.NODE_ENV === "production";
const basename = isProduction ? import.meta.env.VITE_REACT_APP_BASE_URL_PRODUCTION : import.meta.env.VITE_REACT_APP_BASE_URL_DEVELOPMENT;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
