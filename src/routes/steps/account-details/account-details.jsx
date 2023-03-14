import { useContext } from "react";
import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { TransactionContext } from "../../../contexts/transaction-context";
import { UserContext } from "../../../contexts/user-context";
import { Body } from "./body";

//TODO: logic to get account filter for rendering correct account on this page
//TODO: set up total balance logic -?SDK

/**
 * AccountDetails Component - used in Account Page Wizard Flow (Dashboard)
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent

 * @param body expects body components

 */

export const AccountDetails = ({ onBackClick, onForwardClick }) => {
  /* ------------------------------- set Context ------------------------------ */

  const userCtx = useContext(UserContext);
  const tsxCtx = useContext(TransactionContext);
  // console.log(tsxCtx.state);
  // console.log(userCtx.state);
  /* -------------------------------- useState -------------------------------- */

  /* ------------------------------- useEffects ------------------------------- */

  /* -------------------------------- functions ------------------------------- */
  const reloadPage = () => {
    const filter = userCtx.state.activeFilter;
    const reload = tsxCtx.state.allTransactions.filter(
      (x) => x.cryptoType === filter || x.cryptoType === "NFT"
    );
  };

  /* --------------------------------- return --------------------------------- */
  return (
    <Layout
      className="mb-0px"
      header={
        <>
          <Layout.Header.Left>
            <Button
              buttonKind="textOnly"
              leftIcon="arrowLeft"
              size="sm"
              className="p-0 m-0"
              onClick={onBackClick}
            />
          </Layout.Header.Left>

          <Layout.Header.Right>
            <Button
              buttonKind="tertiary"
              rightIcon="regenerate"
              size="sm"
              className="m-0 p-0"
              onClick={() => {
                reloadPage();
              }}
            ></Button>
            <Button
              buttonKind="tertiary"
              rightIcon="settings"
              size="sm"
              className="m-0 p-0"
              onClick={onForwardClick}
            ></Button>
          </Layout.Header.Right>
        </>
      }
      body={<Body isCopiable={true}></Body>}
    ></Layout>
  );
};
