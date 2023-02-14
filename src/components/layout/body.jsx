// import styled from "styled-components/macro";
import styled from "styled-components";

const StyledBody = styled.div`
  flex-grow: 1;
  overflow: hidden;
  width: 100%;
`;
const Body = ({ children }) => {
  return (
    <StyledBody className="d-flex flex-column text-white text-opacity-90 align-items-center">
      {children}
    </StyledBody>
  );
};
export default Body;
