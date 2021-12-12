import ReactDOM from "react-dom";

import App from "./App";
import { StoreContextProvider } from "./Context/Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>,
  rootElement
);
