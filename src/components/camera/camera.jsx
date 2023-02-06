import React from "react";
import {
  Container,
  Info,
  Title,
  SubTitle,
  ScanTitle,
  CameraContainer,
  Input,
  Button,
} from "./camera.styles";

/**
 * Camera Component
 * @author [Colburn Sanders](https://github.com/colburncodes)
 */

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
            <Input type="text" placeholder={inputText} />
          </div>
          <div className="mb-3">
            <Button type="submit" placeholder={"Continue"}>
              {buttonText}
            </Button>
          </div>
        </Info>
      </Container>
    </>
  );
};
