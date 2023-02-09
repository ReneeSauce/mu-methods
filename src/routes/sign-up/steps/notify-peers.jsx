import { Step } from "../../../components/step";
import { Button } from "../../../components/button/button";

//TO DO
//need to import and add correct buttons when they are created
//need to import and add corresponding form when it is created
//needs logic to call modal
//needs logic to disable/enable button - ?controlled by form validation?
//need to identify props
//QUESTIONS
//where should click handlers go in the tree
//is there a better way to structure or name header components
//should title and subtitle be passed with props or written in component
//should it be subTitle or subtitle
//btnText or btntext

export default function NotifyPeers(
  onBackClick,
  onForwardClick
) {
  return (
    <Step
  
      title="Sign up"
      subtitle=" Step 4/4"
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Finish Registration</Button>} //replace buton with step button
    ></Step>
  );
}
