import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const isProduction = process.env.NODE_ENV === "production";
const basename = isProduction ? process.env.VITE_REACT_APP_BASE_URL_PRODUCTION : process.env.VITE_REACT_APP_BASE_URL_DEVELOPMENT;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
