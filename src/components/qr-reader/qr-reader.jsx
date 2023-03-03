import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { CameraContainer } from "../camera/camera.styles";
import { ScannerContainer } from "./qr-reader.styles";

export const QRCodeScanner = () => {
  const [data, setData] = useState("No Result");
  const [allowAccess, setAllowAccess] = useState(false);

  /* -------------------------------- handlers -------------------------------- */
  const handleAccessClick = () => {
    setAllowAccess(true);
    setData(null);
    console.log(allowAccess);
    console.log(data);
  };
  const handleTurnOff = () => {
    console.log(data);
    setAllowAccess(false);
  };
  return (
    <CameraContainer className="d-flex text-center bg-alpha">
      <ScannerContainer>
        {!data && allowAccess && (
          <>
            <QrReader
              ViewFinder={function noRefCheck() {}}
              constraints={{
                facingMode: "user",
              }}
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }
                if (!!error) {
                  console.info(error);
                }
              }}
              data-testid="qr-code-reader"
            />
          </>
        )}

        <p>The value is: {data}</p>
        <p>The error is: </p>
      </ScannerContainer>
      <div role="button" onClick={handleAccessClick}>
        Allow camera access
      </div>
      <div role="button" onClick={handleTurnOff}>
        turn off camer
      </div>
    </CameraContainer>
  );
};
