import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import closeIcon from "../../assets/closeIcon.svg";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

/**
 The **Modal** component is the base of all the modals in the web app.
 *
 *  @author [Nuriya](https://github.com/NuriyaAkh)
 */
const ModalComponent = styled(motion.div)`
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: visibility 0s ease-in-out 0.4s, opacity 0.4s ease-in-out;
  margin: 0;
  padding: 0;
  color: white;
  @media (max-width: 1000px) {
    align-items: flex-end;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  min-height: 465px;
  background: #2d2d41;
  border-radius: 16px 16px 0px 0px;
  align-items: center;
  padding: 16px 16px 24px;
  box-sizing: border-box;
  position: relative;
  justify-content: space-between;
  transition: visibility 0s ease-in-out 0.4s, opacity 0.4s ease-in-out;
  @media (min-width: 1000px) {
    border-radius: 16px 16px 16px 16px;
  }
`;
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 2px;
  background: rgba(246, 246, 246, 0.5);
  border-radius: 1px;
  margin: 0 auto;
  cursor: grab;
  @media (min-width: 1000px) {
    display: none;
  }
`;
const ModalTitle = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  font-feature-settings: "pnum" on, "lnum" on;
  color: rgba(246, 246, 246, 0.7);
  margin: 32px 0 16px;
  @media (min-width: 1000px) {
    margin: 84px 0 12px;
  }
`;
const ModalNotificationBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #f6f6f6;
  margin-bottom: 32px;
`;
const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;
const ModalCloseButton = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 26px;
  right: 26px;
  width: 12px;
  height: 12px;
  background-color: transparent;
  background-image: url("${closeIcon}");
  background-position: center;
  background-size: cover;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Modal = ({ isOpen, onClose, title, text, children }) => {
  const y = useMotionValue(0);

  useEffect(() => {
    if (!isOpen) {
      onClose();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {" "}
      {isOpen && (
        <ModalComponent
          className="modal"
          role="modal"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: isOpen ? 0 : "100%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 50,
            stiffness: 200,
          }}
          drag="y"
          dragElastic={0.1}
          dragMomentum={false}
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.y > 300) {
              onClose();
            }
          }}
        >
          <ModalWrapper>
            <ModalCloseButton
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              data-bs-dismiss="modal"
            ></ModalCloseButton>
            <ModalBody>
              <ModalHeader />
              <ModalTitle>{title}</ModalTitle>
              <ModalNotificationBox>
                {children}
                <ModalText>{text}</ModalText>
              </ModalNotificationBox>
            </ModalBody>
            <ModalFooter>{children}</ModalFooter>
          </ModalWrapper>
        </ModalComponent>
      )}
    </AnimatePresence>
  );
};

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Wrapper = ModalWrapper;
Modal.ModalBody = ModalBody;
Modal.Footer = ModalFooter;
Modal.NotificationBox = ModalNotificationBox;
Modal.CloseButton = ModalCloseButton;

Modal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.any,
};
