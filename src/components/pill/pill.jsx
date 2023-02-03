import styled from "styled-components";
import { useState, useEffect } from "react";
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
  const [pillText, setPillText] = useState("");

  useEffect(() => {
    setPillText(text);
  }, []);

  return (
    <div className="d-flex flex-row align-items-center">
      <div
        className={`badge bg-white${opacity} bg-opacity-${opacity} text-opacity-${textOpacity} text-white${textOpacity} fs-${fs} ${
          shape === "round" ? "rounded-pill" : ""
        }`}
      >
        {pillText}
      </div>
      {isCopiable && (
        <CopyBtn
          onClick={() => {
            navigator.clipboard.writeText(pillText);
          }}
          className="ms-2"
        ></CopyBtn>
      )}
    </div>
  );
};
