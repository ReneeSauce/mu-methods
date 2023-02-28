//connect-wallet-confirm-body
import { Notification } from "../../../../components";

//TODO: need notification \reconfic for account or new reusable component
//TODO: need placeholde for qr code --?**sdk will generate?
//TODO: need logic to set is confirmed to true - use state
//TODO: way to trigger setIsConfirmed to true
//TODO: logic to go to next step when isConfirmed = true
//TODO: send is confirmed to usercontext

/**
 * Body Component - used with Connect-Wallet Confirm Component-
 * @author [K. Ehrenclou](https://github.com/kehrenclou)


 *
 */

export const Body = () => {
  return (
    <>
      <h4 className="pb-12px m-0 text-white text-opacity-90 fs-24px text-center">
        Confirm your account
      </h4>
      <div>
        bring in account here from the scan/sdk - do we need a new component for
        account or make notification have more reusablitity
      </div>

      <Notification
        src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        status="read"
        summary="MyMetamaskAkk"
        title="METAMASK"
        className="w-100"
      ></Notification>

      <div>
        this will have a qr code in it - where does qr code come from? is it
        generated from the account or is it generated from the sdk? image box
      </div>
    </>
  );
};
