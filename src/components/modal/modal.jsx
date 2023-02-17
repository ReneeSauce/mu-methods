import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect } from "react";
import styled from "styled-components";
import closeIcon from "../../assets/close-icon.svg";
import CloseIcon from "../icons/close";
/**
 The **Modal** component is the base of all the modals in the web app.
 *
 *  @author [Nuriya](https://github.com/NuriyaAkh)
 */
const Component = styled.div`
  bottom: 0;
  left: 0;
  z-index: 999;
  transition: visibility 0.3s ease-in-out, opacity ease-in-out;
`;

const Container = styled(motion.div)`
  width: 375px;
  min-height: 465px;
  padding: 16px 16px 24px;
  border-radius: 16px 16px 0 0;
  transition: visibility 0s ease-in-out, opacity ease-in-out;
  @media (min-width: 1000px) {
    border-radius: 16px 16px 16px 16px;
  }
`;

const Header = styled.div`
  width: 40px;
  height: 2px;
  cursor: grab;
`;

const CloseButton = styled.div`
  top: 26px;
  right: 26px;
  width: 12px;
  height: 12px;
 
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) {
      onClose();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Component
          className="modal d-flex justify-content-center align-items-end align-items-lg-center position-fixed w-100 h-100 m-0 p-0 bg-black bg-opacity-60"
          role="modal"
          onClick={(evt) => {
            if (evt.target.role === "modal") {
              onClose();
            }
          }}
        >
          <Container
            className="d-flex flex-column align-items-center position-relative bg-beta"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: isOpen ? 0 : "100%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              type: "spring",
              damping: 50,
              stiffness: 100,
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
            <CloseButton
              className="d-lg-flex m-0 p-0 position-absolute bg-transparent border-0 d-none"
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              data-bs-dismiss="modal"
            >
              <CloseIcon />
            </CloseButton>
            <Header className="d-lg-none position-absolute rounded bg-white bg-opacity-35" />
            {children}
          </Container>
        </Component>
      )}
    </AnimatePresence>
  );
};

const ModalTitle = ({ children }) => {
  return (
    <h1 className="text-uppercase text-center fst-normal fw-normal fs-10px text-white text-opacity-35 mt-32px mb-16px lh-sm">
      {children}
    </h1>
  );
};

Modal.Title = ModalTitle;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
