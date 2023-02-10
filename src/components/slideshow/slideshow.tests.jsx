import { render, screen } from "@testing-library/react";

import { SlideShow } from "./slideshow";

describe("Component: SlideShow", () => {
  it("Renders slideshow", () => {
    render(<SlideShow />);
    expect(screen.getByRole("SlideShow")).toBeInTheDocument();
  });

  it("Renders slide image", () => {
    render(<SlideShow.Image />);
    expect(screen.getByRole("Image")).toBeInTheDocument();
  });
});
