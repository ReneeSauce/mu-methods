import React from "react";
// import {Button} from "../button";
import styled from "styled-components";
import CloseButtonSvg from "../../assets/closeIcon.svg"


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
  color:white;
  //visibility: hidden;
  
  @media (max-width: 1000px) {
    align-items: flex-end;
    transform: translateX(0%);
  }
  `;
const ModalComponent1 = styled.div`
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: transform 0.3s ease, visibility 0s ease-in-out 0.4s,
    opacity 0.4s ease-in-out;
  margin: 0;
  padding: 0;
  visibility: visible;
  opacity: 1;
  pointer-events: all;
  transition-delay: 0s;
  @media (max-width: 1000px) {
    align-items: flex-end;
    bottom: -100%;
    transform: translateX(-100%);
  }
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
const ModalTitle = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  /* identical to box height, or 12px */
  text-align: center;
  text-transform: uppercase;
  font-feature-settings: "pnum" on, "lnum" on;

  /* Dark/Content/Secondary */

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

const ModalText = styled.h3`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  /* identical to box height, or 22px */

  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;

  /* Dark/Content/Primary */

  color: #f6f6f6;
  margin-bottom: 32px;
`;
const ModalNotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 111px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  /* or 22px */

  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;

  /* Dark/Content/Primary */

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
  //background-color: transparent;
  background-image: url("../../assets/closeIcon.svg");
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
const Modal = ({ isOpen,onClose, title, text, children, notifications, footer }) => {
  return (
    isOpen ? (
    <ModalComponent>
      {" "}
      {children}
      <ModalContainer>
        <ModalCloseButton type="button"
          onClick={onClose}
          aria-label="Close modal">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="11.3137" width="16" height="2" rx="1" transform="rotate(-45 0 11.3137)" fill="#F6F6F6"/>
<rect x="1.41418" width="16" height="2" rx="1" transform="rotate(45 1.41418 0)" fill="#F6F6F6"/>
</svg>
        </ModalCloseButton>
        <div>
          <ModalHeader><svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="2" rx="1" fill="#F6F6F6" fillOpacity="0.5"/>
</svg></ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalBody>
            <ModalText>{text}</ModalText>
            <ModalNotificationBox>{notifications}</ModalNotificationBox>
          </ModalBody>
        </div>
        <ModalFooter>
          <Button className="bg-dangerOpacity50">Decline</Button>
          <Button className="bg-primary">Sign In</Button>
        </ModalFooter>
      </ModalContainer>
    </ModalComponent>) :("")
  );
};
export default Modal;

Modal.Header = ModalHeader;
Modal.Title= ModalTitle;
Modal.Container = ModalContainer;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
