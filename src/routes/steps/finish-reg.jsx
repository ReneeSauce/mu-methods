import { Button, Layout } from "../../components"; //button needs to be changed when avail
//TODO: Update buttons when available
//TODO: Create onForwardClick handler to open user's email account

/**
 * Choose Peers Component -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onForwardClick forward click handler prop passed down from parent -opens email account
 * @param header expects header components
 * @param footer expects footer components
 * @param title expects title text for the Header.Title component
 */

export function FinishReg({ onForwardClick }) {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Layout.Header.Center>
            <Layout.Header.Title title="We've sent a link to your email to finish your registration process" />
          </Layout.Header.Center>
        </>
      }
      footer={
        <Button
          size="lg"
          buttonKind="primary"
          disabled={false}
          onClick={onForwardClick}
        >
          Open email app
        </Button>
      } //replace buton with step button
    ></Layout>
  );
}
