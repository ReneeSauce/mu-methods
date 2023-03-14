//body component for choose-peers.jsx
//TODO: Add number of peers, find peers and chosen peers table
//TODO: Hook up buttons and form inputs for choosing peers
//TODO: Create logic to check array.length of peers to match number of peers
//TODO: Button disable/enable logic based on if #peers chosen
//TODO: As chosen peers increases, should the share seed phrase
//be position absoluted or travel to bottom of peers list
//per Josh - body part between choose and a piece... should scroll
//TODO: need to make the sizing of the layout flexible to screen size

/**
 * Body Component - used with Choose Peers Component -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onClick onClick prop to call handleFindPeers function
 */

export const Body = ({}) => {
  const handleFindPeers = () => {
    //open search screen form
    //from form it will add to chosen peers
    console.log("handleFindPeers logic here");
  };
  return (
    <>
      <h4 className="pb-12px m-0 text-white text-opacity-90 fs-18px text-center">
        Choose minimum amount of peers needed to recover your account
      </h4>
      <div className="d-flex flex-column gap-32px w-100 mb-24px">
        <input
          className="mt-auto rounded py-20px px-8px border-0 bg-beta fs-18px"
          placeholder=" Number of peers: " //may need styled components to style per figma
        ></input>
        <input
          className="mt-auto rounded py-20px px-8px border-0 bg-beta fs-18px"
          placeholder=" Find peers by nickname " //may need styled components to style per figma
        ></input>
      </div>
      <h4 className="pb-12px m-0 text-white text-opacity-90 fs-18px text-center">
        Chosen peers
      </h4>
      <p className="fs-14px fw-normal mt-auto text-center lh-sm mb-0">
        A piece of your private key is being shared and it can be read by the
        peer. This cannot be reversed. Make sure you choose peers that you
        trust.
      </p>
    </>
  );
};
