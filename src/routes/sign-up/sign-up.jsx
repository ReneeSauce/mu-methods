import { useCallback, useMemo, useState } from "react";
import StepWizard from "react-step-wizard";
import { WizardContext } from "../../contexts/wizard-context";
import { Steps } from "../steps";
/* ----------------------------- Wizard Context ----------------------------- */
//context - does this need to go in a separate file
//does one context work for the entire app
// export const WizardContext = React.createContext();

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
    accountData: {},
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
  const updateAccountData = useCallback(
    (accountData) => {
      updateState({
        ...state,
        accountData,
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
      updateAccountData,
    };
  }, [state, updateForm, updateSeedPhrases, updateAccountData]);

  /* -------------------------------- functions ------------------------------- */
  //do something on stepchange
  const onStepChange = (stats) => {
    console.log(state);
    console.log(state.seedPhrases);
    // console.log(stats.previousStep);
    setPrevStep(stats.previousStep);
    // // console.log(SW);
    // console.log(account);
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

  const handleConnectWallet = () => {
    setIsOpen(true);
    console.log("save wallet data here");
    alert("save wallet info here");
  };
  const handleSkipStepClick = () => {
    SW.goToNamedStep("repeat-seed-phrase");
    setIsOpen(false);
  };
  const handleWithPeersClick = () => {
    SW.goToNamedStep("choose-peers");
    setIsOpen(false);
  };
  // const handleEnterKey = () => {
  //   console.log("open input form to enter key manually");
  //   console.log(state.accountData);
  //   alert("open input form to enter key manually");
  // };
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
          onForwardClick={handleConnectWallet}
          onBackClick={goTo("connect-confirm")}
          onSkipStepClick={handleSkipStepClick}
          onStoreWithPeersClick={handleWithPeersClick}
          isOpen={isOpen}
          onClose={onClose}
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
          onBackClick={goTo("user-info")}
          // onBackClick={goTo("user-info")}
          onSkipStepClick={handleSkipStepClick}
          onStoreWithPeersClick={handleWithPeersClick}
          isOpen={isOpen}
          onClose={onClose}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        ></Steps.SeedPhrase>

        <Steps.RepeatSeedPhrase
          stepName="repeat-seed-phrase"
          SW={SW}
          onForwardClick={goTo("finish-reg")}
          onBackClick={() => SW.goToStep(prevStep)}
        ></Steps.RepeatSeedPhrase>

        <Steps.ChoosePeers
          stepName="choose-peers"
          SW={SW}
          onForwardClick={goTo("notify-peers")}
          onBackClick={() => SW.goToStep(prevStep)}
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
