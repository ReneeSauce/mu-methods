import styled from "styled-components";

/* 
 @author [Kurtney J.](https://github.com/xhundo)
*/

// Table component build with named spaced format

const StyledCell = styled.div`
  width: 343px;
  height: 84px;
  background: rgba(246, 246, 246, 0.1);
`;

const StyledHeading = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: rgba(246, 246, 246, 0.7);
`;

const StyledAvatar = styled.img`
  width: 40px;
  height: 40px;
  margin: 22px 12px 0 12px;
`;

const Table = ({ children }) => {
  return (
    <div role="table" className="d-flex flex-column">
      {children}
    </div>
  );
};

const Header = ({ children }) => {
  return (
    <StyledHeading role="heading" className="text-uppercase mb-2">
      {children}
    </StyledHeading>
  );
};

const Cell = ({ children }) => {
  return (
    <StyledCell role="cell" className="rounded mb-2">
      {children}
    </StyledCell>
  );
};

const Avatar = ({ src, alt }) => {
  return <StyledAvatar className="rounded-circle" src={src} alt={alt} />;
};

Table.Header = Header;
Table.Cell = Cell;
Table.Avatar = Avatar;

export default Table;
