import React, { useState } from "react";

// import {Button} from "../button";
import styled from "styled-components";
import closeIcon from "../../assets/closeIcon.svg";
import rectangleModalHeader from "../../assets/rectangleModalHeader.svg";

/**
 The **Modal** component is the base of all the modals in the web app.
 *
 *  @author [Nuriya](https://github.com/NuriyaAkh)
 */
const ModalComponent = styled.div`
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
  //visibility: hidden;

  @media (max-width: 1000px) {
    align-items: flex-end;
   
    animation: slideDown 1s, slideUp 0.8s linear;

    @keyframes slideUp {
      from {
        transform: translateY(100%);
      }

      to {
        transform: translateY(0);
      }
    }
    @keyframes slideDown {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }
  }
  // .modal-fade-transform {
  //   &.show {
  //     &.modal {
  //       transform: translateY(0);
  //     }
  //   }
  //   &.hide {
  //     &.modal {
  //       transform: translateY(-100%);
  //     }
  //   }
  // }
`;

const ModalContainer = styled.div`
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
  @media (min-width: 1000px) {
    border-radius: 16px 16px 16px 16px;
  }
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
 

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
const ModalBody = styled.div`
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
const ModalNotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 111px;
 
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #f6f6f6;
  padding: 0 30px;
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
const Button = styled.button`
  width: 343px;
  height: 60px;
  margin-top: 12px;
  border-radius: 8px;
  border: none;
  //opacity:0.5;
`;
 const Modal = ({
  isOpen,
  onClose,
  header,
  title,
  text,
  children,
  notifications,
  footer,
}) => {
  return isOpen ? (
    
    <ModalComponent className="modal" tabindex="-1">
      {" "}
      {children}
      <ModalContainer>
        <ModalCloseButton
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          data-bs-dismiss="modal"
        ></ModalCloseButton>
        <div>
          <ModalHeader>
            {header}
            <svg
              width="40"
              height="2"
              viewBox="0 0 40 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="40"
                height="2"
                rx="1"
                fill="#F6F6F6"
                fillOpacity="0.5"
              />
            </svg>
          </ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalBody>
            <ModalText>{text}</ModalText>
            <ModalNotificationBox>{notifications}</ModalNotificationBox>
          </ModalBody>
        </div>
        <ModalFooter>
          {footer}
          <Button
            className="bg-dangerOpacity50"
            type="button"
            onClick={onClose}
            data-bs-dismiss="modal"
          >
            Decline
          </Button>
          <Button className="bg-primary" type="submit">
            Sign In
          </Button>
        </ModalFooter>
      </ModalContainer>
    </ModalComponent>
  ) : (
    ""
    );
  
};
 export default Modal;

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Container = ModalContainer;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
Modal.NotificationsBox=ModalNotificationBox
