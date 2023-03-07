import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import { Avatar } from "../../../components/avatar/avatar";
import { Pill } from "../../../components/pill/";

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
  margin-bottom: 32px;
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
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [accountInfo, setaccountInfo] = useState({
    src,
    alt,
    name,
    wallet,
    permissions,
    pillText,
    isCopiable,
  });

  useEffect(() => {
    // TO DO: replace this with API call for fetching account data
    /*setaccountInfo({})*/
    setIsLoading(false);
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center bg-alpha">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="fs-10px m-0 text-uppercase text-white text-opacity-60">
            {accountInfo.wallet}
          </h3>

          <Avatar
            shape="round"
            src={accountInfo.src}
            size="lg"
            alt={accountInfo.alt}
          />
          <AccountName className="d-flex align-items-center">
            <h3 className="fs-18px fw-bold m-0">{accountInfo.name}</h3>
            <PermissionIcon className="d-flex align-items-center justify-content-center rounded-circle border border-white border-opacity-60 fs-10px text-uppercase m-0 text-white text-opacity-60">
              {accountInfo.permissions}
            </PermissionIcon>
          </AccountName>

          <Pill
            className="profile__pill"
            shape="square"
            isCopiable={accountInfo.isCopiable}
            text={accountInfo.pillText}
            textOpacity="70"
            opacity="10"
          />
        </>
      )}
    </Container>
  );
};
