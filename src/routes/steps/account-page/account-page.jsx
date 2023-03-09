import { Button, Layout } from "../../../components"; //button needs to be changed when avail
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
 * Account Page Component
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

export const AccountPage = ({
  onBackClick,
  onForwardClick,
  title,
  subtitle,
}) => {
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
              onCLick={onBackClick} //need regenerate info here
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
      body={
        <Body
          src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt="sushi"
          name="MyMetaMaskAkk"
          wallet="Metamask"
          permissions="F"
          pillText="0x6b...7776"
          isCopiable={true}
        ></Body>
      }
    ></Layout>
  );
};
