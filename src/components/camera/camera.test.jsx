/**
 * Camera Component Testing
 * @author [Colburn Sanders](https://github.com/colburncodes)
 */

import { fireEvent, render } from "@testing-library/react";
import { Camera } from "./Camera";

describe("Camera", () => {
  test("renders camera component", () => {
    render(<Camera />);
  });

  test("button element is clickable", () => {
    const { getByRole } = render(<Camera />);
    const buttonElement = getByRole("button");

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveClass("qr__button-reader");
  });
});
