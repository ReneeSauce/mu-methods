import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { Header } from "../../../components/layout/header";
//TODO: Update buttons when available
//TODO: Check Font Weight on body - all other steps have 700 and this step in figma has 500
//TODO: write logic for pasted seed phrase to match seed phrase
//TODO: disable button until seed phrase matches

export function RepeatSeedPhrase({ onBackClick, onForwardClick }) {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Header.Left>
            <Button onClick={onBackClick}>**</Button>
          </Header.Left>
          <Header.Center>
            <Header.Title title="Sign up" />
            <Header.SubTitle subtitle=" Step 3/4" />
          </Header.Center>
        </>
      }
      body={
        <>
          <h4 className="pb-12px m-0 text-white text-opacity-90 fs-18px text-center">
            Repeat your seed phrase to make sure you've saved it
          </h4>
          <input id="input" className="mb-12px w-100"></input>

          <p className="fs-14px fw-normal mt-auto text-center lh-sm mb-0">
            Write down your seed phrase in a secure place. If you loose it
            without setting up peers to restore it, you'll loose access to your
            account forever
          </p>
        </>
      }
      footer={<Button onClick={onForwardClick}>Continue</Button>} //replace buton with step button
    ></Layout>
  );
}
