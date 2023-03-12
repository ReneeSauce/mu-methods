import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { Table } from "../../../components";
import { UserContext } from "../../../contexts/user-context";
import { primaryProfile } from "../../../utils"; //primary profile data
import { allTsxs } from "../../../utils/faker-data"; //all transaction data
import { Account } from "./account";
import { Balance, TsxCrypto, TsxNft } from "./cells";
//TODO: make context work right
//TODO: set up SDK to fetch data

/**
 * Body Component - used with AccountPage Component -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 */

export const Body = ({ isCopiable }) => {
  /* --------------------------------- consts --------------------------------- */
  //set usercontext
  const { state, updatePrimaryAcct, updateWalletProfiles, updateAllTsxs } =
    useContext(UserContext);

  /* -------------------------------- useStates ------------------------------- */
  const [tsxs, setTsxs] = useState([allTsxs]); //set transactions from file
  const [dateGroups, setDateGroups] = useState([]); //used to group tsx by date
  const [account, setAccount] = useState([]); //set account data to primary fake data
  const [filter, setFilter] = useState("ETH"); //
  const [isLoading, setIsLoading] = useState(true);

  /* ------------------------------- useEffects ------------------------------- */
  //set account rendered to primary account(not currently grabbed from context)
  useEffect(() => {
    setAccount(primaryProfile);
  }, []);

  //set all transactions - grabbed from file not context
  useEffect(() => {
    setTsxs(allTsxs);
    // updateAllTsxs(allTsxs);
  }, []);

  //group data by date for table
  useEffect(() => {
    setDateGroups(groupsByDate);
  }, [tsxs]);

  useEffect(() => {
    /*setaccountInfo({})*/
    setIsLoading(false);
  }, []);

  /* --------------------------------- consts --------------------------------- */
  //group transactions by date - passing filter & Nft is set
  //setting up filter for render -
  //TODO:need to get "filter" passed through context

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
