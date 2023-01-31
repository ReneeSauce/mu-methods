import styled from "styled-components";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import closeIcon from "../../assets/closeIcon.svg";


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
  transition: visibility 0s ease-in-out 0.4s,opacity 0.4s ease-in-out;

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
  transition: visibility 0s ease-in-out 0.4s,opacity 0.4s ease-in-out;
  @media (min-width: 1000px) {
    border-radius: 16px 16px 16px 16px;
  }
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 2px;
  background: rgba(246, 246, 246, 0.5);
  border-radius: 1px;
margin:0 auto;
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
const ModalContainer=styled.div``;
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
  
  export function Popup1({header,title, notifications,text,children,onClick}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOverlayClick=(event)=>{
      if (event.target.classList.contains('modal')) {
        handleClose();
      }
    
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
      demo modal
        </Button>
  
        <Modal className="modal fade"show={show} onHide={handleClose} animation={false}>
        <ModalComponent>
        <ModalWrapper closeButton>
          <ModalCloseButton
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          data-bs-dismiss="modal"
        ></ModalCloseButton>
        <ModalContainer>
          <ModalHeader>{header}</ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalBody>
            <ModalText>{text}</ModalText>
            <ModalNotificationBox>{notifications}</ModalNotificationBox>
          </ModalBody>
        </ModalContainer>
        </ModalWrapper>
        </ModalComponent>
        
        </Modal>
      </>
    );
  }
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Wrapper = ModalWrapper;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
Modal.NotificationsBox=ModalNotificationBox