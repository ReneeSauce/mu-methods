import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css/bundle";
import { NavTray } from "./components";
import {
  Account,
  AddAccount,
  Home,
  Login,
  Notifications,
  Profile,
  SignUp,
} from "./routes";
import "./theme/defaults.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addaccount" element={<AddAccount />} />
        <Route
          path="/profile"
          element={
            <Profile
              src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt="sushi"
              name="Jugal Mu"
              pillText="0x6b...7776"
              isCopiable={true}
              email="emailexample@gmail.com"
              id="ID: JU1s32"
            />
          }
        />
        <Route path="/accountpage" element={<SignUp />} />
        <Route
          path="/account"
          element={
            <Account
              src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt="sushi"
              name="MyMetaMaskAkk"
              wallet="Metamask"
              permissions="F"
              pillText="0x6b...7776"
              isCopiable={true}
            />
          }
        />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      <NavTray
        isLoggedIn={false}
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
