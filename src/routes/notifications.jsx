import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Layout, Modal, Notification } from "../components";
import SuccessIcon from "../components/icons/checkmark";
import MuIcon from "../components/icons/mu";
import FailedIcon from "../components/icons/stop";
import { Header } from "../components/layout/header";
import notificationsData from "../utils/notifications";
/**
 * Notifications Route
 *  @author [Nuriya Akhmedova](https://github.com/NuriyaAkh)
 * @param src the avatar image link
 * @param action expects true or false for the notification sign actions
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState({});
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const isInputEmpty = inputValue.trim() === "";
  const [signingResult, setSigningResult] = useState("");

  // filtering unread notifications
  const unreadNotifications = notificationsData.filter(
    (n) => n.status === "unread"
  );
  // unread notifications counter
  const counter = unreadNotifications.length;

  // sort data by date groups
  const groups = notificationsData.reduce((group, notification) => {
    const date = new Date(notification.createdAt).toLocaleDateString(
      "default",
      {
        month: "long",
        day: "2-digit",
      }
    );
    if (!group[date]) {
      group[date] = [];
    }
    group[date].push(notification);
    return group;
  }, {});

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "2-digit",
  });

  //Generate notifications
  useEffect(() => {
    // TO DO: replace this with API call for fetching notifications data
    setNotifications(notificationsData);
  }, []);

  useEffect(() => {
    if (!notifications) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [notifications]);

  const onNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
    setSelectedNotification("");
    setIsSignModalOpen(false);
    setInputValue("");
    setSigningResult("");
  };
  const onInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSignClick = (event) => {
    event.preventDefault();
    setIsSignModalOpen(true);
  };

  const onSignTransaction = () => {
    if (inputValue.toLowerCase() === "carrot pizza") {
      setSigningResult("success");
      setTimeout(() => {
        onClose();
      }, 3000);
    } else {
      setSigningResult("failed");
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <NotificationsContainer className="d-flex flex-column bg-alpha pt-32px pb-24px px-16px my-0 mx-auto position-relative">
            <Link to="/">
              <MuIcon height="20px" />
            </Link>

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
                          className="cursor-pointer"
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
          <Modal isOpen={isModalOpen} onClose={onClose}>
            <Modal.Title>{selectedNotification.title}</Modal.Title>
            <div
              className={
                "fs-18px fw-700" && isSignModalOpen ? "" : "flex-grow-1"
              }
            >
              {selectedNotification.summary}
            </div>
            {signingResult === "success" ? (
              <div className="d-flex flex-column my-auto align-items-center">
                <SuccessIcon width="40px" height="40px" />
                <p className=" mt-4 fs-18px fw-700">
                  Transaction signed successfully
                </p>
              </div>
            ) : signingResult === "failed" ? (
              <div className="d-flex flex-column my-auto align-items-center">
                <FailedIcon width="40px" height="40px" />

                <div className="mt-4 fs-18px fw-700">
                  Transaction was declined
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column w-100 text-opacity-90 align-self-center gap-3">
                {selectedNotification.action ? (
                  <>
                    {isSignModalOpen && (
                      <div className="d-flex flex-column mt-5 mb-5">
                        <div>Type “carrot pizza” to sign your transaction</div>
                        <input
                          className="mt-4 text-white text-opacity-70 rounded py-20px px-8px border-0 bg-white bg-opacity-10 fs-18px w-100"
                          placeholder=" Type here "
                          value={inputValue}
                          onChange={onInputValueChange}
                        ></input>
                      </div>
                    )}
                    <Button
                      size="lg"
                      buttonKind="primary_red"
                      onClick={onClose}
                    >
                      Decline
                    </Button>
                    <Button
                      size="lg"
                      buttonKind="primary"
                      type="submit"
                      onClick={
                        isSignModalOpen ? onSignTransaction : onSignClick
                      }
                      disabled={isSignModalOpen ? isInputEmpty : false}
                    >
                      Sign
                    </Button>
                  </>
                ) : (
                  ""
                )}
              </div>
            )}
          </Modal>
        </>
      )}
    </>
  );
};
