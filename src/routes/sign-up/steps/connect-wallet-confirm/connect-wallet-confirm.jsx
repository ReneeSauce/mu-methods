import { Button, Layout } from "../../../../components"; //button needs to be changed when avail
import { Header } from "../../../../components/layout/header";
import { Body } from "./body";

//TODO: figure out step numbering
//TODO: get body component finished
//TODO: logic for confirm via App link (currently the continue button)
//should continue to set permissions once confirmed
//TODO: placeholder for the QR code - how will sdk confirm?
//put in dummy logic for presentation
//logic to add or delete from context?  should this happen on this step or next step
//or set isConfirmed to true, if not confirmed then what?

/**
 * Connect-Wallet Component Confirm -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 * @param title expects text for the Header.Title component
 * @param subtitle expects text for the Header.SubTitle component
 *
 */

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
