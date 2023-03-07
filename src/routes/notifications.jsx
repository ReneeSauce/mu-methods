import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Layout, Modal, Notification } from "../components";
import MuIcon from "../components/icons/mu";
import { Header } from "../components/layout/header";

import notificationsData from "../utils/notifications";

/**
 * Notifications Route
 *  @author [Nuriya](https://github.com/NuriyaAkh)
 * @param src the avatar image link
 * @param type expects "read", or "action"
 * @param title the notification origin
 * @param summary the notification details
 * @param status expects 'read' or 'unread'
 * @param createdAt expects date the notification is created
 **/
const NotificationsContainer = styled.div`
  width: 375px;
  min-height: 762px;
`;
const NotificationCounter = styled.div`
  height: 18px;
  width: 24px;
  padding: 2px 8px;
  border-radius: 8px;
`;

export const Notifications = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // unread notification counter
  const unreadNotifications = notificationsData.filter(
    (n) => n.status === "unread"
  );
  const counter = unreadNotifications.length;

  //Generate notifications
  useEffect(() => {
    setNotifications(notificationsData);
  }, []);
  useEffect(() => {
    if (!notifications) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [notifications]);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "2-digit",
  });
  const onNotificationClick = () => {
    setIsOpen(true);
    console.log("open modal");
  };
  const onClose = () => {
    setIsOpen(false);

    console.log("close modal");
  };
  const onSignClick = () => {
    console.log("sign click");
  };
  return (
    <>
      <NotificationsContainer className="d-flex flex-column bg-alpha pt-32px pb-24px px-16px my-0 mx-auto position-relative">
        <MuIcon
          height="20px"
          className=""
          onClick={() => console.log("home")}
        />
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Layout.Header.Center>
            <Header.Title title="Notifications" />
          </Layout.Header.Center>
          <NotificationCounter className="text-white fs-12px fw-normal bg-white bg-opacity-20 d-flex align-items-center">
            {counter}
          </NotificationCounter>
        </div>
        <p className="mt-4 mb-4 fs-10px fw-normal text-uppercase text-white text-opacity-70 lh-sm">
          {currentDate} (today)
        </p>
        <div>
          {notificationsData.map((notification, id) => {
            return (
              <div key={id} onClick={onNotificationClick}>
                <Notification
                  src={notification.src}
                  title={notification.title}
                  status={notification.status}
                  summary={notification.summary}
                  type={notification.type}
                  createdAt={notification.date}
                />
              </div>
            );
          })}
        </div>
      </NotificationsContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Title>coinbase</Modal.Title>
        <div>summary</div>
        <Button size="lg" buttonKind="textOnly" onClick={onClose}>
          Decline
        </Button>
        <Button size="lg" buttonKind="primary" onClick={onSignClick}>
          Sign
        </Button>
      </Modal>
    </>
  );
};
