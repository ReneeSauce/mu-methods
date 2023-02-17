import styled from "styled-components";

/**
 * Body Component used with the Layout Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param children pass components to body via children
 */

const StyledBody = styled.div`
  flex-grow: 1;
  overflow: hidden;
  width: 100%;
`;
export const Body = ({ children }) => {
  return (
    <StyledBody className="d-flex flex-column text-white text-opacity-90 align-items-center">
      {children}
    </StyledBody>
  );
};
