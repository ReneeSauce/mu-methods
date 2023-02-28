//entrypoint? using to test out the wallet flow
import logo from "../../../assets/mu-methods.svg";
import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { Header } from "../../../components/layout/header";

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
