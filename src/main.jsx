import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FWPWebsitePrototype from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FWPWebsitePrototype />
  </React.StrictMode>
);
