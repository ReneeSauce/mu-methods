import chevron from "../../../../assets/chevron.svg";
import { Button, Layout } from "../../../../components"; //button needs to be changed when avail
import { Header } from "../../../../components/layout/header";
import { Body } from "./body";
//TODO: Update buttons when available
//TODO: Hook up buttons and form inputs for choosing peers
//TODO: Create logic to check array.length of peers to match number of peers
//TODO: Button disable/enable logic based on if #peers chosen

/**
 * Choose Peers Component -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 */

export function ChoosePeers({ onBackClick, onForwardClick }) {
  return (
    <Layout //Layout and all props passed here
      className="mb-32px"
      header={
        <>
          {/* Layout.Header.Left */}
          <Header.Left>
            <Button
              buttonKind="textOnly"
              leftIcon={chevron}
              size="sm"
              onClick={onBackClick}
            />
          </Header.Left>
          <Header.Center>
            <Header.Title title="Sign up" />
            <Header.SubTitle subtitle="Step 3/4" />
          </Header.Center>
        </>
      }
      body={<Body></Body>}
      footer={
        <Button size="lg" buttonKind="primary" onClick={onForwardClick}>
          Share seed phrase
        </Button>
      } //replace buton with step button
    ></Layout>
  );
}
