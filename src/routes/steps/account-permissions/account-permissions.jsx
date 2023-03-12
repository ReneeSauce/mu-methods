import { useContext } from "react";
import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { UserContext } from "../../../contexts/user-context";
//TODO: logic to get data from dashboard
//TODO: need to add button with arrow to trigger next page (permissions)
//TODO: add logic for clearing context on disconnect account click
//TODO: need to update @params

/**
 * Account Permissions -
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

export const AccountPermissions = ({ onBackClick, onClick, title }) => {
  const { state } = useContext(UserContext);
  console.log("permissions", state);
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
            <Layout.Header.Title title={title}></Layout.Header.Title>
          </Layout.Header.Center>
        </>
      }
      body={
        <>
          <div className="w-100">
            <h3 className="fs-18px fw-bold mb-8px">
              insert radio buttons here
            </h3>
            <div className="d-flex flex-column gap-32px">
              <Button buttonKind="tertiary">
                Full - placeholder radio button
              </Button>
            </div>
          </div>
        </>
      }
      footer={
        <>
          <Button size="lg" buttonKind="primary" onClick={onClick}>
            Save Settings
          </Button>
        </>
      }
    ></Layout>
  );
};
