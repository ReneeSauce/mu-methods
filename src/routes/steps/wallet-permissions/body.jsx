//connect-wallet-permissions

//TODO: Continue button will need to send
//permissions selection from the radio buttons to the sdk
//TODO: send selections up to connect-wallet-permissions component
//or move body to the component /composition
//From here continue will go to signin step to choose seeds

/**
 * Body Component - used with Connect-Wallet Permissions Component -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 *
 */

export const Body = () => {
  return (
    <>
      <h4 className="pb-12px m-0 text-white text-opacity-90 fs-24px text-center">
        Set account permissions
      </h4>
      <div>radio button forms</div>
    </>
  );
};
