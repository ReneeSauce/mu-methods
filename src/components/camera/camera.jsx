/**
 * Camera Component Testing
 * @author [Colburn Sanders](https://github.com/colburncodes)
 */

import React from "react";
import Webcam from "react-webcam";
import { CameraContainer } from "./camera.styles";

export function Camera() {
  const webcamRef = React.useRef(null);
  const [img, setImg] = React.useState(null);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  return (
    <>
      <CameraContainer className="d-flex text-center bg-alpha">
        <Webcam
          audio={false}
          width={400}
          height={400}
          ref={webcamRef}
          imageSmoothing={true}
          videoConstraints={videoConstraints}
          screenshotFormat="image/jpeg"
        />
        <p>
          <img src={img} alt="qr code image" />
        </p>

        <button className="qr__button-reader" onClick={capture}>
          Capture photo
        </button>
      </CameraContainer>
    </>
  );
}
