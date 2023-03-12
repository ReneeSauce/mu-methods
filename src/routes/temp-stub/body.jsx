export const Body = ({ wallet, permissions, cryptoType, onClick }) => {
  return (
    <>
      <button
        className="rounded m-12px bg-white bg-opacity-10"
        onClick={onClick}
      >
        <div>{wallet}</div>
        <div>{permissions}</div>
        <div>{cryptoType}</div>
      </button>
    </>
  );
};
