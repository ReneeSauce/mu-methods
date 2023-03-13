import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { Table } from "../../../components";
import { TransactionContext } from "../../../contexts/transaction-context";
import { UserContext } from "../../../contexts/user-context";
import { Account } from "./account";
import { Balance, TsxCrypto, TsxNft } from "./cells";

//TODO: make context work right
//TODO: set up logic to fetch SDK data
//TODO:need to get "filter" passed through context

/**
 * Body Component - used with AccountDetails Component -(Dashboard)
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 */

export const Body = ({ isCopiable }) => {
  /* --------------------------------- consts --------------------------------- */
  //set usercontext
  // const { state, updatePrimaryAcct, updateWalletProfiles, updateAllTsxs } =
  //   useContext(UserContext);
  const userCtx = useContext(UserContext);
  const tsxCtx = useContext(TransactionContext);

  /* -------------------------------- useStates ------------------------------- */
  const [tsxs, setTsxs] = useState([]); //set transactions from file
  const [dateGroups, setDateGroups] = useState([]); //used to group tsx by date
  const [account, setAccount] = useState([]); //set account data to primary fake data
  const [filter, setFilter] = useState(""); //
  const [isLoading, setIsLoading] = useState(true);

  /* ------------------------------- useEffects ------------------------------- */
  //set account locally from context - used to render
  useEffect(() => {
    // setAccount(primaryProfile);
    setAccount(userCtx.state.activeWallet);
  }, [userCtx.state]);

  useEffect(() => {
    setFilter(userCtx.state.activeFilter);
  }, [userCtx.state]);
  //set all transactions locally - grabbed from context
  useEffect(() => {
    setTsxs(tsxCtx.state.allTransactions);
  }, [tsxCtx.state]);

  //group data by date for table - uses locally set tsx
  useEffect(() => {
    setDateGroups(groupsByDate);
  }, [tsxs]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  /* --------------------------------- consts --------------------------------- */
  //group transactions by date - passing filter & Nft is set
  //setting up filter for render -

  const filtered = tsxs.filter(
    (x) => x.cryptoType === filter || x.cryptoType === "NFT"
  );

  //group tsx by date using filtered data
  const groupsByDate = filtered.reduce((group, tsx) => {
    const date = new Date(tsx.tsxDate).toLocaleDateString("default", {
      month: "long",
      day: "2-digit",
    });
    group[date] = group[date] ?? [];
    group[date].push(tsx);
    return group;
  }, {});

  // set current date
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "2-digit",
  });
  /* --------------------------------- return --------------------------------- */
  return (
    <>
      <div
        className="w-100 d-flex flex-column align-items-center"
        key={_.uniqueId("acct-")}
      >
        <Account
          src={account.avatar}
          alt={account.alt}
          name={account.nickname}
          wallet={account.wallet}
          permissions={account.permissions}
          pillText={account.pubKey}
          isCopiable={isCopiable}
          isLoading={isLoading}
        ></Account>
        <div className="w-100">
          <Balance
            ctype={account.cryptoType}
            balancecr={account.balanceCr}
            balancecu={account.balanceCr * 125}
          ></Balance>
        </div>
      </div>

      <div className="w-100">
        {Object.keys(dateGroups)
          .sort((dateA, dateB) => new Date(dateB) - new Date(dateA))
          .map((date) => (
            <div key={_.uniqueId("date-")}>
              <Table className="mb-16px">
                <Table.Header>
                  {date === currentDate ? `${date} (today)` : date}
                </Table.Header>

                {dateGroups[date]
                  .sort(
                    (dateA, dateB) =>
                      new Date(dateB.tsxDate) - new Date(dateA.tsxDate)
                  )
                  .map((tsx) => (
                    <div key={_.uniqueId("tsx-")}>
                      {tsx.cryptoType != "NFT" && (
                        <TsxCrypto
                          type={tsx.cryptoType}
                          tsxtype={tsx.tsxType}
                          amt={tsx.tsxAmtCrypto}
                          value={tsx.tsxAmtCrypto * 125}
                          balanceCr={tsx.tsxBalanceCrypto}
                          balanceCu={tsx.tsxBalanceCrypto * 125}
                        ></TsxCrypto>
                      )}
                      {tsx.cryptoType === "NFT" && (
                        <TsxNft
                          description={tsx.tsxDesc}
                          sender={tsx.tsxNameSender}
                          recipient={tsx.tsxNameRecipient}
                          img={tsx.tsxImg}
                          type={tsx.cryptoType}
                          tsxtype={tsx.tsxType}
                          senderkey={tsx.tsxKeySender}
                          recipientkey={tsx.tsxKeyRecipient}
                        ></TsxNft>
                      )}
                    </div>
                  ))}
              </Table>
            </div>
          ))}
      </div>
    </>
  );
};
