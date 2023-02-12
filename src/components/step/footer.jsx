// import styled from "styled-components/macro";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 24px;
  align-self: center;
`;
const Footer = ({ children }) => {
  return <StyledFooter w-100>{children}</StyledFooter>;
};
export default Footer;
