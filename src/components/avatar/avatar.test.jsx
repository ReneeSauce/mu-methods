import { render, screen } from "@testing-library/react";
import { Avatar } from "./avatar";

/**
 * Avatar Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

describe("Component: Avatar", () => {
  const props = {
    shape: "round",
    size: "medium",
    src: "https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    alt: "salmon nigiri",
  };

  it("renders an image", () => {
    render(
      <Avatar
        shape={props.shape}
        src={props.src}
        size={props.size}
        alt={props.alt}
      />
    );

    expect(screen.getByAltText("salmon nigiri")).toBeInTheDocument();
  });
});
