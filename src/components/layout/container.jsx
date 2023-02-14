import styled from "styled-components";
//may need a prop for bg color at media query for dt
//may need prop for max width min height for dt

const StyledWrapper = styled.div`
  max-width: 375px;
  min-height: 762px;
`;
const Container = ({ children }) => {
  return (
    <StyledWrapper className="d-flex flex-column bg-alpha pt-32px pb-24px px-16px my-0 mx-auto">
      {children}
    </StyledWrapper>
  );
};

export default Container;
