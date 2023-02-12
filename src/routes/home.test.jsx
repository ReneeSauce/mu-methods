import { render, screen } from "@testing-library/react";
import { Home } from "./home/home";

describe("Route: Home", () => {
  it("renders headline", () => {
    render(<Home />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
