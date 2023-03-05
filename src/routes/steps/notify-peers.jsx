import { Button, Layout } from "../../components"; //button needs to be changed when avail
//TODO: Update buttons when available

export function NotifyPeers({ onForwardClick }) {
  return (
    <Layout
      className="mb-32px"
      header={
        <Layout.Header.Center subtitle=" Step 4/4">
          <Layout.Header.Title title="Sign up" />
          <Layout.Header.SubTitle subtitle=" Step 4/4" />
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
