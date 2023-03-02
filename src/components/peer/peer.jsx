import styled from "styled-components";
import { Avatar } from "../avatar/avatar";

/**
 * @author [Kurtney J.](https://github.com/xhundo)
 * @param src expects src for avatar
 * @param peer expects peer information
 * @param {string} title by default is chosen peers
 */

const Container = styled.div`
  max-width: 375px;
`;

const StyledCell = styled.div`
  max-width: 100%;
  min-height: 60px;
`;

const Header = ({ children }) => {
  return <h1 className="fs-18px text-white text-center">{children}</h1>;
};

const Cell = ({ src, peer, alt, size = "sm", shape = "round" }) => {
  return (
    <StyledCell className="d-flex flex-row bg-white bg-opacity-20 align-items-center rounded">
      <Avatar src={src} alt={alt} size={size} shape={shape} />
      <p className="text-white fs-18px fw-bold lh-3">{peer}</p>
    </StyledCell>
  );
};

export const Peer = ({ title = "Chosen peers", src, peer, alt, size }) => {
  return (
    <Container className="mb-2">
      <Peer.Header>{title}</Peer.Header>
      <Peer.Cell src={src} peer={peer} alt={alt} size={size} />
    </Container>
  );
};

Peer.Header = Header;
Peer.Cell = Cell;
