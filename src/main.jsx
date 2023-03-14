import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css/bundle";
import { NavTray } from "./components";
import HomeIcon from "./components/icons/home";
import NotificationIcon from "./components/icons/notification";
import ProfileIcon from "./components/icons/profile";
import { AuthProvider } from "./contexts/auth-context";
import { TransactionProvider } from "./contexts/transaction-context";
import { UserProvider } from "./contexts/user-context";
import {
  AccountPage,
  AddAccount,
  Dashboard,
  Home,
  Notifications,
  Profile,
  SignUp,
} from "./routes";

import "./theme/defaults.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* insert usercontext here */}
    <AuthProvider>
      <UserProvider>
        <TransactionProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/addaccount" element={<AddAccount />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/accountpage" element={<AccountPage />} />
              <Route path="/notifications" element={<Notifications />} />
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
            </Routes>

            <NavTray
              navLinks={[
                {
                  role: "profile",
                  to: "/profile",
                  Icon: ProfileIcon,
                },
                {
                  role: "home",
                  to: "/",
                  Icon: HomeIcon,
                },
                {
                  to: "/notifications",
                  Icon: NotificationIcon,
                  isNotification: true,
                },
              ]}
            />
          </BrowserRouter>
        </TransactionProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
