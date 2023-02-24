import { render, screen } from "@testing-library/react";
import { Layout } from "./layout";

/**
 * Tests for Layout Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 */

describe("Component: Layout", () => {
  const props = {
    header: "header",
    body: "body",
    footer: "footer",
    mb: "12px",
  };

  it("Renders layout component with a header, body and footer", () => {
    render(
      <Layout
        header={props.header}
        body={props.body}
        footer={props.footer}
        mb={props.mb}
      />
    );
    expect(screen.getByText(/header/)).toBeInTheDocument();
    expect(screen.getByText(/body/)).toBeInTheDocument();
    expect(screen.getByText(/footer/)).toBeInTheDocument();
  });

  it("Renders layout component with a body and not a header and not a footer", () => {
    render(<Layout body={props.body} mb={props.mb} />);

    expect(screen.queryByText(/header/)).not.toBeInTheDocument();
    expect(screen.getByText(/body/)).toBeInTheDocument();
    expect(screen.queryByText(/footer/)).not.toBeInTheDocument();
  });
});
