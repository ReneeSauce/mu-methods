import styled from "styled-components";
// import styled from "styled-components/macro";

/* 
 @author [Kurtney J.](https://github.com/xhundo)
*/

// Table component build with named spaced format
const StyledCell = styled.div`
  width: 100%;
  min-height: 84px;
  padding: 16px;
  background: var(--bs-white10);
`;

const StyledHeading = styled.p`
  line-height: 12px;
  color: var(--bs-white75);
`;

export const Table = ({ children }) => {
  return (
    <div role="table" className="d-flex flex-column">
      {children}
    </div>
  );
};

const Header = ({ children }) => {
  return (
    <StyledHeading role="heading" className="text-uppercase mb-2 fs-10px">
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

Table.Header = Header;
Table.Cell = Cell;
