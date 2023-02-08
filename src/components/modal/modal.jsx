import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect } from "react";
import styled from "styled-components";
import closeIcon from "../../assets/close-icon.svg";
import useMediaQuery from "../../utils/use-media-query";
/**
 The **Modal** component is the base of all the modals in the web app.
 *
 *  @author [Nuriya](https://github.com/NuriyaAkh)
 */
const Component = styled(motion.div)`
  bottom: 0;
  left: 0;
  background: var(--bs-black60);
  z-index: 999;
  transition: visibility 0s ease-in-out 0.4s, opacity 0.4s ease-in-out;
`;
const Container = styled.div`
  width: 375px;
  min-height: 465px;
  padding: 16px 16px 24px;
  border-radius: 16px 16px 0 0;
  background: var(--bs-white10);
  transition: visibility 0s ease-in-out 0.4s, opacity 0.4s ease-in-out;
  @media (min-width: 1000px) {
    border-radius: 16px 16px 16px 16px;
  }
`;
const Header = styled.div`
  width: 40px;
  height: 2px;
  background: var(--bs-white35);
  cursor: grab;
`;
const Title = styled.h5`
  line-height: 120%;
  color: var(--bs-white35);
  margin: 32px 0 16px;
  @media (min-width: 1000px) {
    margin: 84px 0 12px;
  }
`;
const CloseButton = styled.div`
  top: 26px;
  right: 26px;
  width: 12px;
  height: 12px;
  background-image: url("${closeIcon}");
  background-position: center;
  background-size: cover;
  cursor: pointer;
  transition: opacity 0.3s;
  &: hover {
    opacity: 0.7;
  }
`;

export const Modal = ({ isOpen, onClose, children }) => {
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
        <Component
          className=" modal d-flex justify-content-center align-items-end align-items-lg-center position-fixed w-100 h-100 m-0 p-0"
          role="modal"
          initial={{ y: isLessThan1000 ? "100%" : "", opacity: 0 }}
          animate={{ y: isOpen ? 0 : "100%", opacity: 1 }}
          exit={{ y: isLessThan1000 ? "100%" : "", opacity: 0 }}
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
          <Container className="d-flex flex-column align-items-center position-relative ">
            <CloseButton
              className="d-lg-flex m-0 p-0 position-absolute bg-transparent border-0 d-none "
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              data-bs-dismiss="modal"
            ></CloseButton>
            <div className="d-flex flex-column justify-content-space-between  align-items-center position-relative">
              <Modal.Header />
              {children}
            </div>
          </Container>
        </Component>
      )}
    </AnimatePresence>
  );
};

const ModalHeader = () => {
  return (
    <Header className="d-block justify-content-center d-lg-none my-0 mx-auto rounded" />
  );
};
const ModalTitle = ({ title }) => {
  return (
    <Title className="text-uppercase text-center fst-normal fw-normal fs-10px">
      {title}
    </Title>
  );
};

const ModalFooter = ({ footer }) => {
  return <div className="d-flex flex-column align-self-end ">{footer}</div>;
};

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Footer = ModalFooter;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.any,
};
