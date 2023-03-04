import styled from "styled-components";

/* 
 @author [Kurtney J.](https://github.com/xhundo)
*/

// Table component build with named spaced format
const StyledCell = styled.div`
  width: 100%;
  min-height: 84px;
  padding: 16px;
`;

const StyledHeading = styled.p`
  line-height: 12px;
`;

export const Table = ({ children }) => {
  return (
    <div role="table" className="d-flex flex-column w-100">
      {children}
    </div>
  );
};

const Header = ({ children }) => {
  return (
    <StyledHeading
      role="heading"
      className="text-uppercase mb-2 fs-10px text-white text-opacity-75"
    >
      {children}
    </StyledHeading>
  );
};

const Cell = ({ children }) => {
  return (
    <StyledCell role="cell" className="rounded mb-2 bg-white bg-opacity-10">
      {children}
    </StyledCell>
  );
};

Table.Header = Header;
Table.Cell = Cell;
