import React from "react";
import { Modal } from "./modal";
import closeIcon from "../../assets/closeIcon.svg";
import { motion, AnimatePresence,useAnimation,useMotionValue,useTransform } from "framer-motion";
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
const Template = ({ ...args}) =>
 (
//  <Modal {...args} >
// {[...Array(numberOfChildren).keys()].map(number=>(
//   <div style={{width:"100px", height:"60px", backgroundColor:"red", display:"flex",alignItems:"center", justifyContent:"space-between"}}>modal</div>
// ))}

// </Modal>

isLessThan1000 ? (
  <AnimatePresence>
    {" "}
    {isOpen && (
      <ModalComponent className="modal"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: isActive ? 0 :'100%' , opacity:1}}
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
          if( info.offset.y >300){
            setIsActive(false);
            onClose();
          }
        }}
      >
        {" "}
        {children}
        <ModalContainer >
          <ModalCloseButton
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            data-bs-dismiss="modal"
          ></ModalCloseButton>

          <div>
            <ModalHeader/>
            <ModalTitle>{title}</ModalTitle>
            <ModalBody>
              <ModalText>{text}</ModalText>
              <ModalNotificationBox>{notifications}</ModalNotificationBox>
            </ModalBody>
          </div>
          <ModalFooter>
            {footer}
            <ModalButton
              className="bg-dangerOpacity50"
              type="button"
              onClick={onClose}
              data-bs-dismiss="modal"
            >
              Decline
            </ModalButton>
          </ModalFooter>
        </ModalContainer>
      </ModalComponent>
    )}
  </AnimatePresence>
) : (
  isOpen && (
    <ModalComponent>
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
          <ModalHeader/>
          <ModalTitle>{title}</ModalTitle>
          <ModalBody>
            <ModalText>{text}</ModalText>
            <ModalNotificationBox>{notifications}</ModalNotificationBox>
          </ModalBody>
        </div>
        <ModalFooter>
          {footer}
          <ModalButton
            className="bg-dangerOpacity50"
            type="button"
            onClick={onClose}
            data-bs-dismiss="modal"
          >
            Decline
          </ModalButton>
        </ModalFooter>
      </ModalContainer>
    </ModalComponent>
  )
)
  
);

export const Mobile = Template.bind({});
Mobile.args = {
  title: "title",
  text: "text",
  notifications: "notifications",
  footer: <div>Footer</div>,
};



// export const Default = () => (
//   <Feed>
//     <Feed.Heading>Dec 07 (today)</Feed.Heading>
//     <Feed.Item>
//       <Notification
//         src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
//         status="unread"
//         summary="Sign transaction for 0.008 ETH"
//         title="Coinbase"
//       />
//     </Feed.Item>
//     <Feed.Item>
//       {" "}
//       <Notification
//         src="https://images.unsplash.com/photo-1636909422766-9d522ebf6d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80"
//         status="read"
//         summary="Seed phrase recovery request"
//         title="PeerName"
//       />
//     </Feed.Item>
//     <Feed.Heading>Dec 05</Feed.Heading>
//     <Feed.Item>
//       {" "}
//       <Notification
//         src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
//         status="unread"
//         summary="Transaction for 0.008 ETH signed"
//         title="Coinbase"
//       />
//     </Feed.Item>
//   </Feed>
// );


