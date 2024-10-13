import React, { createRoot } from "react-dom/client";
import ComponentYouSelected from "./components/ComponentYouSelected";
import { mockData } from "./mockData";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div
    style={{ display: "inline-block", width: "1920px", background: "black" }}
    data-ignore="used only for top most containter width"
  >
    <ComponentYouSelected {...mockData} />
  </div>
);
