//connect-wallet-scan-body
import { useContext, useEffect, useState } from "react";
import { account } from "../../../../utils/faker-data";
import { WizardContext } from "../../sign-up";

//TODO: What happens with the camera component
//QR Code will have information
//how to grab that information - does it go to context
//I think it is passing data from qrcode scanner
//needs to pass down
//onScan use set state
export const Body = () => {
  /* ----------------------------- set up Context ----------------------------- */
  //get update scanAccountData
  const { updateAccountData, seedPhrases } = useContext(WizardContext);
  /* -------------------------------- useState -------------------------------- */
  const [data, setData] = useState({
    // accountType: "",
    // accountName: "",
    // accountID: "",
    // avatar: "",
  });

  /* ------------------------------- use Effect ------------------------------- */
  //not working
  //update Context
  useEffect(() => {
    updateAccountData(data);
  }, [data]);

  /* --------------------------------- handler -------------------------------- */
  const handleScan = () => {
    setData(account);
    console.log(data);
    //sdk will handle this
  };
  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <h4 className="pb-12px m-0 text-white text-opacity-90 fs-24px text-center">
        Scan QR code to connect your existing Web3 wallet
      </h4>
      <div>camera component goes here</div>
      <div role="button" onClick={handleScan}>
        TestFaker
      </div>
    </>
  );
};
