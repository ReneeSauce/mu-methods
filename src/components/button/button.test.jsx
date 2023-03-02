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

  it("Renders icon button", () => {
    render(
      <Button
        buttonKind="textOnly"
        size="sm"
        leftIcon={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png"
        }
      />
    );
    expect(screen.getByRole("icon")).toBeInTheDocument();
  });
});
