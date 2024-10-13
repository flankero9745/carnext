import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import EnglishContactSection from "./EnglishContactSection";
import "./i18n"; // Импорт i18n

ReactDOM.render(
  <React.StrictMode>
    <EnglishContactSection />
  </React.StrictMode>,
  document.getElementById("root")
);
