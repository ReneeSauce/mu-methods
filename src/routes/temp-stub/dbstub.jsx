//temp file to test user context
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { Layout, Table } from "../../components";
import { UserContext } from "../../contexts/user-context";
import { walletProfiles } from "../../utils/wallet-profiles";
import { Body } from "./body";

export const DbStub = () => {
  /* --------------------------------- consts --------------------------------- */
  //set usercontext
  const { state, updatePrimaryAcct, updateWalletProfiles, updateAllTsxs } =
    useContext(UserContext);
  /* -------------------------------- useState -------------------------------- */
  const [wallets, setWallets] = useState([]);
  console.log("db", state);
  /* -------------------------------- useEffect ------------------------------- */
  useEffect(() => {
    setWallets(walletProfiles);
  }, []);

  /* -------------------------------- functions ------------------------------- */
  function onWalletClick(wallet) {
    console.log(wallet);
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
