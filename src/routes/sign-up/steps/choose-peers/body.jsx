//body component for choose-peers.jsx

import { Button } from "../../../../components";
//TODO: As chosen peers increases, should the share seed phrase
//be position absoluted or travel to bottom of peers list
//TODO: need to make the sizing of the layout flexible to screen size
export const Body = ({}) => {
  const handleFindPeers = () => {
    //open search screen form
    //from form it will add to chosen peers
    console.log("handleFindPeers");
  };
  return (
    <>
      <h4 className="pb-12px m-0 text-white text-opacity-90 fs-18px text-center">
        Choose minimum amount of peers needed to recover your account
      </h4>
      <div className="d-flex flex-column gap-32px w-100 mb-24px">
        <Button className="btn">Number of peers:</Button>
        <Button onClick={handleFindPeers}>Find peers by nickname</Button>
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
