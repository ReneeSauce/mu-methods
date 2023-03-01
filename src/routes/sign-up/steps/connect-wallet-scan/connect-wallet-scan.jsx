import { useContext, useEffect, useState } from "react";
import { Button, Layout } from "../../../../components"; //button needs to be changed when avail
import { Header } from "../../../../components/layout/header";
import { WizardContext } from "../../../../contexts/wizard-context";
import { account } from "../../../../utils/faker-data";
import { Body } from "./body";

//TODO:  Figure out step numbering
//TODO:logic for grabbing qr values with faker- tbd with SDK- consider clearing state.accountData before scanning
//TODO: figure out why editing this component results in error:
//cannot access connectWalletScan before initialization - is it from faker?
//TODO: logic to get seeds from scan and pass to context
//TODO: what should happen on public key manually
//a form open or turn into input field
//how will you know if submitted without button?  will continue serve as submit?

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

export const ConnectWalletScan = ({ onBackClick, onForwardClick }) => {
  /* ----------------------------- set up Context ----------------------------- */
  //get update scanAccountData
  const { updateAccountData, updateSeedPhrases, state } =
    useContext(WizardContext);
  // /* -------------------------------- useState -------------------------------- */
  const [data, setData] = useState("");
  const [key, setKey] = useState("");

  //state of scan data capture
  const [didGetData, setDidGetData] = useState(false);

  //control buuton state
  const [disabled, setDisabled] = useState(true);

  // /* ------------------------------- use Effect ------------------------------- */
  // //not working
  // //update Context
  useEffect(() => {
    updateAccountData(data);
  }, [data]);

  useEffect(() => {
    if (
      (Object.values(state.accountData).length || Object.values(key).length) ===
      0
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [state.accountData, key]);
  // /* --------------------------------- handler -------------------------------- */
  //w react-qrreader - passed via onResult?how to implement
  //currently pulling data from faker
  const handleScan = () => {
    setData(account);
    //sdk will handle this
  };

  //enter public key handler
  const handleEnterKeyClick = (e) => {
    setKey(e.target.value);

    //keys sent to sdk
  };

  const handleContinueClick = () => {
    //faker data sent for example
    //data will be sent by sdk
    setData(account);
    onForwardClick();
  };
  /* --------------------------------- return --------------------------------- */

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
      body={<Body onClick={handleScan}></Body>}
      footer={
        <>
          <div className="d-flex flex-column gap-16px">
            <input
              onChange={handleEnterKeyClick}
              className="mt-auto rounded py-8px border-0 bg-beta"
              placeholder=" Or enter public key manually"
              value={key}
            ></input>
            {/* <Button onClick={onEnterKeyClick} className="mt-auto">
              Or enter public key manually
            </Button> */}
            <Button onClick={handleContinueClick} disabled={disabled}>
              Continue
            </Button>
          </div>
        </>
      } //replace buton with step button
    ></Layout>
  );
};
