import { Button, Layout, Modal } from "../../../../components"; //button needs to be changed when avail
import { Header } from "../../../../components/layout/header";
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
}) {
  //call use context with wizard context imported

  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Header.Left>
            <Button onClick={onBackClick}>**</Button>
          </Header.Left>
          <Header.Center>
            <Header.Title title="Sign up" />
            <Header.SubTitle subtitle=" Step 2/4" />
          </Header.Center>
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
            <Button
              onClick={onSkipStepClick}
              className="btn btn-link text-decoration-none fs-18px text-white fw-bold mb-32px p-0"
            >
              Skip this step
            </Button>
            <Button onClick={onStoreWithPeersClick}>Store with peers</Button>
          </Modal>
        </>
      }
      footer={<Button onClick={onForwardClick}>Continue</Button>} //replace buton with step button
    ></Layout>
  );
}
