import styled from "styled-components";
import muLogo from "../../assets/mu-methods.svg";
import cubes from "../../assets/cubes.svg";
import { SwiperSlide } from "swiper/react";

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

export const SlideShowImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledSlide = styled(SwiperSlide)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 343px;
  padding-bottom: 84px;
`;
