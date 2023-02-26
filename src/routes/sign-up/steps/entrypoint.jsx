//entrypoint? using to test out the wallet flow
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
            <img />
          </Header.Center>
        </>
      }
      body="Welcome to MU Methods"
      footer={
        <>
          <Button onClick={onLoginClick}>Log In</Button>
          <Button onClick={onSignUpClick}>Sign Up</Button>
          <Button onClick={onConnectWalletClick}>
            Connect existing Web3 wallet
          </Button>
        </>
      }
    ></Layout>
  );
};
