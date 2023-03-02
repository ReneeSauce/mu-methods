import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import { Avatar } from "../components/avatar/avatar";
import { Pill } from "../components/pill/pill";

/**
 * Profile Route
 * @author [J. Hartsek](https://github.com/JHartsek)
 * @param src the avatar image link
 * @param alt the avatar image description
 * @param name the account holder's name
 * @param pillText the text to be displayed in the pill
 * @param isCopiable (refers to pill) 'true' or 'false'
 * @param email account associated email
 * @param id account ID
 */

const Container = styled.div`
  margin: 40px auto;
  max-width: 250px;
  row-gap: 12px;
`;

export const Profile = ({
  src,
  alt,
  name,
  pillText,
  isCopiable,
  email,
  id,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState({
    src,
    alt,
    name,
    pillText,
    isCopiable,
    email,
    id,
  });

  useEffect(() => {
    // TO DO: replace this with API call for fetching profile data
    /*setProfileInfo({})*/
    setIsLoading(false);
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center bg-alpha">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Avatar
            shape="round"
            src={profileInfo.src}
            size="lg"
            alt={profileInfo.alt}
          />
          <h3 className="fs-18px fw-bold m-0">{profileInfo.name}</h3>
          <Pill
            className="profile__pill fw-normal"
            shape="square"
            isCopiable={profileInfo.isCopiable}
            text={profileInfo.pillText}
            textOpacity="70"
            opacity="10"
          />
          <div className="d-flex flex-column align-items-center fs-14px">
            <p className="m-0 lh-sm text-white text-opacity-60">
              {profileInfo.email}
            </p>
            <p className="m-0 lh-sm text-white text-opacity-60">
              {profileInfo.id}
            </p>
          </div>
        </>
      )}
    </Container>
  );
};
