import "./theme/defaults.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login } from "./routes";
import Modal from "./components/modal/modal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     
    <RouterProvider router={router} />
    <Modal header={<svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="2" rx="1" fill="#F6F6F6" fill-opacity="0.5"/>
</svg>} title={"coinbase"} text={"Transaction for 0.008 ETH sign request"} notifications={"Type “carrot pizza” to sign your transaction"} footer={"footer"}/>
  </React.StrictMode>
);
