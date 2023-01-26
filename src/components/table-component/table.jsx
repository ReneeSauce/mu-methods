import styled from "styled-components";

const StyledCell = styled.div`
  width: 343px;
  min-height: 84px;
  margin-bottom: 8px;
  background: rgba(246, 246, 246, 0.1);
  border-radius: 8px;
`;

const StyledHeading = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  color: rgba(246, 246, 246, 0.7);
`;

const Table = ({ children }) => {
  return <div className="d-flex flex-column">{children}</div>;
};

const Header = ({ children }) => {
  return (
    <StyledHeading className="text-uppercase mb-2">{children}</StyledHeading>
  );
};

const Cell = ({ children }) => {
  return <StyledCell>{children}</StyledCell>;
};

Table.Header = Header;
Table.Cell = Cell;

export default Table;
