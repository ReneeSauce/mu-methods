import cx from "classnames";
import styled from "styled-components";
import CopyIcon from "../icons/copy";
/**
 * Pill Component
 * @param className optional classNames that will be passed to the pill
 * @param shape expects 'round' or 'square'
 * @param isCopiable expects 'true' or 'false'
 * @param text expects the text to be displayed in the pill
 * @param opacity expects the pill background opacity '10' or '20'
 * @param textOpacity expects the text opacity '100' or '70'
 */

// TODO: Refactor to use common Button Component
const CopyBtn = styled.button`
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
}) => {
  return (
    <div className="d-flex flex-row align-items-center">
      <div
        className={cx(
          `badge bg-white bg-opacity-${opacity} text-opacity-${textOpacity} text-white fs-14px ${
            shape === "round" ? "rounded-pill" : ""
          }`,
          className
        )}
      >
        {text}
      </div>
      {isCopiable && (
        <CopyBtn
          onClick={() => {
            // TODO: Add a visual indicator that something was copied
            navigator.clipboard.writeText(text);
          }}
          className="ms-2"
        >
          <CopyIcon width="17"/>
        </CopyBtn>
      )}
    </div>
  );
};
