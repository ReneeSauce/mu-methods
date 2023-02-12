import { Button, Layout } from "../../../components"; //button needs to be changed when avail

export function FinishReg({ onForwardClick }) {
  return (
    <Layout
      title="We've sent a link to your email to finish your registration process"
      footer={<Button onClick={onForwardClick}>Open email app</Button>} //replace buton with step button
    ></Layout>
  );
}
