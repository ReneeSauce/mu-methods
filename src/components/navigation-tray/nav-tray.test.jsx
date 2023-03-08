import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { default as HomeIcon } from "../icons/home";
import NotificationIcon from "../icons/notification";
import ProfileIcon from "../icons/profile";
import { NavTray } from "./nav-tray";

describe("Navigation tray", () => {
  it("Full app rendering and navigating thorugh NavTray", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Home</h1>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <h1>Login</h1>
              </>
            }
          />
        </Routes>
        <NavTray
          navLinks={[
            {
              role: "profile",
              to: "/login",
              Icon: ProfileIcon,
            },
            {
              role: "home",
              to: "/",
              Icon: HomeIcon,
            },
            {
              role: "notification",
              to: "/notification",
              Icon: NotificationIcon,
              isNotification: true,
            },
          ]}
        />
      </BrowserRouter>
    );

    const profile = screen.getByRole("profile");

    fireEvent.click(profile);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
