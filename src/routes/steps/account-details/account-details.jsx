import { useContext, useState } from "react";
import { Button, Layout } from "../../../components"; //button needs to be changed when avail
import { UserContext } from "../../../contexts/user-context";
import { walletProfiles } from "../../../utils"; //data
import { Body } from "./body";

//TODO: need to update @params
//TODO: logic to get data from dashboard
//TODO: need to add account tables by date
//where is this format coming from?
//TODO: neneed to set up total balance logic and section
//TODO:  need to set up faker to populate information
//TODO: on wizard set up context
//TODO: logic for regenerate button click
//TODO: logic for settings button click

/**
 * Account Details Component - n Account Page Wizard Flow
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

export const AccountDetails = ({
  onBackClick,
  onForwardClick,
  title,
  subtitle,
}) => {
  const { state, updatePrimaryAcct, updateWalletProfiles } =
    useContext(UserContext);

  const [profile, setProfile] = useState([walletProfiles]);

  const reloadPage = () => {
    console.log("clicked");
    const user = state.walletProfiles.filter((x) => x.isPrimary === true);
    updatePrimaryAcct(user);
  };
  return (
    <Layout
      className="mb-0px"
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

          <Layout.Header.Right>
            <Button
              buttonKind="tertiary"
              rightIcon="regenerate"
              size="sm"
              onClick={() => {
                reloadPage();
              }} //need regenerate info here
            ></Button>
            <Button
              buttonKind="tertiary"
              rightIcon="settings"
              size="sm"
              onClick={onForwardClick} //need onclick to wizard here
            ></Button>
          </Layout.Header.Right>
        </>
      }
      body={<Body isCopiable={true}></Body>}
    ></Layout>
  );
};
