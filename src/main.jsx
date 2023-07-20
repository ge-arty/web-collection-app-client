import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./contexts/GlobalContext.jsx";
import LanguageContextProvider from "./contexts/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/web-collection-app-client">
      <GlobalContextProvider>
        <LanguageContextProvider>
          <App />
        </LanguageContextProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
