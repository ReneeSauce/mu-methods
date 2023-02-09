import { Step } from "../../../components/step";
import { Button } from "../../../components/button/button";

export default function ChoosePeers(onBackClick, onForwardClick) {
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
