import { SlideShow } from "../../components/slideshow/slideshow";
import cubes from "../../assets/cubes.svg";
import balls from "../../assets/balls.svg";
import users from "../../assets/users.svg";
import { SwiperSlide } from "swiper/react";
import { Button } from "../../components/button/button";
import {
  HomepageLogo,
  HomepageTitle,
  FooterContainer,
  SlideShowCubeImage,
  SlideShowBallsImage,
  SlideShowUsersImage,
  SlideCaption,
} from "./home.styles";

export const Home = () => {
  return (
    <>
      <div> Home</div>
      <div className="bg-alpha d-flex flex-column align-items-center">
        <HomepageLogo />
        <HomepageTitle className="mx-auto ">
          <span className="text-alpha">'--</span>Welcome
          <span className="text-alpha">---</span>to MU Methods
        </HomepageTitle>
        <SlideShow>
          <SwiperSlide className="bg-alpha d-flex flex-column align-items-center">
            <SlideShowCubeImage>
              <SlideShow.Image src={cubes} alt="" />
            </SlideShowCubeImage>
            <SlideCaption> All your crypto accounts in one place</SlideCaption>
          </SwiperSlide>
          <SwiperSlide className="bg-alpha d-flex flex-column align-items-center">
            <SlideShowBallsImage>
              <SlideShow.Image src={balls} alt="" />
            </SlideShowBallsImage>
            <SlideCaption>
              Never loose access to your account by sharing your seed phrase
            </SlideCaption>
          </SwiperSlide>
          <SwiperSlide className="bg-alpha d-flex flex-column align-items-center">
            <SlideShowUsersImage>
              <SlideShow.Image src={users} alt="" />
            </SlideShowUsersImage>
            <SlideCaption> Sign all transactions from one app</SlideCaption>
          </SwiperSlide>
        </SlideShow>

        <FooterContainer className="d-flex flex-column m-auto">
          <Button className="bg-alpha border-alpha text-white60 btn-lg">
            Log In
          </Button>
          <Button className="text-alpha bg-primary btn-lg mt-3">Sign Up</Button>
          <Button className="bg-alpha border-white mt-3 text-white60 btn-lg">
            Connect Existing Web3 wallet
          </Button>
        </FooterContainer>
      </div>
    </>
  );
};
