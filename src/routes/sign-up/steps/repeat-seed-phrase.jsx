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

export default function RepeatSeedPhrase(
  // title,
  // subTitle,
  // btnText,
  onBackClick,
  onForwardClick
) {
  return (
    <Step
      left={<Button onClick={onBackClick}>**</Button>} //replace button with icon button
      title="Sign up"
      subtitle=" Step 3/4"
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Continue</Button>} //replace buton with step button
    ></Step>
  );
}
