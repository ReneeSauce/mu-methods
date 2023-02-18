import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { Header } from "../../../components/layout/header";
//TODO: Update buttons when available

export function NotifyPeers({ onForwardClick }) {
  return (
    <Layout
      header={
        <Header.Center subtitle=" Step 4/4">
          <Header.Title title="Sign up" />
          <Header.SubTitle subtitle=" Step 4/4" />
        </Header.Center>
      }
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Finish Registration</Button>} //replace buton with step button
    ></Layout>
  );
}
