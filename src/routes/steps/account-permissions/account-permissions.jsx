import { useContext } from "react";
import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { UserContext } from "../../../contexts/user-context";

//TODO: get radio button forms
//TODO: logic to get permissions settings to select correct option on load
//TODO: logic to save any new permission selection to context and sdk
//TODO: make button disabled? until new setting selected

/**
 * Account Permissions -
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 * @param onBackClick back click handler prop passed down from parent
 * @param onClick click handler prop for Save settings button passed down from parent
 * @param header expects header components
 * @param body expects body components
 * @param footer expects footer components
 * @param title title prop in layout headerpassed from parent

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
              className="p-0 m-0"
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
              <Button buttonKind="tertiary">
                Limited - placeholder radio button
              </Button>
              <Button buttonKind="tertiary">
                Read-Only - placeholder radio button
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
