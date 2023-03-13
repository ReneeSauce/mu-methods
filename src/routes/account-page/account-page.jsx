import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  /* --------------------------------- consts --------------------------------- */
  const navigate = useNavigate();
  /* ------------------------------- use states ------------------------------- */
  //updates SW, form data and seedPhrases for context
  const [SW, setSW] = useState();
  const [prevStep, setPrevStep] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  /* -------------------------------- functions ------------------------------- */
  //do something on stepchange
  const onStepChange = (stats) => {
    setPrevStep(stats.previousStep);
  };

  const setInstance = (sw) => {
    setSW(sw);
  };

  //step wizard navigation by nameed step
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
    console.log("save wallet permissions and data here");
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
        onBackClick={() => navigate("/db")} //return to dashboard outside of wizard
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
