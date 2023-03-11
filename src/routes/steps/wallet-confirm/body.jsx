//connect-wallet-confirm-body
import { useContext } from "react";
import styled from "styled-components";
import { Wallet } from "../../../components";
import { WizardContext } from "../../../contexts/wizard-context";

//TODO: need logic to set is confirmed to true - use state
//TODO: way to trigger setIsConfirmed to true
//TODO: logic to go to next step when isConfirmed = true
//TODO: send is confirmed to usercontext

/**
 * Body Component - used with Connect-Wallet Confirm Component-
 * @author [K. Ehrenclou](https://github.com/kehrenclou)


 *
 */
const StyledBox = styled.div`
  min-width: 280px;
  min-height: 280px;
  border-radius: 8px;
`;

export const Body = () => {
  const { state } = useContext(WizardContext);
  return (
    <>
      <h4 className="pb-16px m-0 text-white text-opacity-90 fs-24px text-center">
        Confirm your account
      </h4>
      <Wallet
        src={state.accountData.avatar}
        alt="wallet avatar"
        wallet={state.accountData.accountWallet}
        name={state.accountData.accountName}
        id={state.accountData.accountId}
      ></Wallet>
      <div className="d-flex flex-column flex-grow-1 justify-content-center">
        <StyledBox className="d-flex flex-column align-items-center justify-content-center bg-beta">
          <div>confirmation qr code here</div>
        </StyledBox>
      </div>
    </>
  );
};
