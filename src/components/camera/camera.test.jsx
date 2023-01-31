import * as React from "react";
import { render, screen } from "@testing-library/react";

import { Camera } from "./camera";

describe("Component: Camera", () => {
  it("renders component", () => {
    render(<Camera />);
  });
});
