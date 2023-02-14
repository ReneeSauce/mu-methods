import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import Header from "../../../components/layout/header";
//TODO replace buttons with buttons when available

export function SeedPhrase({ onBackClick, onForwardClick }) {
  return (
    <Layout
      header={
        <>
          <Header.Left>
            <Button onClick={onBackClick}>**</Button>
          </Header.Left>
          <Header.Center>
            <Header.Title title="Sign up" />
            <Header.SubTitle subtitle=" Step 2/4" />
          </Header.Center>
        </>
      }
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Continue</Button>} //replace buton with step button
    ></Layout>
  );
}
