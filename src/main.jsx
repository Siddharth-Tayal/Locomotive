import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import { Provider as AlertProvider, positions, transitions } from "react-alert";

import Template from "react-alert-template-basic";
const options = {
  positions: positions.TOP_CENTER,
  timeout: 2000,
  transitions: transitions.SCALE,
  containerStyle: {
    zIndex: 999,
  },
};
render(
  <AlertProvider template={Template} {...options}>
    <App />
  </AlertProvider>,
  document.getElementById("app")
);
