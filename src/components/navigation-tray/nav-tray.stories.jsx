import { BrowserRouter, Route, Routes } from "react-router-dom";
import homeIconActive from "../../assets/home-active.svg";
import homeIcon from "../../assets/home.svg";
import notificationIconActive from "../../assets/notification-active.svg";
import notificationIcon from "../../assets/notification.svg";
import profileIconActive from "../../assets/profile-active.svg";
import profileIcon from "../../assets/profile.svg";

import { NavTray } from "./nav-tray";

const Home = () => {
  return (
    <div className="bg-alpha">
      <h1>Home</h1>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="bg-alpha">
      <h1>Profile</h1>
    </div>
  );
};

const Notification = () => {
  return (
    <div className="bg-alpha">
      <h1>Notification</h1>
    </div>
  );
};

const navLinks = [
  {
    role: "login",
    to: "/login",
    icon: profileIcon,
    activeIcon: profileIconActive,
  },
  {
    role: "home",
    to: "/",
    icon: homeIcon,
    activeIcon: homeIconActive,
  },
  {
    role: "notification",
    to: "/notification",
    icon: notificationIcon,
    activeIcon: notificationIconActive,
    isNotification: true,
  },
];

let isUnreadedMessages = false;

export default {
  title: "Components/NavTray",
  component: NavTray,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    isUnreadedMessages: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "Setting if there any unreaded messages, which adds blue mark on top right of the notification icon",
    },
  },
};

export const Mobile = (args) => (
  <NavTray
    navLinks={navLinks}
    isUnreadedMessages={isUnreadedMessages}
    {...args}
  />
);
