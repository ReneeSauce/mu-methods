import { Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "../../theme/slideshow.scss";

import styled from "styled-components";

export const SlideShowImage = styled.img`
  display: block;
  width: 100%;
  max-width: ${(props) => props.maxwidth};
  max-height: ${(props) => props.height};
  object-fit: contain;
`;
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
