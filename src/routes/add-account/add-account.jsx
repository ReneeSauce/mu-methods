import { useCallback, useMemo, useState } from "react";
import StepWizard from "react-step-wizard";
import { WizardContext } from "../../contexts/wizard-context";

//TODO: update state useState with appropriate items
/* -------------------------------------------------------------------------- */
/*                             Add-Account Wizard                             */
/* -------------------------------------------------------------------------- */
export const AddAccount = () => {
  /* ------------------------------- use states ------------------------------- */
  //updates SW, form data and seedPhrases for context
  const [SW, setSW] = useState();
  const [prevStep, setPrevStep] = useState("");
  const [state, updateState] = useState({
    form: {},
    seedPhrases: [],
    accountData: {},
  });

  /* ------------------------------ use Callbacks ----------------------------- */

  /* -------------------------------- use Memo -------------------------------- */
  const storeValue = useMemo(() => {
    return {
      state,
      updateForm,
      updateSeedPhrases,
      updateAccountData,
    };
  }, [state, updateForm, updateSeedPhrases, updateAccountData]);

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
  /* -------------------------------- handlers -------------------------------- */
  // for debugging to visualize steps
  // const handleForwardClick = (nextStep) => {
  //   console.log(nextStep);
  // };
  // const handleBackClick = () => {
  //   console.log(nextStep);
  // };

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
      </StepWizard>
    </WizardContext.Provider>
  );
};
