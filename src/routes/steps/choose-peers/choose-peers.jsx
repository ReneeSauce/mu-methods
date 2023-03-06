import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { Body } from "./body";

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
 * @param title title prop in layout headerpassed from parent
 * @param subtitle subtitle in layout header prop passed from parent
 *
 */

export function ChoosePeers({ onBackClick, onForwardClick, title, subtitle }) {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Layout.Header.Left>
            <Button
              buttonKind="textOnly"
              leftIcon="arrowLeft"
              size="sm"
              onClick={onBackClick}
            />
          </Layout.Header.Left>
          <Layout.Header.Center>
            <Layout.Header.Title title={title} />
            <Layout.Header.SubTitle subtitle={subtitle} />
          </Layout.Header.Center>
        </>
      }
      body={<Body></Body>}
      footer={
        <Button size="lg" buttonKind="primary" onClick={onForwardClick}>
          Share seed phrase
        </Button>
      }
    ></Layout>
  );
}
