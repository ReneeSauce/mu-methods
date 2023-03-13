import { Button, Layout } from "../../../components"; //button needs to be changed when avail

//TODO: Create onForwardClick handler to open user's email account

/**
 * Finish Registration Component - used with SignupWizard
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onForwardClick forward click handler prop passed down from parent -opens email account
 * @param header expects header components
 * @param footer expects footer components
 * @param title title prop in layout headerpassed from parent

 */

export function FinishReg({ onForwardClick, title }) {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Layout.Header.Center>
            <Layout.Header.Title title={title} />
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
      }
    ></Layout>
  );
}
