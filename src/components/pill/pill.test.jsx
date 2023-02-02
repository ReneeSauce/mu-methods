import * as React from "react";
import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { Pill } from "./pill";

describe("Component: Pill", () => {
  const props = {
    shape: "round",
    isCopiable: false,
    text: "hello",
    opacity: "10",
    textOpacity: "70",
  };

  it("renders a text filled pill and no copy button", () => {
    render(
      <Pill
        shape={props.shape}
        isCopiable={props.isCopiable}
        text={props.text}
        opacity={props.opacity}
        textOpacity={props.textOpacity}
      />
    );

    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("renders a text filled pill and copy button", () => {
    render(
      <Pill
        shape={props.shape}
        isCopiable={!props.isCopiable}
        text={props.text}
        opacity={props.opacity}
        textOpacity={props.textOpacity}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
