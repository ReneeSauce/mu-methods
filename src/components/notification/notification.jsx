import styled from "styled-components";
import { Avatar } from "../avatar/avatar";

/**
 * Notification Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 * @param src the avatar image link
 * @param alt the avatar image description
 * @param title the notificaiton origin
 * @param summary the notfication details
 * @param status expects 'read' or 'unread'
 */

const NotificationWrapper = ({ children }) => ({ children });

NotificationWrapper.Container = styled.div`
  column-gap: 8px;
  padding: 12px 0 16px 12px;
`;

NotificationWrapper.Info = styled.div`
  row-gap: 4px;
`;

NotificationWrapper.Summary = styled.p`
  margin: 0;
  column-gap: 4px;
  font-weight: 500;
`;

NotificationWrapper.Dot = styled.span`
  height: 8px;
  width: 8px;
`;

NotificationWrapper.Avatar = Avatar;

export const Notification = ({ src, alt, title, summary, status }) => {
  return (
    <NotificationWrapper.Container className="d-flex w-100 bg-alpha">
      <NotificationWrapper.Avatar shape="round" src={src} size="xs" alt={alt} />
      <NotificationWrapper.Info className="d-flex flex-column">
        <h3 className="text-white text-opacity-60 fs-12px m-0">{title}</h3>
        <NotificationWrapper.Summary className="d-flex">
          {summary}
          {status === "unread" && (
            <NotificationWrapper.Dot className="bg-primary d-inline-block rounded-circle" />
          )}
        </NotificationWrapper.Summary>
      </NotificationWrapper.Info>
    </NotificationWrapper.Container>
  );
};
