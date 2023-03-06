import { Button, Layout } from "../../../components"; //button needs to be changed when avail
//TODO: Update buttons when available
/**
 * Notify Peers Component -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onForwardClick forward click handler prop passed down from parent -opens email account
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 * @param title title prop in layout headerpassed from parent
 * @param subtitle subtitle in layout header prop passed from parent
 */

export function NotifyPeers({ onForwardClick, title, subtitle }) {
  return (
    <Layout
      className="mb-32px"
      header={
        <Layout.Header.Center>
          <Layout.Header.Title title={title} />
          <Layout.Header.SubTitle subtitle={subtitle} />
        </Layout.Header.Center>
      }
      body={
        <>
          <h3 className="fs-18px text-center lh-sm fw-bold">
            Great, the peers you've chosen will receive notification that they
            store a part or your seed phrase now
          </h3>
        </>
      }
      footer={
        <Button size="lg" buttonKind="primary" onClick={onForwardClick}>
          Finish Registration
        </Button>
      } //replace buton with step button
    ></Layout>
  );
}
