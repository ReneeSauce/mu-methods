import { SwiperSlide } from "swiper/react";
import { SlideShowImage } from "./slideshow.styles";

export const Slide = ({ path }) => {
  return (
    <SwiperSlide>
      <SlideShowImage src={path} />
    </SwiperSlide>
  );
};
