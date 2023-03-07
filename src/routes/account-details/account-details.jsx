import { useCallback, useMemo, useState } from "react";
import StepWizard from "react-step-wizard";
import { WizardContext } from "../../contexts/wizard-context";
import { Steps } from "../steps";

//TODO: update state useState with appropriate items
/* -------------------------------------------------------------------------- */
/*                         Account-Details Wizard                             */
/* -------------------------------------------------------------------------- */
export const AccountDetails = () => {
  /* ------------------------------- use states ------------------------------- */
  //updates SW, form data and seedPhrases for context
  const [SW, setSW] = useState();
  const [prevStep, setPrevStep] = useState("");
  const [state, updateState] = useState({
    seedPhrases: [],
    accountData: {},
  });

  //isOpen for Modal
  const [isOpen, setIsOpen] = useState(false);
  /* ------------------------------ use Callbacks ----------------------------- */
  const updateSeedPhrases = useCallback(
    (value) => {
      updateState({
        ...state,
        seedPhrases: value,
      });
    },
    [state]
  );
  const updateAccountData = useCallback(
    (accountData) => {
      updateState({
        ...state,
        accountData,
      });
    },
    [state]
  );
  /* -------------------------------- use Memo -------------------------------- */

  const storeValue = useMemo(() => {
    return {
      state,

      updateSeedPhrases,
      updateAccountData,
    };
  }, [state, updateSeedPhrases, updateAccountData]);
  /* -------------------------------- functions ------------------------------- */
  //do something on stepchange
  const onStepChange = (stats) => {
    console.log(state); //for presentation? - to show state being captured
    console.log(state.seedPhrases); //for presentation to show seedphrase capture

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
  // for debugging to visualize steps
  // const handleForwardClick = (nextStep) => {
  //   console.log(nextStep);
  // };
  // const handleBackClick = () => {
  //   console.log(nextStep);
  // };
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
    <WizardContext.Provider value={storeValue}>
      <StepWizard
        onStepChange={onStepChange}
        instance={setInstance}
        transitions={custom}
      >
        {/* steps go here with sw */}
        <Steps.AccountSummary
          stepName="account-summary"
          onForwardClick={goTo("account-settings")}
          onBackClick={handleReturnToDashboard}
        ></Steps.AccountSummary>

        <Steps.AccountSettings
          stepName="account-settings"
          onForwardClick={goTo("account-permissions")}
          onBackClick={goTo("account-summary")}
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
    </WizardContext.Provider>
  );
};
