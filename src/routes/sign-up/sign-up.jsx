import React, { useCallback, useMemo, useState } from "react";
import StepWizard from "react-step-wizard";
import { Steps } from "./steps";

/* ----------------------------- Wizard Context ----------------------------- */
//context - does this need to go in a separate file
//does one context work for the entire app
export const WizardContext = React.createContext();

/* -------------------------------------------------------------------------- */
/*                               function SignUp                              */
/* -------------------------------------------------------------------------- */
export const SignUp = () => {
  /* ------------------------------- use states ------------------------------- */
  //updates SW, form data and seedPhrases for context
  const [SW, setSW] = useState();
  const [prevStep, setPrevStep] = useState("");
  const [state, updateState] = useState({
    form: {},
    seedPhrases: [],
  });

  //isOpen for Modal
  const [isOpen, setIsOpen] = useState(false);

  //isVisible for copied alert in Seed-Phrase.jsx
  const [isVisible, setIsVisible] = useState(false);

  /* ------------------------------ use Callbacks ----------------------------- */
  const updateForm = useCallback(
    (key, value) => {
      const { form } = state;
      form[key] = value;
      updateState({
        ...state,
        form,
      });
    },
    [state]
  );
  const updateSeedPhrases = useCallback(
    (value) => {
      updateState({
        ...state,
        seedPhrases: value,
      });
    },
    [state]
  );

  /* --------------------------------- useMemo -------------------------------- */
  const storeValue = useMemo(() => {
    return {
      state,
      updateForm,
      updateSeedPhrases,
    };
  }, [state, updateForm, updateSeedPhrases]);

  /* -------------------------------- functions ------------------------------- */
  //do something on stepchange
  const onStepChange = (stats) => {
    // console.log(stats);
    // console.log(state);
    // console.log(stats.previousStep);
    // setPrevStep(stats.previousStep);
    // // console.log(SW);
    // console.log(users)
  };

  // const setInstance = (SW) => updateState({ ...state, SW });
  // const { SW } = state;
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
  const handleForwardClick = (nextStep) => {
    console.log(nextStep);
  };
  const handleBackClick = () => {
    console.log(nextStep);
  };
  const handleSaveSeedPhraseClick = () => {
    setIsVisible(false);
    setIsOpen(true);
  };
  const handleSkipStepClick = () => {
    SW.goToNamedStep("repeat-seed-phrase");
    setIsOpen(false);
  };
  const handleEnterKey = () => {
    console.log("needs keyboard to open to handle public key manually");
    alert("needs keyboard to open to handle public key manually");
  };
  const handleOpenEmailApp = () => {
    //open email app - how does this work
    //create and save a token to local storage
    //send token to user's email - does this make more sense to put in next to last step?
    //on return from email, oath flow to logged in route
    console.log("open email app,");
    // window.location = "mailto:yourmail@domain.com";//opens a new email not the app
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
        {/* test entry point here */}
        <Steps.EntryPoint
          stepName="entry-point"
          SW={SW}
          onLoginClick={goTo("user-info")}
          onSignUpClick={goTo("user-info")}
          onConnectWalletClick={goTo("connect-scan")}
        ></Steps.EntryPoint>

        <Steps.ConnectWalletScan
          stepName="connect-scan"
          SW={SW}
          onEnterKey={handleEnterKey}
          onForwardClick={goTo("connect-confirm")}
          onBackClick={goTo("entry-point")}
        ></Steps.ConnectWalletScan>

        <Steps.ConnectWalletConfirm
          stepName="connect-confirm"
          SW={SW}
          onForwardClick={goTo("connect-permissions")}
          onBackClick={goTo("connect-scan")}
        ></Steps.ConnectWalletConfirm>

        <Steps.ConnectWalletPermissions
          stepName="connect-permissions"
          SW={SW}
          onForwardClick={goTo("seed-phrase")}
          onBackClick={goTo("connect-confirm")}
        ></Steps.ConnectWalletPermissions>

        <Steps.UserInfo
          stepName="user-info"
          SW={SW}
          onForwardClick={goTo("seed-phrase")}
          onBackClick={goTo("entry-point")}
        ></Steps.UserInfo>

        <Steps.SeedPhrase
          stepName="seed-phrase"
          SW={SW}
          onForwardClick={handleSaveSeedPhraseClick}
          onBackClick={() => SW.goToStep(prevStep)}
          // onBackClick={goTo("user-info")}
          onSkipStepClick={handleSkipStepClick}
          onStoreWithPeersClick={goTo("choose-peers")}
          isOpen={isOpen}
          onClose={onClose}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        ></Steps.SeedPhrase>

        <Steps.RepeatSeedPhrase
          stepName="repeat-seed-phrase"
          SW={SW}
          onForwardClick={goTo("finish-reg")}
          onBackClick={goTo("seed-phrase")}
        ></Steps.RepeatSeedPhrase>
        <Steps.ChoosePeers
          stepName="choose-peers"
          SW={SW}
          onForwardClick={goTo("notify-peers")}
          onBackClick={goTo("modal-stub")}
        ></Steps.ChoosePeers>
        <Steps.NotifyPeers
          stepName="notify-peers"
          SW={SW}
          onForwardClick={goTo("finish-reg")}
        ></Steps.NotifyPeers>
        <Steps.FinishReg
          stepName="finish-reg"
          SW={SW}
          onForwardClick={handleOpenEmailApp} //need logic here to open email app
        ></Steps.FinishReg>
      </StepWizard>
    </WizardContext.Provider>
  );
};
