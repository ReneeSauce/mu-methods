import { Account } from "./account";

/**
 * Body Component - used with AccountSummary Component -
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
      <div className="align-itmes-flex-start">
        <div className="mb-32px">Account Balance Here ?Table</div>
        <div className="mb-16px">table of today's transactions ?Table</div>
        <div className="mb-16px">table of yesterday's transactions</div>
        <div className="mb-16px">
          layout of the transactions differ not sure what is happening here
        </div>
      </div>
    </>
  );
};
