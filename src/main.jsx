import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/Routes";
import "./index.css";
import { Router, RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
