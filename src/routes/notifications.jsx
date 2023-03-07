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
 * @param action expects true or false for notification sign actions
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
  //const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState({});
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);
  // unread notification counter
  const unreadNotifications = notificationsData.filter(
    (n) => n.status === "unread"
  );
  const counter = unreadNotifications.length;
  // sort data by date
  const groups = notificationsData.reduce((acc, item) => {
    const date = new Date(item.createdAt).toLocaleDateString("default", {
      month: "long",
      day: "2-digit",
    });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "2-digit",
  });

  //Generate notifications
  useEffect(() => {
    setNotifications(notificationsData);
  }, []);
  // useEffect(() => {
  //   if (!notifications) {
  //     setIsLoading(true);
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, [notifications]);

  const onNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
    setSelectedNotification("");
    setIsSignModalOpen(false);
  };
  const onSignClick = () => {
    setIsSignModalOpen(true);
    console.log("sign click logic");
  };
  // const onCloseSignModal = () => {
  //   setIsSignModalOpen(false); // set sign modal state to closed
  // };
  return (
    <>
      <NotificationsContainer className="d-flex flex-column bg-alpha pt-32px pb-24px px-16px my-0 mx-auto position-relative">
        <MuIcon height="20px" />
        <div className="d-flex flex-row justify-content-center align-items-center">
          <Layout.Header.Center>
            <Header.Title title="Notifications" />
          </Layout.Header.Center>
          <NotificationCounter className="text-white fs-12px fw-normal bg-white bg-opacity-20 d-flex align-items-center">
            {counter}
          </NotificationCounter>
        </div>

        <div>
          {Object.keys(groups)
            .sort((dateA, dateB) => new Date(dateB) - new Date(dateA))
            .map((date, id) => (
              <div key={id}>
                <p className="mt-4 mb-4 fs-10px fw-normal text-uppercase text-white text-opacity-70 lh-sm">
                  {date === currentDate ? `${date} (today)` : date}
                </p>
                {groups[date]
                  .sort(
                    (dateA, dateB) =>
                      new Date(dateB.createdAt) - new Date(dateA.createdAt)
                  )
                  .map((notification, id) => (
                    <div
                      type="button"
                      key={id}
                      onClick={() => onNotificationClick(notification)}
                    >
                      <Notification
                        src={notification.src}
                        title={notification.title}
                        status={notification.status}
                        summary={notification.summary}
                        type={notification.type}
                        createdAt={notification.createdAt}
                      />
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </NotificationsContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Title>{selectedNotification.title}</Modal.Title>
        <div className="flex-grow-1">{selectedNotification.summary}</div>
        <div className="d-flex flex-column w-100 text-opacity-90 align-self-center gap-3">
          {selectedNotification.action ? (
            <>
              <Button size="lg" buttonKind="primary_red" onClick={onClose}>
                Decline
              </Button>
              <Button size="lg" buttonKind="primary" onClick={onSignClick}>
                Sign
              </Button>
            </>
          ) : (
            ""
          )}
        </div>
      </Modal>
      <Modal isOpen={isSignModalOpen} onClose={onClose}>
        <Modal.Title>{selectedNotification.title}</Modal.Title>
        <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
          <p className="p-0 align-self-center">
            {selectedNotification.summary}
          </p>
          <div>Type “carrot pizza” to sign your transaction</div>
          <input
            className="mt-4 text-white text-opacity-70 rounded py-20px px-8px border-0 bg-white bg-opacity-10 fs-18px w-100"
            placeholder=" Type here "
          ></input>
        </div>
        <div className="d-flex flex-column w-100 text-opacity-90 align-self-center gap-3">
          <Button size="lg" buttonKind="primary_red" onClick={onClose}>
            Decline
          </Button>
          <Button size="lg" buttonKind="primary" onClick={onSignClick}>
            Sign
          </Button>
        </div>
      </Modal>
    </>
  );
};
