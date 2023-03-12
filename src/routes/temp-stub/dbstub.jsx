//temp file to test user context
import _ from "lodash";
import { useEffect, useState } from "react";
import { Layout, Table } from "../../components";
import { walletProfiles } from "../../utils/wallet-profiles";
import { Body } from "./body";

export const DbStub = () => {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    setWallets(walletProfiles);
  }, []);

  function onWalletClick(wallet) {
    console.log(wallet);
  }

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
