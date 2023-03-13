import { useCallback, useState } from "react";
import StepWizard from "react-step-wizard";
import { Steps } from "../steps";

//TODO: update state useState with appropriate items
//TODO: combine with addaccount wizard and dashboard into one route

/* -------------------------------------------------------------------------- */
/*                               AccountPage Wizard                           */
/* -------------------------------------------------------------------------- */
/**
 * AccountPage Wizard Wizard - used for /accountpage route 
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 */

export const AccountPage = () => {
  /* ------------------------------- use states ------------------------------- */
  //updates SW, form data and seedPhrases for context
  const [SW, setSW] = useState();
  const [prevStep, setPrevStep] = useState("");
  // const [state, updateState] = useState({
  //   seedPhrases: [],
  //   accountData: {},
  //   activeProfile: [],
  // });

  //isOpen for Modal
  const [isOpen, setIsOpen] = useState(false);
  /* ------------------------------ use Callbacks ----------------------------- */

  // const updateAccountData = useCallback(
  //   (accountData) => {
  //     updateState({
  //       ...state,
  //       accountData,
  //     });
  //   },
  //   [state]
  // );
  /* -------------------------------- use Memo -------------------------------- */

  // const storeValue = useMemo(() => {
  //   return {
  //     state,

  //     updateSeedPhrases,
  //     updateAccountData,
  //   };
  // }, [state, updateSeedPhrases, updateAccountData]);
  /* -------------------------------- functions ------------------------------- */
  //do something on stepchange
  const onStepChange = (stats) => {
    // console.log(state); //for presentation? - to show state being captured
    // console.log(state.allTsxs); //for presentation to show transactions capture

    setPrevStep(stats.previousStep);
  };

  const setInstance = (sw) => {
    setSW(sw);
  };

  const goTo = useCallback(
    (step) => {
      return () => SW.goToNamedStep(step);
    },
    [SW]
  );
  //close modal
  const onClose = () => {
    setIsOpen(false);
  };
  /* -------------------------------- handlers -------------------------------- */

  const handleAddWallet = () => {
    // setIsOpen(true);
    console.log("save wallet permissionsand data here");
    alert("save wallet permissions and data here");
  };

  const handleReturnToDashboard = () => {
    console.log("add logic here to return to dashboard");
  };

  const handleDisconnectClick = () => {
    console.log("DisconnectClick");
    setIsOpen(true);
  };

  const handleCancelClick = () => {
    console.log("Cancel Click");
    setIsOpen(false);
    //do other things - clear the phrase states?
  };
  /* --------------------------- animation controls --------------------------- */
  //to customize transitions from animate.css
  let custom = {};

  /* --------------------------------- return --------------------------------- */
  return (
    // <WizardContext.Provider value={storeValue}>

    <StepWizard
      onStepChange={onStepChange}
      instance={setInstance}
      transitions={custom}
    >
      {/* steps go here with sw */}
      {/* <Home stepName="home" onForwardClick={goTo("account-details")}></Home> */}
      <Steps.AccountDetails
        stepName="account-details"
        onForwardClick={goTo("account-settings")}
        onBackClick={goTo("accountsettings")}
      ></Steps.AccountDetails>

      <Steps.AccountSettings
        stepName="account-settings"
        onForwardClick={goTo("account-permissions")}
        onBackClick={goTo("account-details")}
        onDisconnectClick={handleDisconnectClick}
        title="Account settings"
        isOpen={isOpen}
        onClose={onClose}
        onCancel={handleCancelClick}
      ></Steps.AccountSettings>

      <Steps.AccountPermissions
        stepName="account-permissions"
        onBackClick={goTo("account-settings")}
        title="Account permissions"
      ></Steps.AccountPermissions>
    </StepWizard>
  );
};
