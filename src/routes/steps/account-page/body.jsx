import { Table } from "../../../components";
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
        <Table className="mb-16px">
          <Table.Header>DEC 07 (today)</Table.Header>
          <TsxCrypto></TsxCrypto>
        </Table>
        <Table>
          <Table.Header>DEC 06</Table.Header>
          <TsxNft></TsxNft>
          <TsxNft></TsxNft>
        </Table>
      </div>
    </>
  );
};
