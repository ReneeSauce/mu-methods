import { Button } from "../../../components/button/button";
import Step from "../../../components/step";

export function RepeatSeedPhrase({ onBackClick, onForwardClick }) {
  return (
    <Step
      left={<Button onClick={onBackClick}>**</Button>} //replace button with icon button
      title="Sign up"
      subtitle=" Step 3/4"
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Continue</Button>} //replace buton with step button
    ></Step>
  );
}
