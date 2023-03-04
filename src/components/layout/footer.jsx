import styled from "styled-components";

/**
 * Footer component used with the Layout Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param children pass components to footer via children
 *
 */

const StyledFooter = styled.footer`
  text-align: center;
`;
export const Footer = ({ children }) => {
  return (
    <StyledFooter className="w-100 mt-24px text-white text-opacity-90 align-self-center">
      {children}
    </StyledFooter>
  );
};
