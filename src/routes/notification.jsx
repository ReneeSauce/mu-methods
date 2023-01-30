import { NavTray } from "../components/navigation-tray/nav-tray";

export const Notification = () => {
  return (
    <div className="bg-alpha">
      <h1>Notification</h1>
      <NavTray activeKey="notification" />
    </div>
  );
};
