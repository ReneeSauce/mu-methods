import { faker } from "@faker-js/faker";
import styled from "styled-components";

/**
 * AccountPage Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param 

 */
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TsxHeader = styled.h3`
  font-weight: 500;
  font-size: 14px;
`;
const TsxDetail = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`;
const TsxAmt = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;

export const Balance = ({}) => {
  return (
    <>
      <div className="d-flex flex-column bg-white bg-opacity-10 rounded-3 p-12px mb-32px">
        <p className="fs-10px lh-sm mb-8px">TOTAL BALANCE</p>
        <div className="d-flex justify-content-between">
          <h2 className="fw-bold fs-24px m-0">ETH 0.80</h2>
          <p className="fw-normal fs-16px m-0">$1000</p>
        </div>
      </div>
    </>
  );
};

export const TsxNft = () => {
  const fakeImg = faker.image.abstract(50, 50);

  return (
    <>
      <StyledContainer className="bg-white bg-opacity-10 py-12px">
        <div className="d-flex flex-column w-75">
          <TsxHeader className="mb-8px text-truncate">
            NFT Recieved/ Beautiful Digital Painting of Flowers
          </TsxHeader>
          <TsxDetail className="text-opacity-70 text-white">
            From: MyNickName/
          </TsxDetail>
          <TsxDetail className="text-opacity-70 text-white ">detail</TsxDetail>
        </div>
        <img src={fakeImg} />
      </StyledContainer>
    </>
  );
};
export const TsxCrypto = () => {
  const fakeImg = faker.image.abstract(50, 50);
  return (
    <>
      <StyledContainer className="bg-white bg-opacity-10 py-12px">
        <div className="d-flex w-100 justify-content-between">
          <TsxHeader className="mb-8px text-truncate">ETH Sent</TsxHeader>
          <div className="d-flex flex-column align-items-end">
            <TsxAmt>-0.0080 ETH ($10)</TsxAmt>
            <TsxDetail className="text-opacity-70 text-white">
              0.80 ETH ($1000)
            </TsxDetail>
          </div>
        </div>
      </StyledContainer>
    </>
  );
};
