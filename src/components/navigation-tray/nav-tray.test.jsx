import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../../contexts/auth-context";
import { default as HomeIcon } from "../icons/home";
import NotificationIcon from "../icons/notification";
import ProfileIcon from "../icons/profile";
import { NavTray } from "./nav-tray";

describe("Navigation tray", () => {
  it("Full app rendering and navigating thorugh NavTray", () => {
    render(
      /* ---------------------- <AuthProvider></AuthProvider> --------------------- */
      <AuthProvider>
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
              path="/profile"
              element={
                <>
                  <h1>Profile</h1>
                </>
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
      </AuthProvider>
    );

    const profile = screen.getByRole("profile");

    fireEvent.click(profile);
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });
});
