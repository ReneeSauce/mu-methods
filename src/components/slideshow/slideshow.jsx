import { Button } from "../button";
import {
  SlideShowImage,
  SlideShowLogo,
  SlideShowTitle,
} from "./slideshow.styles";

export const SlideShow = () => {
  return (
    <div className="bg-alpha d-flex flex-column">
      <SlideShowLogo />
      <SlideShowTitle className="mx-auto">
        {" "}
        Welcome to MU Methods{" "}
      </SlideShowTitle>
      <SlideShowImage />
      <p> All your crypto accounts in one place</p>

      <Button className="bg-alpha border-alpha text-white60"> Log In </Button>
      <Button className="text-alpha bg-primary"> Sign Up </Button>
      <Button className="bg-alpha border-white mt-3">
        Connect Existing Web3 wallet
      </Button>
    </div>
  );
};
