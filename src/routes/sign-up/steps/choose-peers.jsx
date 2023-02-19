import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { Header } from "../../../components/layout/header";
//TODO: Update buttons when available

export function ChoosePeers({ onBackClick, onForwardClick }) {
  return (
    <Layout //Layout and all props passed here
      className="mb-32px"
      header={
        <>
          <Header.Left>
            <Button onClick={onBackClick}>**</Button>
          </Header.Left>
          <Header.Center>
            <Header.Title title="Sign up" />
            <Header.SubTitle subtitle="Step 3/4" />
          </Header.Center>
        </>
      }
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Share seed phrase</Button>} //replace buton with step button
    ></Layout>
  );
}
