import { useState } from "react";
import { Button } from "../button";
import { Modal } from "./modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    onClose: { action: "onClose" },
  },
};

const Template = ({ onClose, ...args }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button buttonKind="primary" onClick={() => setIsOpen(true)}>
        Click Me
      </Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          onClose();
        }}
      />
    </div>
  );
};

export const ModalComponent = Template.bind({});
ModalComponent.args = {};

export const ModalWithHeaderAndTitle = Template.bind({});
ModalWithHeaderAndTitle.args = {
  children: (
    <>
      <Modal.Title>coinbase</Modal.Title>
      <div className="flex-grow-1">Modal Body Goes Here</div>
      <div>Modal Footer Goes Here</div>
    </>
  ),
};
