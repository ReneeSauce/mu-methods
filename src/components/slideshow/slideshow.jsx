import { Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "../../theme/slideshow.scss";
import { SlideShowImage } from "./slideshow.styles";

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
