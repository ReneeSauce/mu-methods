import { Avatar } from "../avatar/avatar";
import FMolecule from "../icons/fMolecule";
/**
 * Wallet Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @coauthor [Jenny Doctor](https://github.com/jendoc)
 */

export const Wallet = ({
  src,
  alt,
  wallet,
  name,
  pubkey,
  cryptoType,
  balanceCr,
  balanceCu,
}) => {
  return (
    <>
      <div className="align-self-center">
        <Avatar shape="round" src={src} size="sm" alt={alt}></Avatar>
      </div>
      <div className="d-flex flex-column m-0 gap-8px w-75">
        <h3 className="text-white text-opacity-70 fs-10px lh-sm m-0 text-uppercase">
          {wallet}
        </h3>
        <div className="d-flex flex-row gap-8px align-items-center">
          <h3 className="m-0 fs-18px lh-sm">{name}</h3>
          <FMolecule />
        </div>
        <p className="m-0 fs-12px lh-sm fw-normal text-white text-opacity-70">
          {pubkey}
        </p>
      </div>
      <div className="d-flex flex-column m-0 gap-8px w-75 justify-content-end">
        <div className="d-flex gap-4px justify-content-end">
          <h3 className="m-0 fs-18px lh-sm align-self-end">{cryptoType}</h3>
          <h3 className="m-0 fs-18px lh-sm align-self-end">{balanceCr}</h3>
        </div>

        <p className="m-0 fs-12px lh-sm fw-normal text-white text-opacity-70 align-self-end">
          $ {balanceCu}
        </p>
      </div>
    </>
  );
};
