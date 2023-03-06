import chevron from "../../../assets/chevron.svg";
import { Button, Layout } from "../../../components"; //button needs to be changed when avail

//TODO: Update buttons when available
//TODO: need to import and add corresponding form when it is created
//TODO: needs logic to disable/enable button - ?controlled by form validation?

/**
 * LogIn Component - Sign up Route
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent
 * @param onConnectWalletClick connect wallet click handler prop passed down from parent
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 * @param title title prop in layout headerpassed from parent

 */

export function LogIn({ onBackClick, onSignUpClick, onLoginClick, title }) {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Layout.Header.Left>
            <Button
              buttonKind="textOnly"
              leftIcon={chevron}
              size="sm"
              onClick={onBackClick}
            />
          </Layout.Header.Left>
          <Layout.Header.Center>
            <Layout.Header.Title title={title} />
          </Layout.Header.Center>
        </>
      }
      body="insert login form component here"
      footer={
        <>
          <Button
            size="lg"
            buttonKind="textOnly"
            onClick={onSignUpClick}
            className="bg-beta "
          >
            Sign Up
          </Button>
          <Button size="lg" buttonKind="primary" onClick={onLoginClick}>
            Log In
          </Button>
        </>
      } //replace buton with step button
    ></Layout>
  );
}
