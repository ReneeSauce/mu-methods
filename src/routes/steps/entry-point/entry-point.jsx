//entrypoint? using to test out the wallet flow
import { SwiperSlide } from "swiper/react";
import { balls, cubes, users } from "../../../assets";
import { Button, Layout, SlideShow } from "../../../components"; //button needs to be changed when avail
import Mu from "../../../components/icons/mu";

/**
 * Home Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onLoginClick login click handler prop passed down from parent
 * @param onSignUpClick signup click handler prop passed down from parent
 * @param onConnectWalletClick connect wallet click handler prop passed down from parent
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 * @param src the image link
 * @param alt the alt description
 */

export const EntryPoint = ({
  onLoginClick,
  onSignUpClick,
  onConnectWalletClick,
}) => {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Layout.Header.Center>
            <Mu width="30" height="37"></Mu>
          </Layout.Header.Center>
        </>
      }
      body={
        <>
          <div className="fw-bold fs-32px text-center lh-sm mb-36px ">
            Welcome to MU Methods
          </div>

          <SlideShow>
            <SwiperSlide className="bg-alpha flex-column ">
              <SlideShow.Image
                maxwidth="320px"
                height="187px"
                src={cubes}
                alt="image of cubes"
              ></SlideShow.Image>
              <p className="mt-32px mb-0  ">
                All your crypro accounts in one place
              </p>
            </SwiperSlide>

            <SwiperSlide className="bg-alpha flex-column">
              <SlideShow.Image
                maxwidth="355px"
                height="145px"
                src={balls}
                alt="image of balls"
              ></SlideShow.Image>

              <p className="mt-32px mb-0  ">
                Never loose access to your account by sharing your seed phrase
              </p>
            </SwiperSlide>

            <SwiperSlide className="bg-alpha flex-column ">
              <SlideShow.Image
                maxwidth="203px"
                height="182px"
                src={users}
                alt="image of cubes"
              ></SlideShow.Image>
              <p className="mt-32px mb-0  ">
                Sign all transactions from one app
              </p>
            </SwiperSlide>
          </SlideShow>
        </>
      }
      footer={
        <>
          <div className="d-flex flex-column align-items-center gap-16px">
            <Button size="lg" buttonKind="textOnly" onClick={onLoginClick}>
              Log In
            </Button>
            <Button size="lg" buttonKind="primary" onClick={onSignUpClick}>
              Sign Up
            </Button>

            <Button
              size="lg"
              buttonKind="secondary"
              onClick={onConnectWalletClick}
            >
              Connect existing Web3 wallet
            </Button>
          </div>
        </>
      }
    ></Layout>
  );
};
