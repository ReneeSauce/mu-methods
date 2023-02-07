import styled from "styled-components/macro";

const StyledBody = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;
const StepBody = ({ children }) => {
  return <StyledBody>{children}</StyledBody>;
};
export default StepBody;
