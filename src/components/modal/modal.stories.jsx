import { useState } from "react";
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
      <button onClick={() => setIsOpen(true)}>Click Me</button>
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

export const ModalWithHeader = Template.bind({});
ModalWithHeader.args = {
  children: <Modal.Header />,
};
export const ModalWithHeaderAndTitle = Template.bind({});
ModalWithHeaderAndTitle.args = {
  children: (
    <>
      <Modal.Header />
      <Modal.Title title="coinbase"></Modal.Title>
    </>
  ),
};
