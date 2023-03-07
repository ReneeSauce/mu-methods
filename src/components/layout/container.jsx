import styled from "styled-components";
//may need a prop for bg color at media query for dt
//may need prop for max width min height for dt

/**
 * Container component used with the Layout Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param children pass header, body, footer components via children
 *
 */
const StyledWrapper = styled.div`
  max-width: 375px;
  min-height: 762px;
`;
export const Container = ({ children }) => {
  return (
    <StyledWrapper className="d-flex flex-column bg-alpha pt-32px pb-24px px-16px my-0 mx-auto position-relative">
      {children}
    </StyledWrapper>
  );
};
