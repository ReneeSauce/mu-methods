import { Body } from "./body";
import { Container } from "./container";
import { Footer } from "./footer";
import { Header } from "./header";

/**
 * Layout Component used for majority of layouts
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param header used to pass header components to the Layout
 * @param body used to pass body components to the Layout
 * @param footer used to pass footer components to the Layout
 * @param mb used to pass optional header margin-bottom values to layout, default is 32px. logic is in <header className="jsx"></header>
 */

export const Layout = ({ header, body, footer, className }) => {
  return (
    <Container>
      {header && <Header className>{header}</Header>}
      <Body>{body}</Body>
      {footer && <Footer>{footer}</Footer>}
    </Container>
  );
};
