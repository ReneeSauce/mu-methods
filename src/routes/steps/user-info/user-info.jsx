import { Button, Layout } from "../../../components"; //button needs to be changed when avail

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
 * @param title title prop in layout headerpassed from parent
 * @param subtitle subtitle in layout header prop passed from parent
 */

export function UserInfo({ onBackClick, onForwardClick, title, subtitle }) {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Layout.Header.Left>
            <Button
              buttonKind="textOnly"
              leftIcon="arrowLeft"
              size="sm"
              onClick={onBackClick}
            />
          </Layout.Header.Left>
          <Layout.Header.Center>
            <Layout.Header.Title title={title} />
            <Layout.Header.SubTitle subtitle={subtitle} />
          </Layout.Header.Center>
        </>
      }
      body="insert sign up form component here"
      footer={
        <Button size="lg" buttonKind="primary" onClick={onForwardClick}>
          Continue
        </Button>
      }
    ></Layout>
  );
}
