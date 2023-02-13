// import styled from "styled-components/macro";
import styled from "styled-components";
//todo
//move text styling to bs once bs spacing and colors are available

const StyledContainer = styled.div`
  display: grid;
  color: var(--bs-white);
  grid-template-columns: 1fr minmax(40px, auto) 1fr;
  grid-template-areas: "left center right";
  margin-bottom: 32px;
`;
const StyledLeft = styled.div`
  grid-area: left;
  justify-self: start;
`;
const StyledCenter = styled.div`
  grid-area: center;
  justify-self: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 12px; //need to convert to bs
  /* display: flex; */ //put bs in component
  /* flex-direction: column; */ //put bs in component
`;
const StyledRight = styled.div`
  grid-area: right;
  justify-self: end;
  /* align-items: flex-start; */ //put bs in component
  column-gap: 12px;
`;

const StyledTitle = styled.h2`
  font-weight: 700;
`;
const StyledSubtitle = styled.h2`
  font-weight: 400;
`;

const left = ({ children }) => {
  return <StyledLeft>{children}</StyledLeft>;
};
const right = ({ children }) => {
  return (
    <StyledRight className="d-flex align-items-start">{children}</StyledRight>
  );
};
const center = ({ children }) => {
  return (
    <StyledCenter className="d-flex flex-column px-16px">
      {children}
    </StyledCenter>
  );
};
const title = ({ title }) => {
  return (
    <StyledTitle className="fs-24px m-0 align-self-center">{title}</StyledTitle>
  );
};
const subtitle = ({ subtitle }) => {
  return (
    <StyledSubtitle className="fs-12px m-0 text-opacity-70">
      {subtitle}
    </StyledSubtitle>
  );
};
const Header = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Header.Left = left;
Header.Center = center;
Header.Right = right;
Header.Title = title;
Header.SubTitle = subtitle;

export default Header;
