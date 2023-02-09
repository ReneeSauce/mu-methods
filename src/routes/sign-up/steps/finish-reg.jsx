import { Step } from "../../../components/step";
import { Button } from "../../../components/button/button";//button needs to be updated when it is available

export default function FinishReg(onForwardClick) {
  return (
    <Step
      title="We've sent a link to your email to finish your registration process"
      footer={<Button onClick={onForwardClick}>Open email app</Button>} //replace buton with step button
    ></Step>
  );
}
