import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import { Avatar } from "../../../components/avatar/avatar";
import { Pill } from "../../../components/pill";

//TODO: fix import of avatar
/**
 * Account Route
 * @author [J. Hartsek](https://github.com/JHartsek)
 * @param src the avatar image link
 * @param alt the avatar image description
 * @param name the account name
 * @param wallet the wallet name
 * @param permissions expects "F", "L", or "R"
 * @param pillText the text to be displayed in the pill
 * @param isCopiable (refers to pill) 'true' or 'false'
 */

const Container = styled.div`
  margin-bottom: 24px;
  max-width: 250px;
  row-gap: 12px;
`;

const AccountName = styled.div`
  column-gap: 8px;
`;

const PermissionIcon = styled.span`
  height: 16px;
  width: 16px;
`;

export const Account = ({
  src,
  alt,
  name,
  wallet,
  permissions,
  pillText,
  isCopiable,
  isLoading,
}) => {
  return (
    <Container className="d-flex flex-column align-items-center bg-alpha">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="fs-10px m-0 text-uppercase text-white text-opacity-60">
            {wallet}
          </h3>

          <Avatar shape="round" src={src} size="lg" alt={alt} />
          <AccountName className="d-flex align-items-center">
            <h3 className="fs-18px fw-bold m-0">{name}</h3>
            <PermissionIcon className="d-flex align-items-center justify-content-center rounded-circle border border-white border-opacity-60 fs-10px text-uppercase m-0 text-white text-opacity-60">
              {permissions}
            </PermissionIcon>
          </AccountName>

          <Pill
            className="profile__pill me-8px"
            shape="square"
            isCopiable={isCopiable}
            text={pillText}
            textOpacity="70"
            opacity="10"
          />
        </>
      )}
    </Container>
  );
};
