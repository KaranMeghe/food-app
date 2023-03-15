import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
