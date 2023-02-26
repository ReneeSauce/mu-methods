import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { CameraContainer } from "../camera/camera.styles";
import { ScannerContainer } from "./qr-reader.styles";

export function QRCodeScanner() {
  const [data, setData] = useState("No Result");
  return (
    <CameraContainer className="d-flex text-center bg-alpha">
      <ScannerContainer>
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
        <p>The value is: {data}</p>
        <p>The error is: </p>
      </ScannerContainer>
    </CameraContainer>
  );
}
