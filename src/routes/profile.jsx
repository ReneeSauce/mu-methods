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
  return (
    <Container className="d-flex flex-column align-items-center bg-alpha">
      <Avatar shape="round" src={src} size="lg" alt={alt} />
      <h3 className="fs-18px fw-bold m-0">{name}</h3>
      <Pill
        className="profile__pill"
        shape="square"
        isCopiable={isCopiable}
        text={pillText}
        textOpacity="70"
        opacity="10"
      />
      <div className="d-flex flex-column align-items-center fs-14px">
        <p className="m-0 lh-sm text-white text-opacity-60">{email}</p>
        <p className="m-0 lh-sm text-white text-opacity-60">{id}</p>
      </div>
    </Container>
  );
};
