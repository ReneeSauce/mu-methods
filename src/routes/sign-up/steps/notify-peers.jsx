import { Button } from "../../../components/button/button";
import  Step from "../../../components/step";

export function NotifyPeers({ onForwardClick }) {
  return (
    <Step
      title="Sign up"
      subtitle=" Step 4/4"
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Finish Registration</Button>} //replace buton with step button
    ></Step>
  );
}
