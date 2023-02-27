import _ from "lodash";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import notificationSign from "../../assets/notification-sign.svg";

/**
 The **NavTrau** component is the navigation tray component for mobile version of the application.
 *
 *  @author [Kamal Ganiev](https://github.com/kamal-ganiev)
 *  @param isUnreadMessages boolean param for notifications' alert
 *  @param navLink the array of navigation links
 */

const StyledNavLink = styled(NavLink)`
  width: 60px;
  height: 60px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: center;
  position: relative;
  background-image: url("${({ inactive }) => inactive}");
  &:active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
    background-image: url("${({ active }) => active}");
  }
`;

const StyledNavBar = styled.nav`
  padding: 0 17px;
  height: 60px;
  background-color: white;
  bottom: 3%;
  right: 50%;
  transform: translate(50%, 0);
`;

let num = 0;

export const NavTray = ({ isUnreadMessages, navLinks }) => {
  return (
    <StyledNavBar className="nav position-fixed d-flex justify-content-evenly align-items-center rounded-pill bg-white bg-opacity-10">
      {navLinks.map((link) => {
        return (
          <StyledNavLink
            key={_.uniqueId()}
            role={link.role}
            to={link.to}
            className="nav-link rounded-circle"
            inactive={link.icon}
            active={link.activeIcon}
          >
            {link.isNotification && (
              <img
                src={notificationSign}
                alt="Blue circle"
                className={`position-absolute ${
                  isUnreadMessages ? "d-block" : "d-none"
                }`}
                style={{ top: "13px", right: "13px" }}
              />
            )}
          </StyledNavLink>
        );
      })}
    </StyledNavBar>
  );
};
