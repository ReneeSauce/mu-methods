import { useCallback, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import StepWizard from "react-step-wizard";
import { AuthContext } from "../../contexts/auth-context";
import { WizardContext } from "../../contexts/wizard-context";
import { Steps } from "../steps";

//TODO: update state useState with appropriate items
//TODO: combine with account-page and dashboard into one route
//TODO: logic for handleAddWallet button at end of flow -
/* -------------------------------------------------------------------------- */
/*                               AccountPage Wizard                           */
/* -------------------------------------------------------------------------- */
/**
 * AddAccount  Wizard - used for /addaccount route 
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 */

export const AddAccount = () => {
  /* --------------------------------- consts --------------------------------- */
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
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
    // console.log(state); //for presentation? - to show state being captured
    // console.log(state.seedPhrases); //for presentation to show seedphrase capture

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
    authCtx.updateIsNavVisible(true);
    navigate("/dashboard");
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
          onBackClick={handleReturnToDashboard}
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
