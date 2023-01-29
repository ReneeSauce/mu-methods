import styled from "styled-components";
import { useState, useEffect } from "react";
import copyIcon from "../../assets/copy-icon.svg";

const CopyBtn = styled.button`
  background-image: url(${copyIcon});
  background-position: center;
  background-repeat: no-repeat;
  height: 16px;
  width: 16px;
  border: none;
  background-color: transparent;
`;

export const Pill = ({ isCopiable, text }) => {
  const [pillText, setPillText] = useState("none");

  useEffect(() => {
    setPillText(text);
  }, []);

  return (
    <div className="d-flex flex-row align-items-center">
      <div className="badge text-bg-primary">{pillText}</div>
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
