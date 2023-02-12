import { Button } from "../../../components/button/button";
import Step from "../../../components/step";

export function ChoosePeers({ onBackClick, onForwardClick }) {
  return (
    <Step
      left={<Button onClick={onBackClick}>**</Button>} //replace button with icon button
      title="Sign up"
      subtitle=" Step 3/4"
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Share seed phrase</Button>} //replace buton with step button
    ></Step>
  );
}

//remove {} from step and step from step/step
