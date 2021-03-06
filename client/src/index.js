import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import DataProvider from "./GlobalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DataProvider>
        <Router>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </DataProvider>
);
