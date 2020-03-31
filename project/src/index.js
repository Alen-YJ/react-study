import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css'
import './App.css'
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);