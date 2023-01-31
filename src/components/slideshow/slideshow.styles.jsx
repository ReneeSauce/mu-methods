import styled from "styled-components";
import muLogo from "../../assets/mu-methods.svg";
import cubes from "../../assets/cubes.svg";

export const SlideShowLogo = styled.div`
  width: 30px;
  height: 37px;
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
  margin-left: 7px;

  background-image: url(${cubes});
`;
export const ButtonContainer = styled.div`
  width: 343px;
`;
