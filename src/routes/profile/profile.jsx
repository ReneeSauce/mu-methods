import { useNavigate } from "react-router-dom";
import { Button, Layout } from "../../components";
import { ProfileInfo } from "./profile-info";

/**
 * ProfileInfo - used in Profile Route
 * @author [K. Ehrenclou](https://github.com/kehrenclou)

 * @param onSettingsClick forward click handler prop passed down from parent
 * @param header expects header components
 * @param body expects body components

 */
export function Profile({ onSettingsClick }) {
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate("/");
  };
  return (
    <Layout
      className="mb-0px"
      header={
        <>
          <Layout.Header.Left>
            <Button
              buttonKind="textOnly"
              leftIcon="mu"
              size="sm"
              margin="0"
              className="px-0"
              onClick={onHomeClick}
            />
          </Layout.Header.Left>

          <Layout.Header.Right>
            <Button
              buttonKind="tertiary"
              rightIcon="settings"
              size="sm"
              className="m-0 p-0"
              onClick={onSettingsClick}
            ></Button>
          </Layout.Header.Right>
        </>
      }
      body={
        <>
          <ProfileInfo
            src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="sushi"
            name="Jugal Mu"
            pillText="0x6b...7776"
            isCopiable={true}
            email="emailexample@gmail.com"
            id="ID: JU1s32"
          ></ProfileInfo>
          <div className="mt-32px">rest of body component here</div>
        </>
      }
    ></Layout>
  );
}
