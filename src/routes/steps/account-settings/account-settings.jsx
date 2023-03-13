import { Button, Layout, Modal } from "../../../components"; //button needs to be changed when avail
import { Body } from "./body";

//TODO: add comparison to enable disconnect account button on modal from input
//TODO: add logic for clearing context on disconnect account click
//TODO: input placeholder needs styled component styling

/**
 * Account Settings - used in AccountPage Flow (Dashboard Wizard)
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onForwardClick forward click handler prop passed down from parent
 * @param onDisconnectClick disconnect click handler prop passed down from parent
 * @param onChange - triggers handleTypePhrase
 * @param onCancel - onCancel click handler prp passed down from parent to close modal
 * @param isOpen - passed from parent - boolean useState value to control modal visibility
 * @param onClose modal close button handler passed down from parent
 * @param title - expects a title for header
 * @param header expects header components
 * @param body expects body components
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
  const handleTypePhrase = () => {
    console.log("do something here");
    //TODO: check phrase matches disconnect account to disconnedt
  };
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
              <h3 className="lh-sm fw-bold text-center fs-18px px-48px mb-16px">
                Type "disconnect account" to proceed
              </h3>
              <input
                onChange={handleTypePhrase}
                className="mt-auto rounded py-20px px-8px border-0 bg-white bg-opacity-10 fs-18px w-100"
                placeholder="Type the Phrase"
                // value={key}
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
