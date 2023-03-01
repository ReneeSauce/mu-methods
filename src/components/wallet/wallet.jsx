import styled from "styled-components";

/**
 * Wallet Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 */
const Styled = styled.div``;

export const Wallet = ({ children }) => {
  return <div className="d-flex w-100 bg-alpha">{children}</div>;
};
export const TestWallet = () => {
  return <div className="d-flex w-100 bg-alpha"></div>;
};
