import "./theme/defaults.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login } from "./routes";
import { Camera } from "./components/camera/camera";
import { QRCodeScanner } from "./components/qr-reader/qr-reader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/camera",
    element: <Camera />,
  },
  {
    path: "/account",
    element: <QRCodeScanner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
