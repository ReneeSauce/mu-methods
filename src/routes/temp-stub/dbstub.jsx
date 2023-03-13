//temp file to test user context
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Table } from "../../components";
import { TransactionContext } from "../../contexts/transaction-context";
import { UserContext } from "../../contexts/user-context";
import { Body } from "./body";

export const DbStub = () => {
  /* --------------------------------- consts --------------------------------- */
  const userCtx = useContext(UserContext);
  const tsxCtx = useContext(TransactionContext);
  const navigate = useNavigate();

  /* -------------------------------- useState -------------------------------- */
  const [wallets, setWallets] = useState([]);

  console.log("dbuserctx", userCtx.state);
  /* -------------------------------- useEffect ------------------------------- */
  useEffect(() => {
    //setWallets locally from user context on load
    setWallets(userCtx.state.walletProfiles);
  }, []);

  /* -------------------------------- functions ------------------------------- */
  function onWalletClick(wallet) {
    //updates user context with active wallet from button click
    //updates, activeWallet,activeFilter,activePermissions
    userCtx.updateActiveWallet(wallet);

    navigate("/accountpage");
  }

  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <Layout
        className="mb-0"
        body={
          <>
            <Table>
              <Table.Header> test header</Table.Header>

              {wallets.map((wallet) => (
                <Body
                  key={_.uniqueId("wallet-")}
                  onClick={() => onWalletClick(wallet)}
                  wallet={wallet.wallet}
                  permissions={wallet.permissions}
                  cryptoType={wallet.cryptoType}
                />
              ))}
            </Table>
          </>
        }
      ></Layout>
    </>
  );
};
