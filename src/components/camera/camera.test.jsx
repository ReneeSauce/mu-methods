import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Camera } from "./camera";

/**
 * Camera Component Testing
 * @author [Colburn Sanders](https://github.com/colburncodes)
 */

describe("Component: Camera", () => {
  const props = {
    title: "Adding account",
    caption: "Step 1 / 3",
    subTitle: "Scan QR code to connect your existing Web3 wallet",
    inputText: "Or enter public key manually",
    buttonText: "Continue",
  };

  it("renders camera that includes all properties", () => {
    render(
      <Camera
        title={props.title}
        caption={props.caption}
        subTitle={props.subTitle}
        inputText={props.inputText}
        buttonText={props.buttonText}
      />
    );

    expect(
      screen.getByText("Scan QR code to connect your existing Web3 wallet")
    ).toBeInTheDocument();
  });
});
