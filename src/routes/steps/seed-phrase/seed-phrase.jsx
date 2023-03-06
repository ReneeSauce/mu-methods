import chevron from "../../../assets/chevron.svg";
import { Button, Layout, Modal } from "../../../components"; //button needs to be changed when avail
import { Body } from "./body";
//TODO: Update buttons when available
//TODO:  Figure out how to get modal to line up with layout bottom
//TODO:  Modal need flexibility for font sizes and text layout
//TODO: CHECK MODAL WORD SPACING VS FIGMA IS THIS OK?
//TODO: how does body work with context in step?

/**
 * Seed-phrase Component -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent
 * @param onSkipStepClick skip step click handler passed down from parent
 * @param onStoreWithPeersClick connect store with peers prop passed down from parent
 * @param isOpen passed from parent - boolean useState value to control modal visibility
 * @param onClose modal close button handler passed down from parent
 * @param isVisible passed from parent - boolean useState value to control seed phrase copied notification
 * @param setIsVisible passed from parent - boolean useState setter to control seed phrase copied notification
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 * @param title title prop in layout headerpassed from parent
 * @param subtitle subtitle in layout header prop passed from parent
 */

export function SeedPhrase({
  onBackClick,
  onForwardClick,
  onSkipStepClick,
  onStoreWithPeersClick,
  isOpen,
  onClose,
  isVisible,
  setIsVisible,
  title,
  subtitle,
}) {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Layout.Header.Left>
            <Button
              buttonKind="textOnly"
              leftIcon={chevron}
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
      body={
        <>
          <Body isVisible={isVisible} setIsVisible={setIsVisible} />
          <Modal isOpen={isOpen} onClose={onClose}>
            <div className="mt-48px px-20px fs-24px text-center lh-base fw-bold flex-grow-1">
              Store your seed phrase with peers so you never lose access to your
              account
            </div>
            <Button size="lg" buttonKind="textOnly" onClick={onSkipStepClick}>
              Skip this step
            </Button>
            <Button
              size="lg"
              buttonKind="primary"
              onClick={onStoreWithPeersClick}
            >
              Store with peers
            </Button>
          </Modal>
        </>
      }
      footer={
        <Button size="lg" buttonKind="primary" onClick={onForwardClick}>
          Continue
        </Button>
      } //replace buton with step button
    ></Layout>
  );
}
