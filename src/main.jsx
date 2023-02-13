import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { NavTray } from "./components/navigation-tray/nav-tray";
import { Home, Login } from "./routes";
import "./theme/defaults.scss";

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
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <NavTray
        navLinks={[
          {
            role: "login",
            to: "/login",
          },
          {
            role: "home",
            to: "/",
          },
        ]}
      />
    </BrowserRouter>
  </React.StrictMode>
);
