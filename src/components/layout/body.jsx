// import styled from "styled-components/macro";
import styled from "styled-components";

const StyledBody = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;
const Body = ({ children }) => {
  return <StyledBody>{children}</StyledBody>;
};
export default Body;
