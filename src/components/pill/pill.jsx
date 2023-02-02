import styled from "styled-components";
import { useState, useEffect } from "react";
import copyIcon from "../../assets/copy-icon.svg";

/**
 * Pill Component
 * @param shape expects 'round' or 'square'
 * @param isCopiable expects 'true' or 'false'
 * @param text expects the text to be displayed in the pill
 * @param opacity expects the pill background opacity '10' or '25'
 * @param textOpacity expects the text opacity '100' or '75'
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

const PillContainer = styled.div`
  background-color: ${(props) => `var(--bs-white${props.opacity})`};
  color: ${(props) =>
    `var(--bs-white${props.textOpacity !== 100 ? props.textOpacity : ``})`};
  padding: 2px 8px 2px;
`;

export const Pill = ({ isCopiable, text, shape, opacity, textOpacity, fs }) => {
  const [pillText, setPillText] = useState("");

  useEffect(() => {
    setPillText(text);
  }, []);

  return (
    <div className="d-flex flex-row align-items-center">
      <PillContainer
        className={`badge fs-${fs} ${shape === "round" ? "rounded-pill" : ""}`}
        opacity={opacity}
        textOpacity={textOpacity}
      >
        {pillText}
      </PillContainer>
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
