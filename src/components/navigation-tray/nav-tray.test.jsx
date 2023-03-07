import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import homeIconActive from "../../assets/home-active.svg";
import homeIcon from "../../assets/home.svg";
import notificationIconActive from "../../assets/notification-active.svg";
import notificationIcon from "../../assets/notification.svg";
import profileIconActive from "../../assets/profile-active.svg";
import profileIcon from "../../assets/profile.svg";
import { Home } from "../../routes/home";
import { Login } from "../../routes/login";
import { NavTray } from "./nav-tray";

describe("Navigation tray", () => {
  it("Full app rendering and navigating thorugh NavTray", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <NavTray
          isLoggedIn={true}
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
