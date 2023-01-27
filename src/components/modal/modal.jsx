import React from "react";

import styled from "styled-components";

const ModalComponent=styled.div`
box-sizing: border-box;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transform: translateX(0%)
  transition: visibility 0s ease-in-out 0.4s, opacity 0.4s ease-in-out;
  margin: 0;
  padding: 0;
  color:white;`
  const ModalComponent1=styled.div`
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  bottom: -100%;
  transform: translateX(-100%);
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: transform 0.3s ease,visibility 0s ease-in-out 0.4s, opacity 0.4s ease-in-out;
  margin: 0;
  padding: 0;`
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  min-height:465px;
  background: #2d2d41;
  border-radius: 16px 16px 0px 0px;
  align-items:center;
  padding: 16px 16px 24px;
  box-sizing: border-box;
  position:relative;
  
`;
const ModalHeader = styled.div`

outline:1px solid red;
display:flex;

`
const ModalTitle= styled.p`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 120%;
/* identical to box height, or 12px */
text-align: center;
text-transform: uppercase;
font-feature-settings: 'pnum' on, 'lnum' on;

/* Dark/Content/Secondary */

color: rgba(246, 246, 246, 0.7);
margin:32px 0 16px;
`
const ModalBody=styled.div`
display:flex;
flex-direction:column;
;
outline:1px solid red;
height:100%`

const ModalText=styled.h3`

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 120%;
/* identical to box height, or 22px */

text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;

/* Dark/Content/Primary */

color: #F6F6F6;
margin-bottom:32px;`
 const ModalNotificationBox=styled.div`
 display:flex;
 flex-direction:column;
 height:111px;
 `
const ModalFooter=styled.div`
display:flex;
flex-direction:column;
margin-top:57px;


outline: solid 1px yellow;
`
const ModalCloseButton=styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 40px;
  right: 60px;
  width: 12px;
  height: 12px;
  background-color: transparent;
  background-image: url(../assets/closeIcon.svg);
  background-position: center;
  background-size: cover;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;`

const Modal = ({header, title, text,children}) => {
  return (
    
    <ModalComponent> {children}
      <ModalContainer>
      <ModalHeader>{header}</ModalHeader>
      <ModalTitle>{title}</ModalTitle>
      <ModalBody>
        <ModalText>{text}</ModalText>
        <ModalNotificationBox>{notifications}</ModalNotificationBox>
      </ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    
      </ModalContainer>
    </ModalComponent>
  );
};
export default Modal;
 