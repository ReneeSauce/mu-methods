//connect-wallet-confirm-body
import { Notification } from "../../../../components";
// TODO: need notification \reconfic for account or new reusable component
export const Body = () => {
  return (
    <>
      <h4 className="pb-12px m-0 text-white text-opacity-90 fs-24px text-center">
        Confirm your account
      </h4>
      <div>bring in account here from the scan/sdk</div>

      <Notification
        src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        status="read"
        summary="MyMetamaskAkk"
        title="METAMASK"
        className="w-100"
      ></Notification>

      <div>this will have a qr code in it ?image box</div>
    </>
  );
};
