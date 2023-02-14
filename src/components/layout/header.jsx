// import styled from "styled-components/macro";
import styled from "styled-components";
//?need mb prop for container

const StyledContainer = styled.div.attrs((props) => ({
  mb: props.mb || "32px",
}))`
  display: grid;
  grid-template-columns: 1fr minmax(40px, auto) 1fr;
  grid-template-areas: "left center right";
  margin-bottom: ${(props) => props.mb};
`;
// const StyledContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr minmax(40px, auto) 1fr;
//   grid-template-areas: "left center right";
//   margin-bottom: ${(props) => props.mb || "32px"};
// `;
const StyledLeft = styled.div`
  grid-area: left;
  justify-self: start;
`;
const StyledCenter = styled.div`
  grid-area: center;
  justify-self: center;
  justify-content: center;
  text-align: center;
`;
const StyledRight = styled.div`
  grid-area: right;
  justify-self: end;
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
    <StyledCenter className="d-flex flex-column px-16px gap-12px align-items-center">
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
    <StyledSubtitle className="fs-12px m-0 text-white text-opacity-70">
      {subtitle}
    </StyledSubtitle>
  );
};
const Header = ({ children, mb }) => {
  return (
    <StyledContainer mb={mb} className="text-white text-opacity-90">
      {children}
    </StyledContainer>
  );
};

Header.Left = left;
Header.Center = center;
Header.Right = right;
Header.Title = title;
Header.SubTitle = subtitle;

export default Header;
