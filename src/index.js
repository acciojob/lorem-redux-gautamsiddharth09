import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./app/store"; // fixed path
import { Provider } from "react-redux";
import "regenerator-runtime/runtime"; // for async/await support

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
