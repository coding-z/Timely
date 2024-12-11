import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <h1>Hi</h1>
  </StrictMode>
);
