import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { Header } from "../../../components/layout/header";

//TODO: Update buttons when available
//TODO: need to import and add corresponding form when it is created
//TODO: needs logic to disable/enable button - ?controlled by form validation?

/**
 * User-Info Component - Sign up Info
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent
 * @param onConnectWalletClick connect wallet click handler prop passed down from parent
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 */

export function UserInfo({ onBackClick, onForwardClick }) {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Header.Left>
            <Button onClick={onBackClick} className="w-100">
              **
            </Button>
          </Header.Left>
          <Header.Center>
            <Header.Title title="Sign up" />
            <Header.SubTitle subtitle="Step 1/4" />
          </Header.Center>
        </>
      }
      body="insert sign up form component here"
      footer={<Button onClick={onForwardClick}>Continue</Button>} //replace buton with step button
    ></Layout>
  );
}
