import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { Header } from "../../../components/layout/header";
//TODO: Update buttons when available

export function FinishReg({ onForwardClick }) {
  return (
    <Layout
      header={
        <>
          <Header.Center>
            <Header.Title title="We've sent a link to your email to finish your registration process" />
          </Header.Center>
        </>
      }
      footer={<Button onClick={onForwardClick}>Open email app</Button>} //replace buton with step button
    ></Layout>
  );
}
