// main.js → React 애플리케이션의 진입점

// App.js를 ReactDOM.createRoot()를 이용해 브라우저에 렌더링
// React 18 이후 버전에서는 createRoot() 방식 사용
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
