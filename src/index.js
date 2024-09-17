import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create a root.

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
); // Render your app.
