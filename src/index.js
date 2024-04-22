import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppointMent from "./context/AppointMent";
import UserProvider from "./context/UserProvider";
import Order from "./context/Order";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppointMent>
      <UserProvider>
        <Order>
          <App />
        </Order>
      </UserProvider>
    </AppointMent>
  </React.StrictMode>
);
