import { Button, Layout } from "../../../components"; //button needs to be changed when avail

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

export function UserInfo({ onBackClick, onForwardClick }) {
  return (
    <Layout
      left={<Button onClick={onBackClick}>**</Button>} //replace button with icon button
      title="Sign up"
      subtitle="Step 1/4"
      body="insert form component here"
      footer={<Button onClick={onForwardClick}>Continue</Button>} //replace buton with step button
    ></Layout>
  );
}

//this is composition way - keeping incase we don't use step component
// export default function UserInfo(
//   title,
//   subTitle,
//   btnText,
//   onBackClick,
//   onForwardClick
// ) {
//   <Step.Container>
//     <Step.Header>
//       <Step.Header.Left>
//         {/* insert back button here with onClick={onBackClick}*/}
//       </Step.Header.Left>
//       <Step.Header.Center>
//         <Step.Header.Title title={title}></Step.Header.Title>
//         <Step.Header.SubTitle subtitle={subTitle}></Step.Header.SubTitle>
//       </Step.Header.Center>
//     </Step.Header>
//     <Step.Body>{/* insert form comopnent here */}</Step.Body>
//     <Step.Footer>
//       <Button onClick={onForwardClick}>{btnText}</Button>
//     </Step.Footer>
//   </Step.Container>;
// }
