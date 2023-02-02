import { SlideShowImage } from "./slideshow.styles";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "../../theme/slideshow.scss";

export const SlideShow = ({ children, ...rest }) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      slidesPerView={1}
      {...rest}
    >
      {children}
    </Swiper>
  );
};

SlideShow.Image = SlideShowImage;
