import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyState from "./Context/MyState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyState>
);
