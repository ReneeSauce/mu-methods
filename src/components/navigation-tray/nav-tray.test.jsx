import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../routes/home";
import { Login } from "../../routes/login";
import { NavTray } from "./nav-tray";
import profileIcon from "../../assets/profile.svg";
import profileIconActive from "../../assets/profile_active.svg";
import notificationIcon from "../../assets/notification.svg";
import notificationIconActive from "../../assets/notification_active.svg";
import homeIcon from "../../assets/home.svg";
import homeIconActive from "../../assets/home_active.svg";

describe("Navigation tray", () => {
  it("Full app rendering and navigating thorugh NavTray", () => {
    render(
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
              icon: profileIcon,
              activeIcon: profileIconActive,
            },
            {
              role: "home",
              to: "/",
              icon: homeIcon,
              activeIcon: homeIconActive,
            },
            {
              role: "notification",
              to: "/notification",
              icon: notificationIcon,
              activeIcon: notificationIconActive,
              isNotification: true,
            },
          ]}
        />
      </BrowserRouter>
    );

    const profile = screen.getByRole("login");
    const home = screen.getByRole("home");

    fireEvent.click(profile);
    expect(screen.getByText("Login")).toBeInTheDocument();

    fireEvent.click(home);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
