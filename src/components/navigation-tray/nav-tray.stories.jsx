import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeIcon from "../icons/home";
import NotificationIcon from "../icons/notification";
import ProfileIcon from "../icons/profile";
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
    to: "/profile",
    Icon: ProfileIcon,
  },
  {
    role: "home",
    to: "/",
    Icon: HomeIcon,
  },
  {
    to: "/notification",
    Icon: NotificationIcon,
    isNotification: true,
  },
];

let isUnreadMessages;

export default {
  title: "Components/NavTray",
  component: NavTray,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    isUnreadMessages: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "Setting if there any unreaded messages, which adds blue mark on top right of the notification icon",
    },
  },
};

export const Mobile = (args) => (
  <NavTray navLinks={navLinks} isUnreadMessages={isUnreadMessages} {...args} />
);
