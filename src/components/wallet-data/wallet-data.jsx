import { Avatar } from "../avatar/avatar";
/**
 * Account Info Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 */

export const WalletData = ({ src, alt, wallet, name, id }) => {
  return (
    <>
      <div className="d-flex w-100 bg-beta gap-12px rounded p-12px">
        <Avatar shape="round" src={src} size="sm" alt={alt}></Avatar>
        <div className="d-flex flex-column m-0 gap-8px w-75">
          <h3 className="text-white text-opacity-70 fs-10px lh-sm m-0 text-uppercase">
            {wallet}
          </h3>
          <h3 className=" m-0 fs-18px fw-bold lh-sm">{name}</h3>
          <p className=" m-0 fs-16px lh-sm fw-normal text-white text-opacity-70 text-truncate">
            {id}
          </p>
        </div>
      </div>
    </>
  );
};
