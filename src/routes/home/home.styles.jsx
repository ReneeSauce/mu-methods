import styled from "styled-components";
import muLogo from "../../assets/mu-methods.svg";
import { Button } from "../../components/button/button";

export const HomepageLogo = styled.div`
  margin-top: 63px;
  margin-right: 6px;
  margin-bottom: 30px;
  width: 30px;
  height: 37px;
  background-image: url(${muLogo});
`;

export const HomepageTitle = styled.h1`
  max-width: 240px;
  height: 64px;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 36px;
`;

export const HomeFooter = styled.div`
  width: 343px;
  padding-top: 48px;
  padding-bottom: 84px;
`;

export const SlideImageContainer = styled.div`
  img {
    max-width: 100%;
    object-fit: contain;
  }
`;

export const HomeCubeImage = styled(SlideImageContainer)`
  img {
    width: 320px;
    height: 187px;
  }
`;

export const HomeBallsImage = styled(SlideImageContainer)`
  img {
    width: 359px;
    height: 144px;
  }
`;

export const HomeUsersImage = styled(SlideImageContainer)`
  img {
    width: 203px;
    height: 182px;
  }
`;

export const SlideCaption = styled.p`
  margin: 31px 0 0 0;
  max-width: 343px;
`;

export const HomeButton = styled(Button)`
  height: 60px;
  width: 343px;
  font-family: "DM Sans", Inter, Avenir, Helvetica, Arial, sans-serif;
`;
// export const HomeButton = styled(Link)`
//   height: 60px;
//   width: 343px;
//   font-family: "DM Sans", Inter, Avenir, Helvetica, Arial, sans-serif;
// `;
