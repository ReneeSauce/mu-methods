import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Component: Button", () => {
  it("Renders primary button", () => {
    render(
      <Button buttonKind="primary" size="lg">
        Large primary button
      </Button>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("label")).toBeInTheDocument();
  });

  it("Renders disabled button", () => {
    render(
      <Button disabled buttonKind="secondary" size="md">
        Can't click me!
      </Button>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
