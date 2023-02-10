import { Button } from "../../../components/button/button"; //button needs to be updated when it is available
import Step from "../../../components/step";

export function FinishReg({ onForwardClick }) {
  return (
    <Step
      title="We've sent a link to your email to finish your registration process"
      footer={<Button onClick={onForwardClick}>Open email app</Button>} //replace buton with step button
    ></Step>
  );
}
