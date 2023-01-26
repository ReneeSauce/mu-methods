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

const Container = styled.div`
  column-gap: 8px;
  padding: 12px 0 16px 12px;
`;

const Info = styled.div`
  row-gap: 4px;
`;

const Title = styled.h3`
  margin: 0;
  color: rgba(246, 246, 246, 0.7);
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

const Summary = styled.p`
  margin: 0;
  column-gap: 4px;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

const Dot = styled.div`
  height: 8px;
  width: 8px;
`;

export const Notification = ({ src, alt, title, summary, status }) => {
  return (
    <Container className="d-flex w-100 bg-alpha">
      <Avatar shape="round" src={src} size="xs" alt={alt} />
      <Info className="flex-column">
        <Title> {title}</Title>
        <Summary className="d-flex">
          {summary}
          {status === "unread" && (
            <Dot className="bg-primary d-inline-block rounded-circle" />
          )}
        </Summary>
      </Info>
    </Container>
  );
};
