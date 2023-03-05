import { render, screen } from "@testing-library/react";
import { Feed } from "./feed";

describe("Component: Feed", () => {
  it("Renders feed", () => {
    render(<Feed />);
    expect(screen.getByRole("feed")).toBeInTheDocument();
  });

  it("Renders feed heading", () => {
    render(<Feed.Heading />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("Renders table item", () => {
    render(<Feed.Item />);
    expect(screen.getByRole("item")).toBeInTheDocument();
  });
});
