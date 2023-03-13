import { render, screen } from "@testing-library/react";
import { Login } from "./login";

describe("Route: Login", () => {
  it("renders headline", () => {
    render(<Login />);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
