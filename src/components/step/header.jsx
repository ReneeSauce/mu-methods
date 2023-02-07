import styled, { css } from "styled-components/macro";

//todo
//move text styling to bs once bs font-sizes and colors are available

const Container = styled.div`
//trying props for flex to simplify - orignal grid still in example repo if needed
  display: grid;
  color: var(--bs-white);
  grid-template-columns: 1 fr minmax() (40px, auto) 1fr;
  ${(props) =>
    props.$flex &&
    css`
      display: flex;
    `}

`;
const StyledLeft = styled.div`
  grid-area: left;
  justify-self: start;
`;
const StyledCenter = styled.div`
  grid-area: main;
  justify-self: center;
`;
const StyledRight = styled.div`
  grid-area: right;
  justify-self: end;
  align-items: flex-start;
  column-gap: 12px;
`;
const left = ({ children }) => {
  return <StyledLeft>{children}</StyledLeft>;
};

const right = ({ children }) => {
  return <StyledRight className="d-flex">{children}</StyledRight>;
};
const center = ({ children }) => {
  return <StyledCenter>{children}</StyledCenter>;
};
const title = ({ title }) => {
  return <h2 className="fs-24px fw-bold m-0">{title}</h2>;
};
const subtitle = ({ subtitle }) => {
  return <h3 className="fs-12px fw-light m-0">{subtitle}</h3>;
};
export const Header = ({ grid, children, title, subtitle }) => {
  return <Container $grid={grid}>{children}</Container>;
};

Header.Left = left;
Header.Center = center;
Header.Right = right;
Header.Title = title;
Header.SubTitle = subtitle;
