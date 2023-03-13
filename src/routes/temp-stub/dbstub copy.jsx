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
  const [primary, setPrimary] = useState({});

  console.log("dbuserctx", userCtx.state);
  /* -------------------------------- useEffect ------------------------------- */
  useEffect(() => {
    //setWallets locally from user context on load
    //uses wallets to populate
    setWallets(userCtx.state.walletProfiles);
  }, []);

  //set primary account locally
  useEffect(() => {
    setPrimary(userCtx.state.primaryAcct[0]);
  }, []);

  /* -------------------------------- functions ------------------------------- */
  function onWalletClick(wallet) {
    //updates user context with active wallet from button click
    //active wallet is used to populate account page (next step)
    //updates, activeWallet,activeFilter,activePermissions
    userCtx.updateActiveWallet(wallet);

    navigate("/accountpage");
  }

  const groupsByAccount = wallets.reduce((group, account) => {
    const type = account.isPrimary;
    group[type] = group[type] ?? [];
    group[type].push(account);
    return group;
  }, {});
  console.log(groupsByAccount);
  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <Layout
        className="mb-12px"
        body={
          <>
            <div>Total Balance</div>
            <div>{primary.balanceTotal}</div>
            <div>{primary.pubKey}</div>

            <Table>
              <Table.Header> test header</Table.Header>

              {wallets.map((wallet) => (
                <Body
                  key={_.uniqueId("wallet-")}
                  onClick={() => onWalletClick(wallet)}
                  wallet={wallet.wallet}
                  permissions={wallet.permissions}
                  cryptoType={wallet.cryptoType}
                  balanceCr={wallet.balanceCr}
                  avatar={wallet.avatar}
                  nickname={wallet.nickname}
                  pubkey={wallet.pubkey}
                />
              ))}
            </Table>
          </>
        }
      ></Layout>
    </>
  );
};
