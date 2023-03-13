import { useCallback, useMemo, useState } from "react";
import StepWizard from "react-step-wizard";
import { WizardContext } from "../../contexts/wizard-context";
import { Steps } from "../steps";

//TODO: update state useState with appropriate items
//TODO: combine with account-page and dashboard into one route

/* -------------------------------------------------------------------------- */
/*                               AccountPage Wizard                           */
/* -------------------------------------------------------------------------- */
/**
 * AddAccount  Wizard - used for /addaccount route 
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 */

export const AddAccount = () => {
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
        <Steps.WalletScan
          stepName="wallet-scan"
          SW={SW}
          onForwardClick={goTo("wallet-confirm")}
          onBackClick={handleReturnToDashboard} //somehow will need to get this to go to dashboard
          title="Adding account"
          subtitle="Step 1/3"
        ></Steps.WalletScan>

        <Steps.WalletConfirm
          stepName="wallet-confirm"
          SW={SW}
          onForwardClick={goTo("wallet-permissions")}
          onBackClick={goTo("wallet-scan")}
          title="Adding account"
          subtitle="Step 2/3"
        ></Steps.WalletConfirm>

        <Steps.WalletPermissions
          stepName="wallet-permissions"
          SW={SW}
          onForwardClick={handleAddWallet}
          onBackClick={goTo("wallet-confirm")}
          isOpen={isOpen}
          onClose={onClose}
          title="Adding Account"
          subtitle="Step 3/3"
          btnText="Add Account"
        ></Steps.WalletPermissions>
      </StepWizard>
    </WizardContext.Provider>
  );
};
