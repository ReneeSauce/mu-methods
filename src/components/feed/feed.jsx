import styled from "styled-components/macro";

/* 
 @author [Jenny Doctor](https://github.com/jendoc)
*/

export const Feed = ({ children }) => {
  return (
    <div className="bg-alpha" role={"feed"}>
      {children}
    </div>
  );
};

const Heading = styled.h3`
  line-height: 120%;
`;

const feedHeading = ({ children }) => {
  return (
    <Heading
      className="text-uppercase fw-light fs-10px text-white text-opacity-75"
      role={"heading"}
    >
      {children}
    </Heading>
  );
};

const feedItem = ({ children }) => {
  return (
    <div className="text-white text-opacity-75" role={"item"}>
      {children}
    </div>
  );
};

Feed.Heading = feedHeading;
Feed.Item = feedItem;
