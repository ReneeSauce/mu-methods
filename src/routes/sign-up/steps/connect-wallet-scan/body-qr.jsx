//connect-wallet-scan-body
import styled from "styled-components";
import { QRCodeScanner } from "../../../../components/qr-reader";

//TODO: What happens with the camera component
//QR Code will have information
//how to grab that information - does it go to context
//I think it is passing data from qrcode scanner
//needs to pass down
//onScan use set state

/**
 * Body Component - used with Connect-Wallet Scan Component-
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 * @param onClick prop to call handleScan function


 *
 */
const StyledBox = styled.div`
  min-width: 280px;
  min-height: 280px;
`;

export const BodyQr = ({ onClick }) => {
  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <h4 className="pb-12px m-0 text-white text-opacity-90 fs-24px text-center">
        Scan QR code to connect your existing Web3 wallet
      </h4>
      <QRCodeScanner></QRCodeScanner>
      <div role="button" onClick={onClick}>
        TestFaker
      </div>
      {/* <StyledBox className="d-flex flex-column align-items-center justify-content-center bg-beta">
        <div>camera component goes here</div>
       
      </StyledBox> */}
    </>
  );
};
