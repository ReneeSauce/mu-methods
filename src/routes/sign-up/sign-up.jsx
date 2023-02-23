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
export function SignUp() {
  /* ------------------------------- use states ------------------------------- */
  //updates context?
  const [text, setText] = useState([]);
  const [state, updateState] = useState({
    form: {},
    seedPhrases: [1, 2],
  });

  const [isOpen, setIsOpen] = useState(false);

  /* ------------------------------ use Callbacks ----------------------------- */
  const updateForm = useCallback(
    (key, value) => {
      const { form } = state;
      form[key] = value;
      updateState({
        ...state,
        form,
      });
      console.log(state);
    },
    [state]
  );
  const updateSeedPhrases = useCallback(
    (key, value) => {
      const { seedPhrases } = state;
      seedPhrases[key] = value;
      updateState({
        ...state,
        seedPhrases,
      });
    },
    [state]
  );
  // const updateSeedPhrases = (seedPhrases) =>{
  //   updateState({ ...state, seedPhrases });
  //   console.log(state);}
  //   const { seedPhrases } = state;

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
    console.log(stats);
    console.log(state);
  };

  const setInstance = (SW) => updateState({ ...state, SW });
  const { SW } = state;

  function goTo(step) {
    return () => SW.goToNamedStep(step);
  }
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
    setIsOpen(true);
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
        {/* <SignupForm></SignupForm> */}
        <Steps.UserInfo
          stepName="user-info"
          SW={SW}
          onForwardClick={goTo("seed-phrase")}
          onBackClick={goTo("user-info")}
        ></Steps.UserInfo>

        <Steps.SeedPhrase
          stepName="seed-phrase"
          SW={SW}
          onForwardClick={handleSaveSeedPhraseClick} //needs logic to open modal here
          onBackClick={goTo("user-info")}
          onSkipStepClick={goTo("repeat-seed-phrase")}
          onStoreWithPeersClick={goTo("choose-peers")}
          isOpen={isOpen}
          onClose={onClose}
          text={text}
          setText={setText}
        ></Steps.SeedPhrase>

        <Steps.RepeatSeedPhrase
          stepName="repeat-seed-phrase"
          SW={SW}
          onForwardClick={goTo("finish-reg")}
          onBackClick={goTo("modal-stub")}
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
          onForwardClick={() => alert("Need code to open email app")} //need logic here to open email app
        ></Steps.FinishReg>
      </StepWizard>
    </WizardContext.Provider>
  );
}
// export default SignUp;
