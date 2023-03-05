import { useState } from "react";
import chevron from "../../../assets/chevron.svg";
import { Button, Layout } from "../../../components"; //button needs to be changed when avail
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
  /* -------------------------------- useState -------------------------------- */
  const [isConfirmed, setIsConfirmed] = useState(false);

  /* -------------------------------- handlers -------------------------------- */
  const handleConfirmClick = () => {
    // fake api confirmation
    const apiIsConfirmed = Math.random() < 0.5;
    console.log(apiIsConfirmed);

    setIsConfirmed(apiIsConfirmed); //is this needed for demo
    //should it be sent to context to save confirmation

    apiIsConfirmed
      ? onForwardClick()
      : console.log("couldn't confirm do something here");
  };

  /* --------------------------------- return --------------------------------- */
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Layout.Header.Left>
            <Button
              buttonKind="textOnly"
              leftIcon={chevron}
              size="sm"
              onClick={onBackClick}
            />
          </Layout.Header.Left>
          <Layout.Header.Center>
            <Layout.Header.Title title="Connecting wallet" />
            <Layout.Header.SubTitle subtitle="Step 2/4" />
          </Layout.Header.Center>
        </>
      }
      body={<Body></Body>}
      footer={
        <Button size="lg" buttonKind="textOnly" onClick={handleConfirmClick}>
          Or confirm via App
        </Button>
      } //replace buton with step button
    ></Layout>
  );
};
