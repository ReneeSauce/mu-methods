import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./modal";
const handleClick = vitest.fn();
describe("Component: Modal", () => {
  const props = {
    isOpen: true,
    isLessThan1000: true,
    title: "coinbase",
    text: "Transaction for 0.008 ETH sign request",
    notifications: "Type “carrot pizza” to sign your transaction",
  };
  it("renders a modal that includes an title, notifications, text", () => {
    render(
      <Modal
        isOpen={props.isOpen}
        onClose={handleClick}
        title={props.title}
        {...props}
      />
    );

    const modalElement = screen.getByRole("modal");
    expect(modalElement).toBeInTheDocument();
    const closeButton = screen.getByLabelText("Close modal");
    fireEvent.click(closeButton);
    expect(modalElement).not.toBeVisible();
    expect(modalElement).toHaveTextContent("coinbase");
  });
});
