import { NavLink } from "react-router-dom";
import profileIcon from "../../assets/profile.svg";
import profileIconActive from "../../assets/profile_active.svg";
import notificationIcon from "../../assets/notification.svg";
import notificationIconActive from "../../assets/notification_active.svg";
import homeIcon from "../../assets/home.svg";
import homeIconActive from "../../assets/home_active.svg";
import notificationSign from "../../assets/notification_sign.svg";
import styled, { css } from "styled-components";

const NavGlobalStyle = css`
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

const StyledProfileNavLink = styled(NavLink)`
  ${NavGlobalStyle}
  background-image: url("${profileIcon}");
  &.active {
    background-image: url("${profileIconActive}");
  }
`;

const StyledHomeNavLink = styled(NavLink)`
  ${NavGlobalStyle}
  background-image: url("${homeIcon}");
  &.active {
    background-image: url("${homeIconActive}");
  }
`;

const StyledNotificationNavLink = styled(NavLink)`
  ${NavGlobalStyle}
  background-image: url("${notificationIcon}");
  &.active {
    background-image: url("${notificationIconActive}");
  }
`;

const StyledNavBar = styled.nav`
  width: 215px;
  height: 60px;
  background-color: white;
  bottom: 3%;
  right: 50%;
  transform: translate(50%, 0);
`;

export const NavTray = ({ isNotification }) => {
  return (
    <StyledNavBar
      className="nav position-fixed d-flex justify-content-evenly align-items-center rounded-pill bg-white"
      style={{ "--bs-bg-opacity": 0.1 }}
    >
      <StyledProfileNavLink
        role="login"
        className="nav-link rounded-circle"
        to="/login"
      />
      <StyledHomeNavLink
        role="home"
        className="nav-link rounded-circle"
        to="/"
      />
      <StyledNotificationNavLink
        role="notification"
        className="nav-link rounded-circle"
        to="/notification"
      >
        {isNotification ? (
          <img
            className="position-absolute"
            style={{ top: "13px", right: "13px" }}
            alt="Notification Sign"
            src={notificationSign}
          />
        ) : (
          ""
        )}
      </StyledNotificationNavLink>
    </StyledNavBar>
  );
};
