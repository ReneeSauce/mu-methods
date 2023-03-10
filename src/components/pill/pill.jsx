import cx from "classnames";
import { useRef, useState } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { Button } from "../button/button";
/**
 * Pill Component
 * @author [Shaheen Hadadzadeh](https://github.com/shaheenhad)
 * @param className optional classNames that will be passed to the pill
 * @param shape expects 'round' or 'square'
 * @param isCopiable expects 'true' or 'false'
 * @param text expects the text to be displayed in the pill
 * @param opacity expects the pill background opacity '10' or '20'
 * @param textOpacity expects the text opacity '100' or '70'
 * @param size 'small' or 'large'
 */

export const Pill = ({
  className,
  isCopiable,
  text,
  shape,
  opacity,
  textOpacity,
  size,
}) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="d-flex flex-row align-items-center">
      <div
        ref={target}
        className={cx(
          `badge px-8px lh-sm bg-white bg-opacity-${opacity} text-opacity-${textOpacity} text-white fs-12px ${
            shape === "round" ? "rounded-pill" : ""
          } ${size === "large" ? "py-4px" : "py-2px"}`,
          className
        )}
      >
        {text}
      </div>
      {isCopiable && (
        <>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(text);
              setShow(true);
              setTimeout(() => {
                setShow(false);
              }, 1500);
            }}
            className="p-0"
            size="sm"
            buttonKind="textOnly"
            leftIcon="copy"
          ></Button>
          <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
              <Tooltip className="fs-12px" {...props}>
                Copied!
              </Tooltip>
            )}
          </Overlay>
        </>
      )}
    </div>
  );
};
