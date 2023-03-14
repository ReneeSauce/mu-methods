import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import notificationSign from "../../assets/notification-sign.svg";
import { AuthContext } from "../../contexts/auth-context";
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
  &:active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
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

export const NavTray = ({ isUnreadMessages, navLinks }) => {
  const location = useLocation();

  /* --------------------- useContext setters and getters --------------------- */
  const authCtx = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    setIsLoggedIn(authCtx.state.isLoggedIn);
  }, [authCtx.state]);

  useEffect(() => {
    setIsVisible(authCtx.state.isNavVisible);
  }, [authCtx.state]);

  console.log(authCtx.state);
  console.log(isLoggedIn);

  return (
    isLoggedIn &&
    isVisible && (
      <div>
        <StyledNavBar className="nav position-fixed d-flex justify-content-evenly align-items-center rounded-pill bg-white bg-opacity-10">
          {navLinks.map((link) => {
            return (
              <StyledNavLink
                key={_.uniqueId()}
                role={link.role}
                to={link.to}
                className="nav-link rounded-circle d-flex justify-content-center align-items-center"
              >
                <link.Icon
                  className={
                    location.pathname === link.to ? "opacity-100" : "opacity-70"
                  }
                  width="22"
                  height="22"
                />
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
      </div>
    )
  );
};
