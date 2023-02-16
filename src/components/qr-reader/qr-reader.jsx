import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { CameraContainer } from "../camera/camera.styles";

export function QRCodeScanner() {
  const [data, setData] = useState("No Result");
  return (
    <CameraContainer className="d-flex text-center bg-alpha">
      <div
        style={{
          margin: "auto",
          width: "400px",
        }}
      >
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
      </div>
    </CameraContainer>
  );
}
