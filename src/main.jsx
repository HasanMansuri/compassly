import React from "react";
import ReactDOM from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <HelmetProvider>
    <App />
  </HelmetProvider>

);
<main
  className="
    w-full
    max-w-7xl
    mx-auto
    px-5
    sm:px-6
    lg:px-8
    overflow-x-hidden
  "
></main>