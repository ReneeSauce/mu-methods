import { useCallback, useMemo, useState } from "react";
import StepWizard from "react-step-wizard";
import { WizardContext } from "../../contexts/wizard-context";
import { Steps } from "../steps";

//TODO: how to open email app//how to emulate flow in presentation
//TODO: handleOpenEmailApp should do the following
//1. create a token and save to local storage
//2. send to user email
//3. on return form email, oath flow to logged in route

/* -------------------------------------------------------------------------- */
/*                                SignUp Wizard                           */
/* -------------------------------------------------------------------------- */
/**
 * SignUp Wizard - used for /signup route
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 */

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
  // for debugging to visualize steps
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

  //open email app and token creation
  const handleOpenEmailApp = () => {
    console.log("open email app,");
    alert("open email app");
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
        <Steps.SignupEntryPoint
          stepName="entry-point"
          SW={SW}
          onLoginClick={goTo("log-in")}
          onSignUpClick={goTo("user-info")}
          onConnectWalletClick={goTo("wallet-scan")}
        ></Steps.SignupEntryPoint>

        <Steps.LogIn
          stepName="log-in"
          SW={SW}
          onLoginClick={handleLogInClick}
          onSignUpClick={goTo("user-info")}
          onBackClick={goTo("entry-point")}
          title="Log In"
        ></Steps.LogIn>

        <Steps.WalletScan
          stepName="wallet-scan"
          SW={SW}
          onForwardClick={goTo("wallet-confirm")}
          onBackClick={goTo("entry-point")}
          title="Connecting wallet"
          subtitle="Step 1/4"
        ></Steps.WalletScan>

        <Steps.WalletConfirm
          stepName="wallet-confirm"
          SW={SW}
          onForwardClick={goTo("wallet-permissions")}
          onBackClick={goTo("wallet-scan")}
          title="Connecting wallet"
          subtitle="Step 2/4"
        ></Steps.WalletConfirm>

        <Steps.WalletPermissions
          stepName="wallet-permissions"
          SW={SW}
          onForwardClick={handleConnectWallet}
          onBackClick={goTo("wallet-confirm")}
          onSkipStepClick={handleSkipStepClick}
          onStoreWithPeersClick={handleWithPeersClick}
          isOpen={isOpen}
          onClose={onClose}
          title="Connecting wallet"
          subtitle="Step 2/4"
          btnText="Continue"
        ></Steps.WalletPermissions>

        <Steps.UserInfo
          stepName="user-info"
          SW={SW}
          onForwardClick={goTo("seed-phrase")}
          onBackClick={goTo("entry-point")}
          title="Sign up"
          subtitle="Step 1/4"
        ></Steps.UserInfo>

        <Steps.SeedPhrase
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
        ></Steps.SeedPhrase>

        <Steps.RepeatSeedPhrase
          stepName="repeat-seed-phrase"
          SW={SW}
          onForwardClick={goTo("finish-reg")}
          onBackClick={() => SW.goToStep(prevStep)}
          title="Sign up"
          subtitle="Step 3/4"
        ></Steps.RepeatSeedPhrase>

        <Steps.ChoosePeers
          stepName="choose-peers"
          SW={SW}
          onForwardClick={goTo("notify-peers")}
          onBackClick={() => SW.goToStep(prevStep)}
          title="Sign up"
          subtitle="Step 3/4"
        ></Steps.ChoosePeers>

        <Steps.NotifyPeers
          stepName="notify-peers"
          SW={SW}
          onForwardClick={goTo("finish-reg")}
          title="Sign up"
          subtitle=" Step 4/4"
        ></Steps.NotifyPeers>

        <Steps.FinishReg
          stepName="finish-reg"
          SW={SW}
          onForwardClick={handleOpenEmailApp}
          title="We've sent a link to your email to finish your registration process"
        ></Steps.FinishReg>
      </StepWizard>
    </WizardContext.Provider>
  );
};
