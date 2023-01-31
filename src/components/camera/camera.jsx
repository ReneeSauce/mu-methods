import React from "react";
import styled from "styled-components";

/**
 * Camera Component
 * @author [Colburn Sanders](https://github.com/colburncodes)
 */

const Container = styled.div`
  display: flex;
  column-gap: 8px;
  position: relative;
  flexdirection: column;
  justify-content: center;
  alignitems: center;
  margin: auto;
`;

const Info = styled.div`
  row-gap: 4px;
  display: flex;
`;

const Title = styled.h2`
  color: "#f6f6f6";
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-size: 24px;
  font-weight: 700;
  margin-top: 70px;
`;

const ScanTitle = styled.h2`
  color: "#f6f6f6";
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-size: 24px;
  font-weight: 700;
  margin: 32px 0px 32px 140px;
  inline-size: 300px;
`;

const SubTitle = styled.caption`
  color: var(--bs-white75);
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-size: 12px;
  font-weight: 400;
  margin: 0 162px 0 269px;
`;

const CameraContainer = styled.div`
  column-gap: 8px;
  width: 279px;
  height: 281px;
  margin: 0px 48px 0 150px;
  background: var(--bs-white10);
  border-radius: 8px;
  color: #fff;
  justifycontent: center;
`;

export const Camera = ({ title, caption, subTitle, inputText, buttonText }) => {
  return (
    <>
      <Container className="d-flex text-center bg-alpha">
        <Info className="flex-column">
          <Title>{title}</Title>
          <SubTitle>{caption}</SubTitle>
          <ScanTitle>{subTitle}</ScanTitle>
          <CameraContainer className="flex-column"></CameraContainer>
          <div className="mb-3">
            <input
              style={{
                background: "var(--bs-white10)",
                width: "343px",
                margin: "74px 114px",
                height: "60px",
                fontSize: "18px",
                fontWeight: "700",
                fontStyle: "normal",
                fontFamily: "DM Sans",
                border: "none",
              }}
              type="text"
              className="form-control form-control-lg"
              id="camera__pub_key_id"
              placeholder={inputText}
            />
          </div>
          <div className="mb-3">
            <button
              style={{
                background: "var(--bs-white10)",
                width: "343px",
                margin: "-135px 27px 0px 27px",
                height: "60px",
                fontSize: "18px",
                fontWeight: "700",
                fontStyle: "normal",
                fontFamily: "DM Sans",
                color: "#17172D",
                border: "none",
              }}
              type="button"
              className="btn btn-secondary btn-lg"
            >
              {buttonText}
            </button>
          </div>
        </Info>
      </Container>
    </>
  );
};
