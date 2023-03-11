import { createContext, useMemo, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  //state to store userProfile
  const [userProfile, setUserProfile] = useState("");

  const store = useMemo(() => ({ userProfile, setUserProfile }), [userProfile]);

  return (
    <UserContext.Provider value={store}>{props.children}</UserContext.Provider>
  );
};
