import styled from "styled-components";
import { Avatar } from "../avatar/avatar";

/**
 * @author [Kurtney J.](https://github.com/xhundo)
 * @param src expects src for avatar
 * @param peer expects peer information (name)
 * @param size avatar size by default is small.
 * @param shape avatar shape by default is rounded.
 * @param {string} title by default is chosen peers
 */

const Container = styled.div`
  max-width: 375px;
`;

const PeerCell = styled.div`
  max-width: 100%;
  min-height: 60px;
`;

const PeerText = styled.p`
  font-weight: 700;
  line-height: 21px;
`;

const Header = ({ children }) => {
  return (
    <h1 className="fs-18px text-white text-center lh-sm mb-16px">{children}</h1>
  );
};

const Cell = ({ src, peer, alt, size = "sm", shape = "round" }) => {
  return (
    <PeerCell className="d-flex flex-row bg-white bg-opacity-20 align-items-center rounded mb-16px">
      <div className="ms-8px me-12px">
        <Avatar src={src} alt={alt} size={size} shape={shape} />
      </div>
      <PeerText className="text-white fs-18px mb-0">{peer}</PeerText>
    </PeerCell>
  );
};

export const Peer = ({ children, title = "Chosen peers" }) => {
  return (
    <Container className="mb-2">
      <Peer.Header>{title}</Peer.Header>
      {children}
    </Container>
  );
};

Peer.Header = Header;
Peer.Cell = Cell;
