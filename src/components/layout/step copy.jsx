import Body from "./body";
import Container from "./container";
import Footer from "./footer";
import Header from "./header";

//question how to add this to the index.js?
//rename this to be layout - folder layout
//
function Step({ left, right, center, body, footer, header, title, subtitle }) {
  return (
    <Container>
      <Header>
        {header}
        {/* //pass this stuff into to the step */}
        {/* <Header.Left>{left}</Header.Left>
        <Header.Center>
          {title && <Header.Title title={title} />}
          {subtitle && <Header.SubTitle subtitle={subtitle} />}
          {center}
        </Header.Center>
        <Header.Right>{right}</Header.Right> */}
      </Header>
      <Body>{body}</Body>
      <Footer>{footer}</Footer>
    </Container>
  );
}

export default Step;
