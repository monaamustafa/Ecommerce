import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./components/Sass/Main.css";
import "./fontawesome";
import "animate.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import promiseMW from "redux-promise";
import rootReducer from "./Redux/reducers/index";
import { Provider } from "react-redux";

let myStor = applyMiddleware(promiseMW)(createStore)(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myStor}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
