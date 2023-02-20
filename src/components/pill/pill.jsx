import cx from "classnames";
import { motion } from "framer-motion";
import styled from "styled-components";
import copyIcon from "../../assets/copy-icon.svg";

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

// TODO: Refactor to use common Button Component
const CopyBtn = styled(motion.button)`
  background-image: url(${copyIcon});
  background-position: center;
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;
  border: none;
  background-color: transparent;
`;

export const Pill = ({
  className,
  isCopiable,
  text,
  shape,
  opacity,
  textOpacity,
  size,
}) => {
  return (
    <div className="d-flex flex-row align-items-center">
      <div
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
        <CopyBtn
          onClick={() => {
            navigator.clipboard.writeText(text);
          }}
          className="ms-8px"
          whileTap={{ scale: 0.75 }}
        ></CopyBtn>
      )}
    </div>
  );
};
