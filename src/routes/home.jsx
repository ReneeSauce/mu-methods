import SettingsIcon from "../components/icons/settings-icon";

import ProfileIcon from "../components/icons/profile-icon";

export const Home = () => {
  return (
    <div className="bg-alpha d-flex flex-column">
      <h1>Home</h1>

      <SettingsIcon />

      <ProfileIcon />
    </div>
  );
};
