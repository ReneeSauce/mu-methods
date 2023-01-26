import styled from "styled-components";

export const Feed = ({children}) => {
  return <div className="bg-alpha">{children}</div>;
}

const headerDate = ({ children }) => {
  const Date = styled.h3`
    font-weight: 400;
    font-size: 10px;
    line-height: 120%;
    text-transform: uppercase;
    text-transform: uppercase;
    font-feature-settings: "pnum" on, "lnum" on;
    margin: 8px auto 8px 16px;
  `;
  <Date>{children}</Date>;
};

const item = ({ children }) => {
  <div>{children}</div>;
};

Feed.HeaderDate = headerDate;
Feed.Item = item;
