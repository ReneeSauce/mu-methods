import { Avatar } from "../avatar/avatar";
import FMolecule from "../icons/fMolecule";
/**
 * Wallet Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @coauthor [Jenny Doctor](https://github.com/jendoc)
 */

export const Wallet = ({ src, alt, wallet, name, id, currency, amount }) => {
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
        <p className="m-0 fs-12px lh-sm fw-normal text-white text-opacity-70 text-truncate">
          {id}
        </p>
      </div>
      <div className="d-flex flex-column m-0 gap-8px w-75 justify-content-end">
        <h3 className="m-0 fs-18px lh-sm align-self-end">{currency}</h3>
        <p className="m-0 fs-12px lh-sm fw-normal text-white text-opacity-70 align-self-end">
          {amount}
        </p>
      </div>
    </>
  );
};
