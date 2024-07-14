import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Main, Footer } from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
