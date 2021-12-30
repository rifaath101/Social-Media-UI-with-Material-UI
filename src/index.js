import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "@material-ui/styles";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
