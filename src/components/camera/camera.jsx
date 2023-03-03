/**
 * Camera Component Testing
 * @author [Colburn Sanders](https://github.com/colburncodes)
 */

import React, { useState } from "react";
import Webcam from "react-webcam";
import { CameraContainer } from "./camera.styles";

//changed to named component
export const Camera = ({}) => {
  const webcamRef = React.useRef(null);
  /* -------------------------------- useState -------------------------------- */
  const [allowAccess, setAllowAccess] = useState(false);
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

  /* -------------------------------- handlers -------------------------------- */
  const handleAccessClick = () => {
    setAllowAccess(true);
    setImg(null);
    console.log(allowAccess);
  };

  //need to do something to disable camera
  //need to do something to reset photo if want to aalow camera access again
  //maybe some kind of togge on capture photo
  return (
    <>
      <CameraContainer className="d-flex text-center bg-alpha">
        {!img && allowAccess && (
          <>
            <Webcam
              audio={false}
              width={400}
              height={400}
              ref={webcamRef}
              imageSmoothing={true}
              videoConstraints={videoConstraints}
              screenshotFormat="image/jpeg"
            />
            <button className="qr__button-reader" onClick={capture}>
              Capture photo
            </button>
          </>
        )}
        {img && (
          <p>
            <img src={img} alt="qr code image" />
          </p>
        )}
        <div role="button" onClick={handleAccessClick}>
          Allow camera access
        </div>
      </CameraContainer>
    </>
  );
};
