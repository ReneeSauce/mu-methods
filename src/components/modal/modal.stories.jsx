import React from "react";
import { useState } from "react";
import { Modal } from "./modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    notifications: { control: "text" },
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
  text: "Transaction for 0.008 ETH sign request",
  notifications: "Type “carrot pizza” to sign your transaction",
  // onClose:???
};

/*
export const Default = () => {
return (
 <Modal>
 <Modal.Component>

    <Modal.Wrapper>
    <Modal.CloseButton
      type="button"
      onClick={closeModal}
      aria-label="Close modal"
      data-bs-dismiss="modal"
    ></Modal.CloseButton>

    <Modal.Container>
      <Modal.Header />
      <Modal.Title>coinbase</Modal.Title>
      <Modal.Body>
       <ModalText>{text}</ModalText>
        <ModalNotificationBox>{notifications}</ModalNotificationBox> 
      </Modal.Body>
    </Modal.Container>
    <Modal.Footer>
      <Modal.Button
        className="bg-dangerOpacity50"
        type="button"
        onClick={closeModal}
        data-bs-dismiss="modal"
        aria-label="Decline action or close modal"
      >
        Decline
      </Modal.Button>
    </Modal.Footer>
  </Modal.Wrapper>
</Modal.Component>
</Modal> )
  
      };
      */
