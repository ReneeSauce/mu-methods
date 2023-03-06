import { useState } from "react";
import styled from "styled-components";
import { Button, Layout } from "../components";
import MuIcon from "../components/icons/mu";
import { Header } from "../components/layout/header";
import { Notification } from "../components/notification/notification";
import notificationsData from "../utils/notifications";

/**
 * Notifications Route
 *  @author [Nuriya](https://github.com/NuriyaAkh)
 * @param src the avatar image link
 * @param type expects "read", or "action"
 * @param title the notification origin
 * @param summary the notification details
 * @param status expects 'read' or 'unread'
 **/

const NotificationCounter = styled.div`
  height: 18px;
  width: 24px;
  padding: 2px 8px;
  border-radius: 8px;
`;
export const Notifications = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState(notificationsData);
  // unread notification counter
  const unreadNotifications = notificationsData.filter((n) => {
    console.log(n);
    n.value === "unread";
  });
  const counter = unreadNotifications.length;

  console.log(unreadNotifications);
  console.log(counter);
  // Generate notifications
  // useEffect(() => {
  //   setNotifications(notificationsData);
  // }, []);
  // useEffect(() => {
  //   if (!notifications) {
  //     setIsLoading(true);
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, [notifications]);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "2-digit",
  });
  return (
    <>
      <p>{currentDate}</p>
      <Layout
        className="mb-32px"
        header={
          <>
            <MuIcon height="20px" className="" />

            <Layout.Header.Center>
              <Header.Title title="Notifications" />
            </Layout.Header.Center>
            <Layout.Header.Right>
              {" "}
              <NotificationCounter className="text-white fs-12px fw-normal bg-white bg-opacity-20 d-flex align-items-center">
                {counter}
              </NotificationCounter>
            </Layout.Header.Right>
          </>
        }
        body={notificationsData.map((notification, id) => {
          return (
            <>
              {" "}
              <Button size="lg">
                <Notification
                  key={id}
                  src={notification.src}
                  title={notification.title}
                  status={notification.status}
                  summary={notification.summary}
                  type={notification.type}
                  createdAt={notification.date}
                />
              </Button>
            </>
          );
        })}
      ></Layout>
    </>
  );
};
