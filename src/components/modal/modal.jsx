import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import closeIcon from "../../assets/close-icon.svg";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import useMediaQuery from "../../utils/use-media-query";
import {Notification} from "../notification"
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
width: 375px;
min-height: 465px;
padding: 16px 16px 24px;
border-radius: 16px 16px 0 0;
background: #2d2d41;
 
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
  width: 40px;
  height: 2px;
  background: var(--bs-white35);
  cursor: grab;
 `;
const ModalTitle = styled.h5`
   line-height: 120%;
   color: var(--bs-white35);
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
  const isLessThan1000 = useMediaQuery("(max-width:1000px)");
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
          className="modal "
          role="modal"
          initial={{y: isLessThan1000 ? "100%" :"", opacity: 0 }}
          animate={{ y: isOpen ? 0 : "100%", opacity: 1 }}
          exit={{ y: isLessThan1000 ?"100%":"", opacity: 0 }}
          transition={{
            duration: 0.3,
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
          <ModalWrapper className="d-flex flex-column align-items-center justify-content-between position-relative ">
            <ModalCloseButton
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              data-bs-dismiss="modal"
            ></ModalCloseButton>
            <ModalBody >
            <ModalHeader className="d-flex justify-content-center  d-lg-none my-0 mx-auto rounded"/>
              <ModalTitle className="text-uppercase text-center fst-normal fw-normal fs-10px">{title}</ModalTitle>
              {/* <ModalNotificationBox>
                {children}
                <ModalText>{text}</ModalText>
              </ModalNotificationBox> */}
            </ModalBody>
            <ModalFooter/>
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
