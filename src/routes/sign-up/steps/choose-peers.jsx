import { Button, Layout } from "../../../components"; //button needs to be changed when avail

// export function ChoosePeers({ onBackClick, onForwardClick }) {
//   return (
//     <Step
//       left={<Button onClick={onBackClick}>**</Button>} //replace button with icon button
//       title="Sign up"
//       subtitle=" Step 3/4"
//       body="insert form component here"
//       footer={<Button onClick={onForwardClick}>Share seed phrase</Button>} //replace buton with step button
//     ></Step>
//   );
// }

//remove {} from step and step from step/step

export function ChoosePeers({ onBackClick, onForwardClick }) {
  return (
    <Layout //Layout and all props passed here
      header={
        <>
          <Step.Header.Left>
            <Button onClick={onBackClick}>**</Button>
          </Step.Header.Left>
          <Step.Header.Center>
            <Step.Header.Title title="Sign up" />
            <Step.Header.SubTitle subtitle="Step 3/4" />
          </Step.Header.Center>
        </>
      }
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Share seed phrase</Button>} //replace buton with step button
    ></Layout>
  );
}
