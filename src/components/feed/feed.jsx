import styled from "styled-components";

/* 
 @author [Jenny Doctor](https://github.com/jendoc)
*/

export const Feed = ({ children }) => {
  return <div className="bg-alpha" role={"feed"}>{children}</div>;
};

const Heading = styled.h3`
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
  margin: 16px auto 8px 16px;
  opacity: 0.7;
`;

const feedHeading = ({ children }) => {
  return <Heading className="text-uppercase" role={"heading"}>{children}</Heading>;
};

const feedItem = ({ children }) => {
  return <div className="text-white75" role={"item"}>{children}</div>;
};

Feed.Heading = feedHeading;
Feed.Item = feedItem;
