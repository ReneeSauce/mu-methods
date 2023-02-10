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
    <StyledCenter className="d-flex flex-column  px-3">{children}</StyledCenter>
  );
};
const title = ({ title }) => {
  return <h2 className="fs-24px fw-bold m-0 align-self-center">{title}</h2>;
};
const subtitle = ({ subtitle }) => {
  return <h3 className="fs-12px fw-light m-0">{subtitle}</h3>;
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
