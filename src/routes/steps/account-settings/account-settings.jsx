import { Button, Layout, Modal } from "../../../components"; //button needs to be changed when avail
import { Body } from "./body";
//TODO: logic to get data from dashboard
//TODO: need to add button with arrow to trigger next page (permissions)
//TODO: add logic for clearing context on disconnect account click
//TODO: need to update @params

/**
 * Account Settings
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent
 * @param onConnectWalletClick connect wallet click handler prop passed down from parent
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 * @param title title prop in layout headerpassed from parent
 * @param subtitle subtitle in layout header prop passed from parent
 */

export const AccountSettings = ({
  onBackClick,
  onForwardClick,
  onDisconnectClick,
  onCancel,
  title,
  isOpen,
  onClose,
}) => {
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
              className="m-0 p-0 justify-content-start"
            />
          </Layout.Header.Left>
          <Layout.Header.Center>
            <Layout.Header.Title title={title}></Layout.Header.Title>
          </Layout.Header.Center>
        </>
      }
      body={
        <>
          <Body
            onDisconnectClick={onDisconnectClick}
            onForwardClick={onForwardClick}
          ></Body>
          <Modal isOpen={isOpen} onClose={onClose}>
            <div className="mt-32px fs-18px flex-grow-1">
              <h3 className="lh-sm fw-bold text-center fs-18px px-48px">
                Type "disconnect account" to proceed
              </h3>
              <input
                placeholder="Type the phrase"
                className="mt-16px w-100 "
              ></input>
            </div>
            <div className="d-flex flex-column gap-12px w-100">
              <Button size="lg" buttonKind="textOnly" onClick={onCancel}>
                Cancel
              </Button>
              <Button
                size="lg"
                buttonKind="primary"
                onClick={onDisconnectClick}
              >
                Disconnect account
              </Button>
            </div>
          </Modal>
        </>
      }
    ></Layout>
  );
};
