import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <NavTray />
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
