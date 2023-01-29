import * as React from "react";

import { render, screen } from "@testing-library/react";

import Table from "./table";

// Table Comp Build Test Scripts Below: Table, Heading & Cell.

describe("Component: Table", () => {
  it("Renders table", () => {
    render(<Table />);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("Renders table cell", () => {
    render(<Table.Cell />);
    expect(screen.getByRole("cell")).toBeInTheDocument();
  });

  it("Renders table heading", () => {
    render(<Table.Header />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
