import { Button, Layout } from "../../../components"; //button needs to be changed when avail

export function SeedPhrase({ onBackClick, onForwardClick }) {
  return (
    <Layout
      left={<Button onClick={onBackClick}>**</Button>} //replace button with icon button
      title="Sign up"
      subtitle=" Step 2/4"
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Continue</Button>} //replace buton with step button
    ></Layout>
  );
}
