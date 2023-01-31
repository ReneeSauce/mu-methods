import styled from "styled-components";
import muLogo from "../../assets/mu-methods.svg";
import cubes from "../../assets/cubes.svg";

export const SlideShowLogo = styled.div`
  margin-top: 63px;
  margin-right: 6px;
  margin-bottom: 30px;
  width: 30px;

  height: 37px;
  background-image: url(${muLogo});
`;

export const SlideShowTitle = styled.h1`
  max-width: 235px;
  height: 64px;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 36px;
`;

export const SlideShowImage = styled.div`
  width: 375px;
  height: 222px;
  margin-left: 17px;

  background-image: url(${cubes});
`;
export const ButtonContainer = styled.div`
  width: 343px;
  padding-bottom: 84px;
`;
