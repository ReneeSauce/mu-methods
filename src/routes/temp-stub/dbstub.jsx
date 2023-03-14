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
  console.log("user", userCtx);
  console.log("tsxCtx", tsxCtx);

  /* -------------------------------- useState -------------------------------- */
  const [wallets, setWallets] = useState([]);
  const [primary, setPrimary] = useState({});
  const [acctGroups, setAcctGroups] = useState([]);

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

  //set groups by account type
  useEffect(() => {
    setAcctGroups(groupsByAccount);
  }, []);
  /* -------------------------------- functions ------------------------------- */
  function onWalletClick(wallet) {
    //updates user context with active wallet from button click
    //active wallet is used to populate account page (next step)
    //updates, activeWallet,activeFilter,activePermissions
    userCtx.updateActiveWallet(wallet);

    navigate("/accountpage");
  }
  const handleAddAccountClick = () => {
    navigate("/addaccount");
  };
  //not working
  const groupsByAccount = wallets.reduce((group, account) => {
    const type = account.isPrimary;
    group[type] = group[type] ?? [];
    group[type].push(account);
    return group;
  }, {});

  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <Layout
        className="mb-12px"
        body={
          <>
            <button onClick={handleAddAccountClick}></button>
            <div>Total Balance</div>
            <div>{primary.balanceTotal}</div>
            <div>{primary.pubKey}</div>

            <Table>
              {wallets.map((wallet) => (
                <Table key={_.uniqueId("wallet-")}>
                  {wallet.isPrimary === true && (
                    <>
                      <Table.Header> Primary Account</Table.Header>
                      <Body
                        onClick={() => onWalletClick(wallet)}
                        wallet={wallet.wallet}
                        permissions={wallet.permissions}
                        cryptoType={wallet.cryptoType}
                        balanceCr={wallet.balanceCr}
                        avatar={wallet.avatar}
                        nickname={wallet.nickname}
                        pubkey={wallet.pubkey}
                      />
                    </>
                  )}
                </Table>
              ))}
              <Table.Header> Linked Accounts</Table.Header>
              {wallets.map((wallet) => (
                <Table key={_.uniqueId("wallet-")}>
                  {wallet.isPrimary === false && (
                    <>
                      <Body
                        onClick={() => onWalletClick(wallet)}
                        wallet={wallet.wallet}
                        permissions={wallet.permissions}
                        cryptoType={wallet.cryptoType}
                        balanceCr={wallet.balanceCr}
                        avatar={wallet.avatar}
                        nickname={wallet.nickname}
                        pubkey={wallet.pubkey}
                      />
                    </>
                  )}
                </Table>
              ))}
            </Table>
          </>
        }
      ></Layout>
    </>
  );
};
