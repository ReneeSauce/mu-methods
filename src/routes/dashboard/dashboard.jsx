import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Pill, Table, Wallet } from "../../components";
import { AuthContext } from "../../contexts/auth-context";
import { TransactionContext } from "../../contexts/transaction-context";
import { UserContext } from "../../contexts/user-context";
// import { Body } from "./body";

/**
 * Dashboard Component
 * @author [Jenny Doctor](https://github.com/jendoc)
 * @co-author [K. Ehrenclou](https://github.com/kehrenclou)

 */

export const Dashboard = () => {
  /* --------------------------------- consts --------------------------------- */
  const userCtx = useContext(UserContext);
  const tsxCtx = useContext(TransactionContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  /* -------------------------------- useState -------------------------------- */
  const [wallets, setWallets] = useState([]);
  const [primary, setPrimary] = useState({});

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
    authCtx.updateIsNavVisible(false);
    navigate("/accountpage");
  }
  const handleAddAccountClick = () => {
    authCtx.updateIsNavVisible(false);
    navigate("/addaccount");
  };

  const handleReturnToHome = () => {
    authCtx.updateIsVisIsLogIn(false);
    navigate("/");
  };

  /* --------------------------------- return --------------------------------- */

  return (
    <Layout
      className="mb-0px"
      header={
        <>
          <Layout.Header.Left>
            <Button
              size="sm"
              leftIcon="mu"
              buttonKind="textOnly"
              onClick={handleReturnToHome}
            />
          </Layout.Header.Left>

          <Layout.Header.Right>
            <Button
              size="sm"
              rightIcon="add"
              className="m-0 p-0"
              buttonKind="tertiary"
              onClick={handleAddAccountClick}
            />
          </Layout.Header.Right>
        </>
      }
      body={
        <>
          <div className="gap-8px"></div>
          <Table.Header>total balance</Table.Header>
          <h1 className="fw-bold">{primary.balanceTotal}</h1>
          <div className="mb-32px">
            <Pill
              className="fs-14px fw-light me-8px"
              isCopiable
              opacity="10"
              shape="square"
              size="small"
              text={primary.pubkey}
              textOpacity="70"
            />
          </div>

          <Table>
            {wallets.map((wallet) => (
              <div key={_.uniqueId("wallet-")} className="mb-8px">
                {wallet.isPrimary === true && (
                  <>
                    <Table.Header>Primary Account</Table.Header>
                    <div type="button" onClick={() => onWalletClick(wallet)}>
                      <Table.Button>
                        <Wallet
                          alt="wallet avatar"
                          pubkey={wallet.pubkey}
                          name={wallet.nickname}
                          src={wallet.avatar}
                          wallet={wallet.wallet}
                          cryptoType={wallet.cryptoType}
                          balanceCr={wallet.balanceCr}
                          balanceCu={wallet.balanceCr * 125}
                          permissions={wallet.permissions}
                        />
                      </Table.Button>
                    </div>
                  </>
                )}
              </div>
            ))}
            <Table.Header> Linked Accounts</Table.Header>
            {wallets.map((wallet) => (
              <div key={_.uniqueId("wallet-")}>
                {wallet.isPrimary === false && (
                  <>
                    <div type="button" onClick={() => onWalletClick(wallet)}>
                      <Table.Cell>
                        <Wallet
                          alt="wallet avatar"
                          pubkey={wallet.pubkey}
                          name={wallet.nickname}
                          src={wallet.avatar}
                          wallet={wallet.wallet}
                          cryptoType={wallet.cryptoType}
                          balanceCr={wallet.balanceCr}
                          balanceCu={wallet.balanceCr * 125}
                          permissions={wallet.permissions}
                        />
                      </Table.Cell>
                    </div>
                  </>
                )}
              </div>
            ))}
          </Table>
        </>
      }
    ></Layout>
  );
};
