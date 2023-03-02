import chevron from "../../../../assets/chevron.svg";
import { Button, Layout, Modal } from "../../../../components"; //button needs to be changed when avail
import { Header } from "../../../../components/layout/header";
import { Body } from "./body";

//TODO: figure out step numbering
//TODO: get permissions form
//TODO: logic to set permissions value send to context?
//TODO: question will Account info context hold all of this stuff?
//TODO: should modal open he re and then continue to flow from modal

/**
 * Connect-Wallet Permissions Component -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 * @param title expects text for the Header.Title component
 * @param subtitle expects text for the Header.SubTitle component
 *
 */

export const ConnectWalletPermissions = ({
  onBackClick,
  onForwardClick,
  onSkipStepClick,
  onStoreWithPeersClick,
  isOpen,
  onClose,
}) => {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Header.Left>
            <Button
              buttonKind="textOnly"
              leftIcon={chevron}
              size="sm"
              onClick={onBackClick}
            />
          </Header.Left>
          <Header.Center>
            <Header.Title title="Connecting wallet" />
            <Header.SubTitle subtitle="Step 1/4" />
          </Header.Center>
        </>
      }
      body={
        <>
          <Body></Body>
          <Modal isOpen={isOpen} onClose={onClose}>
            <div className="mt-48px px-20px fs-24px text-center lh-base fw-bold flex-grow-1">
              Store your seed phrase with peers so you never lose access to your
              account
            </div>
            <Button
              size="lg"
              buttonKind="textOnly"
              onClick={onSkipStepClick}
              // className="btn btn-link text-decoration-none fs-18px text-white fw-bold mb-32px p-0"
            >
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
};
