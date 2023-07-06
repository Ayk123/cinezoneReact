import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

import "./index.css";
import App from "./App";
import { BackToTopButton } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <BackToTopButton />
      <App />
    </Router>
  </React.StrictMode>
);
