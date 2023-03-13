export const Body = ({
  wallet,
  permissions,
  cryptoType,
  balanceCr,
  avatar,
  nickname,
  pubkey,
  onClick,
}) => {
  return (
    <>
      <button
        className="rounded m-12px bg-white bg-opacity-10"
        onClick={onClick}
      >
        <div>{wallet}</div>
        <div>{permissions}</div>
        <div>{cryptoType}</div>
        <div>{balanceCr}</div>
        <div>{balanceCr * 125}</div>
        <div>{avatar}</div>
        <div>{nickname}</div>
        <div>{pubkey}</div>
      </button>
    </>
  );
};
