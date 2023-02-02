import React from "react";
import Modal from "./modal";
import closeIcon from "../../assets/closeIcon.svg";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import useMediaQuery from "../../utils/useMediaQuery";
export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    notifications: { control: "text" },
    onClose: { action: "onClose" },
    isLessThan1000: {
      type: "number",
      defaultValue: 1000,
    },
  },
};
// const Template = ({ ...args }) => <Modal {...args} />;

// export const MobileModal = Template.bind({});
// MobileModal.args = {
//   title: "coinbase",
//   text: "Transaction for 0.008 ETH sign request",
//   notifications: "Type “carrot pizza” to sign your transaction",
// };

export const Default = () => (

 <Modal>
 <Modal.Component>

  
  <Modal.Wrapper>
    <Modal.CloseButton
      type="button"
      onClick={()=>console.log("onClose")}
      aria-label="Close modal"
      data-bs-dismiss="modal"
    ></Modal.CloseButton>

    <Modal.Container>
      <Modal.Header />
      <Modal.Title>coinbase</Modal.Title>
      <Modal.Body>
        {/* <ModalText>{text}</ModalText>
        <ModalNotificationBox>{notifications}</ModalNotificationBox> */}
      </Modal.Body>
    </Modal.Container>
    <Modal.Footer>
      <Modal.Button
        className="bg-dangerOpacity50"
        type="button"
        onClick={()=>console.log("onClose")}
        data-bs-dismiss="modal"
        aria-label="Decline action or close modal"
      >
        Decline
      </Modal.Button>
    </Modal.Footer>
  </Modal.Wrapper>
</Modal.Component>
</Modal> 
  
);
