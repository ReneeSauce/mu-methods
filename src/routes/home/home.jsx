import { SlideShow } from "../../components/slideshow/slideshow";
import cubes from "../../assets/cubes.svg";
import balls from "../../assets/balls.svg";
import users from "../../assets/users.svg";
import { SwiperSlide } from "swiper/react";
import { Button } from "../../components/button/button";
import { HomepageLogo, HomepageTitle, FooterContainer } from "./home.styles";

export const Home = () => {
  return (
    <>
      <div> Home</div>
      <div className="bg-alpha d-flex flex-column align-items-center">
        <HomepageLogo />
        <HomepageTitle className="mx-auto ">
          <span className="text-alpha">'--</span>Welcome{" "}
          <span className="text-alpha">---</span>to MU Methods{" "}
        </HomepageTitle>
        <SlideShow>
          <SwiperSlide className="bg-alpha d-flex flex-column align-items-center">
            <SlideShow.Image src={cubes} alt="" />
            <p> All your crypto accounts in one place</p>
          </SwiperSlide>
          <SwiperSlide className="bg-alpha d-flex flex-column align-items-center">
            <SlideShow.Image src={balls} alt="" />
            <p>
              {" "}
              Never loose access to your account by sharing your seed phrase
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-alpha d-flex flex-column align-items-center">
            <SlideShow.Image src={users} alt="" />
            <p> Sign all transactions from one app</p>
          </SwiperSlide>
        </SlideShow>

        <FooterContainer className="d-flex flex-column m-auto">
          {" "}
          <Button className="bg-alpha border-alpha text-white60 btn-lg">
            Log In{" "}
          </Button>{" "}
          <Button className="text-alpha bg-primary btn-lg mt-3">
            {" "}
            Sign Up{" "}
          </Button>{" "}
          <Button className="bg-alpha border-white mt-3 text-white60 btn-lg">
            Connect Existing Web3 wallet{" "}
          </Button>{" "}
        </FooterContainer>
      </div>
    </>
  );
};
