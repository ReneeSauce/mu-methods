//connect-wallet-scan-body
import styled from "styled-components";

//TODO: What happens with the camera component
//QR Code will have information
//how to grab that information - does it go to context
//I think it is passing data from qrcode scanner
//needs to pass down
//onScan use set state

/**
 * Body Component - used with Connect-Wallet Scan Component-
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param WizardContext context for data in Sign up Wizard
 * @param updateAccountData function to update scan user data in Sign up Wizard Context
 * @param seedPhrases seed phrases from scan to update in Signup Wizard Context
 * @param updateSeedPhrases function to update SignupWizardContext
 * @param data useState value containing data from scan
 * @param setData useState setter to set data from scan
 * @param account imported faker user data to emulate scan
 * @param onClick prop to call handleScan function
 * @param handleScan 

 *
 */
const StyledBox = styled.div`
  min-width: 280px;
  min-height: 280px;
`;

export const Body = ({ onClick }) => {
  /* ----------------------------- set up Context ----------------------------- */
  //get update scanAccountData
  // const { updateAccountData, seedPhrases, updateSeedPhrases } =
  //   useContext(WizardContext);
  /* -------------------------------- useState -------------------------------- */
  // const [data, setData] = useState({});

  /* ------------------------------- use Effect ------------------------------- */
  //not working
  //update Context
  // useEffect(() => {
  //   updateAccountData(data);
  // }, [data]);

  /* --------------------------------- handler -------------------------------- */
  // const handleScan = () => {
  //   setData(account);
  //   console.log(data);
  //   //sdk will handle this
  // };
  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <h4 className="pb-12px m-0 text-white text-opacity-90 fs-24px text-center">
        Scan QR code to connect your existing Web3 wallet
      </h4>

      <StyledBox className="d-flex flex-column align-items-center justify-content-center bg-beta">
        <div>camera component goes here</div>
        <div role="button" onClick={onClick}>
          TestFaker
        </div>
      </StyledBox>
    </>
  );
};
