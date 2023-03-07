import { useContext, useEffect, useState } from "react";
import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { WizardContext } from "../../../contexts/wizard-context";
import { account, fSeedPhrases } from "../../../utils/faker-data";
import { Body } from "./body";

//TODO: implement qr scanner component
//TODO:logic for grabbing qr values with faker- tbd with SDK-
//consider clearing state.accountData before scanning
//TODO: logic to get seeds from scan and pass to context - working with faker
//TODO: what should happen on public key manually
//a form open or turn into input field
//how will you know if submitted without button?  will continue serve as submit?
//TODO: get form inputs when ready for input public key
//may need styled ocmponents to render placeholder text like figma

/**
 * Connect-Wallet Component Scan -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent
 * @param onEnterKey enter key click handler prop passed from parent
 * @param WizardContext context for data in Sign up Wizard
 * @param updateAccountData function to update scan user data in Sign up Wizard Context
 * @param updateSeedPhrases function to update SignupWizardContext
 * @param state passed from wizard context -seedphrases, accountInfo
 * @param data useState value containing data from scan
 * @param setData useState setter to set data from scan
 * @param key useState value with public key from input
 * @param setKey useState setter to set key from input
 * @param disabled useState value to disable button
 * @param setDisabled useState setter to disable button
 * @param account imported faker user data to emulate scan
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 * @param title title prop in layout headerpassed from parent
 * @param subtitle subtitle in layout header prop passed from parent
 *
 */

export const ConnectWalletScan = ({
  onBackClick,
  onForwardClick,
  title,
  subtitle,
}) => {
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
  //currently pulling account data and seed phrases(needed for next step) from faker
  const handleScan = () => {
    setData(account);
    updateSeedPhrases(fSeedPhrases);
    console.log(fSeedPhrases);
    //sdk will handle this
  };

  //enter public key handler
  const handleEnterKeyClick = (e) => {
    setKey(e.target.value);
    //keys sent to sdk?
  };

  const handleContinueClick = () => {
    //currently pulling account data and seed phrases(needed for next step) from faker
    //data will be sent by sdk
    setData(account);
    updateSeedPhrases(fSeedPhrases);
    copy();
    onForwardClick();
  };

  /* -------------------------------- functions ------------------------------- */
  // Copy to clipboard function
  // Gets seeds from store
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(state.seedPhrases.join(" "));
    } catch (err) {
      alert("Could not copy to clipboard");
    }
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
              leftIcon="arrowLeft"
              size="sm"
              onClick={onBackClick}
            />
          </Layout.Header.Left>
          <Layout.Header.Center>
            <Layout.Header.Title title={title} />
            <Layout.Header.SubTitle subtitle={subtitle} />
          </Layout.Header.Center>
        </>
      }
      body={<Body onClick={handleScan}></Body>}
      footer={
        <>
          <div className="d-flex flex-column gap-16px">
            <input
              onChange={handleEnterKeyClick}
              className="mt-auto rounded py-20px border-0 bg-beta"
              placeholder=" Or enter public key manually" //may need styled components to style per figma
              value={key}
            ></input>

            <Button
              size="lg"
              buttonKind="primary"
              onClick={handleContinueClick}
              disabled={disabled}
            >
              Continue
            </Button>
          </div>
        </>
      }
    ></Layout>
  );
};
