import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavTray } from "./nav-tray";

const Home = () => {
  return (
    <div className="bg-alpha">
      <h1>Home</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div className="bg-alpha">
      <h1>Login</h1>
    </div>
  );
};

const Notification = () => {
  return (
    <div className="bg-alpha">
      <h1>Notification</h1>
    </div>
  );
};

export default {
  title: "Components/NavTray",
  component: NavTray,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Mobile = () => <NavTray />;
