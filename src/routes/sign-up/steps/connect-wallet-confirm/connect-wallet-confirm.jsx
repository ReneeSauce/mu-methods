import { Button, Layout } from "../../../../components"; //button needs to be changed when avail
import { Header } from "../../../../components/layout/header";
import { Body } from "./body";
export const ConnectWalletConfirm = ({ onBackClick, onForwardClick }) => {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Header.Left>
            <Button onClick={onBackClick} className="w-100">
              **
            </Button>
          </Header.Left>
          <Header.Center>
            <Header.Title title="Connecting wallet" />
            <Header.SubTitle subtitle="Step 2/4" />
          </Header.Center>
        </>
      }
      body={<Body></Body>}
      footer={<Button onClick={onForwardClick}>Or confirm via App</Button>} //replace buton with step button
    ></Layout>
  );
};
