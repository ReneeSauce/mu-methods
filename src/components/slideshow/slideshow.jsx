import { Button } from "../button";
import {
  ButtonContainer,
  SlideShowImage,
  SlideShowLogo,
  SlideShowTitle,
} from "./slideshow.styles";

export const SlideShow = () => {
  return (
    <div
      className="bg-alpha d-flex flex-column align-items-center
 "
    >
      <SlideShowLogo />

      <SlideShowTitle className="mx-auto ">
        {" "}
        <span className="text-alpha">'--</span>Welcome{" "}
        <span className="text-alpha">---</span>to MU Methods{" "}
      </SlideShowTitle>

      <SlideShowImage />
      <p> All your crypto accounts in one place</p>

      <ButtonContainer className="d-flex flex-column m-auto">
        <Button className="bg-alpha border-alpha text-white60 btn-lg">
          {" "}
          Log In{" "}
        </Button>
        <Button className="text-alpha bg-primary btn-lg mt-3"> Sign Up </Button>
        <Button className="bg-alpha border-white mt-3 text-white60 btn-lg">
          Connect Existing Web3 wallet
        </Button>
      </ButtonContainer>
    </div>
  );
};
