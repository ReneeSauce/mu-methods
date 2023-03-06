import { useCallback, useMemo, useState } from "react";
import StepWizard from "react-step-wizard";
import { WizardContext } from "../../contexts/wizard-context";
import { Steps } from "../steps";

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
  // for debugging to see steps
  // const handleForwardClick = (nextStep) => {
  //   console.log(nextStep);
  // };
  // const handleBackClick = () => {
  //   console.log(nextStep);
  // };

  const handleLogInClick = () => {
    console.log("Send Login Authentication Logic Here");
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

  const handleOpenEmailApp = () => {
    //open email app - how does this work
    //create and save a token to local storage
    //send token to user's email - does this make more sense to put in next to last step?
    //on return from email, oath flow to logged in route
    console.log("open email app,");
    alert("open email app");
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
        <Steps.EntryPoint
          stepName="entry-point"
          SW={SW}
          onLoginClick={goTo("log-in")}
          onSignUpClick={goTo("user-info")}
          onConnectWalletClick={goTo("connect-scan")}
        ></Steps.EntryPoint>

        {/* <Steps.LogIn
          stepName="log-in"
          SW={SW}
          onLoginClick={handleLogInClick}
          onSignUpClick={goTo("user-info")}
          onBackClick={goTo("entry-point")}
          title="Log In"
        ></Steps.LogIn> */}

        {/* <Steps.ConnectWalletScan
          stepName="connect-scan"
          SW={SW}
          onForwardClick={goTo("connect-confirm")}
          onBackClick={goTo("entry-point")}
          title="Connecting wallet"
          subtitle="Step 1/4"
        ></Steps.ConnectWalletScan> */}

        {/* <Steps.ConnectWalletConfirm
          stepName="connect-confirm"
          SW={SW}
          onForwardClick={goTo("connect-permissions")}
          onBackClick={goTo("connect-scan")}
          title="Connecting wallet"
          subtitle="Step 2/4"
        ></Steps.ConnectWalletConfirm> */}

        {/* <Steps.ConnectWalletPermissions
          stepName="connect-permissions"
          SW={SW}
          onForwardClick={handleConnectWallet}
          onBackClick={goTo("connect-confirm")}
          onSkipStepClick={handleSkipStepClick}
          onStoreWithPeersClick={handleWithPeersClick}
          isOpen={isOpen}
          onClose={onClose}
          title="Connecting wallet"
          subtitle="Step 2/4"
        ></Steps.ConnectWalletPermissions> */}

        {/* <Steps.UserInfo
          stepName="user-info"
          SW={SW}
          onForwardClick={goTo("seed-phrase")}
          onBackClick={goTo("entry-point")}
          title="Sign up"
          subtitle="Step 1/4"
        ></Steps.UserInfo> */}

        {/* <Steps.SeedPhrase
          stepName="seed-phrase"
          SW={SW}
          onForwardClick={handleSaveSeedPhraseClick}
          onBackClick={goTo("user-info")}
          onSkipStepClick={handleSkipStepClick}
          onStoreWithPeersClick={handleWithPeersClick}
          isOpen={isOpen}
          onClose={onClose}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          title="Sign up"
          subtitle="Step 2/4"
        ></Steps.SeedPhrase> */}

        {/* <Steps.RepeatSeedPhrase
          stepName="repeat-seed-phrase"
          SW={SW}
          onForwardClick={goTo("finish-reg")}
          onBackClick={() => SW.goToStep(prevStep)}
          title="Sign up"
          subtitle="Step 3/4"
        ></Steps.RepeatSeedPhrase> */}

        {/* <Steps.ChoosePeers
          stepName="choose-peers"
          SW={SW}
          onForwardClick={goTo("notify-peers")}
          onBackClick={() => SW.goToStep(prevStep)}
          title="Sign up"
          subtitle="Step 3/4"
        ></Steps.ChoosePeers> */}

        {/* <Steps.NotifyPeers
          stepName="notify-peers"
          SW={SW}
          onForwardClick={goTo("finish-reg")}
          title="Sign up"
          subtitle=" Step 4/4"
        ></Steps.NotifyPeers> */}

        {/* <Steps.FinishReg
          stepName="finish-reg"
          SW={SW}
          onForwardClick={handleOpenEmailApp} //need logic here to open email app
          title="We've sent a link to your email to finish your registration process"
        ></Steps.FinishReg> */}
      </StepWizard>
    </WizardContext.Provider>
  );
};
