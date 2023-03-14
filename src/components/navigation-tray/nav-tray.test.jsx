import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../../contexts/auth-context";
import { default as HomeIcon } from "../icons/home";
import NotificationIcon from "../icons/notification";
import ProfileIcon from "../icons/profile";
import { NavTray } from "./nav-tray";

describe("Navigation tray", () => {
  const props = {
    isVisible: true,
    isLoggedIn: true,
  };
  it("Full app rendering and navigating thorugh NavTray", () => {
    // const authCtx = useContext(AuthContext);
    // authCtx.updateIsVisIsLogIn(true);

    render(
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
            isLoggedIn={props.isLoggedIn}
            isVisible={props.isVisible}
            {...props}
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

    const iconButton = screen.getByText("Home");

    fireEvent.click(iconButton);
    expect(iconButton).toBeInTheDocument();
  });
});
