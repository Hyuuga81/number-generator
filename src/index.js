import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RandomApp from "./App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RandomApp max={80} />
  </StrictMode>
);
