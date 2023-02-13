import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 32px 16px 24px 16px;
  margin: 0 auto;
  max-width: 375px;
  min-height: 762px;
`;
const Container = ({ children }) => {
  return (
    <StyledWrapper className="d-flex flex-column bg-alpha">
      {children}
    </StyledWrapper>
  );
};

export default Container;
