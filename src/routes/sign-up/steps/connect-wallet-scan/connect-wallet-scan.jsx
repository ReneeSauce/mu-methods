import { Button, Layout } from "../../../../components"; //button needs to be changed when avail
import { Header } from "../../../../components/layout/header";
import { Body } from "./body";

//TODO:  Figure out step numbering
//TODO:logic for grabbing qr values with faker- tbd with SDK
//TODO: figure out why editing this component results in error:
//cannot access connectWalletScan before initialization - is it from faker?
//TODO: logic to get seeds from scan and pass to context

//trying data as a prop to grab qr values - will use faker

/**
 * Connect-Wallet Component Scan -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent
 * @param onEnterKey enter key click handler prop passed from parent
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 * @param title expects text for the Header.Title component
 * @param subtitle expects text for the Header.SubTitle component
 *
 */

export const ConnectWalletScan = ({
  onBackClick,
  onForwardClick,
  onEnterKey,
}) => {
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
            <Header.SubTitle subtitle="Step 1/4" />
          </Header.Center>
        </>
      }
      body={<Body></Body>}
      footer={
        <>
          <div className="d-flex flex-column gap-16px">
            <Button onClick={onEnterKey} className="mt-auto">
              Or enter public key manually
            </Button>
            <Button onClick={onForwardClick}>Continue</Button>
          </div>
        </>
      } //replace buton with step button
    ></Layout>
  );
};
