import { SwiperSlide } from "swiper/react";
import balls from "../../assets/balls.svg";
import cubes from "../../assets/cubes.svg";
import users from "../../assets/users.svg";
import { SlideShow } from "../../components/slideshow/slideshow";
// import { HomeButton } from "../../components/button/button";
import {
  HomeBallsImage,
  HomeButton,
  HomeCubeImage,
  HomeFooter,
  HomepageLogo,
  HomepageTitle,
  HomeUsersImage,
  SlideCaption,
} from "./home.styles";

export const Home = () => {
  return (
    <>
      <div> Home</div>
      <div className="bg-alpha d-flex flex-column align-items-center">
        <HomepageLogo />
        <HomepageTitle className="mx-auto ">
          <span className="text-alpha">'----</span>Welcome
          <span className="text-alpha">---</span>to MU Methods
        </HomepageTitle>
        <SlideShow>
          <SwiperSlide className="bg-alpha d-flex flex-column align-items-center">
            <HomeCubeImage>
              <SlideShow.Image src={cubes} alt="Cubes Image" />
            </HomeCubeImage>
            <SlideCaption> All your crypto accounts in one place</SlideCaption>
          </SwiperSlide>
          <SwiperSlide className="bg-alpha d-flex flex-column align-items-center">
            <HomeBallsImage>
              <SlideShow.Image src={balls} alt="Balls image" />
            </HomeBallsImage>
            <SlideCaption>
              Never loose access to your account by sharing your seed phrase
            </SlideCaption>
          </SwiperSlide>
          <SwiperSlide className="bg-alpha d-flex flex-column align-items-center">
            <HomeUsersImage>
              <SlideShow.Image src={users} alt="Users image" />
            </HomeUsersImage>
            <SlideCaption> Sign all transactions from one app</SlideCaption>
          </SwiperSlide>
        </SlideShow>

        <HomeFooter className="d-flex flex-column m-auto ">
          {/* <Link to="/login"> </Link> */}
          <HomeButton
            type="button"
            className="bg-alpha border-alpha text-white btn btn-lg"
          >
            Log In
          </HomeButton>

          {/* <Link to="/sign-up"></Link> */}
          <HomeButton
            type="button"
            className="text-alpha bg-primary btn btn-lg mt-3"
          >
            Sign Up
          </HomeButton>

          {/* <Link to="/connect"> </Link> */}
          <HomeButton
            type="button"
            className="bg-alpha border-white mt-3 text-white btn btn-lg"
          >
            Connect Existing Web3 wallet
          </HomeButton>
        </HomeFooter>
      </div>
    </>
  );
};
