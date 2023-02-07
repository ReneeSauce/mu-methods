import React from "react";
import { useState } from "react";
import { Modal } from "./modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
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
ModalComponent.args = {
  title: "coinbase",
  text: "on the smaller screens drag me down to close",
};
