import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context/AppContext";
import App from "./App";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
