import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Pill, Table, Wallet } from "../../components";
import { TransactionContext } from "../../contexts/transaction-context";
import { UserContext } from "../../contexts/user-context";
// import { Body } from "./body";

/**
 * Dashboard Component
 * @author [Jenny Doctor](https://github.com/jendoc)

 */

export const Dashboard = () => {
  /* --------------------------------- consts --------------------------------- */
  const userCtx = useContext(UserContext);
  const tsxCtx = useContext(TransactionContext);
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
    navigate("/accountpage");
  }
  const handleAddAccountClick = () => {
    navigate("/addaccount");
  };

  const handleReturnToHome = () => {
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
                        />
                      </Table.Cell>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* <Table.Cell>
              <Wallet
                alt="wallet avatar"
                id={"1234567"}
                name="MyMetamaskAkk"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WkTt5462C95lYurbWL1ic0jtmW9UOGxlB-cFd3A3Dm8U8UFTELI-jNqmx-c-HlGd8NA&usqp=CAU"
                wallet="METAMASK"
                currency="ETH 0.80"
                amount="$ 1,000"
              />
            </Table.Cell>

            <div className="mt-32px"></div>
            <Table.Header>Linked Accounts</Table.Header>
            <Table.Cell>
              <Wallet
                alt="wallet avatar"
                id="1234567"
                name="SolanaAkk"
                src="https://s3-alpha.figma.com/hub/file/2204229748/ad1d22a9-445a-4a9d-8ad2-117c2ae9a299-cover.png"
                wallet="solana"
                currency="SOL 532"
                amount="$ 137.24"
              />
            </Table.Cell>
            <Table.Cell>
              <Wallet
                alt="wallet avatar"
                id="1234567"
                name="PolygonAkk"
                src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/DPYBKVZG55EWFHIK2TVT3HTH7Y.png"
                wallet="polygon"
                currency="MATIC 232"
                amount="$ 206.48"
              />
            </Table.Cell> */}
          </Table>
        </>
      }
    ></Layout>
  );
};
