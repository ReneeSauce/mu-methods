import Body from "./body";
import Container from "./container";
import Footer from "./footer";
import Header from "./header";

//question how to add this to the index.js?

export const Layout = ({ header, body, footer }) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Body>{body}</Body>
      <Footer>{footer}</Footer>
    </Container>
  );
};
