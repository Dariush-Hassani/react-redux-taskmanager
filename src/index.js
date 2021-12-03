import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <HomePage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
