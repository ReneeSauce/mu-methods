import Body from "./body";
import Container from "./container";
import Footer from "./footer";
import Header from "./header";

//question how to add this to the index.js?

export const Layout = ({ header, body, footer, mb }) => {
  return (
    <Container>
      {header && <Header mb={mb}>{header}</Header>}
      <Body>{body}</Body>
      {footer && <Footer>{footer}</Footer>}
    </Container>
  );
};
