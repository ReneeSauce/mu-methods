import { render, screen } from "@testing-library/react";
import Form from "./form";

/**
 * Tests for Form Component
 * @author [Jake Bohn](https://github.com/JakobOrion)
 */

describe("Component: Form", () => {
  const props = { formName: "formName", onSubmit: "onSubmit" };

  it("Renders form component", () => {
    render(<Form formName={props.formName} onSubmit={props.onSubmit}></Form>);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});
