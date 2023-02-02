import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

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
