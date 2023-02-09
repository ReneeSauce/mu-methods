import StepBody from "./body";
import { Header } from "./header";
import StepContainer from "./container";
import StepFooter from "./footer";

//question how to add this to the index.js?

export function Step({ left, right, center, body, footer, title, subtitle }) {
  return (
    <StepContainer>
      <Header>
        <Header.Left>{left}</Header.Left>
        <Header.Center>
          {title && <Header.Title title={title} />}
          {subtitle && <Header.Title subtitle={subtitle} />}
          {center}
        </Header.Center>
        <Header.Right>{right}</Header.Right>
        <StepBody>{body}</StepBody>
        <StepFooter>{footer}</StepFooter>
      </Header>
    </StepContainer>
  );
}
