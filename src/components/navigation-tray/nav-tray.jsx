import { NavLink } from "react-router-dom";
import profileIcon from "../../assets/profile.svg";
import profileIconActive from "../../assets/profile_active.svg";
import notificationIcon from "../../assets/notification.svg";
import notificationIconActive from "../../assets/notification_active.svg";
import homeIcon from "../../assets/home.svg";
import homeIconActive from "../../assets/home_active.svg";
import notificationSign from "../../assets/notification_sign.svg";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  width: 60px;
  height: 60px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
  position: relative;
  &:active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const StyledNavBar = styled.nav`
  width: 215px;
  height: 60px;
  background-color: white;
  position: fixed;
  bottom: 3%;
  right: 50%;
  transform: translate(50%, 0);
`;

export const NavTray = () => {
  let num = 0;

  const navList = [
    {
      linkTo: "/login",
      imageURL: `url('${profileIcon}')`,
      imageActiveURL: `url('${profileIconActive}')`,
      isNotification: false,
    },
    {
      linkTo: "/",
      imageURL: `url('${homeIcon}')`,
      imageActiveURL: `url('${homeIconActive}')`,
      isNotification: false,
    },
    {
      linkTo: "/notification",
      imageURL: `url('${notificationIcon}')`,
      imageActiveURL: `url('${notificationIconActive}')`,
      isNotification: true,
    },
  ];

  return (
    <StyledNavBar
      className="nav d-flex justify-content-evenly align-items-center rounded-pill bg-white"
      style={{ "--bs-bg-opacity": 0.1 }}
    >
      {navList.map((navLink) => {
        return (
          <StyledNavLink
            key={(num += 1)}
            className="nav-link rounded-circle"
            style={{ backgroundImage: navLink.imageURL }}
            to={navLink.linkTo}
          >
            {navLink.isNotification ? (
              <img
                className="position-absolute"
                style={{ top: "13px", right: "13px" }}
                alt="Notification Sign"
                src={notificationSign}
              />
            ) : (
              ""
            )}
          </StyledNavLink>
        );
      })}
    </StyledNavBar>
  );
};
