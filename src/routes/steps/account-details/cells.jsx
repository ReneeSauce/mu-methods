import styled from "styled-components";

/**
 * Layouts used in AccountDetails component - in uaccountpage flow (dashboard)
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param description- NFT Transaction Description
 * @param sender - NFT Transaction Sender
 * @param recipient - NFT Transaction Recipient
 * @param img - NFT Transaction Image
 * @param ctype - Type of Crypto NFT, ETH, SOL, etc
 * @param tsxtype Transaction type - Sent or Received
 * @param senderkey - NFT sender key ?(not sure what this is ?tsx key or user pubkey)
 * @param recipienkey - NFT recipient key ?(not sure what this is ?txs id or user pubkey)
 * @param amt - transaction amount in crypto
 * @param value - transaction amount in currency
 * @param balancecr - account balance in Crypto
 * @param balancecu - account balance in Currency
 */

/* ---------------------------- styled components --------------------------- */
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
/* ------------------------ Account Page Cell layouts ----------------------- */
//for accocunt balance
export const Balance = ({ ctype, balancecu, balancecr }) => {
  return (
    <>
      <div className="d-flex flex-column bg-white bg-opacity-10 rounded-3 p-12px mb-32px">
        <p className="fs-10px lh-sm mb-8px tex-white text-opacity-70">
          TOTAL BALANCE
        </p>
        <div className="d-flex justify-content-between">
          <h2 className="fw-bold fs-24px m-0">
            {ctype} {balancecr}
          </h2>
          <p className="fw-normal text-white text-opacity-70 fs-16px m-0">
            ${balancecu}
          </p>
        </div>
      </div>
    </>
  );
};

//for NFT transactions
export const TsxNft = ({
  description,
  sender,
  recipient,
  img,
  type,
  tsxtype,
  senderkey,
  recipientkey,
}) => {
  return (
    <>
      <StyledContainer className="  py-12px">
        <div className="d-flex flex-column w-75">
          <TsxHeader className="mb-8px text-truncate">
            {type} {tsxtype} /{description}
          </TsxHeader>
          <TsxDetail className="text-opacity-70 text-white">
            From: {sender} / {senderkey}
          </TsxDetail>
          <TsxDetail className="text-opacity-70 text-white ">
            To: {recipient} / {recipientkey}
          </TsxDetail>
        </div>
        <img src={img} />
      </StyledContainer>
    </>
  );
};

export const TsxCrypto = ({
  type,
  tsxtype,
  amt,
  value,
  balanceCr,
  balanceCu,
}) => {
  return (
    <>
      <StyledContainer className="py-12px">
        <div className="d-flex w-100 justify-content-between">
          <TsxHeader className="mb-8px text-truncate">
            {type} {tsxtype}
          </TsxHeader>
          <div className="d-flex flex-column align-items-end">
            <TsxAmt>
              {amt} {type} (${value})
            </TsxAmt>
            <TsxDetail className="text-opacity-70 text-white">
              {balanceCr} {type} (${balanceCu})
            </TsxDetail>
          </div>
        </div>
      </StyledContainer>
    </>
  );
};
