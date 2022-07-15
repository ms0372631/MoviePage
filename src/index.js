import { StrictMode } from "react";
import ReactDOM from "react-dom";
import createStore from "./store/store"
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App store={store}/>
  </StrictMode>,
  rootElement
);