import cx from "classnames";
import styled from "styled-components";

/**
 * Header Component used with the Layout Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param className optional classNames that will be passed to the header
 * @param children pass components and namespaced components to header via children
 * @param mb used to set the header container margin bottom dynamically - default is 32px
 */

const StyledContainer = styled.div.attrs((props) => ({
  mb: props.mb || "32px",
}))`
  display: grid;
  grid-template-columns: 1fr minmax(40px, auto) 1fr;
  grid-template-areas: "left center right";
  margin-bottom: ${(props) => props.mb};
`;

const StyledLeft = styled.div`
  grid-area: left;
  justify-self: start;
`;
const StyledCenter = styled.div`
  grid-area: center;
  justify-self: center;
  justify-content: center;
  text-align: center;
`;
const StyledRight = styled.div`
  grid-area: right;
  justify-self: end;
  column-gap: 12px;
`;

const StyledTitle = styled.h2`
  font-weight: 700;
`;
const StyledSubtitle = styled.h2`
  font-weight: 400;
`;

const left = ({ children }) => {
  return <StyledLeft>{children}</StyledLeft>;
};
const right = ({ children }) => {
  return (
    <StyledRight className="d-flex align-items-start">{children}</StyledRight>
  );
};
const center = ({ children }) => {
  return (
    <StyledCenter className="d-flex flex-column px-16px gap-12px align-items-center">
      {children}
    </StyledCenter>
  );
};
const title = ({ title }) => {
  return (
    <StyledTitle className="fs-24px m-0 align-self-center">{title}</StyledTitle>
  );
};
const subtitle = ({ subtitle }) => {
  return (
    <StyledSubtitle className="fs-12px m-0 text-white text-opacity-70">
      {subtitle}
    </StyledSubtitle>
  );
};
export const Header = ({ children, className }) => {
  return (
    <StyledContainer className={cx(`text-white text-opacity-90`, className)}>
      {children}
    </StyledContainer>
  );
};

Header.Left = left;
Header.Center = center;
Header.Right = right;
Header.Title = title;
Header.SubTitle = subtitle;
