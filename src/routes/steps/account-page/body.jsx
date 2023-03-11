import { useContext, useEffect, useState } from "react";
import { Table } from "../../../components";
import { UserContext } from "../../../contexts/user-context";
import { acctProfilePrimary, allTsxs } from "../../../utils/faker-data";
import { Account } from "./account";
import { Balance, TsxCrypto, TsxNft } from "./balance";
//TODO: make context with accountProfiles
//TODO: where should filtered go in - should this be a use effect on
//change in active account? - send the active account via context
/**
 * Body Component - used with AccountPage Component -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 */

export const Body = ({
  src,
  alt,
  name,
  // wallet,
  permissions,
  pillText,
  isCopiable,
}) => {
  /* --------------------------------- consts --------------------------------- */
  //set usercontext
  const { userProfile, setUserProfile } = useContext(UserContext);
  //trying to reduce array
  // const user = Object.keys(acctProfilePrimary).reduce((acc, val) => {
  //   acc.push(val);
  //   return acc;
  // }, []);
  // console.log(user);
  /* -------------------------------- useStates ------------------------------- */
  const [tsxs, setTsxs] = useState([]);
  const [dateGroups, setDateGroups] = useState([]);
  const [account, setAccount] = useState("");
  const [filter, setFilter] = useState("ETH");
  //set filter pressing button in dashboard
  //update filter to context? how to pass to this page to render
  /* ------------------------------- useEffects ------------------------------- */
  //set userprofile to context
  useEffect(() => {
    setUserProfile(acctProfilePrimary);
  }, []);
  // console.log(JSON.stringify(userProfile));
  console.log(Object.entries(userProfile));

  const user = JSON.stringify(userProfile);

  // console.log(user.acctWallet);
  //set all transactions
  useEffect(() => {
    setTsxs(allTsxs);
  }, []);

  useEffect(() => {
    setDateGroups(groupsByDate);
  }, [tsxs]);
  /* --------------------------------- consts --------------------------------- */
  //group transactions by date - passing filter & Nft is set
  //setting up filter for render - need to get "filter" passed through context
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
        src={src}
        alt={alt}
        name={name}
        wallet={userProfile.acctWallet}
        permissions={permissions}
        pillText={pillText}
        isCopiable={isCopiable}
      ></Account>
      <div className="w-100">
        <Balance></Balance>

        {Object.keys(dateGroups)
          .sort((dateA, dateB) => new Date(dateB) - new Date(dateA))
          .map((date, key) => (
            <div key={key}>
              <Table className="mb-16px">
                <Table.Header>
                  {date === currentDate ? `${date} (today)` : date}
                </Table.Header>

                {dateGroups[date]
                  .sort(
                    (dateA, dateB) =>
                      new Date(dateB.tsxDate) - new Date(dateA.tsxDate)
                  )
                  .map((tsx, id) => (
                    <div key={id}>
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
