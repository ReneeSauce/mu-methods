import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Modal } from "./modal";

describe("Component: Modal", () => {
  const props = {
    isOpen: true,
    isModalOpen: true,
    isLessThan1000: true,
    title: "coinbase",
    text: "Transaction for 0.008 ETH sign request",
    notifications: "Type “carrot pizza” to sign your transaction",
  };
  it("renders a modal that includes an title, notifications, text", () => {
    render(
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        title={props.title}
        {...props}
      />
    );

    const modalElement = screen.getByRole("modal");
    //console.log(modalElement);
    expect(modalElement).toBeInTheDocument();
    // expect(modalElement).toBeVisible();
    expect(modalElement).toHaveTextContent("coinbase");
  });
});
