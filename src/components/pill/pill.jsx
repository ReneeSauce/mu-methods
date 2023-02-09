import styled from "styled-components";
import copyIcon from "../../assets/copy-icon.svg";

/**
 * Pill Component
 * @param shape expects 'round' or 'square'
 * @param isCopiable expects 'true' or 'false'
 * @param text expects the text to be displayed in the pill
 * @param opacity expects the pill background opacity '10' or '20'
 * @param textOpacity expects the text opacity '100' or '70'
 * @param fs expects the font size
 */

// TODO: Refactor to use common Button Component
const CopyBtn = styled.button`
  background-image: url(${copyIcon});
  background-position: center;
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;
  border: none;
  background-color: transparent;
`;

export const Pill = ({ isCopiable, text, shape, opacity, textOpacity, fs }) => {
  return (
    <div className="d-flex flex-row align-items-center">
      <div
        className={`badge bg-white${opacity} bg-opacity-${opacity} text-opacity-${textOpacity} text-white${textOpacity} fs-${fs} ${
          shape === "round" ? "rounded-pill" : ""
        }`}
      >
        {text}
      </div>
      {isCopiable && (
        <CopyBtn
          onClick={() => {
            navigator.clipboard.writeText(text);
          }}
          className="ms-2"
        ></CopyBtn>
      )}
    </div>
  );
};
