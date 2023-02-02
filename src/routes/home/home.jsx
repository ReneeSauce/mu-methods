import { SlideShow } from "../../components/slideshow/slideshow";
import cubes from "../../assets/cubes.svg";
import balls from "../../assets/balls.svg";
import users from "../../assets/users.svg";
import { SwiperSlide } from "swiper/react";

export const Home = () => {
  return (
    <div>
      <div>Home</div>
      <div>Slideshow</div>
      <div style={{ width: "300px", height: "300px" }}>
        <SlideShow>
          <SwiperSlide>
            <SlideShow.Image src={cubes} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideShow.Image src={balls} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideShow.Image src={users} alt="" />
          </SwiperSlide>
        </SlideShow>
      </div>

      <div>Footer</div>
    </div>
  );
};
