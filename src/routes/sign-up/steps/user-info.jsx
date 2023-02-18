import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { Header } from "../../../components/layout/header";

//TODO: Update buttons when available
//TODO: need to import and add corresponding form when it is created
//TODO: needs logic to call modal
//TODO: needs logic to disable/enable button - ?controlled by form validation?

//QUESTION: where should click handlers go in the tree

export function UserInfo({ onBackClick, onForwardClick }) {
  return (
    <Layout
      header={
        <>
          <Header.Left>
            <Button onClick={onBackClick}>**</Button>
          </Header.Left>
          <Header.Center>
            <Header.Title title="Sign up" />
            <Header.SubTitle subtitle="Step 1/4" />
          </Header.Center>{" "}
        </>
      }
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Continue</Button>} //replace buton with step button
    ></Layout>
  );
}
