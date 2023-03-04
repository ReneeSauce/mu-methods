import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./modal";
const handleClick = vitest.fn();
describe("Component: Modal", () => {
  const props = {
    isOpen: true,
    isLessThan1000: true,
    title: "coinbase",
  };
  it("renders a modal that includes a title", (done) => {
    render(
      <Modal isOpen={props.isOpen} onClose={handleClick} {...props}>
        <Modal.Title>{props.title}</Modal.Title>
        <div>{props.text}</div>
      </Modal>
    );

    const modalElement = screen.getByRole("modal");
    expect(modalElement).toBeInTheDocument();
    const closeButton = screen.getByLabelText("Close modal");
    fireEvent.click(closeButton);
    // Modal animation has to finish before element is no longer visible
    setTimeout(() => {
      expect(modalElement).not.toBeVisible();
      done();
    }, 1000);
  });
});
