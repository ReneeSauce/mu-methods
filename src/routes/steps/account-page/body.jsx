import { useEffect, useState } from "react";
import { Table } from "../../../components";
import { allTsxs } from "../../../utils/faker-data";
import { Account } from "./account";
import { Balance, TsxCrypto, TsxNft } from "./balance";

/**
 * Body Component - used with AccountPage Component -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 */

export const Body = ({
  src,
  alt,
  name,
  wallet,
  permissions,
  pillText,
  isCopiable,
}) => {
  /* -------------------------------- useStates ------------------------------- */
  const [tsxs, setTsxs] = useState([]);
  const [dateGroups, setDateGroups] = useState([]);

  /* ------------------------------- useEffects ------------------------------- */
  useEffect(() => {
    setTsxs(allTsxs);
  }, []);

  useEffect(() => {
    setDateGroups(groupsByDate);
  }, [tsxs]);
  /* --------------------------------- consts --------------------------------- */
  //group transactions by date
  const groupsByDate = tsxs.reduce((group, tsx) => {
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
        wallet={wallet}
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
                          description={tsx.acctTsxDesc}
                          sender={tsx.tsxNameSender}
                          recipient={tsx.tsxNameRecipient}
                          img={tsx.acctTsxImage}
                          type={tsx.cryptoType}
                          tsxtype={tsx.tsxType}
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
