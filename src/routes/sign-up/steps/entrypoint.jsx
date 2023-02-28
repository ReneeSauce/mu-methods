//entrypoint? using to test out the wallet flow
import logo from "../../../assets/mu-methods.svg";
import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { Header } from "../../../components/layout/header";

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
          <Header.Center>
            <img src={logo} alt="Mu-Methods Logo" />
          </Header.Center>
        </>
      }
      body={
        <>
          <div className="fw-bold fs-32px text-center lh-sm mb-36px">
            Welcome to MU Methods
          </div>
          <div> slider component goes here</div>
        </>
      }
      footer={
        <>
          <div className="d-flex flex-column align-items-center gap-16px">
            <Button onClick={onLoginClick} className="w-100">
              Log In
            </Button>
            <Button onClick={onSignUpClick} className="w-100">
              Sign Up
            </Button>

            <Button onClick={onConnectWalletClick} className="w-100">
              Connect existing Web3 wallet
            </Button>
          </div>
        </>
      }
    ></Layout>
  );
};
