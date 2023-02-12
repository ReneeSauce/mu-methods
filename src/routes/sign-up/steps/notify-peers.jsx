import { Button, Layout } from "../../../components"; //button needs to be changed when avail

export function NotifyPeers({ onForwardClick }) {
  return (
    <Layout
      title="Sign up"
      subtitle=" Step 4/4"
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Finish Registration</Button>} //replace buton with step button
    ></Layout>
  );
}
