import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import Header from "../../../components/layout/header";
//TO DO
//need to import and add correct buttons when they are created
//need to import and add corresponding form when it is created
//needs logic to call modal
//needs logic to disable/enable button - ?controlled by form validation?
//need to identify props
//QUESTIONS
//where should click handlers go in the tree
//how to implement Layout.Header.Left, etc namespacing - it crashed app.

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
