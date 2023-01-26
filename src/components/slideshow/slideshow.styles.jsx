import styled from "styled-components";
import muLogo from "../../../public/mu-methods.svg";
import cubes from "../../../public/cubes.svg";

export const SlideShowLogo = styled.div`
  width: 30px;
  margin-top: 33px;
  height: 37px;
  align-self: center;
  background-image: url(${muLogo});
`;

export const SlideShowTitle = styled.h1`
  max-width: 235px;
  height: 64px;
  margin-bottom: 36px;
`;

export const SlideShowImage = styled.div`
  width: 375px;
  height: 222px;
  align-self: center;
  margin-left: 7px;

  background-image: url(${cubes});
`;
