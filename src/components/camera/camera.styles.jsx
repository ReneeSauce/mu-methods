import styled from "styled-components";

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
  margin-left: 111px;
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

const Input = styled.input`
  background: var(--bs-white10);
  width: 343px;
  margin: 25px -74px 0px 27px;
  height: 60px;
  fontsize: 18px;
  fontweight: 700;
  fontstyle: normal;
  fontfamily: DM Sans;
  color: #17172d;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background: var(--bs-white10);
  width: 343px;
  margin: 0px -102px 0px 0px;
  height: 60px;
  fontsize: 18px;
  fontweight: 700;
  fontstyle: normal;
  fontfamily: DM Sans;
  color: #17172d;
  border: none;
  border-radius: 5px;
`;

export {
  Container,
  Info,
  Title,
  ScanTitle,
  SubTitle,
  CameraContainer,
  Input,
  Button,
};
