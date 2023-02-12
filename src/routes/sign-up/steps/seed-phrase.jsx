import { Button } from "../../../components/button/button";
import Step from "../../../components/step";

export function SeedPhrase({ onBackClick, onForwardClick }) {
  return (
    <Step
      left={<Button onClick={onBackClick}>**</Button>} //replace button with icon button
      title="Sign up"
      subtitle=" Step 2/4"
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Continue</Button>} //replace buton with step button
    ></Step>
  );
}
