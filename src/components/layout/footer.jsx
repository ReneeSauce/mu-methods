// import styled from "styled-components/macro";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
`;
const Footer = ({ children }) => {
  return (
    <StyledFooter className="w-100 mt-24px text-white text-opacity-90 align-self-center">
      {children}
    </StyledFooter>
  );
};
export default Footer;
